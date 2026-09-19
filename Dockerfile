# ---------- Stage 1: cài dependencies (chỉ production) ----------
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

# ---------- Stage 2: image chạy thật ----------
FROM node:22-alpine AS runner
ENV NODE_ENV=production
WORKDIR /app

# Chạy bằng user "node" (uid 1000) có sẵn trong image, không dùng root
COPY --from=deps --chown=node:node /app/node_modules ./node_modules
COPY --chown=node:node package.json server.js ./
COPY --chown=node:node public ./public
COPY --chown=node:node lib ./lib
COPY --chown=node:node admin ./admin

# Filesystem is read-only at runtime, so the one writable place has to be a
# volume. The directory is created here, owned by node, because Docker copies
# the ownership of the mount point out of the image the first time an empty
# named volume is attached — without it the volume arrives owned by root and
# the process, which runs as node, cannot write a single event.
#
# No VOLUME instruction: docker-compose.yml names the volume, and declaring
# it here as well only means a stray anonymous volume every time somebody
# runs the image directly.
RUN mkdir -p /app/data && chown node:node /app/data

USER node
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --spider -q http://127.0.0.1:3000/ || exit 1

CMD ["node", "server.js"]
