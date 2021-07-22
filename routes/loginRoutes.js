// Import Dependencies
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.render('login', {title:'Login to your Zawash Dashboard'})
})

router.post('/dashboard', (req, res)=> {
     res.render('dashboard', {title:'Dashboard - Zawash'})
})


module.exports = router

