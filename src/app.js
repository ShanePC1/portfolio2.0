// src/app.js

const express = require('express');
const path = require('path');
const routes = require('./routes/routes');

const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));


// Use the routes defined in routes.js
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
