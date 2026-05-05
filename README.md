# VITB-Cafe-s

<div align="center">

<img src="https://img.shields.io/badge/VIT%20Bhopal-VITB%20Cafés-C8860A?style=for-the-badge&labelColor=1C1008" alt="VITB Cafés"/>

# 🍽️ VITB Cafés

### Discover, rate & review dishes across all 5 campus cafés
**By VITians · For VITians**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-C8860A?style=flat-square&logo=vercel&logoColor=white)](https://vitb-cafes.vercel.app)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB%20Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://cloud.mongodb.com)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

</div>

---

## 📸 Preview

> A full-stack campus food discovery platform for VIT Bhopal students — browse complete menus, rate dishes, read peer reviews, and help fellow VITians eat better.

---

## ✨ Features

- 🏪 **5 Cafés** — Mayuri, Underbelly, Mayuri Spl Block, AB's Dakshin, Bistro
- 🍛 **500+ Dishes** — complete menus with prices and categories
- ⭐ **Live Ratings** — real-time star ratings stored in MongoDB, visible to everyone
- 💬 **Peer Reviews** — read what other VITians say before you order
- 🔍 **Cross-Café Search** — search any dish across all cafés, ranked by rating
- 📊 **Smart Sorting** — dishes sorted best-rated first within each category
- 📬 **Feedback Form** — saved to MongoDB + sent to Gmail instantly
- ☰ **Quick Nav** — hamburger menu with About & Feedback shortcuts
- 📱 **Fully Responsive** — works great on mobile

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML, CSS, JavaScript (single file) |
| Backend | Node.js + Express.js |
| Database | MongoDB Atlas (Mongoose ODM) |
| Hosting | Vercel (frontend + backend, same domain) |

---

## 📁 Project Structure

```
vitb-cafes/
├── 📄 vercel.json          ← routes /api/* to backend, rest to frontend
├── 📄 package.json         ← all dependencies
├── 📄 .env.example         ← environment variable template
├── 📄 .gitignore
│
├── 📂 public/
│   └── index.html          ← complete frontend (single file)
│
└── 📂 api/
    ├── server.js            ← Express app entry point
    ├── 📂 db/
    │   └── connect.js       ← MongoDB connection (Mongoose)
    ├── 📂 models/
    │   ├── Rating.js        ← ratings schema
    │   └── Feedback.js      ← feedback schema
    └── 📂 routes/
        ├── ratings.js       ← GET /api/ratings, POST /api/ratings
        ├── feedback.js      ← POST /api/feedback
        └── stats.js         ← GET /api/stats
```

---

## 🚀 Deploy on Vercel (Free)

### 1. Set up MongoDB Atlas

1. Sign up at [cloud.mongodb.com](https://cloud.mongodb.com)
2. Create a free **M0** cluster → region: **Mumbai**
3. Add IP `0.0.0.0/0` under Network Access
4. Get your connection string:
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/vitb_cafes?retryWrites=true&w=majority
   ```

### 2. Deploy to Vercel

1. Fork this repo or push to your own GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import repo
3. Add environment variable:

   | Key | Value |
   |-----|-------|
   | `MONGODB_URI` | your Atlas connection string |

4. Click **Deploy** — done! ✅

Your site will be live at `https://your-project.vercel.app`

> Both frontend and backend deploy together on the same URL — no CORS issues, no separate services.

---

## 🛠️ Local Development

```bash
# 1. Clone the repo
git clone https://github.com/your-username/vitb-cafes.git
cd vitb-cafes

# 2. Install dependencies
npm install

# 3. Set up environment
cp .env.example .env
# Edit .env — paste your MONGODB_URI

# 4. Run backend
node api/server.js
# API running at http://localhost:3000

# 5. Open frontend
# Open public/index.html in browser
# OR use VS Code Live Server extension
```

> For local dev, change `API_BASE` in `public/index.html`:
> ```js
> const API_BASE = 'http://localhost:3000';
> ```
> Change it back to `''` before pushing to GitHub.

---

## 🔌 API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api` | Health check |
| `GET` | `/api/ratings` | All ratings aggregated (used on page load) |
| `GET` | `/api/ratings/:cafeId/:itemKey` | Ratings for a single dish |
| `POST` | `/api/ratings` | Submit a new rating + review |
| `POST` | `/api/feedback` | Submit feedback form |
| `GET` | `/api/stats` | Total ratings & dishes rated |

### Example — Submit a rating

```http
POST /api/ratings
Content-Type: application/json

{
  "cafeId":   "mayuri",
  "itemName": "Masala Dosa",
  "rating":   5,
  "name":     "Prajjwal",
  "review":   "Crispy and absolutely delicious!"
}
```

---

## 🍕 Cafés Included

| Café | Location | Specialty |
|------|----------|-----------|
| 🍽️ Mayuri | Academic Block 1 | Authentic Indian, Momos, South Indian |
| 🍕 Underbelly | Academic Block 1 | Non-veg, Pasta, Cakes, Chinese |
| 🍰 Mayuri — Spl Block | Special Block | Beverages, International, Tandoor |
| 🥗 AB's Dakshin | Special Block | South Indian, Biryani, Fresh Juices |
| ☕ Bistro | Special Block | Artisan Coffee, Wraps, Pizzas |

---

## 🤝 Contributing

Contributions are welcome! If you want to:

- Add a new café or update menu items → edit the `CAFES` array in `public/index.html`
- Fix a bug or add a feature → open a pull request
- Report an issue → open a GitHub issue

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---



Made with ❤️ for VITians &nbsp;·&nbsp; VIT Bhopal University &nbsp;·&nbsp; 2025
