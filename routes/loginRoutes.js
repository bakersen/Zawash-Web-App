// Import Dependencies
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.render('login', {title:'Zawash Login'})
})

module.exports = router

