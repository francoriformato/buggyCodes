const router = require('express').Router()
//importing middleware
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureGuest ,(req, res) => {
    res.render('login')
  })

router.get("/log",ensureAuth, async(req,res)=>{
    res.render('index',{userinfo:req.user})
})

router.get("/profile",ensureAuth, async(req, res) => {
  res.render("profile",{userinfo:req.user})
});

router.get("/about",ensureAuth, async(req, res) => {
  res.render("about",{userinfo:req.user})
});

router.get("/news",ensureAuth, async(req, res) => {
  res.render("news",{userinfo:req.user})
});
module.exports=router;