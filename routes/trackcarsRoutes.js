const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Washer = require('../models/Washer')
const Car = require('../models/Car')



//GET methods
router.get('/', async (req, res)=> {

    try {
        let registeredCars = await Car.find();
        
        res.render('track_cars', {title:'Track Cars- Zawash', carlist: registeredCars})
    }
    catch (err) {
        console.log(err)
        res.send('Sorry, Car details not available')
    }
})

module.exports = router
