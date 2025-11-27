const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

// Index route
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Mini Message Board',
    messages: messages,
  });
});

// New message form
router.get('/new', (req, res) => {
  res.render('form', { title: 'New Message' });
});

// Handle post form
router.post('/new', (req, res) => {
  const messageUser = req.body.messageUser;
  const messageText = req.body.messageText;

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
  });

  res.redirect('/');
});

// Message details page
router.get('/message/:id', (req, res) => {
  const message = messages[req.params.id];
  if (!message) return res.send('Message not found.');

  res.render('message', { title: 'Message Details', message });
});
