const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./db'); // Ensure correct path to your MongoDB connection setup
const routes = require('./routes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use(routes);

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
