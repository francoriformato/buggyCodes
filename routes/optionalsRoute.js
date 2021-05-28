const router=require('express').Router()
var express    = require('express')
var bodyParser = require('body-parser');
const User_model=require('../models/User')


var app = express()
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/add/motto', urlencodedParser, async (req, res)=>{
    
     const bodyCall = req.body;

     await User_model.findOneAndUpdate(
	{ email: req.user.email },
	{ motto: bodyCall.motto },
	{ new: true }
);

    console.log(req.body);
    res.redirect('/profile')
})




module.exports=router;