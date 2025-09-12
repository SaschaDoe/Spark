# Running SPARK Soundtrack Locally

## Quick Start Guide

### 1. Install Netlify CLI (if not already installed)
```bash
npm install -g netlify-cli
```

### 2. Navigate to Project Directory
```bash
cd C:/proj/spark
```

### 3. Start Local Development Server
```bash
netlify dev
```

This will:
- Start the local server (usually at http://localhost:8888)
- Run Netlify Functions locally
- Simulate the production environment

### 4. Open Your Browser
Go to: **http://localhost:8888**

## What You'll See Locally

✅ **Working Features:**
- Album cover displays (SVG)
- Track list with 13 tracks
- Click tracks to see lyrics/stories modal
- Beautiful responsive design
- Download button (simulated)

⚠️ **Limited Features (no R2 credentials):**
- Actual file downloads won't work
- Track streaming won't work
- Functions will return mock data

## Alternative: Simple HTTP Server

If you don't want to use Netlify Dev:

### Using Python (if installed):
```bash
python -m http.server 8000
```
Then go to: http://localhost:8000

### Using Node.js:
```bash
npx http-server -p 8000
```
Then go to: http://localhost:8000

**Note:** These won't run the Netlify Functions, so download functionality won't work.

## Testing the Site

### What to Test:
1. ✅ **Homepage loads** with hero section
2. ✅ **Album cover displays** (SPARK logo with sun gradient)
3. ✅ **Track list shows** all 13 tracks
4. ✅ **Click any track** → Modal opens with Story/Lyrics tabs
5. ✅ **Tab switching** works between Story and Lyrics
6. ✅ **Modal closes** with X button or clicking outside
7. ✅ **Download button** shows modal (even if simulated)
8. ✅ **Responsive design** works on mobile

### Sample Track Content:
- **Track 1**: "The Dying Sun" has story and lyrics placeholders
- **Other tracks**: Show "Story coming soon..." and "Lyrics coming soon..."

## Troubleshooting

### Port Already in Use:
If port 8888 is busy:
```bash
netlify dev --port 9999
```

### Netlify CLI Issues:
```bash
netlify login
netlify unlink
netlify init
```

### Browser Cache:
Press `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac) to hard refresh

## File Structure You're Running:
```
/
├── index.html (main page)
├── styles.css (all styling)
├── app.js (JavaScript functionality)
├── images/album-cover.svg (album artwork)
├── netlify/functions/ (serverless functions)
└── netlify.toml (configuration)
```

## Next Steps After Local Testing:

1. **Deploy to Netlify** via GitHub integration
2. **Add R2 environment variables** for actual downloads
3. **Upload your 200MB ZIP** to Cloudflare R2
4. **Test production** download functionality

---

Your localhost version should now show the beautiful SPARK soundtrack website with lyrics/stories instead of audio player! 🎵