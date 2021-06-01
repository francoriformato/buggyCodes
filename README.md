# buggyCodes
#### A new way to learn programming through bugs

buggyCodes is a project developed for a modern Web Technologies course, attended at University of Naples "Parthenope". A demo of the project and a video has been presented at the Hackathon "Gamification in Programming Education".

Video shown at the Hackathon: <a href="https://www.youtube.com/watch?v=4chRgkImtuY&ab_channel=FrancoRiformato"> Introducing buggyCodes </a>

Live demo: <a href="https://buggycodes.games/"> buggyCodes </a>

# Features
The main features meaningful for the Web Technologies course developed for buggyCodes are:

*Client-Side*
- **Responsiveness**, to provide usability between desktop and mobile devices, archived with Bootstrap;
- **Installability**, so it's required that the project is actually a **PWA**, installable on smartphones and PCs, archived with a service worker and a manifest;
- Usage of the **AJAX** methodology (with **jQuery**, to have an API that can work on most browsers), to load data dynamically on a page without having to reload the page again;

*Server Side*
- **Hosted** on a DigitalOcean Droplet with Ubuntu 20.04 LTS;
- **Domain provider**: name.com, with DigitalOcean's DNS;
- **SSL Certificate**: Lets Encrypt
- **Web server**: nginx, that acts also as a reverse proxy to forward the traffic to nodeJS;
- Actual application's **routes** managed through nodeJS & Express, with EJS as the rendering engine;
- **noSQL database**: mongoDB Atlas;

Here is a diagram of the overall structure of the application:
<a href="https://imgur.com/zffETFE">buggyCodes diagram</a>


### Elements Explanation
----
> Why a DigitalOcean Droplet?

A droplet provide great flexibility and it's fast to deploy. Thanks to GitHub for Students, with 100$ of credits on DigitalOcean, I had the opportunity to use this technology and to quickly test my website. To easily upload changes to the droplet, I used ssh to log into it.

> Why an SSL certificate is required?

An SSL certificate is required to provide https traffic in my website. HTTPS is also needed to better suffice to the requisites of a PWA.

> What package are used in nodeJS?

In *server.js*, it's required to have Express, Mongoose, Passport, bodyParser.
Express is a lightweight framework to provide multiple utilities. In particular, Router is really useful to create custom user's routes.
Mongoose is used to establish a connection to my mongoDB Atlas Cluster.
Passport is required to implement the Google Strategy for Log-In.
bodyParser is useful to parse incoming request bodies and to use the req.body property (to read the result of forms, such as the ones found in the Profile Page).

> What is used to login to buggyCodes?

Actually, everyone can login securely to buggyCodes without having to worry about their personal data being leaked. buggyCodes use the Google Sign-In to let you access its content.
To archieve this purpose, I used Passport.JS with the Google Strategy. To improve security, my personal mongoDB URI, google.ClientID & google.ClientSecret are stored in an external file: keys.js.

> What is stored on mongoDB Atlas?

On mongoDB, there are the main user informations required to provide the main functionality of the web app.
In particular, we can see the User model here.
File: *models/User.js*
```javascript
const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  email:{
  type:String,
  required: true,
  },
  createdAt: {
   type: Date,
   default: Date.now,
  },
  motto:{
   type:String,
   default:'The greatest programmer',
    },
    country:{
   type:String,
   default: 'USA',
    },
    level:{
   type:Number,
   default: '1',
    },
    onlineAvatar:{
   type:String,
   default: 'av1',
    },
})

```

The default values are actually used to not have empty fields when creating a new user through Google Sign-In.

#### Routes
> Index.JS

Here we have routes to render the login page, the index page, the profile page, the about page and the news page. Every page rendered through EJS.
In particular, every page receives parameters to know the userinfo.
While the login page receives ensureGuest, the other routes receive ensureAuth, to be sure that the user can't access the pages of the application without being logged in.

> Auth.JS

This file contains routes that connects to Passport to successfully redirect to the Dashboard page.
It also manages the Log-out of the user.

Auth.JS is also a middleware, in particular to define ensureAuth and ensureGuest.
ensureAuth is a function that acknowledge if the user is authenticated.

> OptionalsRoute.JS

In this file, we have the actual usage of bodyParser to retrieve informations from the forms in the Profile Page.

Here I defined /add/motto that is linked to a button in the Profile Page. This route establish a connection to mongoDB to update the motto of the user (typed in the form in the profile page) in the DB. The old motto is shown in the placeholder of the form.
Here is the query used to archive this purpose:


     const bodyCall = req.body;
     await User_model.findOneAndUpdate(
	{ email: req.user.email },
	{ motto: bodyCall.motto },
	{ new: true }
				     											  );

The same has been done for /add/country, to let the user type its Country in the form and register it to mongoDB.
There is not a Country selector because it's open the possibility to write down fantasy countries in your profile.

/add/level is a route used for testing purpose.
In particular, is used to raise by 1 the userLevel.
This is required to test the AJAX functionalities of the profile page, that "unlocks" some avatars only when the user reach an established level in game.

/add/randomMotto is a funny route used to show a random motto from another user in the Profile Page.
This routes has two mongoDB queries. The one is used to select a random motto not equal ($ne) to the current user one, while the second is used to update buddyMotto to show it on the Profile Page. 
```
var query = await User_model.aggregate([
{ "$match": { "User_model.motto": { $ne: req.user.motto } } },
{ "$sample": { "size": 1 } },
{ $project: { "motto": 1,  _id: 0 } } ]).exec()

var randomStringified = JSON.stringify(query);

await User_model.findOneAndUpdate(
{ email: req.user.email },
{ buddyMotto: randomStringified },
{ new: true }
);
```

/avatar is a route to update the user avatar.
This route get the avatarID (avid) from the avatars button in the Profile Page. Actually, I didn't wrote a route for every avatar but I used the query params provided by Express.
The call to this routes are:
"/avatar?avid=av1", "/avatar?avid=av2", ecc..
Thanks to those calls, it's possible to have a single route that manages every avatar change.
There is also a mongoDB query to update the user avatar that looks like this:
```
	const avid = req.query.avid;

	await User_model.findOneAndUpdate(
	{ email: req.user.email },
	{ onlineAvatar: avid },
	{ new: true }
																 );
```

### AJAX Methodology

Some AJAX functionality implemented are:
- In index.ejs:
	```
    $(document).ready(function(){  
    $("#exercisesRow").load("ajax_exercises.txt");
    $("#overview").load("ajax_sentiment.txt");
	});
	```
This is required to load the exercises from a custom txt file, to have a way more easy updatability. It also load the sentiment.txt, that is a file that has an adjective to evaluate the current week of the user.
For example if he did a lot of exercises, he will have "You're doing great!", while if he didn't, he will receive "You can do better than this!".

### PWA functionalities

To archieve the purpose of having an installable web app, I used a service worker and a manifest files.

> service-worker.JS

The service worker caches the static content of the website, that will be available also offline, triggers the install event (to provoke an installation on the device in which the site is visited), an event to clean the outdated caches and a fetch event to retrieve the cache when required.

> manifest.JSON

The manifest file has the basic app information, like the name, the orientation of the display used in some devices, the theme color, the description of the PWA.
The collection of the favicons (stored in the folder "favicons") is loaded by site.webmanifest, generated by <a href="https://www.favicon-generator.org/"> Favicon Generator </a>.

For iOS, there are custom made splash screens in the folder "iOS_splashscreens".

