#!/bin/bash
# AIO Website — push all local changes to GitHub
# Run from: ~/Documents/AIO/Website
# Usage: bash push.sh

set -e
cd "$(dirname "$0")"

echo "📂 Working in: $(pwd)"
echo ""

# Remove stale lock files if they exist
if [ -f .git/index.lock ]; then
  echo "🔓 Removing stale index lock file..."
  rm .git/index.lock
fi
if [ -f .git/HEAD.lock ]; then
  echo "🔓 Removing stale HEAD lock file..."
  rm .git/HEAD.lock
fi

# Stage everything except noise
echo "📋 Staging changes..."
git add \
  blog/ \
  coaching-sessions/ \
  workflows/ \
  shared/ \
  images/ \
  index.html \
  certification.html \
  coaching.html \
  community.html \
  favicon.svg \
  og-image.jpg
# Stage any deletions (removed folders like agentic-ai, circle-embeds, generative-ai)
git add -u

echo ""
echo "📝 Changes to commit:"
git status --short | grep -v '.DS_Store\|\.claude' || true
echo ""

# Commit with timestamp
TIMESTAMP=$(date '+%Y-%m-%d %H:%M')
git commit -m "Site update — $TIMESTAMP" || echo "Nothing new to commit."

echo ""
echo "🚀 Force pushing local to GitHub (overwrites remote)..."
git push origin main --force

echo ""
echo "✅ Done. Live at https://caiocoach.com"
