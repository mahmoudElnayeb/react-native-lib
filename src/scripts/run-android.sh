#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

echo "[run-android] Installing npm dependencies..."
npm install

echo "[run-android] Cleaning Android build..."
cd android
if [ -f "gradlew" ]; then
  ./gradlew clean
else
  ./gradlew clean
fi
cd "$ROOT"

echo "[run-android] Running app on Android (this will start Metro)..."
npx react-native run-android

echo "[run-android] Done."
