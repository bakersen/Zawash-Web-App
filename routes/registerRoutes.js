// Import Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Washer = require('../models/Washer')
const Car = require('../models/Car')

//GET methods

router.get('/', async (req, res)=> {

    try {
        let washerlist = await Washer.find()
        console.log(washerlist)     
        res.render('register', {
        washers: washerlist,
        title:'Dashboard Registration'
    })
    }

    catch (err) {
        res.status(400).render('failed')
        console.log(err)
    }
   
});

router.get('/car', (req, res)=> {
    res.render('register', {title:'Car Registration Succeded'})
})

router.get('/washer', (req, res)=> {
    res.render('register_washer', {title:'Registration Succeded'})
})

router.get('/failed', (req, res)=> {
    res.render('failed', {title:'Registration Failed'})
})


//POST Methods & Database

//Register washer
router.post('/washer', async(req, res)=> {
    try {
        const washer = new Washer(req.body)
        await washer.save()
        res.redirect('washer')
        console.log(req.body)
    }
    catch (err) {
        res.status(400).render('failed')
        console.log(err)
    }
})

//Register Car

router.post('/car', async(req, res)=> {
    try {
         //Combine time and Date      
        // let data = req.body
        // let datetimeArrival = Date.parse(data.doa + 'T' + data.toa)
        // data.datetimeArrival = datetimeArrival

        const car = new Car(req.body)
        await car.save()
        res.redirect('car')
        console.log(req.body)
    }
    catch (err) {
        res.status(400).render('failed')
        console.log(err)
    }
})

module.exports = router