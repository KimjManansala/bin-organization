const express = require("express");
const router = express.Router();
const db = require("../models");
const validator = require("email-validator");

const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// Handle bars
const handleBars = require('handlebars')


const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = router;


router.get('/signup', (req, res)=>{
    res.render('signup')
})

router.post('/signup', (req,res)=>{
    console.log(req.body)

    // Saving user input into userInfo
    let userInfo = {
        email : req.body.username,
        password : req.body.password,
        firstName: req.body.firstname,
        lastName: req.body.lastname
    }

    console.log('This is the userInfo', userInfo)
    
})