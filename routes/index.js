const router = require('express').Router()


//importing middleware
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureGuest ,(req, res) => {
    res.render('login')
  })


router.get("/about",ensureAuth, async(req, res) => {
  res.render("about",{userinfo:req.user})
});

router.get("/news",ensureAuth, async(req, res) => {
  res.render("news",{userinfo:req.user})
});


module.exports=router;