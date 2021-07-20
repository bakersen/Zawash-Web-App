// Import Dependencies
const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
const mongoose = require('mongoose')

//mongodb connection & set up
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
});


// Require Routes
const homeRoutes = require('./routes/loginRoutes')
const dashboardRoutes = require('./routes/dashboardRoutes')
const Washer = require('./models/Washer')

// Pug Configuration
app.set('view engine', 'pug')
app.set('views', './views')


//Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/', homeRoutes);
app.use('/dashboard', dashboardRoutes);




//If a Route doesnt exist
app.get('*', (req, res) => {
  res.send('Invalid url or Reource not found')
})


//Server Listening
app.listen(3000, ()=> {
    console.log('Listening on port 3000');
})
