# Deployment Guide for Lovable AI

This document outlines how to deploy the Bloom Scribe Blog project on Lovable AI.

## Configuration Changes Made

The following changes have been made to ensure compatibility with Lovable AI deployment:

1. Updated `vite.config.ts` to:
   - Add `base: "./"` configuration for proper path handling
   - Configure `allowedHosts` to include all Lovable domains

2. Updated `package.json` to include Lovable-specific scripts:
   - `lovable:build` - Used for building the project
   - `lovable:deploy` - Used for deployment

3. Changed from `BrowserRouter` to `HashRouter` in `App.tsx` for better compatibility with static hosting.

## Deployment Steps

1. Make sure all changes are committed to your repository
2. The Lovable AI platform will automatically use the `lovable:build` or `lovable:deploy` scripts
3. Static assets will be served from the `dist` directory created by the build process

## Troubleshooting

If you encounter issues with routing:
- Make sure all links in your application are relative
- Confirm that `HashRouter` is being used instead of `BrowserRouter`
- Check that `base: "./"` is set in vite.config.ts

## Additional Resources

- For more information, visit the Lovable AI documentation
- Contact Lovable AI support if you need further assistance 