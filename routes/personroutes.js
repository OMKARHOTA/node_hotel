const express = require('express');
const router = express.Router();
const Person = require('../models/person');
const { get } = require('lodash');

// Create a new person
router.post('/person', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('Person saved:', response);
        res.status(200).json(response);
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ error: 'Email already exists' });
        } else {
            console.error('Error saving person:', error.message);
            res.status(500).json({ error: 'An error occurred while saving the person' });
        }
    }
});

// Get all persons
router.get('/person', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('Data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get persons by work type
router.get('/person/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (['chef', 'waiter', 'manager'].includes(workType)) {
            const response = await Person.find({ work: workType });
            console.log('Response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'Invalid work type value' });
        }
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'An error occurred while fetching the persons' });
    }
});
router.put('/:id',async(req, res) => {
    try{
        const personId=req.params.id;//extract the id from the URL parameters
        const updatedPersonData=req.body;


        const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
                 new:true,
                 runValidators:true,
        })
        if(!updatedPerson)
            {
                return res.status(404).json({
                    error: 'Person not found'
                })
            }
        console.log('data updated'); 
        res.status(200).json(response);

    }catch(err)
    {
        console.error('Error:', err);
        res.status(500).json({ error: 'An error occurred while fetching the persons' });
    }
    })

module.exports = router;
