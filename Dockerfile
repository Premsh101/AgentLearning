# syntax=docker/dockerfile:1

# ---- Build stage (full image has toolchain for any native module build) ----
FROM node:20 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# Build the frontend (dist/) and regenerate the question-bank seed from content.
RUN npm run build && npm run seed:build

# ---- Runtime stage (slim; same Debian base → native modules stay compatible) ----
FROM node:20-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production \
    PORT=3000 \
    DATA_DIR=/data

# App + deps + built assets + seed, copied from the build stage.
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/server ./server
COPY --from=build /app/package.json ./package.json

# SQLite database lives here — mount a Coolify volume at /data to persist it.
RUN mkdir -p /data
VOLUME ["/data"]

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3000/api/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["npm", "run", "start"]
