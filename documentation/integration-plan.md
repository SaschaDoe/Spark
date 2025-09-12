# SPARK Soundtrack Integration Plan

## Overview
This document outlines the complete integration plan for deploying the SPARK soundtrack website on Netlify with Cloudflare R2 for storing and serving the 200MB album files.

## Architecture

```
User Browser → Netlify (SPA) → Netlify Functions → Cloudflare R2 (200MB Files)
                    ↓                                        ↓
              Static Website                          Object Storage
              (HTML/CSS/JS)                          (Audio Files)
```

## Step 1: Cloudflare R2 Setup

### 1.1 Create Cloudflare Account
1. Sign up at https://dash.cloudflare.com
2. Navigate to R2 Object Storage in the dashboard
3. Create a new R2 bucket named `spark-soundtrack`

### 1.2 Configure R2 Bucket
```bash
# Bucket settings
Name: spark-soundtrack
Location: Automatic (closest to your users)
```

### 1.3 Upload Album Files
Structure your files in R2:
```
/albums/
  └── SPARK_Soundtrack_Complete.zip (200MB full album)
/tracks/
  ├── track-1.mp3 (individual tracks)
  ├── track-2.mp3
  └── ... (all 13 tracks)
/images/
  └── album-cover.jpg
```

### 1.4 Generate R2 API Credentials
1. Go to R2 → Manage R2 API Tokens
2. Create new API token with permissions:
   - Object Read & Write
   - Select your bucket
3. Save the credentials:
   - Account ID
   - Access Key ID
   - Secret Access Key

## Step 2: Netlify Deployment

### 2.1 Initial Setup
```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize Netlify in your project
netlify init
```

### 2.2 Environment Variables
1. Go to Netlify Dashboard → Site Settings → Environment Variables
2. Add the following:
```
R2_ACCOUNT_ID=your_cloudflare_account_id
R2_ACCESS_KEY_ID=your_r2_access_key
R2_SECRET_ACCESS_KEY=your_r2_secret_key
R2_BUCKET_NAME=spark-soundtrack
```

### 2.3 Deploy to Netlify
```bash
# Deploy to production
netlify deploy --prod

# Or use continuous deployment from GitHub
```

## Step 3: GitHub Repository Setup

### 3.1 Connect to GitHub
```bash
# Add GitHub remote
git remote add origin https://github.com/SaschaDoe/Spark.git

# Create initial commit
git add .
git commit -m "Initial commit: SPARK Soundtrack website"

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3.2 Enable Continuous Deployment
1. In Netlify Dashboard → Site Settings → Build & Deploy
2. Link to GitHub repository
3. Set build settings:
   - Build command: `npm run build` (or leave empty for static site)
   - Publish directory: `.`
   - Functions directory: `netlify/functions`

## Step 4: Update Netlify Functions for R2

### 4.1 Install Dependencies
```bash
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
```

### 4.2 Update get-track-url.js
```javascript
const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

exports.handler = async (event, context) => {
    const R2 = new S3Client({
        region: 'auto',
        endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
        credentials: {
            accessKeyId: process.env.R2_ACCESS_KEY_ID,
            secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
        },
    });
    
    const { trackId } = event.queryStringParameters;
    
    const command = new GetObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        Key: `tracks/track-${trackId}.mp3`,
    });
    
    const url = await getSignedUrl(R2, command, { expiresIn: 3600 });
    
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
    };
};
```

### 4.3 Update download-album.js
```javascript
const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

exports.handler = async (event, context) => {
    const R2 = new S3Client({
        region: 'auto',
        endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
        credentials: {
            accessKeyId: process.env.R2_ACCESS_KEY_ID,
            secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
        },
    });
    
    const command = new GetObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        Key: 'albums/SPARK_Soundtrack_Complete.zip',
        ResponseContentDisposition: 'attachment; filename="SPARK_Soundtrack_Complete.zip"',
    });
    
    const downloadUrl = await getSignedUrl(R2, command, { expiresIn: 3600 });
    
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            downloadUrl,
            fileName: 'SPARK_Soundtrack_Complete.zip',
            fileSize: '200MB'
        }),
    };
};
```

## Step 5: Testing

### 5.1 Local Testing
```bash
# Run local development server
netlify dev

