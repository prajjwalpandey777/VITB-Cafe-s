<div align="center">

<img src="https://img.shields.io/badge/VIT%20Bhopal-VITB%20Cafés-C8860A?style=for-the-badge&labelColor=1C1008" alt="VITB Cafés"/>

# 🍽️ VITB Cafés

### Discover, rate & review dishes across all 5 campus cafés
**By VITians · For VITians**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-C8860A?style=flat-square&logo=vercel&logoColor=white)](https://vitb-cafes.vercel.app)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB%20Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://cloud.mongodb.com)
[![Frontend](https://img.shields.io/badge/Frontend-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)
[![Backend](https://img.shields.io/badge/Backend-Render-46E3B7?style=flat-square&logo=render&logoColor=black)](https://render.com)
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
| Frontend Hosting | Vercel |
| Backend Hosting | Render |

---

## 📁 Project Structure

```
vitb-cafes/
├── 📄 index.html           ← complete frontend (single file, at root)
├── 📄 .gitignore
│
└── 📂 api/
    ├── server.js            ← Express app entry point
    ├── package.json         ← dependencies (used by Render / local dev)
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

- Add a new café or update menu items 
- Fix a bug or add a feature → open a pull request
- Report an issue → open a GitHub issue

---

<div align="center">

Made with ❤️ for VITians &nbsp;·&nbsp; VIT Bhopal University &nbsp;·&nbsp; 2025

</div>
