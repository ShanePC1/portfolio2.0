// src/routes/routes.js

const express = require('express');
const router = express.Router();


// Home Page
router.get('/', (req, res) => {
  res.render('home', { recPhotos });
});


// Sample photos data (replace this with your actual data source)
const photos = [
  { imageUrl: '/images/photo1.jpg', description: 'Description 1' },
  { imageUrl: '/images/c4s.jpg', description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
   { imageUrl: '/images/_DSC0104.jpg', description: 'JDM Oddessey' },
   { imageUrl: '/images/_DSC0815.jpg', description: 'Japan VW Bus' },
   { imageUrl: '/images/_DSC0569.jpg', description: '' },
   { imageUrl: '/images/_DSC0489-2.jpg', description: '' },
   { imageUrl: '/images/_DSC0430.jpg', description: '' },
   { imageUrl: '/images/_DSC0408.jpg', description: '' },
   { imageUrl: '/images/_DSC0386.jpg', description: '' },
   { imageUrl: '/images/_DSC0334.jpg', description: '' },
   { imageUrl: '/images/_DSC0311.jpg', description: '' },
   { imageUrl: '/images/_DSC0307.jpg', description: '' },
   { imageUrl: '/images/_DSC0246-2.jpg', description: '' },
   { imageUrl: '/images/_DSC0225-2.jpg', description: '' },
   { imageUrl: '/images/_DSC0210.jpg', description: '' },
   { imageUrl: '/images/_DSC0203.jpg', description: '' },
   { imageUrl: '/images/_DSC0155-Pano.jpg', description: '' },
   { imageUrl: '/images/_DSC0102.jpg', description: '' },
   { imageUrl: '/images/_DSC0100.jpg', description: '' },
   { imageUrl: '/images/_DSC0096.jpg', description: '' },
   { imageUrl: '/images/_DSC0092.jpg', description: '' },
   { imageUrl: '/images/_DSC0087.jpg', description: '' },
   { imageUrl: '/images/_DSC0086.jpg', description: '' },
   { imageUrl: '/images/_DSC0084.jpg', description: '' },
   { imageUrl: '/images/_DSC0079.jpg', description: '' },
   { imageUrl: '/images/_DSC0078.jpg', description: '' },
   { imageUrl: '/images/_DSC0071.jpg', description: '' },
   { imageUrl: '/images/_DSC0070.jpg', description: '' },
   { imageUrl: '/images/_DSC0069-2.jpg', description: '' },
   { imageUrl: '/images/_DSC0067.jpg', description: '' },
   { imageUrl: '/images/_DSC0064.jpg', description: '' },
   { imageUrl: '/images/_DSC0063.jpg', description: '' },
   { imageUrl: '/images/_DSC0056-2.jpg', description: '' },
   { imageUrl: '/images/_DSC0054.jpg', description: '' },
];
const recPhotos = photos.slice(-3);

// Grid Page Route Handler
router.get('/grid', (req, res) => {
  res.render('grid', { photos });
});


// Contact Page (Placeholder route)
router.get('/contact', (req, res) => {
  res.render('contact'); // Placeholder message, replace with actual contact content
});


// Blog Page
router.get('/blog', (req, res) => {
  res.render('blogHome', { recPhotos });
});
module.exports = router;


