// api/routes/feedback.js
const express   = require('express');
const router    = express.Router();
const rateLimit = require('express-rate-limit');
const Feedback  = require('../models/Feedback');

const feedbackLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many feedback submissions. Try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

router.post('/', feedbackLimiter, async (req, res) => {
  try {
    const { name, cafe, type, message } = req.body;
    if (!message || !message.trim()) return res.status(400).json({ error: 'Message is required.' });

    await new Feedback({
      name:    (name    || '').trim().slice(0, 60)  || 'Anonymous VITian',
      cafe:    (cafe    || '').trim().slice(0, 60)  || 'General',
      type:    (type    || '').trim().slice(0, 80)  || 'General Feedback',
      message: message.trim().slice(0, 800),
    }).save();

    res.status(201).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save feedback.' });
  }
});

module.exports = router;
