# GitHub Pages Configuration

## Deployment Steps:

1. **Repository Setup:**
   - Repository name: `wedding` (or `username.github.io` for user site)
   - Branch: `main` hoặc `gh-pages`
   - Files: Tất cả files trong thư mục này

2. **GitHub Pages Settings:**
   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: `main` / (root)
   - Custom domain (optional): your-domain.com

3. **File Structure for GitHub Pages:**
```
/
├── index.html          # Main page
├── styles.css          # Styles
├── script.js           # JavaScript
├── sw.js              # Service Worker
├── images/            # Image directory
│   ├── _Z5A3461 (1).jpg
│   ├── _Z5A4138.jpg
│   ├── _Z5A4184 (1).jpg
│   ├── _Z5A4414 (1).jpg
│   ├── _Z5A4459.jpg
│   ├── _Z5A3699 (1).jpg
│   └── _Z5A4024.jpg
└── music/             # Music directory (optional)

```

4. **Important Notes:**
   - All paths are relative (`./` instead of `/images/`)
   - Service Worker uses relative paths
   - Music from external CDN (Zing MP3)
   - Fallback music sources included

5. **URL Structure:**
   - Main site: `https://username.github.io/wedding/`
   - Or custom domain: `https://your-domain.com`

6. **Troubleshooting:**
   - Images not loading: Check case sensitivity
   - Service Worker fails: Check path in registration
   - Music not playing: Check CORS and browser autoplay policies
   - HTTPS required for some features

## Deployment Checklist:
- [ ] All image paths use `./`
- [ ] Service Worker paths are relative
- [ ] Music has fallback sources
- [ ] HTTPS enabled (GitHub Pages default)
- [ ] Custom domain configured (if needed)
- [ ] Repository is public (for free GitHub Pages)
