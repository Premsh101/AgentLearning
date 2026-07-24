# syntax=docker/dockerfile:1

# ---- Build stage ----
FROM node:22 AS build
WORKDIR /app
# Don't let the playwright devDependency download browsers during npm ci.
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# Frontend (dist/), question-bank seed, and the server bundled to plain JS.
RUN npm run build && npm run seed:build && npm run build:server

# ---- Runtime stage ----
# Minimal and robust: bare `node` runs a single pre-bundled server file.
# No npm, no tsx, no dev dependencies in the runtime image.
FROM node:22-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production \
    PORT=3000 \
    DATA_DIR=/data

COPY --from=build /app/dist ./dist
COPY --from=build /app/server-dist ./server-dist
COPY --from=build /app/server/seed ./server/seed
# The only native/runtime modules the bundle needs (kept external of the bundle).
COPY --from=build /app/node_modules/better-sqlite3 ./node_modules/better-sqlite3
COPY --from=build /app/node_modules/node-addon-api ./node_modules/node-addon-api
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/docker-entrypoint.sh ./docker-entrypoint.sh
RUN chmod +x ./docker-entrypoint.sh

# SQLite database lives here — mount a volume at /data to persist it.
RUN mkdir -p /data
VOLUME ["/data"]

EXPOSE 3000
# Healthcheck follows the PORT env so it can never disagree with the app.
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD node -e "const p=process.env.PORT||3000;fetch('http://127.0.0.1:'+p+'/api/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["./docker-entrypoint.sh"]
