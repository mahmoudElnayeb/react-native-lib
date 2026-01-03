#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

echo "[run-ios] Installing npm dependencies..."
npm install

echo "[run-ios] Installing CocoaPods (may require CocoaPods to be installed)..."
cd ios
pod install --repo-update
cd "$ROOT"

echo "[run-ios] Running app on iOS (this will start Metro)..."
npx react-native run-ios

echo "[run-ios] Done."
