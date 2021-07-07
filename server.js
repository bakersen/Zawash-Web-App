// Import Dependencies
const express = require('express')
const app = express()
const path = require('path')

// Require Routes
const homeRoutes = require('./routes/loginRoutes')

// Pug Configuration
app.set('view engine', 'pug')
app.set('views', './views')

//Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/', homeRoutes);



//If a Route doesnt exist
app.get('*', (req, res) => {
  res.send('Invalid url or Reource not found')
})


//Server Listening
app.listen(3000, ()=> {
    console.log('Listening on port 3000');
})
