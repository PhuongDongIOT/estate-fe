#!/bin/bash

echo "🔧 delete all application in PM2..."
pm2 delete all

echo "🛑 stop PM2 daemon..."
pm2 kill

echo "🧹 delete PM2 data (~/.pm2)..."
rm -rf ~/.pm2

echo "✅ Done! PM2 has been reset."
