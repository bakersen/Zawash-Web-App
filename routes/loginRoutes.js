// Import Dependencies
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.render('login', {title:'Login to your Zawash Dashboard'})
})

router.post('/dasboard', (req, res)=> {
    // res.render('dashboard', {title:'Dashboard - Zawash'})
    res.send('Dashboard route working')
})



module.exports = router

