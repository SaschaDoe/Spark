# Netlify Setup Guide - Deploy from GitHub UI

## Step-by-Step Deployment Instructions

### 1. Sign up/Login to Netlify
Go to https://app.netlify.com and sign in with your GitHub account.

### 2. Import from GitHub

1. Click **"Add new site"** → **"Import an existing project"**
2. Choose **"Deploy with GitHub"**
3. Authorize Netlify to access your GitHub
4. Search for and select **"SaschaDoe/Spark"** repository
5. Click **"Deploy Spark"**

### 3. Configure Build Settings

Netlify should auto-detect these, but verify:

- **Branch to deploy**: `main`
- **Build command**: (leave empty - we're deploying a static site)
- **Publish directory**: `.`
- **Functions directory**: `netlify/functions`

Click **"Deploy site"**

### 4. Add Environment Variables (CRITICAL!)

After initial deployment:

1. Go to **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Add these TWO variables:

```
R2_ACCESS_KEY_ID = [Your R2 Access Key ID]
R2_SECRET_ACCESS_KEY = [Your R2 Secret Access Key]
```

**To get these credentials from Cloudflare:**

1. Log in to Cloudflare Dashboard
2. Go to **R2** → **Manage R2 API tokens**
3. Click **"Create API token"**
4. Settings:
   - Token name: `spark-soundtrack-netlify`
   - Permissions: **Object Read & Write**
   - Specify bucket: `sashbot`
   - TTL: Leave as default
5. Click **"Create API Token"**
6. **IMPORTANT**: Copy the Access Key ID and Secret Access Key immediately (you won't see them again!)

### 5. Install Dependencies

Since we're using AWS SDK for R2, we need to trigger a build with dependencies:

1. Go to **Deploys** tab
2. Click **"Trigger deploy"** → **"Clear cache and deploy site"**

### 6. Verify R2 Bucket Structure

Make sure your R2 bucket (`sashbot`) has this structure:

```
sashbot/
├── albums/
│   └── SPARK_Soundtrack_Complete.zip (your 200MB file)
├── tracks/
│   ├── track-1.mp3
│   ├── track-2.mp3
│   └── ... (all 13 tracks)
└── images/
    └── album-cover.jpg
```

### 7. Test Your Site

Your site will be available at: `https://[your-site-name].netlify.app`

Test these features:
- [ ] Homepage loads
- [ ] Track list displays
- [ ] Click "Download Album" - should start downloading
- [ ] Try streaming a track (if individual tracks are uploaded)

### 8. Custom Domain (Optional)

1. Go to **Domain settings**
2. Click **"Add custom domain"**
3. Follow the instructions to point your domain to Netlify

## Troubleshooting

### "Function invocation failed" Error
- Check environment variables are set correctly
- Make sure R2 credentials have proper permissions
- Check Netlify function logs: **Functions** → **View logs**

### CORS Errors
- The functions already include CORS headers
- If issues persist, check R2 bucket CORS settings

### Download Not Working
- Verify the file exists at `albums/SPARK_Soundtrack_Complete.zip` in R2
- Check function logs for specific errors
- Ensure environment variables are set

### Build Failures
If the build fails, check:
1. **Deploys** → Click failed deploy → **View logs**
2. Most common issue: missing dependencies
3. Solution: Clear cache and redeploy

## Quick Checklist

- [ ] Site imported from GitHub
- [ ] Environment variables added (R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY)
- [ ] Site deployed successfully
- [ ] Files uploaded to R2 bucket
- [ ] Download function tested
- [ ] Streaming function tested (if applicable)

## Support

- Netlify Support: https://answers.netlify.com/
- Check function logs: **Functions** tab in Netlify dashboard
- Repository issues: https://github.com/SaschaDoe/Spark/issues

---

That's it! Your SPARK soundtrack site should now be live and serving files from Cloudflare R2 with zero egress fees! 🎵