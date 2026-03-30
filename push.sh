#!/bin/bash
# AIO Website — push all local changes to GitHub
# Run from: ~/Documents/AIO/Website
# Usage: bash push.sh

set -e
cd "$(dirname "$0")"

echo "📂 Working in: $(pwd)"
echo ""

# Remove stale lock file if it exists
if [ -f .git/index.lock ]; then
  echo "🔓 Removing stale git lock file..."
  rm .git/index.lock
fi

# Stage everything except noise
echo "📋 Staging changes..."
git add \
  generative-ai/ \
  micro-sessions/ \
  blog/ \
  shared/ \
  index.html \
  certification.html \
  coaching.html \
  my-team.html

echo ""
echo "📝 Changes to commit:"
git status --short | grep -v '.DS_Store\|\.claude'
echo ""

# Commit with timestamp
TIMESTAMP=$(date '+%Y-%m-%d %H:%M')
git commit -m "Site update — $TIMESTAMP" || echo "Nothing new to commit."

echo ""
echo "🚀 Force pushing local to GitHub (overwrites remote)..."
git push origin main --force

echo ""
echo "✅ Done. Live at https://ai-officer.com"
