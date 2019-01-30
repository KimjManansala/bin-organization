const express = require("express");
const router = express.Router();
const db = require("../models");

const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);





router.get('/', (req,res)=>{
    res.render('home')
})

router.get("/dashboard", (req,res)=>{
    res.render('dashboard')
})



module.exports = router;