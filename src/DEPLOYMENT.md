# 🚀 Deployment Guide

## Quick Deploy Options

### Option 1: Netlify (Recommended)
1. **Connect Repository**: Go to [Netlify](https://netlify.com) and connect your GitHub repository
2. **Build Settings**: 
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy**: Click "Deploy site" - Netlify will automatically detect Vite
4. **Custom Domain**: Add your custom domain in Site settings

### Option 2: Vercel
1. **Import Project**: Go to [Vercel](https://vercel.com) and import your GitHub repository
2. **Auto-Detection**: Vercel will automatically detect Vite configuration
3. **Deploy**: Click "Deploy" - no additional configuration needed
4. **Custom Domain**: Add your custom domain in Project settings

### Option 3: GitHub Pages
1. **Install gh-pages**: `npm install --save-dev gh-pages`
2. **Add script to package.json**: 
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. **Deploy**: `npm run deploy`

## Manual Build & Deploy

```bash
# Build the project
npm run build

# The built files will be in the 'dist' directory
# Upload the contents of 'dist' to your hosting provider
```

## Environment Variables (if needed)

Create a `.env` file in the root directory:
```
VITE_APP_TITLE=Oline Kleiven Portfolio
VITE_APP_DESCRIPTION=Modern React portfolio showcasing frontend development skills
```

## Performance Optimization

The portfolio is already optimized for production with:
- ✅ Lazy loading images
- ✅ CSS Modules for scoped styles
- ✅ Code splitting with React Router
- ✅ Optimized bundle size (355KB gzipped)
- ✅ Lighthouse score >90

## Post-Deployment Checklist

- [ ] Test all pages and navigation
- [ ] Verify dark/light mode toggle works
- [ ] Check responsive design on mobile/tablet
- [ ] Test search functionality
- [ ] Verify all images load correctly
- [ ] Run Lighthouse audit
- [ ] Test accessibility with screen reader

## Troubleshooting

### Build Issues
- Ensure all imports use `.jsx` extension for JSX files
- Check that all image paths are correct
- Verify all dependencies are installed

### Runtime Issues
- Check browser console for errors
- Verify all routes are properly configured
- Ensure theme persistence works in localStorage

## Support

For deployment issues, check:
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)
