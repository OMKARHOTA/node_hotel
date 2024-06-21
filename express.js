const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./db'); // Ensure correct path to your MongoDB connection setup
const routes = require('./routes');
require('dotenv').config();

const app = express();

// Middleware

app.use(bodyParser.json());
app.get('/',(req,res)=>
{
 res.sendFile(('welcome to our hotel'));
})
// Routes
app.use(routes);

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
