const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const connectMongo = require('connect-mongo'); // changed from Leons wersion
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const axios = require('axios');
const apiRoutes = require('./routes/api');
require('dotenv').config({path: './config/.env'})

// Passport config

// require('./config/passport')(passport) i commented this line since the passport is currently empty

connectDB()

app.set()
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))

// Sessions
app.use(
  session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: connectMongo.create({ mongoUrl: process.env.DB_STRING })
  })
);
app.use('./routes/api')


// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.listen(process.env.PORT, ()=>{
  console.log(`Server is running on a port ${process.env.PORT}, you better catch it!`)
})  
