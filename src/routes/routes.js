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
   { imageUrl: '/images/photo1.jpg', description: 'Description 1' },
  { imageUrl: '/images/c4s.jpg', description: 'Description 2' },
   { imageUrl: '/images/photo1.jpg', description: 'Description 1' },
  { imageUrl: '/images/c4s.jpg', description: 'Description 2' },
   { imageUrl: '/images/photo1.jpg', description: 'Description 1' },
  { imageUrl: '/images/c4s.jpg', description: 'Description 2' },
   { imageUrl: '/images/photo1.jpg', description: 'Description 1' },
  { imageUrl: '/images/c4s.jpg', description: 'Description 2' },
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


// const express = require('express');
// const router = express.Router();
// const fs = require('fs');
// const path = require('path');

// // Home Page
// router.get('/', (req, res) => {
//   res.render('home');
// });

// // Grid Page Route Handler
// router.get('/grid', (req, res) => {


//   const imageDirectory = path.join(__dirname, '../public/images'); // Assuming your images are stored in the 'public/images' directory
//   fs.readdir(imageDirectory, (err, files) => {
//     if (err) {
//       console.error('Error reading image directory:', err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       const photos = files.map(file => {
//         return {
//           imageUrl: '/images/' + file, // Assuming images are served from the '/images' route
//           description: 'Description for ' + file // You can customize the description as needed
//         };
//       });
//       res.render('grid', { photos });
//     }
//   });
// });

// // Contact Page (Placeholder route)
// router.get('/contact', (req, res) => {
//   res.send('Contact Page'); // Placeholder message, replace with actual contact content
// });

// module.exports = router;