# Test at http://localhost:8888
```

### 5.2 Test Checklist
- [ ] Homepage loads correctly
- [ ] Track list displays all 13 tracks
- [ ] Individual track streaming works
- [ ] Album download initiates properly
- [ ] Patreon links work
- [ ] Mobile responsive design
- [ ] Loading states and error handling

## Step 6: Production Checklist

### 6.1 Pre-Launch
- [ ] All environment variables set in Netlify
- [ ] R2 bucket has all audio files uploaded
- [ ] CORS configured properly on R2 if needed
- [ ] SSL certificate active (automatic with Netlify)
- [ ] Custom domain configured (optional)

### 6.2 Performance Optimization
- [ ] Enable Netlify CDN caching
- [ ] Compress images
- [ ] Minify CSS/JS (optional)
- [ ] Set up Cloudflare CDN for R2 (optional)

### 6.3 Monitoring
- [ ] Set up Netlify Analytics
- [ ] Configure error tracking
- [ ] Monitor R2 bandwidth usage
- [ ] Track download metrics

## Cost Estimation

### Netlify (Free Tier)
- 100GB bandwidth/month
- 300 build minutes/month
- Serverless functions: 125k requests/month

### Cloudflare R2
- Storage: $0.015/GB/month = $3/month for 200MB
- **Zero egress fees** (major advantage)
- Operations: $0.36 per million requests

### Estimated Monthly Cost
- Low traffic (100 downloads): ~$3
- Medium traffic (1,000 downloads): ~$3
- High traffic (10,000 downloads): ~$4

The zero egress fees from R2 make this extremely cost-effective compared to AWS S3.

## Security Considerations

### Presigned URLs
- Expire after 1 hour
- Generated server-side only
- No direct bucket access

### Environment Variables
- Never commit .env files
- Use Netlify's environment variable UI
- Rotate keys periodically

### Rate Limiting
Consider implementing rate limiting in Netlify Functions:
```javascript
// Simple in-memory rate limiting
const rateLimitMap = new Map();

function rateLimit(ip, limit = 10) {
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute
    
    if (!rateLimitMap.has(ip)) {
        rateLimitMap.set(ip, [now]);
        return true;
    }
    
    const timestamps = rateLimitMap.get(ip).filter(t => now - t < windowMs);
    if (timestamps.length >= limit) {
        return false;
    }
    
    timestamps.push(now);
    rateLimitMap.set(ip, timestamps);
    return true;
}
```

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure headers are set in Netlify functions
   - Check R2 CORS configuration

2. **Function Timeout**
   - Netlify functions timeout after 10 seconds
   - Presigned URLs should generate quickly

3. **404 Errors**
   - Verify file paths in R2
   - Check environment variables

4. **Slow Downloads**
   - Consider using Cloudflare CDN
   - Optimize file compression

## Alternative Solutions

### If R2 isn't available in your region:

1. **AWS S3**
   - Similar setup but with egress fees
   - Use same SDK with different endpoint

2. **Backblaze B2**
   - S3-compatible API
   - Competitive pricing

3. **Bunny.net CDN**
   - Storage + CDN combined
   - $0.005/GB bandwidth

## Support Resources

- Netlify Docs: https://docs.netlify.com
- Cloudflare R2 Docs: https://developers.cloudflare.com/r2
- Project Repository: https://github.com/SaschaDoe/Spark
- Patreon: https://patreon.com/sparksoundtrack

## Next Steps

1. Create Cloudflare account and R2 bucket
2. Upload the 200MB album file to R2
3. Deploy to Netlify
4. Configure environment variables
5. Test the complete flow
6. Launch and promote!

---

This integration provides a scalable, cost-effective solution for hosting and distributing the SPARK soundtrack album while maintaining excellent performance and user experience.