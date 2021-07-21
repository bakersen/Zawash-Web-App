// Import Dependencies
const express = require('express');
const router = express.Router();


//GET methods
router.get('/', (req, res)=> {
    res.render('dashboard', {title:'Home - Zawash'})
})



module.exports = router