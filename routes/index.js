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
