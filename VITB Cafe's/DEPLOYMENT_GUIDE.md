# VITB Cafés — Deploy Everything on Vercel
## One project, one URL, completely FREE

---

## How it works

```
your-project.vercel.app/          → serves public/index.html  (frontend)
your-project.vercel.app/api/...   → runs api/server.js        (backend)
```

Both live on the **same Vercel URL** — no CORS issues, no separate deployments!

---

## STEP 1 — Set up MongoDB Atlas

1. Go to **https://cloud.mongodb.com** → sign up free
2. **Build a Database** → **M0 Free** → Region: **Mumbai**
3. Create username + password (save them!)
4. **Network Access** → Add IP **`0.0.0.0/0`** (allow all)
5. **Connect** → **Drivers** → copy connection string:
   ```
   mongodb+srv://yourname:<password>@cluster0.abc12.mongodb.net/?retryWrites=true&w=majority
   ```
6. Replace `<password>` and add database name:
   ```
   mongodb+srv://yourname:yourpassword@cluster0.abc12.mongodb.net/vitb_cafes?retryWrites=true&w=majority
   ```
   ✅ Save this.

---

## STEP 2 — Push to GitHub

1. Create a new GitHub repo: **`vitb-cafes`**
2. Upload ALL files from this folder (the root, not a subfolder):
   ```
   vitb-cafes/
   ├── vercel.json       ← must be in root!
   ├── package.json
   ├── .env.example
   ├── .gitignore
   ├── api/              ← backend
   └── public/           ← frontend
   ```
   ⚠️ Do NOT upload `.env`

---

## STEP 3 — Deploy on Vercel

1. Go to **https://vercel.com** → sign in with GitHub
2. **"Add New Project"** → import `vitb-cafes`
3. Framework Preset: **Other** (don't select Next.js etc.)
4. Root Directory: leave as **`./`** (default)
5. Click **"Environment Variables"** → add:

   | Key            | Value                              |
   |----------------|------------------------------------|
   | `MONGODB_URI`  | your Atlas connection string       |

6. Click **Deploy** → wait ~1 minute

✅ You'll get one URL like: `https://vitb-cafes.vercel.app`

**Test it:**
- `https://vitb-cafes.vercel.app` → your website loads
- `https://vitb-cafes.vercel.app/api` → shows `{"status":"ok",...}`

---

## That's it! 🎉

No separate frontend/backend URLs to manage.
Everything is on one domain.
Ratings from all users are stored in MongoDB and visible to everyone.

---

## Local Development

```bash
npm install
cp .env.example .env
# Edit .env — paste your MONGODB_URI

node api/server.js
# Backend at http://localhost:3000

# Open public/index.html in browser
# For local dev, temporarily change in public/index.html:
#   const API_BASE = 'http://localhost:3000';
# Change back to '' before pushing to GitHub
```

---

## File Structure

```
vitb-cafes/                     ← push this whole folder to GitHub
├── vercel.json                 ← routes /api/* to backend, rest to frontend
├── package.json                ← all dependencies
├── .env.example                ← copy to .env for local dev
├── .gitignore
├── public/
│   └── index.html              ← complete frontend website
└── api/
    ├── server.js               ← Express app
    ├── db/
    │   └── connect.js          ← MongoDB connection
    ├── models/
    │   ├── Rating.js
    │   └── Feedback.js
    └── routes/
        ├── ratings.js          ← GET/POST /api/ratings
        ├── feedback.js         ← POST /api/feedback
        └── stats.js            ← GET /api/stats
```

---

Made with ♥ for VITians
