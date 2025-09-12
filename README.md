# SPARK Soundtrack 🎵

> Original Soundtrack for a Film That Was Never Made

A serverless web application for streaming and downloading the SPARK soundtrack - a musical journey through the story of Finn and Nova, two young heroes from enemy families who must work together to heal their dying sun.

## 🌟 Features

- **Streaming Player**: Listen to all 13 tracks online
- **Full Album Download**: 200MB high-quality album package
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Serverless Architecture**: Hosted on Netlify with Cloudflare R2 storage
- **Patreon Integration**: Support the project and get exclusive content

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ installed
- Netlify CLI (`npm install -g netlify-cli`)
- Cloudflare account with R2 access
- GitHub account

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/SaschaDoe/Spark.git
cd Spark
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from example:
```bash
cp .env.example .env
# Add your Cloudflare R2 credentials
```

4. Run local development server:
```bash
netlify dev
```

5. Open http://localhost:8888

## 📦 Deployment

### Deploy to Netlify

1. Connect to Netlify:
```bash
netlify init
```

2. Configure environment variables in Netlify Dashboard:
   - `R2_ACCOUNT_ID`
   - `R2_ACCESS_KEY_ID`
   - `R2_SECRET_ACCESS_KEY`
   - `R2_BUCKET_NAME`

3. Deploy:
```bash
netlify deploy --prod
```

### Continuous Deployment

Push to GitHub main branch automatically deploys via Netlify.

## 🏗️ Architecture

```
User → Netlify (SPA) → Serverless Functions → Cloudflare R2 (200MB Files)
```

- **Frontend**: Vanilla JavaScript SPA
- **Backend**: Netlify Functions (AWS Lambda)
- **Storage**: Cloudflare R2 (S3-compatible, zero egress fees)
- **CDN**: Netlify Edge Network

## 📁 Project Structure

```
spark/
├── index.html           # Main SPA
├── styles.css          # Styling
├── app.js              # Application logic
├── netlify.toml        # Netlify configuration
├── package.json        # Dependencies
├── netlify/
│   └── functions/      # Serverless functions
│       ├── get-track-url.js    # Generate streaming URLs
│       └── download-album.js   # Generate download URLs
└── documentation/
    ├── requirements.md      # Project requirements
    └── integration-plan.md  # Deployment guide
```

## 🎼 Track List

### Act I: When The Lights Dim
1. The Dying Sun (Main Theme)
2. Finn's Dawn  
3. Nova's Depths
4. When Sparks Fly
5. Seraphina's Waltz

### Act II: The Underground Adventure
6. Underground Odyssey
7. Luna's Ballad
8. Museum of Memories
9. The Magic Train

### Act III: Healing The Sun
10. Battle for the Sun
11. The Price of Light
12. Healing Dawn
13. Stars Beyond (Epilogue)

## 💰 Cost Analysis

- **Netlify**: Free tier (100GB bandwidth/month)
- **Cloudflare R2**: ~$3/month (zero egress fees!)
- **Total**: Under $5/month for thousands of downloads

## 🤝 Support the Project

Support the creation of more musical stories:
- [Patreon](https://patreon.com/sparksoundtrack)
- [GitHub Sponsors](https://github.com/sponsors/SaschaDoe)

### Patron Benefits
- Stem files for remixing
- Behind-the-scenes content
- Early access to new tracks
- Story annotations

## 📝 License

MIT License - See LICENSE file for details

## 🙏 Acknowledgments

- Story inspired by themes of unity, sacrifice, and hope
- Built with modern web technologies
- Hosted on sustainable, serverless infrastructure

## 📧 Contact

- GitHub: [@SaschaDoe](https://github.com/SaschaDoe)
- Project: [github.com/SaschaDoe/Spark](https://github.com/SaschaDoe/Spark)

---

*SPARK - Where magic meets technology, and friendship conquers fear.*