// Import Dependencies
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.render('dashboard', {title:'Dashboard - Zawash'})
})

router.get('/register', (req, res)=> {
    res.render('register', {title:'Dashboard - Car | Register'})
})

router.post('/register/car', (req, res)=> {
    console.log(req.body)
    res.send('Data sent successfully')
})

router.post('/register/washer', (req, res)=> {
    console.log(req.body)
    res.send('Washer data sent successfully')
})


module.exports = router