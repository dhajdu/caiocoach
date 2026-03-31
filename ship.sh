#!/bin/bash
# ship.sh — merge dev into main and deploy to production
# Usage: ./ship.sh "optional message"

set -e

MSG=${1:-"Ship: merge dev → main"}

echo "🚀 Shipping to production..."

git checkout main
git pull origin main
git merge dev --no-ff -m "$MSG"
git push origin main
git checkout dev

echo "✅ Done. Production deploy triggered."
