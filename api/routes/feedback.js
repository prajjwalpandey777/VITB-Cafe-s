// api/routes/feedback.js
const express   = require('express');
const router    = express.Router();
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');
const Feedback  = require('../models/Feedback');

const feedbackLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many feedback submissions. Try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Create Gmail transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

router.post('/', feedbackLimiter, async (req, res) => {
  try {
    const { name, cafe, type, message } = req.body;
    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'Message is required.' });
    }

    // Save to MongoDB
    await new Feedback({
      name:    (name    || '').trim().slice(0, 60)  || 'Anonymous VITian',
      cafe:    (cafe    || '').trim().slice(0, 60)  || 'General',
      type:    (type    || '').trim().slice(0, 80)  || 'General Feedback',
      message: message.trim().slice(0, 800),
    }).save();

    // Send email via Nodemailer
    await transporter.sendMail({
      from:    `"VITB Cafés" <${process.env.GMAIL_USER}>`,
      to:      process.env.GMAIL_USER,
      subject: `[VITB Cafés] ${type || 'Feedback'} — ${cafe || 'General'}`,
      html: `
        <div style="font-family:sans-serif;max-width:500px;margin:0 auto;border:1px solid #E8D0A8;border-radius:12px;overflow:hidden">
          <div style="background:#C8860A;padding:20px 24px">
            <h2 style="color:#fff;margin:0;font-size:18px">🍽️ New Feedback — VITB Cafés</h2>
          </div>
          <div style="padding:24px;background:#FEF9F4">
            <p style="margin:0 0 12px"><b>From:</b> ${name || 'Anonymous VITian'}</p>
            <p style="margin:0 0 12px"><b>Café:</b> ${cafe || 'General'}</p>
            <p style="margin:0 0 12px"><b>Type:</b> ${type || 'General Feedback'}</p>
            <div style="background:#fff;border:1px solid #E8D0A8;border-radius:8px;padding:16px;margin-top:12px">
              <p style="margin:0;color:#1C1008;line-height:1.6">${message}</p>
            </div>
          </div>
          <div style="padding:12px 24px;background:#F7F0E6;text-align:center">
            <small style="color:#A08060">VITB Cafés · VIT Bhopal University</small>
          </div>
        </div>
      `,
    });

    res.status(201).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save feedback.' });
  }
});

module.exports = router;
