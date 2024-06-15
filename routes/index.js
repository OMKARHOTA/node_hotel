const express = require('express');
const router = express.Router();
const personRoutes = require('./personroutes');
const hotelMenuRoutes = require('./HotelMenu');

router.use(personRoutes);
router.use(hotelMenuRoutes);

module.exports = router;
