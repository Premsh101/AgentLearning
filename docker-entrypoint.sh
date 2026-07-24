#!/bin/sh
# Boot wrapper: prints diagnostics, runs the server, and if the server ever
# exits it KEEPS THE CONTAINER ALIVE so the error is visible in the Coolify
# Logs tab and the Terminal tab works — instead of an opaque restart loop.

echo "[entrypoint] $(date -u '+%Y-%m-%dT%H:%M:%SZ') starting"
echo "[entrypoint] node: $(node --version 2>&1)"
echo "[entrypoint] PORT=${PORT:-unset} DATA_DIR=${DATA_DIR:-unset} NODE_ENV=${NODE_ENV:-unset}"
echo "[entrypoint] /app contents:"
ls -la /app 2>&1 | head -20
echo "[entrypoint] server bundle: $(ls -la /app/server-dist/index.mjs 2>&1)"
echo "[entrypoint] frontend: $(ls /app/dist/index.html 2>&1)"
echo "[entrypoint] seed: $(ls /app/server/seed/questions.json 2>&1)"
echo "[entrypoint] data dir: $(ls -ld "${DATA_DIR:-/data}" 2>&1)"
echo "[entrypoint] launching server…"

node server-dist/index.mjs
code=$?

echo "============================================================"
echo "[entrypoint] SERVER EXITED with code $code"
echo "[entrypoint] The error should be visible in the lines above."
echo "[entrypoint] Keeping the container alive so logs stay readable"
echo "[entrypoint] (healthcheck will show unhealthy — that is expected)."
echo "============================================================"

while true; do sleep 3600; done
