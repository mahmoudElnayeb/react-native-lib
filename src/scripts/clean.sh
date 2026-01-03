#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

echo "[clean] Removing node_modules..."
rm -rf node_modules

echo "[clean] Removing lock files..."
rm -f package-lock.json yarn.lock

echo "[clean] Handling iOS CocoaPods (deintegrate + remove Pods)..."
if command -v pod >/dev/null 2>&1; then
	echo "[clean] CocoaPods found — deintegrating and clearing cache (may require Ruby/CocoaPods)..."
	cd ios
	pod deintegrate || true
	pod cache clean --all || true
	cd "$ROOT"
else
	echo "[clean] CocoaPods not found; skipping deintegrate/cache clean."
fi

echo "[clean] Removing iOS Pods and build artifacts..."
rm -rf ios/Pods ios/Podfile.lock ios/build

echo "[clean] Removing Android build artifacts..."
rm -rf android/.gradle android/app/build android/build

echo "[clean] Cleaning npm cache (best-effort)..."
npm cache clean --force || true

echo "[clean] Done. To reinstall, run: npm install && cd ios && pod install"
