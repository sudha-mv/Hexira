// routes/messages.js
const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const authMiddleware = require('../middleware/auth');

// Send a message to another user
router.post('/api/messages', authMiddleware, async (req, res) => {
  try {
    const message = new Message(req.body);
    const savedMessage = await message.save();
    res.json(savedMessage);
  } catch (error) {
    res.status(400).json({ error: 'Failed to send message' });
  }
});

// Get details of a specific message thread
router.get('/api/messages/:id', authMiddleware, async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [
        { sender: req.user._id, receiver: req.params.id },
        { sender: req.params.id, receiver: req.user._id },
      ],
    }).sort({ timestamp: 1});

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

module.exports = router;
