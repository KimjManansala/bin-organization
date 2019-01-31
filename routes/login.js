const express = require("express");
const router = express.Router();
const db = require("../models");

const bcrypt = require("bcrypt");

const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);

router.post("/login", (req, res) => {
  let username = req.body.email;
  let password = req.body.password;
  let checks = checkInput(username, password);
  if (checks.continue) {
    db.user
      .findOne({
        where: { username: username }
      })
      .then(user => {
        console.log(user)
        if (user) {
          bcrypt.compare(password, user.dataValues.password, (err, check) => {
            console.log("This is check", check);
            if (err) {
              res.render("home", {
                error: {
                  message: err
                }
              });
            } else if (check) {
              let session = req.session;
              session.user = user.dataValues;
              console.log("This is session", req.session);
              res.redirect("/dashboard");
            } else if (!check) {
              res.render("home", {
                title: "bin",
                error: {
                  message: "Wrong password"
                }
              });
            }
          });
        } else {
          res.render("home", {
            title: "bin",
            error: {
              message: "Emailis not register"
            }
          });
        }
      });
  } else {
    res.render("home", {
      title: "bin",
      error: checks.error
    });
  }
});

function checkInput(username, password) {
  if (username) {
    // DO NOTHING
  } else {
    return {
      continue: false,
      error: {
        message: "Please input Email"
      }
    };
  }
  if (password) {
    //  DO NOTHING
  } else {
    return {
      continue: false,
      error: {
        message: "Please input password"
      }
    };
  }
  return { continue: true };
}

module.exports = router;
