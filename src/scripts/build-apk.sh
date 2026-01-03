#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

echo "[build-apk] Installing npm dependencies..."
npm install

echo "[build-apk] Assembling Android release APK..."
cd android
./gradlew assembleRelease

APK_PATH="$(find app/build/outputs -type f -name "*release*.apk" 2>/dev/null | head -n 1 || true)"
if [ -n "$APK_PATH" ]; then
  echo "[build-apk] APK built: $ROOT/android/$APK_PATH"
else
  echo "[build-apk] APK not found under android/app/build/outputs/apk; check Gradle output"
fi

echo "[build-apk] Done."
