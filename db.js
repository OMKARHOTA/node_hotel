const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

// Determine which MongoDB URL to use
const isProduction = process.env.NODE_ENV === 'production';
const mongoURL = isProduction ? process.env.MONGODB_URL : process.env.LOCAL_URL;

if (!mongoURL) {
    console.error('Error: MongoDB URL is not defined in the environment variables.');
    process.exit(1);
}

// Setup connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get the default connection
const db = mongoose.connection;

// Define event types
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



