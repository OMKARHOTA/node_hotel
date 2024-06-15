const express = require('express');
const router = express.Router();
const Menu = require('../models/menu');

// Create a new menu item
router.post('/menu', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new Menu(data);
        const response = await newMenu.save();
        console.log('Data saved');
        res.status(200).json(response);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while saving the menu item' });
    }
});

// Get all menu items
router.get('/menu', async (req, res) => {
    try {
        const data = await Menu.find();
        console.log('Data fetched');
        res.status(200).json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while fetching the menu items' });
    }
});

// Get menu items by taste (sweet, spicy, sour)
router.get('/menu/:taste', async (req, res) => {
    try {
        const taste = req.params.taste;
        if (['sweet', 'spicy', 'sour'].includes(taste)) {
            const response = await Menu.find({ taste });
            console.log('Response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'Invalid taste value' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while fetching the menu items' });
    }
});

module.exports = router;