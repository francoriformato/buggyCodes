const router=require('express').Router()
var express    = require('express')
var bodyParser = require('body-parser');
const User_model=require('../models/User')
var devquote = require('devquote');
var nicejob = require('nicejob');
const { ensureAuth, ensureGuest } = require('../middleware/auth')
var Filter = require('bad-words'),
	filter = new Filter();

var app = express()
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get("/log",ensureAuth, async(req,res)=>{
    var quote = devquote();
    var howIsGoing;


    var userDate = req.user.createdAt;
    let ts = Date.now();
    let date_ob = new Date(ts);
    let todayDate = date_ob.getDate();
    
  
    var rankSearch = await User_model.aggregate([
				{ $sort : { level: -1 } },
				{ $project: { "level": 1,  "email" : 1, "firstName" : 1, "onlineAvatar" : 1, _id: 1 } }
			       ]);


    if (userDate.getDate() == todayDate && req.user.ExercisesDone == 0) {
	howIsGoing = "You just registered today and didn't do any exercise.. Move on!";
    }

    if (userDate.getDate() == todayDate && req.user.ExercisesDone > 0) {
	howIsGoing = "You just registered today.. Anyway.. " + nicejob();
    }

    if (userDate.getDate() != todayDate && req.user.ExercisesDone == 0) {
	howIsGoing = nicejob.not();
    }

    if (userDate.getDate() != todayDate && req.user.ExercisesDone > 0) {
	howIsGoing = nicejob();
    }

    res.render('index',{userinfo:req.user, quoteMessage: quote.text, quoteAuthor: quote.author, onlineRanking: rankSearch, sentiment: howIsGoing})
})


router.get("/profile",ensureAuth, async(req, res) => {

   	var query = await User_model.aggregate([
    					{ "$match": { "User_model.motto": { $ne: req.user.motto } } },
   					{ "$sample": { "size": 1 } },
					{ $project: { "motto": 1,  _id: 0 } }
				  ]).exec()

	var randomStringified = JSON.stringify(query);
	var editedMotto = randomStringified.slice(11, -3);
 
        res.render("profile",{userinfo:req.user, randomMotto: editedMotto})
});


router.post('/add/motto', urlencodedParser, async (req, res)=>{
    
     const bodyCall = req.body;
     	
     await User_model.findOneAndUpdate(
	{ email: req.user.email },
	{ motto: filter.clean(bodyCall.motto) },
	{ new: true }
				       );

    res.redirect('/profile')
})

router.post('/add/country', urlencodedParser, async (req, res)=>{
    
     const countryCall = req.body;

     await User_model.findOneAndUpdate(
	{ email: req.user.email },
	{ country: filter.clean(countryCall.country) },
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

    	res.redirect('/profile');
})


router.get('/avatar', async function (req, res) {
	const avid = req.query.avid;
	console.log(avid);

	await User_model.findOneAndUpdate(
	{ email: req.user.email },
	{ onlineAvatar: avid },
	{ new: true }
					 );

	res.redirect('/profile');
});





router.get('/add/stats', async function (req, res) {
	const statistic = req.query.statistic;
	console.log(statistic);

	if (statistic == "exercises") {
	
	await User_model.findOneAndUpdate(
	{ email: req.user.email },
	{ ExercisesDone: (req.user.ExercisesDone + 1) },
	{ new: true }
					 );
	
	}

	
	if (statistic == "logic") {
	
	await User_model.findOneAndUpdate(
	{ email: req.user.email },
	{ ProgrammingLogic: (req.user.ProgrammingLogic + 1) },
	{ new: true }
					 );
	
	}


	if (statistic == "speed") {
	
	await User_model.findOneAndUpdate(
	{ email: req.user.email },
	{ Speed: (req.user.Speed + 1) },
	{ new: true }
					 );
	
	}

	if (statistic == "creativity") {
	
	await User_model.findOneAndUpdate(
	{ email: req.user.email },
	{ Creativity: (req.user.Creativity + 1) },
	{ new: true }
					 );
	
	}
	
	res.redirect('/log');
});


module.exports=router;