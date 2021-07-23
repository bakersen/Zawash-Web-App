// Import Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Washer = require('../models/Washer')
const Car = require('../models/Car')

washPackages = {
    smallcars: { washerFee: 3000, packagePrice: 10000 },
    medium: { washerFee: 4000, packagePrice: 15000 },
    fullwash: { washerFee: 5000, packagePrice: 20000 },
    bodaboda: { washerFee: 1500, packagePrice: 5000 },
    engine: { washerFee: 2000, packagePrice: 10000 }
}


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
    res.render('car_success', {title:'Car Registration Succeded'})
})

router.get('/washer', (req, res)=> {
    res.render('washer_success', {title:'Registration Succeded'})
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
        // Combine time and Date      
        let data = req.body
        let datetimeArrival = Date.parse(data.doa + 'T' + data.toa)
        data.datetimeArrival = datetimeArrival

        let packageDetails = washPackages[data.package]
        data.packagePrice = packageDetails['packagePrice']
        data.washerFee = packageDetails['washerFee']

        const car = new Car(data)
        await car.save()
        res.redirect('car')
    }
    catch (err) {
        res.status(400).render('failed')
        console.log(err)
    }
})

module.exports = router