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

router.get("/", (req, res) => {
  res.render("home", { title: "bin" });
});

router.get("/dashboard", (req, res) => {
  if (req.session.user) {
    res.render("dashboard", { title: "dashboard" });
  } else {
    res.redirect("/");
  }
});

module.exports = router;
