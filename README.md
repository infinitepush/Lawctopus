# Lawctopus Course Landing Page

A professional landing page for Lawctopus Law School's 6-Month Expert-Level Course on Mastering Contract Drafting & Freelancing.

## Project Structure

```
Lawctoopus/
├── index.html              # Main landing page
├── css/
│   └── style.css          # All styles
├── js/
│   └── main.js            # JavaScript (ready for backend)
├── assets/
│   └── images/            # Faculty photos & logos
├── vercel.json            # Vercel deployment config
└── README.md              # This file
```

## Deploy to Vercel

### Option 1: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: Via GitHub
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) and Import Project
3. Select your GitHub repo
4. Vercel auto-detects static site — just click Deploy

### Option 3: Drag & Drop
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Select "Continue with Template"
4. Drag this entire folder into the upload area

## Adding a Backend (Future)

To add a backend API:

1. **Create an `api/` folder** at the project root:
   ```
   api/
   ├── contact.js           # POST /api/contact
   ├── register.js          # POST /api/register
   └── course-data.js       # GET /api/course-data
   ```

2. **Vercel Serverless Functions** — Vercel supports Node.js API routes out of the box. No extra config needed.

3. **Example `api/contact.js`:**
   ```js
   export default function handler(req, res) {
     if (req.method === 'POST') {
       // Save to DB, send email, etc.
       res.status(200).json({ success: true });
     }
   }
   ```

4. **Update `vercel.json`:**
   ```json
   {
     "routes": [
       { "src": "/api/(.*)", "dest": "/api/$1.js" },
       { "src": "/(.*)", "dest": "/index.html" }
     ]
   }
   ```

## Tech Stack

- **Frontend:** Pure HTML5, CSS3 (no framework)
- **Fonts:** Google Fonts (Inter + Playfair Display)
- **Icons:** Unicode emojis (no icon library dependency)
- **Deployment:** Vercel Static / GitHub Pages
- **Backend-ready:** Vercel Serverless Functions or separate API

## License

For Lawctopus Law School use only.
