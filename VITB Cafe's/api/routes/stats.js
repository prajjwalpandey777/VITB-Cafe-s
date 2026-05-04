// api/routes/stats.js
const express = require('express');
const router  = express.Router();
const Rating  = require('../models/Rating');

router.get('/', async (req, res) => {
  try {
    const totalRatings     = await Rating.countDocuments();
    const uniqueDishes     = await Rating.distinct('itemKey');
    res.json({ totalRatings, totalDishesRated: uniqueDishes.length });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch stats.' });
  }
});

module.exports = router;
