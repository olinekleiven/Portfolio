#!/bin/bash

echo "🚀 Building Oline Kleiven Portfolio..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run linting
echo "🔍 Running linter..."
npm run lint

# Build the project
echo "🏗️ Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Built files are in the 'dist' directory"
    echo "🌐 Ready for deployment to Netlify/Vercel"
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🎉 Portfolio build complete!"
