const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Washer = require('../models/Washer')
const Car = require('../models/Car')



//GET methods
router.get('/listcars', async (req, res)=> {

    try {
        let registeredCars = await Car.find()
        console.log(registeredCars)        
        res.render('display_cars', {title:'Registered Cars- Zawash', carlist: registeredCars})
    }
    catch (err) {
        console.log(err)
        res.send('Sorry, Car details not available')
    }
})

//GET methods
router.get('/listwashers', async (req, res)=> {

    try {
        let registeredWashers = await Washer.find()
        console.log(registeredWashers)        
        res.render('display_washers', {title:'Registered Washers - Zawash', kanabelist: registeredWashers})
    }
    catch (err) {
        console.log(err)
        res.send('Sorry, Washer details not available')
    }
})

module.exports = router
