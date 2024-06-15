const express = require('express');
const app = express();
const db = require('./db');

app.get('/', function (req, res) {
    res.send('Welcome bro');
});

const PORT = process.env.PORT || 3001; // Changed to 3001 or any other port you prefer
app.listen(PORT, function () {
    console.log(`Server is listening on port ${PORT}`);
});