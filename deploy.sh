
# echo "Building project..."
# npm run build

# if [ $? -ne 0 ]; then
#   echo "Build failed. Aborting deployment."
#   exit 1
# fi

# echo "Deploying to portfolio-lxc..."
# rsync -avz --delete .next/ root@192.168.4.53:/var/www/html/

# # rsync -avz --delete .next/ root@192.168.4.53:/var/www/portfolio/

# if [ $? -eq 0 ]; then
#   echo "Deployment complete. Visit http://192.168.4.53"
# else
#   echo "Deployment failed."
# fi

set -euo pipefail

# =========================
# Config
# =========================
HOST="192.168.4.54"
DEST="/var/www/jaredia.dev"
SSH_USER="root"

# Paths
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT_DIR="${PROJECT_ROOT}/out"

# =========================
# Pre-flight
# =========================
command -v rsync >/dev/null || { echo "rsync not found"; exit 1; }
command -v npm >/dev/null || { echo "npm not found"; exit 1; }

echo "[1/3] Clean previous static output (local)"
rm -rf "${OUT_DIR}"

echo "[2/3] Build (Next.js)"
npm run build

# Optional: exclude large or dev-only artifacts from deploy (kept here for clarity)
# touch "${OUT_DIR}/.nojekyll"  # harmless if ever used on GitHub Pages
# echo "*.map" > "${OUT_DIR}/.rsync-filter"

echo "[3/3] Rsync to ${SSH_USER}@${HOST}:${DEST}"
# Notes:
#  --delete    : remove files on remote that no longer exist locally
#  --mkpath    : create DEST if missing (rsync 3.2+). If error, pre-create path on remote.
#  --chown     : ensure www-data owns files (requires rsync 3.2+). Otherwise use chown after sync.
#  --info/progress: visible progress; remove if too verbose.
rsync -avz --delete \
  --info=stats1,progress2 \
  "${OUT_DIR}/" "${SSH_USER}@${HOST}:${DEST}/"

# If ownership needs enforcing (uncomment if Nginx reads as www-data)
# ssh ${SSH_USER}@${HOST} "chown -R www-data:www-data ${DEST}"

echo "Deploy complete → http://${HOST} (LAN)."
