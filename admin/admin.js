/* The dashboard, drawn from one JSON document.
 *
 * Every chart here is hand-drawn SVG or plain HTML. A charting library would
 * be the largest thing on a site whose whole point is that it is small, and
 * none of these shapes needs one: the flat, bordered look of the rest of the
 * site is easier to hit directly than to talk a library out of its defaults.
 *
 * The colour slots (--c1..--c4 categorical, --o1..--o3 ordinal) come from
 * admin.css, where they are validated for both themes. Nothing here invents
 * a colour, and nothing cycles the categorical slots: past four series the
 * answer is a table, which every chart already has underneath it.
 */
(function () {
    'use strict';

    var state = { days: 30, data: null };

    // ---------------------------------------------------------------
    // Formatting
    // ---------------------------------------------------------------
    function compact(value) {
        var n = Number(value) || 0;
        if (Math.abs(n) >= 1000000) return (n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 1) + 'M';
        if (Math.abs(n) >= 10000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + 'K';
        return n.toLocaleString('en-US');
    }

    function full(value) { return (Number(value) || 0).toLocaleString('en-US'); }

    function duration(ms) {
        var seconds = Math.round((Number(ms) || 0) / 1000);
        if (seconds < 60) return seconds + 's';
        var minutes = Math.floor(seconds / 60);
        if (minutes < 60) return minutes + 'm ' + (seconds % 60) + 's';
        return Math.floor(minutes / 60) + 'h ' + (minutes % 60) + 'm';
    }

    function percent(fraction, digits) {
        return ((Number(fraction) || 0) * 100).toFixed(digits === undefined ? 1 : digits) + '%';
    }

    function shortDate(day) {
        var parts = String(day).split('-');
        return parts[2] + '/' + parts[1];
    }

    function ago(ts) {
        if (!ts) return '—';
        var seconds = Math.round((Date.now() - ts) / 1000);
        if (seconds < 90) return 'just now';
        if (seconds < 3600) return Math.round(seconds / 60) + ' min ago';
        if (seconds < 86400) return Math.round(seconds / 3600) + ' h ago';
        return Math.round(seconds / 86400) + ' d ago';
    }

    var regionNames = null, languageNames = null;
    try { regionNames = new Intl.DisplayNames(['en'], { type: 'region' }); } catch (e) {}
    try { languageNames = new Intl.DisplayNames(['en'], { type: 'language' }); } catch (e) {}

    function countryName(code) {
        if (!code || code === 'ZZ') return 'Unknown';
        try { return regionNames ? regionNames.of(code) : code; } catch (e) { return code; }
    }

    function flag(code) {
        if (!code || code === 'ZZ' || code.length !== 2) return '🏳';
        return String.fromCodePoint(0x1F1E6 + code.charCodeAt(0) - 65, 0x1F1E6 + code.charCodeAt(1) - 65);
    }

    function languageName(code) {
        try { return languageNames ? languageNames.of(code) : code; } catch (e) { return code; }
    }

    var SIGNAL_LABELS = {
        deep_scroll: 'Read at least three quarters of a page',
        long_dwell: 'Stayed a minute or more',
        cta_click: 'Clicked a call to action',
        policy_view: 'Opened a privacy policy',
        store_click: 'Clicked through to an app store',
        download_click: 'Clicked a download button',
        contact_click: 'Clicked an email or contact link',
        outbound_click: 'Left for another site',
        language_switch: 'Changed the language',
        theme_switch: 'Changed the theme'
    };

    var KIND_LABELS = { home: 'Home page', detail: 'Product detail', policy: 'Privacy policy', other: 'Everything else' };
    var SOURCE_LABELS = {
        direct: 'Direct or unknown', search: 'Search', ads: 'Paid ads', social: 'Social',
        referral: 'Another site', campaign: 'Tagged campaign', email: 'Email', internal: 'Within the site'
    };

    // ---------------------------------------------------------------
    // DOM helpers
    // ---------------------------------------------------------------
    function el(id) { return document.getElementById(id); }

    function make(tag, className, text) {
        var node = document.createElement(tag);
        if (className) node.className = className;
        if (text !== undefined) node.textContent = text;
        return node;
    }

    function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }

    var SVG_NS = 'http://www.w3.org/2000/svg';
    function svg(tag, attrs) {
        var node = document.createElementNS(SVG_NS, tag);
        for (var key in attrs) if (attrs[key] !== undefined && attrs[key] !== null) node.setAttribute(key, attrs[key]);
        return node;
    }

    /* One tooltip per chart, positioned against the chart box. The hit
     * target is always bigger than the mark it belongs to — an 8px dot is
     * not something anyone can reliably point at. */
    function tooltipFor(container) {
        var tip = container.querySelector('.tip');
        if (!tip) { tip = make('div', 'tip'); container.appendChild(tip); }
        return {
            show: function (html, x, y) {
                tip.innerHTML = html;
                tip.setAttribute('data-show', '1');
                var box = container.getBoundingClientRect();
                var width = tip.offsetWidth;
                var left = Math.max(4, Math.min(x - width / 2, box.width - width - 4));
                tip.style.left = left + 'px';
                tip.style.top = Math.max(4, y - tip.offsetHeight - 12) + 'px';
            },
            hide: function () { tip.removeAttribute('data-show'); }
        };
    }

    function niceMax(value) {
        if (value <= 0) return 1;
        var magnitude = Math.pow(10, Math.floor(Math.log10(value)));
        var scaled = value / magnitude;
        var step = scaled <= 1 ? 1 : scaled <= 2 ? 2 : scaled <= 2.5 ? 2.5 : scaled <= 5 ? 5 : 10;
        return step * magnitude;
    }

    // ---------------------------------------------------------------
    // Line chart — trend over time, one shared axis
    // ---------------------------------------------------------------
    function lineChart(container, labels, series) {
        clear(container);
        if (!labels.length) { container.appendChild(emptyNote('No days in this range yet.')); return; }

        var W = 860, H = 280;
        var padding = { top: 18, right: 58, bottom: 28, left: 48 };
        var plotW = W - padding.left - padding.right;
        var plotH = H - padding.top - padding.bottom;

        var peak = 0;
        series.forEach(function (line) { line.values.forEach(function (v) { if (v > peak) peak = v; }); });
        var max = niceMax(peak);

        var xAt = function (i) {
            return labels.length === 1 ? padding.left + plotW / 2 : padding.left + (i / (labels.length - 1)) * plotW;
        };
        var yAt = function (v) { return padding.top + plotH - (v / max) * plotH; };

        var node = svg('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': 'Daily trend' });

        // Gridlines and y ticks: recessive, hairline, solid.
        for (var t = 0; t <= 4; t++) {
            var value = (max / 4) * t;
            var y = yAt(value);
            node.appendChild(svg('line', { x1: padding.left, x2: padding.left + plotW, y1: y, y2: y, class: 'axis-line' }));
            var tick = svg('text', { x: padding.left - 8, y: y + 3.5, 'text-anchor': 'end' });
            tick.textContent = compact(Math.round(value));
            node.appendChild(tick);
        }

        // x ticks: about five, so the labels never touch.
        var every = Math.max(1, Math.ceil(labels.length / 5));
        labels.forEach(function (label, i) {
            if (i % every !== 0 && i !== labels.length - 1) return;
            var text = svg('text', { x: xAt(i), y: H - 10, 'text-anchor': 'middle' });
            text.textContent = shortDate(label);
            node.appendChild(text);
        });

        series.forEach(function (line) {
            var d = line.values.map(function (v, i) { return (i ? 'L' : 'M') + xAt(i).toFixed(1) + ' ' + yAt(v).toFixed(1); }).join(' ');
            node.appendChild(svg('path', {
                d: d, fill: 'none', stroke: line.color, 'stroke-width': 2,
                'stroke-linejoin': 'round', 'stroke-linecap': 'round'
            }));
        });

        // End markers, each with a 2px ring in the surface colour so they
        // stay legible where the two lines cross.
        var surface = getComputedStyle(document.body).getPropertyValue('--surface').trim() || '#fff';
        var ends = series.map(function (line) {
            var i = line.values.length - 1;
            return { line: line, x: xAt(i), y: yAt(line.values[i]), value: line.values[i] };
        });
        ends.forEach(function (end) {
            node.appendChild(svg('circle', { cx: end.x, cy: end.y, r: 4.5, fill: end.line.color, stroke: surface, 'stroke-width': 2 }));
        });

        // Direct end labels, but only when the two lines have actually
        // separated. Nudging converging labels apart detaches them from the
        // lines they belong to; the legend and the tooltip carry it instead.
        var separated = ends.length < 2 || Math.abs(ends[0].y - ends[1].y) >= 14;
        if (separated) {
            ends.forEach(function (end) {
                var text = svg('text', { x: end.x + 9, y: end.y + 3.5, class: 'mark-label' });
                text.textContent = compact(end.value);
                node.appendChild(text);
            });
        }

        var crosshair = svg('line', { y1: padding.top, y2: padding.top + plotH, class: 'axis-line', opacity: 0 });
        crosshair.setAttribute('stroke-width', 1.5);
        node.appendChild(crosshair);

        var dots = series.map(function (line) {
            var dot = svg('circle', { r: 4.5, fill: line.color, stroke: surface, 'stroke-width': 2, opacity: 0 });
            node.appendChild(dot);
            return dot;
        });

        var hit = svg('rect', { x: padding.left, y: padding.top, width: plotW, height: plotH, fill: 'transparent' });
        node.appendChild(hit);
        container.appendChild(node);

        var tip = tooltipFor(container);
        function at(event) {
            var box = node.getBoundingClientRect();
            var scale = W / box.width;
            var x = (event.clientX - box.left) * scale;
            var index = labels.length === 1 ? 0
                : Math.round(((x - padding.left) / plotW) * (labels.length - 1));
            index = Math.max(0, Math.min(index, labels.length - 1));

            crosshair.setAttribute('x1', xAt(index));
            crosshair.setAttribute('x2', xAt(index));
            crosshair.setAttribute('opacity', 1);

            var rows = series.map(function (line, s) {
                dots[s].setAttribute('cx', xAt(index));
                dots[s].setAttribute('cy', yAt(line.values[index]));
                dots[s].setAttribute('opacity', 1);
                return '<div class="row"><span class="name"><i class="swatch" style="background:' + line.color + '"></i>'
                    + line.name + '</span><b class="num">' + full(line.values[index]) + '</b></div>';
            }).join('');

            tip.show('<b>' + labels[index] + '</b>' + rows,
                (xAt(index) / scale), ((yAt(Math.max.apply(null, series.map(function (l) { return l.values[index]; }))) / scale)));
        }

        node.addEventListener('mousemove', at);
        node.addEventListener('mouseleave', function () {
            crosshair.setAttribute('opacity', 0);
            dots.forEach(function (dot) { dot.setAttribute('opacity', 0); });
            tip.hide();
        });
    }

    // ---------------------------------------------------------------
    // Horizontal bars — comparing magnitude, one hue
    // ---------------------------------------------------------------
    function barList(container, rows, options) {
        options = options || {};
        clear(container);
        if (!rows.length) { container.appendChild(emptyNote(options.empty || 'Nothing recorded yet.')); return; }

        var max = rows.reduce(function (peak, row) { return Math.max(peak, row.value); }, 0) || 1;
        var tip = tooltipFor(container);
        var list = make('div', 'bar-rows');
        list.style.display = 'grid';
        list.style.gap = '0.55rem';

        rows.forEach(function (row) {
            var line = make('div');
            line.style.display = 'grid';
            line.style.gridTemplateColumns = 'minmax(90px, 34%) 1fr auto';
            line.style.alignItems = 'center';
            line.style.gap = '0.7rem';

            var name = make('span', null, row.label);
            name.style.fontSize = '0.88rem';
            name.style.overflow = 'hidden';
            name.style.textOverflow = 'ellipsis';
            name.style.whiteSpace = 'nowrap';
            name.title = row.label;

            var track = make('span', 'cell-bar-track');
            track.style.display = 'block';
            var fill = make('span', 'cell-bar');
            fill.style.width = Math.max(2, (row.value / max) * 100) + '%';
            fill.style.height = '14px';
            fill.style.borderRadius = '0 4px 4px 0';
            if (options.color) fill.style.background = options.color;
            track.appendChild(fill);

            var value = make('span', null, options.format ? options.format(row.value) : compact(row.value));
            value.style.fontFamily = 'var(--font-mono)';
            value.style.fontVariantNumeric = 'tabular-nums';
            value.style.fontSize = '0.82rem';

            line.appendChild(name);
            line.appendChild(track);
            line.appendChild(value);

            // The whole row is the hit target, not the 14px bar inside it.
            line.addEventListener('mouseenter', function (event) {
                var box = container.getBoundingClientRect();
                var rect = line.getBoundingClientRect();
                tip.show('<b>' + escapeHtml(row.label) + '</b><div class="row"><span class="name">'
                    + (options.unit || 'Count') + '</span><b class="num">' + full(row.value) + '</b></div>'
                    + (row.note ? '<div class="row"><span class="name">' + escapeHtml(row.noteLabel || '') + '</span><b class="num">' + escapeHtml(row.note) + '</b></div>' : ''),
                    rect.left - box.left + rect.width / 2, rect.top - box.top);
            });
            line.addEventListener('mouseleave', tip.hide);

            list.appendChild(line);
        });

        container.appendChild(list);
    }

    // ---------------------------------------------------------------
    // Stacked bar — part to whole, categorical, 2px surface gaps
    // ---------------------------------------------------------------
    function stackedBar(container, parts) {
        clear(container);
        var total = parts.reduce(function (sum, part) { return sum + part.value; }, 0);
        if (!total) { container.appendChild(emptyNote('No pages opened yet.')); return; }

        var tip = tooltipFor(container);
        var bar = make('div');
        bar.style.display = 'flex';
        bar.style.gap = '2px';          // the surface gap doing the separating
        bar.style.height = '44px';
        bar.style.marginBottom = '0.9rem';

        parts.forEach(function (part) {
            var share = part.value / total;
            var segment = make('div');
            segment.style.flex = share;
            segment.style.minWidth = '3px';
            segment.style.background = part.color;
            segment.style.borderRadius = '6px';
            segment.style.display = 'flex';
            segment.style.alignItems = 'center';
            segment.style.justifyContent = 'center';
            segment.style.cursor = 'default';

            // A label goes inside only when it fits with room to spare;
            // otherwise the legend and the tooltip carry it, and nothing is
            // ever cropped.
            if (share > 0.13) {
                var label = make('span', null, percent(share, 0));
                label.style.fontFamily = 'var(--font-mono)';
                label.style.fontSize = '0.75rem';
                label.style.fontWeight = '500';
                label.style.color = inkOrWhite(part.color);
                segment.appendChild(label);
            }

            segment.addEventListener('mouseenter', function () {
                var box = container.getBoundingClientRect();
                var rect = segment.getBoundingClientRect();
                tip.show('<b>' + escapeHtml(part.label) + '</b><div class="row"><span class="name">Pages opened</span><b class="num">'
                    + full(part.value) + '</b></div><div class="row"><span class="name">Share</span><b class="num">'
                    + percent(share) + '</b></div>',
                    rect.left - box.left + rect.width / 2, rect.top - box.top);
            });
            segment.addEventListener('mouseleave', tip.hide);
            bar.appendChild(segment);
        });

        container.appendChild(bar);
        container.appendChild(legendFor(parts, true));
    }

    function legendFor(items, dots) {
        var list = make('ul', 'legend');
        items.forEach(function (item) {
            var entry = make('li');
            var key = make('span', 'key' + (dots ? ' key--dot' : ''));
            key.style.background = item.color;
            entry.appendChild(key);
            entry.appendChild(document.createTextNode(item.label || item.name));
            list.appendChild(entry);
        });
        return list;
    }

    // ---------------------------------------------------------------
    // Columns — the shape of a day
    // ---------------------------------------------------------------
    function columnChart(container, values, labelFor) {
        clear(container);
        var peak = Math.max.apply(null, values);
        if (!peak) { container.appendChild(emptyNote('No pages opened yet.')); return; }

        var W = 860, H = 190;
        var padding = { top: 14, right: 8, bottom: 26, left: 40 };
        var plotW = W - padding.left - padding.right;
        var plotH = H - padding.top - padding.bottom;
        var max = niceMax(peak);
        var slot = plotW / values.length;
        var barWidth = Math.min(24, slot - 6);

        var node = svg('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': 'Pages opened by hour' });

        for (var t = 0; t <= 2; t++) {
            var value = (max / 2) * t;
            var y = padding.top + plotH - (value / max) * plotH;
            node.appendChild(svg('line', { x1: padding.left, x2: padding.left + plotW, y1: y, y2: y, class: 'axis-line' }));
            var tick = svg('text', { x: padding.left - 8, y: y + 3.5, 'text-anchor': 'end' });
            tick.textContent = compact(Math.round(value));
            node.appendChild(tick);
        }

        var tip = tooltipFor(container);
        var accent = cssVar('--o2');

        values.forEach(function (value, i) {
            var height = (value / max) * plotH;
            var x = padding.left + i * slot + (slot - barWidth) / 2;
            var y = padding.top + plotH - height;

            // Rounded at the data end, square at the baseline.
            var radius = Math.min(4, height);
            var bar = svg('path', {
                d: height <= 0 ? '' : 'M' + x + ' ' + (y + radius)
                    + ' a' + radius + ' ' + radius + ' 0 0 1 ' + radius + ' ' + (-radius)
                    + ' h' + (barWidth - radius * 2)
                    + ' a' + radius + ' ' + radius + ' 0 0 1 ' + radius + ' ' + radius
                    + ' v' + (height - radius) + ' h' + (-barWidth) + ' Z',
                fill: accent
            });
            node.appendChild(bar);

            var hit = svg('rect', { x: padding.left + i * slot, y: padding.top, width: slot, height: plotH, fill: 'transparent' });
            hit.addEventListener('mouseenter', function () {
                var box = container.getBoundingClientRect();
                var rect = node.getBoundingClientRect();
                var scale = rect.width / W;
                tip.show('<b>' + labelFor(i) + '</b><div class="row"><span class="name">Pages opened</span><b class="num">'
                    + full(value) + '</b></div>',
                    (padding.left + i * slot + slot / 2) * scale + (rect.left - box.left),
                    y * scale + (rect.top - box.top));
            });
            hit.addEventListener('mouseleave', tip.hide);
            node.appendChild(hit);

            if (i % 3 === 0) {
                var text = svg('text', { x: padding.left + i * slot + slot / 2, y: H - 10, 'text-anchor': 'middle' });
                text.textContent = labelFor(i);
                node.appendChild(text);
            }
        });

        container.appendChild(node);
    }

    function cssVar(name) {
        return getComputedStyle(document.body).getPropertyValue(name).trim();
    }

    /* Text sitting inside a filled shape is the one place a label wears the
     * data colour's company, so the side it takes is measured rather than
     * assumed: white reads on the blue and the pink, ink reads on the amber,
     * and the choice has to hold in both themes. */
    function inkOrWhite(color) {
        var match = /^#?([0-9a-f]{6})$/i.exec(String(color).trim());
        if (!match) return '#ffffff';
        var value = parseInt(match[1], 16);
        var channels = [(value >> 16) & 255, (value >> 8) & 255, value & 255].map(function (c) {
            var s = c / 255;
            return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
        });
        var luminance = 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
        var onWhite = 1.05 / (luminance + 0.05);
        var onInk = (luminance + 0.05) / 0.05;
        return onWhite >= onInk ? '#ffffff' : '#27262a';
    }

    function emptyNote(message) { return make('div', 'empty', message); }

    function escapeHtml(text) {
        return String(text == null ? '' : text)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    // ---------------------------------------------------------------
    // Tables
    // ---------------------------------------------------------------
    function table(container, columns, rows) {
        clear(container);
        if (!rows.length) { container.appendChild(emptyNote('Nothing recorded yet.')); return; }

        var node = make('table', 'data');
        var thead = make('thead');
        var headRow = make('tr');
        columns.forEach(function (column) {
            var cell = make('th', null, column.head);
            if (column.numeric) cell.style.textAlign = 'right';
            headRow.appendChild(cell);
        });
        thead.appendChild(headRow);
        node.appendChild(thead);

        var body = make('tbody');
        rows.forEach(function (row) {
            var line = make('tr');
            columns.forEach(function (column) {
                var cell = make('td', column.numeric ? 'num' : column.className || null);
                var value = column.render(row);
                if (value instanceof Node) cell.appendChild(value);
                else cell.textContent = value;
                line.appendChild(cell);
            });
            body.appendChild(line);
        });
        node.appendChild(body);
        container.appendChild(node);
    }

    function simpleTable(container, headLabel, rows, valueHead) {
        table(container, [
            { head: headLabel, render: function (row) { return row.label; } },
            { head: valueHead || 'Count', numeric: true, render: function (row) { return full(row.value); } }
        ], rows);
    }

    function meter(fraction) {
        var wrap = make('span', 'meter');
        var track = make('span', 'meter-track');
        var fill = make('span', 'meter-fill');
        fill.style.width = Math.max(0, Math.min(1, fraction)) * 100 + '%';
        track.appendChild(fill);
        wrap.appendChild(track);
        var label = make('span', null, percent(fraction, 0));
        label.style.fontFamily = 'var(--font-mono)';
        label.style.fontSize = '0.78rem';
        label.style.color = 'var(--ink-soft)';
        wrap.appendChild(label);
        return wrap;
    }

    function chip(text, variant) {
        var node = make('span', 'chip' + (variant ? ' chip--' + variant : ''));
        if (variant) node.appendChild(make('i', 'dot'));
        node.appendChild(document.createTextNode(text));
        return node;
    }

    // ---------------------------------------------------------------
    // Stat tiles
    // ---------------------------------------------------------------
    function deltaNode(current, previous, goodWhen) {
        var node = make('span', 'delta');
        if (!previous) {
            node.className = 'delta delta--flat';
            node.textContent = current ? 'new' : 'no change';
            return node;
        }
        var change = (current - previous) / previous;
        var rising = change > 0.001, falling = change < -0.001;
        var good = goodWhen === 'down' ? falling : rising;
        node.className = 'delta ' + (!rising && !falling ? 'delta--flat' : (good ? 'delta--up' : 'delta--down'));
        node.textContent = (change > 0 ? '+' : '') + (change * 100).toFixed(change > -0.1 && change < 0.1 ? 1 : 0) + '%';
        node.title = 'Against ' + full(previous) + ' in the previous ' + state.days + ' days';
        return node;
    }

    function tile(label, value, previousValue, currentRaw, options) {
        options = options || {};
        var box = make('div', 'box tile');
        box.appendChild(make('p', 'label', label));
        box.appendChild(make('div', 'value', value));

        var foot = make('p', 'foot');
        if (options.noDelta) {
            foot.textContent = options.foot || '';
        } else {
            foot.appendChild(deltaNode(currentRaw, previousValue, options.goodWhen));
            if (options.foot) {
                foot.appendChild(document.createTextNode(' '));
                foot.appendChild(document.createTextNode(options.foot));
            }
        }
        box.appendChild(foot);
        return box;
    }

    // ---------------------------------------------------------------
    // Rendering the report
    // ---------------------------------------------------------------
    function render(data) {
        state.data = data;
        var kpi = data.kpi, previous = data.previous;

        el('range-label').textContent = 'From ' + data.range.from + ' to ' + data.range.to
            + ' · compared against ' + data.compareRange.from + ' to ' + data.compareRange.to;
        el('freshness').textContent = 'Updated ' + ago(data.generated);
        el('export').setAttribute('href', '/api/admin/export.csv?days=' + state.days);

        renderBanner(data);

        el('hero-visits').textContent = full(kpi.visits);
        var heroDelta = deltaNode(kpi.visits, previous.visits);
        var heroSlot = el('hero-delta');
        heroSlot.className = heroDelta.className;
        heroSlot.textContent = heroDelta.textContent;
        heroSlot.title = heroDelta.title || '';
        el('hero-note').textContent = full(kpi.visitors) + ' different browsers, '
            + full(kpi.pageviews) + ' pages opened, ' + percent(kpi.bounceRate, 0) + ' of visits went no further than the page they landed on.';

        var kpis = el('kpis');
        clear(kpis);
        kpis.appendChild(tile('Visitors', compact(kpi.visitors), previous.visitors, kpi.visitors, { foot: 'distinct browsers' }));
        kpis.appendChild(tile('Pages opened', compact(kpi.pageviews), previous.pageviews, kpi.pageviews));
        kpis.appendChild(tile('Actions taken', compact(kpi.actions), previous.actions, kpi.actions, { foot: 'clicks and switches' }));
        kpis.appendChild(tile('Downloads', compact(kpi.downloads), previous.downloads, kpi.downloads, { foot: 'installers' }));
        kpis.appendChild(tile('Interest signals', compact(kpi.interest), previous.interest, kpi.interest));
        kpis.appendChild(tile('Leads', compact(kpi.leads), previous.leads, kpi.leads, { foot: 'asked to talk' }));
        kpis.appendChild(tile('Prospects', compact(kpi.potential), previous.potential, kpi.potential));
        kpis.appendChild(tile('Time on a page', duration(kpi.avgDwell), previous.avgDwell, kpi.avgDwell, { foot: 'average' }));
        kpis.appendChild(tile('Bounce rate', percent(kpi.bounceRate, 0), previous.bounceRate, kpi.bounceRate, { goodWhen: 'down' }));
        kpis.appendChild(tile('Pages per visit', kpi.pagesPerVisit.toFixed(2), previous.pagesPerVisit, kpi.pagesPerVisit, { noDelta: false }));

        renderTraffic(data);
        renderSegments(data);
        renderScoring(data);
        renderPeople(data);
        renderKinds(data);
        renderProducts(data);
        renderPages(data);
        renderDownloads(data);
        renderSignals(data);
        renderGeo(data);
        renderSources(data);
        renderReferrers(data);
        renderLangs(data);
        renderTech(data);
        renderHours(data);
        renderFoot(data);
    }

    function renderBanner(data) {
        var banner = el('banner');
        var messages = [];
        if (!data.storage.writable) {
            messages.push('<b>Nothing is being recorded.</b> The analytics directory <code>'
                + escapeHtml(data.storage.dir) + '</code> cannot be written to'
                + (data.storage.lastError ? ' (' + escapeHtml(data.storage.lastError) + ')' : '')
                + '. The container filesystem is read-only, so this has to be the mounted volume — check that <code>analytics-data</code> is still attached at <code>/app/data</code>.');
        }
        if (data.storage.writable && data.storage.days === 0) {
            messages.push('<b>No traffic recorded yet.</b> Every page needs <code>&lt;script defer src="/analytics.js"&gt;&lt;/script&gt;</code> before <code>&lt;/body&gt;</code>. Run <code>npm run track</code> to add it everywhere.');
        }
        if (data.geo.length === 1 && data.geo[0].country === 'ZZ') {
            messages.push('<b>Country is unknown for every visit.</b> It is read from the <code>CF-IPCountry</code> header, which the Cloudflare tunnel sets. Reaching the site another way leaves it empty. Nothing else is affected.');
        }
        if (data.notes.truncated) {
            messages.push('<b>Some days had more visitors than a rollup keeps.</b> Totals are exact; the visitor list below is the highest-scoring part of it.');
        }

        if (!messages.length) { banner.hidden = true; clear(banner); return; }
        banner.hidden = false;
        banner.innerHTML = messages.map(function (message) { return '<div class="banner">' + message + '</div>'; }).join('');
    }

    function renderTraffic(data) {
        var labels = data.series.map(function (point) { return point.day; });
        var series = [
            { name: 'Visits', color: cssVar('--c1'), values: data.series.map(function (p) { return p.visits; }) },
            { name: 'Pages opened', color: cssVar('--c2'), values: data.series.map(function (p) { return p.pageviews; }) }
        ];
        var legend = el('traffic-legend');
        clear(legend);
        legendFor(series).childNodes.forEach(function (item) { legend.appendChild(item.cloneNode(true)); });

        lineChart(el('traffic'), labels, series);

        table(el('traffic-table'), [
            { head: 'Day', render: function (row) { return row.day; } },
            { head: 'Visits', numeric: true, render: function (row) { return full(row.visits); } },
            { head: 'Visitors', numeric: true, render: function (row) { return full(row.visitors); } },
            { head: 'Pages', numeric: true, render: function (row) { return full(row.pageviews); } },
            { head: 'Actions', numeric: true, render: function (row) { return full(row.actions); } },
            { head: 'Downloads', numeric: true, render: function (row) { return full(row.downloads); } }
        ], data.series.slice().reverse());
    }

    /* The funnel is an ordered scale, not four unrelated things, so it uses
     * one hue getting stronger rather than four colours. */
    function renderSegments(data) {
        var total = data.segments.lead + data.segments.potential + data.segments.casual;
        el('segment-hint').textContent = total
            ? full(total) + ' visitors in this range, sorted by what they did.'
            : 'No visitors recorded in this range yet.';

        var rows = [
            {
                name: 'Passers-by', note: 'One look, nothing followed', value: data.segments.casual,
                color: cssVar('--o1')
            },
            {
                name: 'Prospects', note: 'Downloaded, or read enough to score ' + data.model.potentialScore + '+',
                value: data.segments.potential, color: cssVar('--o2')
            },
            {
                name: 'Leads', note: 'Clicked a contact link', value: data.segments.lead, color: cssVar('--o3')
            }
        ];

        var funnel = el('funnel');
        clear(funnel);
        rows.forEach(function (row) {
            var line = make('div', 'funnel-row');

            var name = make('div', 'funnel-name');
            name.appendChild(document.createTextNode(row.name));
            name.appendChild(make('small', null, row.note));

            var track = make('div', 'funnel-track');
            var fill = make('div', 'funnel-fill');
            fill.style.width = (total ? Math.max(row.value / total, row.value ? 0.015 : 0) * 100 : 0) + '%';
            fill.style.background = row.color;
            track.appendChild(fill);

            var value = make('div', 'funnel-value');
            value.appendChild(document.createTextNode(full(row.value)));
            value.appendChild(make('small', null, total ? percent(row.value / total, 1) + ' of visitors' : '—'));

            line.appendChild(name);
            line.appendChild(track);
            line.appendChild(value);
            funnel.appendChild(line);
        });
    }

    function renderScoring(data) {
        var points = data.model.points;
        var rows = [
            { label: 'Clicked a contact link', value: points.contact, effect: 'becomes a lead outright' },
            { label: 'Started a download', value: points.download, effect: 'becomes a prospect outright' },
            { label: 'Clicked through to an app store', value: points.storeClick, effect: 'becomes a prospect outright' },
            { label: 'Stayed ' + Math.round(data.model.longDwellMs / 1000) + 's or more', value: points.longDwell, effect: '' },
            { label: 'Read ' + data.model.deepScrollPct + '% of a page', value: points.deepScroll, effect: '' },
            { label: 'Opened a privacy policy', value: points.policy, effect: '' },
            { label: 'Opened a product page', value: points.productPage, effect: 'each product' },
            { label: 'Opened any page', value: points.pageview, effect: 'up to ' + points.pageviewCapPerDay + ' a day' },
            { label: 'Came back another day', value: points.returning, effect: '' }
        ];
        table(el('scoring'), [
            { head: 'Action', render: function (row) { return row.label; } },
            { head: 'Points', numeric: true, render: function (row) { return '+' + row.value; } },
            { head: '', className: 'muted', render: function (row) { return row.effect; } }
        ], rows);
    }

    function renderPeople(data) {
        table(el('people'), [
            {
                head: 'Visitor', className: 'path', render: function (row) { return row.id; }
            },
            {
                head: 'Group', render: function (row) {
                    var label = row.segment === 'lead' ? 'Lead' : row.segment === 'potential' ? 'Prospect' : 'Passer-by';
                    return chip(label, row.segment);
                }
            },
            { head: 'Score', numeric: true, render: function (row) { return full(row.score); } },
            {
                head: 'What they did', render: function (row) {
                    var wrap = make('div', 'chips');
                    row.signals.forEach(function (signal) { wrap.appendChild(chip(signal)); });
                    if (!row.signals.length) wrap.appendChild(make('span', 'muted', '—'));
                    return wrap;
                }
            },
            {
                head: 'Products', className: 'muted', render: function (row) {
                    return row.products.length ? row.products.join(', ') : '—';
                }
            },
            {
                head: 'Country', render: function (row) { return flag(row.country) + ' ' + countryName(row.country); }
            },
            { head: 'Visits', numeric: true, render: function (row) { return full(row.visits); } },
            { head: 'Pages', numeric: true, render: function (row) { return full(row.pageviews); } },
            { head: 'Time', numeric: true, render: function (row) { return duration(row.dwell); } },
            { head: 'Last seen', numeric: true, className: 'muted', render: function (row) { return ago(row.last); } }
        ], data.people);
    }

    function renderKinds(data) {
        var order = ['home', 'detail', 'policy', 'other'];
        var colors = [cssVar('--c1'), cssVar('--c2'), cssVar('--c3'), cssVar('--c4')];
        var parts = order
            .filter(function (kind) { return data.kinds[kind]; })
            .map(function (kind, index) {
                return { label: KIND_LABELS[kind], value: data.kinds[kind], color: colors[index] };
            });
        stackedBar(el('kinds'), parts);
        simpleTable(el('kinds-table'), 'Kind of page', parts.map(function (part) {
            return { label: part.label, value: part.value };
        }), 'Pages opened');
    }

    function renderProducts(data) {
        var peakViews = data.products.reduce(function (peak, row) { return Math.max(peak, row.views); }, 0) || 1;
        table(el('products'), [
            { head: 'Product', render: function (row) { return row.name; } },
            {
                head: 'Pages opened', render: function (row) {
                    var track = make('span', 'cell-bar-track');
                    track.style.display = 'block';
                    var fill = make('span', 'cell-bar');
                    fill.style.width = Math.max(2, (row.views / peakViews) * 100) + '%';
                    fill.style.borderRadius = '0 3px 3px 0';
                    track.appendChild(fill);
                    return track;
                }
            },
            { head: 'Views', numeric: true, render: function (row) { return full(row.views); } },
            { head: 'Interest', numeric: true, render: function (row) { return full(row.interest); } },
            { head: 'Downloads', numeric: true, render: function (row) { return full(row.downloads); } }
        ], data.products);
    }

    function renderPages(data) {
        table(el('pages'), [
            { head: 'Page', className: 'path', render: function (row) { return row.path; } },
            { head: 'Kind', className: 'muted', render: function (row) { return KIND_LABELS[row.kind] || row.kind; } },
            { head: 'Pages opened', numeric: true, render: function (row) { return full(row.views); } },
            { head: 'Average time', numeric: true, render: function (row) { return duration(row.avgDwell); } },
            { head: 'Read to', render: function (row) { return meter(row.avgDepth / 100); } }
        ], data.pages);
    }

    function renderDownloads(data) {
        barList(el('files'), data.downloads.files.map(function (row) {
            return { label: row.name, value: row.value };
        }), { unit: 'Downloads', empty: 'No installers taken yet.' });
        simpleTable(el('files-table'), 'File', data.downloads.files.map(function (row) {
            return { label: row.name, value: row.value };
        }), 'Downloads');

        barList(el('platforms'), data.downloads.platforms.map(function (row) {
            return { label: row.name, value: row.value };
        }), { unit: 'Downloads', empty: 'No installers taken yet.' });
        simpleTable(el('platforms-table'), 'Platform', data.downloads.platforms.map(function (row) {
            return { label: row.name, value: row.value };
        }), 'Downloads');
    }

    function renderSignals(data) {
        var rows = data.interest.signals.map(function (row) {
            return { label: SIGNAL_LABELS[row.name] || row.name, value: row.value };
        });
        barList(el('signals'), rows, { unit: 'Times', empty: 'No interest recorded yet.' });
        simpleTable(el('signals-table'), 'Signal', rows, 'Times');
    }

    function renderGeo(data) {
        var known = data.geo.filter(function (row) { return row.country !== 'ZZ'; });
        el('geo-hint').textContent = known.length
            ? 'Read from the edge, never from a stored address.'
            : 'Unknown for every visit — the country header only exists behind Cloudflare.';

        barList(el('geo'), data.geo.map(function (row) {
            return {
                label: flag(row.country) + '  ' + countryName(row.country),
                value: row.events,
                note: full(row.visitors),
                noteLabel: 'Visitors'
            };
        }), { unit: 'Events', empty: 'Nothing recorded yet.' });

        table(el('geo-table'), [
            { head: 'Country', render: function (row) { return flag(row.country) + ' ' + countryName(row.country); } },
            { head: 'Visitors', numeric: true, render: function (row) { return full(row.visitors); } },
            { head: 'Events', numeric: true, render: function (row) { return full(row.events); } }
        ], data.geo);
    }

    function renderSources(data) {
        var rows = data.sources.map(function (row) {
            return { label: SOURCE_LABELS[row.name] || row.name, value: row.value };
        });
        barList(el('sources'), rows, { unit: 'Pages opened' });
        simpleTable(el('sources-table'), 'Source', rows, 'Pages opened');
    }

    function renderReferrers(data) {
        simpleTable(el('referrers'), 'Site', data.referrers.map(function (row) {
            return { label: row.name, value: row.value };
        }), 'Pages opened');
    }

    function renderLangs(data) {
        var rows = data.langs.map(function (row) {
            return { label: languageName(row.name) + ' (' + row.name + ')', value: row.value };
        });
        barList(el('langs'), rows, { unit: 'Events' });
        simpleTable(el('langs-table'), 'Language', rows, 'Events');
    }

    function renderTech(data) {
        [['devices', data.devices], ['browsers', data.browsers], ['os', data.os]].forEach(function (pair) {
            var rows = pair[1].map(function (row) { return { label: row.name, value: row.value }; });
            barList(el(pair[0]), rows, { unit: 'Events' });
            simpleTable(el(pair[0] + '-table'), 'Name', rows, 'Events');
        });
    }

    function renderHours(data) {
        columnChart(el('hours'), data.hours, function (hour) { return String(hour).padStart(2, '0'); });
        simpleTable(el('hours-table'), 'Hour (UTC)', data.hours.map(function (value, hour) {
            return { label: String(hour).padStart(2, '0') + ':00', value: value };
        }), 'Pages opened');
    }

    function renderFoot(data) {
        var foot = el('foot');
        clear(foot);
        [
            'Stored in ' + data.storage.dir,
            data.storage.days + ' days on disk · ' + (data.storage.bytes / 1024 / 1024).toFixed(2) + ' MB',
            'Kept for ' + data.storage.retentionDays + ' days, then deleted',
            'No cookies, no addresses, no third party'
        ].forEach(function (text) { foot.appendChild(make('span', null, text)); });
    }

    // ---------------------------------------------------------------
    // Loading
    // ---------------------------------------------------------------
    function load() {
        fetch('/api/admin/stats?days=' + state.days, { credentials: 'same-origin' })
            .then(function (response) {
                if (response.status === 401) { location.href = '/admin'; return null; }
                if (!response.ok) throw new Error('HTTP ' + response.status);
                return response.json();
            })
            .then(function (data) { if (data) render(data); })
            .catch(function (error) {
                el('range-label').textContent = 'Could not load the numbers: ' + error.message;
            });
    }

    el('range').addEventListener('click', function (event) {
        var button = event.target.closest('button[data-days]');
        if (!button) return;
        state.days = Number(button.getAttribute('data-days'));
        [].forEach.call(this.querySelectorAll('button'), function (other) {
            other.setAttribute('aria-pressed', other === button ? 'true' : 'false');
        });
        load();
    });

    el('theme-toggle').addEventListener('click', function () {
        var root = document.documentElement;
        var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) {}
        // Dark mode is its own set of colours rather than an inversion, so
        // the charts are drawn again instead of being recoloured by CSS.
        if (state.data) render(state.data);
    });

    load();
    // Long enough that nobody watches it happen, short enough that a screen
    // left open overnight is not showing yesterday.
    setInterval(load, 120000);
})();
