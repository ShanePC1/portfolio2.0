// src/routes/routes.js

const express = require('express');
const router = express.Router();

// Home Page
router.get('/', (req, res) => {
  res.render('home');
});

// Sample photos data (replace this with your actual data source)
const photos = [
  { imageUrl: '/images/photo1.jpg', description: 'Description 1' },
  { imageUrl: '/images/c4s.jpg', description: 'Description 2' },
  // Add more photos as needed
];


// Grid Page Route Handler
router.get('/grid', (req, res) => {
  res.render('grid', { photos });
});


// Contact Page (Placeholder route)
router.get('/contact', (req, res) => {
  res.send('Contact Page'); // Placeholder message, replace with actual contact content
});

module.exports = router;
