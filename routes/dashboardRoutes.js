// Import Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Washer = require('../models/Washer')

//GET methods
router.get('/', (req, res)=> {
    res.render('dashboard', {title:'Dashboard - Zawash'})
})

router.get('/register', (req, res)=> {
    res.render('register', {title:'Dashboard - Car | Register'})
})


//POST Methods & Database

router.post('/register/car', (req, res)=> {
    console.log(req.body)
    res.send('Data sent successfully')
})

router.post('/register/washer', (req, res)=> {
    console.log(req.body)

    const washer = new Washer(req.body)
    washer.save()
        .then(()=>{
            res.send('Thank you for regsitering washer')
        })
        .catch((err)=>{
            console.log(err)
            res.send('Sorry something went wrong!')
        })   
})


module.exports = router