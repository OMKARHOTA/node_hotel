const mongoose = require('mongoose');
require('dotenv').config();
const mongoURL = process.env.MONGODB_URL

// Setup connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get the default connection
const db = mongoose.connection;

// Define event Types   
db.on('connected', () => {
    console.log('Mongoose connected');
});
db.on('error', (err) => {
    console.error('Mongoose connection error: ' + err);
});
db.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

// Handle process termination
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('Mongoose connection disconnected due to app termination');
    process.exit(0);
});

module.exports = db;


