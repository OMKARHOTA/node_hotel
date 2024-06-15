const mongoose = require('mongoose');

const mongoURl = 'mongodb://localhost:27017/hotels';

// Setup connection
mongoose.connect(mongoURl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get the default connection
const db = mongoose.connection; 

// Define event listeners
db.on('connected', () => {
    console.log('Mongoose connected to ' + mongoURl);
});
db.on('error', (err) => {
    console.log('Mongoose connection error: ' + err);
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