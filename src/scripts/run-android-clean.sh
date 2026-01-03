#!/bin/bash

echo "🧹 Starting full clean and rebuild..."

# Navigate to project root
cd "$(dirname "$0")/.."

echo "📦 Cleaning node_modules..."
rm -rf node_modules
rm -rf package-lock.json

echo "🗑️ Cleaning Gradle cache..."
cd android
./gradlew clean
rm -rf .gradle
rm -rf app/build
rm -rf build
cd ..

echo "🗑️ Cleaning Metro cache..."
rm -rf $TMPDIR/react-*
rm -rf $TMPDIR/metro-*
rm -rf $TMPDIR/haste-*

echo "📥 Installing npm dependencies..."
npm install

echo "📚 Regenerating Storybook stories..."
npm run storybook-generate

echo "🚀 Starting Android app..."
npx react-native run-android

echo "✅ Done!"
