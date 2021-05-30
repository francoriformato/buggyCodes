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

router.post('/add/country', urlencodedParser, async (req, res)=>{
    
     const countryCall = req.body;

     await User_model.findOneAndUpdate(
	{ email: req.user.email },
	{ country: countryCall.country },
	{ new: true }
);

    console.log(req.body);
    res.redirect('/profile')
})


router.get('/add/level', urlencodedParser, async (req, res)=>{
    
     var userLevel = req.user.level;
     userLevel = (userLevel+1);

     await User_model.findOneAndUpdate(
	{ email: req.user.email },
	{ level: userLevel },
	{ new: true }
);

    console.log(req.user.level);
    res.redirect('/profile')
})

router.get('/add/randomMotto', urlencodedParser, async (req, res)=>{

 	var query = 		await User_model.aggregate([
    					{ "$match": { "User_model.motto": { $ne: req.user.motto } } },
   					{ "$sample": { "size": 1 } },
					{ $project: { "motto": 1,  _id: 0 } }
				  ]).exec()

	console.log(query);

	var randomStringified = JSON.stringify(query);
	randomStringified = randomStringified.substr(11,randomStringified.length-3);
	
	await User_model.findOneAndUpdate(
	{ email: req.user.email },
	{ buddyMotto: randomStringified },
	{ new: true }
					 );

	console.log(req.user.buddyMotto);

    	res.redirect('/profile');
})



module.exports=router;