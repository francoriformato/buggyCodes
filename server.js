require('dotenv').config();
const express = require('express');
const mongoose=require('mongoose');
const keys = require('./config/keys.js');
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')

require('./config/passport')(passport)

var app=express();
const PORT = 3000;

mongoose.connect(keys.mongodb.dbURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
app.use(express.static('public'))
app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}))
app.use(
    session({
      secret: 'itssecretsoshhh',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
	mongoUrl: keys.mongodb.dbURI,
    })
}))

  // Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(require("./routes/index"))
app.use('/auth', require('./routes/auth'))

app.listen(PORT,console.log(`listening at ${PORT}`))