const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db'); // Ensure correct path to your MongoDB connection setup
const routes = require('./routes');
require('dotenv').config();
const passport = require('./auth');
const app = express();
app.use(bodyParser.json());

// Passport configuration
const logRequest=(req,res,next)=>
    {
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next();
    }
    app.use(logRequest);

app.use(passport.initialize());

app.get('/', passport.authenticate('local', { session: false }), (req, res) => {
    res.sendFile(path.join(__dirname, 'welcome.html')); // Provide the absolute path
});

app.get('/',(req,res)=>
{
    res.send('welcome to our hotel');
})
app.use(routes);

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
