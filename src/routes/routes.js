// src/routes/routes.js

const express = require('express');
const router = express.Router();


// Home Page
router.get('/', (req, res) => {
    res.render('home', { recPhotos });
});


// Sample photos data (replace this with your actual data source)
const japanPhotos = [
    { imageUrl: '/images/_DSC0104.jpg', description: 'JDM Oddessey' },
    { imageUrl: '/images/_DSC0815.jpg', description: 'Japan VW Bus' },
    { imageUrl: '/images/_DSC0569.jpg', description: 'Japan' },
    { imageUrl: '/images/_DSC0489-2.jpg', description: 'Japan' },
    { imageUrl: '/images/_DSC0430.jpg', description: 'Japan' },
    { imageUrl: '/images/_DSC0408.jpg', description: 'Japan' },
    { imageUrl: '/images/_DSC0386.jpg', description: 'Japan' },
    { imageUrl: '/images/_DSC0334.jpg', description: '' },
    { imageUrl: '/images/_DSC0311.jpg', description: '' },
    { imageUrl: '/images/_DSC0307.jpg', description: 'Japan' },
    { imageUrl: '/images/_DSC0246-2.jpg', description: '' },
    { imageUrl: '/images/_DSC0225-2.jpg', description: '' },
    { imageUrl: '/images/_DSC0210.jpg', description: 'Hiroshima Japan, The Flame of Peace, a feature of the pond in Peace Memorial Park, will be extinguished only once every nuclear weapon on earth has been destroyed.' },
    { imageUrl: '/images/_DSC0203.jpg', description: '' },
    { imageUrl: '/images/_DSC0155-Pano.jpg', description: '' },
    { imageUrl: '/images/_DSC0102.jpg', description: '' },
    { imageUrl: '/images/_DSC0100.jpg', description: '' },
    { imageUrl: '/images/_DSC0096.jpg', description: '' },
    { imageUrl: '/images/_DSC0092.jpg', description: '' },
    { imageUrl: '/images/_DSC0087.jpg', description: '' },
    { imageUrl: '/images/_DSC0086.jpg', description: 'Japan' },
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
const recPhotos = japanPhotos.slice(-3);

const genCarPhotos = [
    { imageUrl: '/images/JSO_1764.jpg', description: 'AudiRS6,S200,cars' },
    { imageUrl: '/images/JSO_1983.jpg', description: 'S200,cars' },
    { imageUrl: '/images/JSO_2235.jpg', description: 'FocusSt,cars' },
]

const portfolioPhotos = [
    { imageUrl: '/images/JSO_4730.jpg', description: 'drift' },
    { imageUrl: '/images/_DSC0489-2.jpg', description: 'japan' },
    { imageUrl: '/images/JSO_1764.jpg', description: 'cars' },
    { imageUrl: '/images/photo1.jpg', description: 'thisIsai' },
];

const driftPhotos = [
    { imageUrl: '/images/JSO_4774.jpg', description: 'drift,s14' },
    { imageUrl: '/images/JSO_4730.jpg', description: 'drift,mk5supra' },
    { imageUrl: '/images/JSO_4598.jpg', description: 'drift,ferrari' },

];

const aiCon = [
    { imageUrl: '/images/photo1.jpg', description: 'Description 1' },
    { imageUrl: '/images/c4s.jpg', description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },

]

// Grid Page Route Handler
router.get('/grid', (req, res) => {
    res.render('grid', { portfolioPhotos });
});

//I think these could be handled in the same way the navbar is each just filled with new content but sharing the layou
router.get('/grid/japan', (req, res) => {
    res.render('japan', { photoList: japanPhotos });
});
router.get('/grid/surfing', (req, res) => {
    res.render('surf', { photoList: surfPhotos });
});
router.get('/grid/aiContent', (req, res) => {
    res.render('aiPage', { photoList: aiCon });
});
router.get('/grid/cars', (req, res) => { //what is this one?
    res.render('cars', { photoList: photos });
});
router.get('/grid/cars/drifting', (req, res) => {
    res.render('drift', { photoList: driftPhotos });
});
//everything else
router.get('/grid/cars/all', (req, res) => {
    res.render('allCars', { photoList: genCarPhotos });
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