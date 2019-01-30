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

const bcrypt = require("bcrypt");
const saltRounds = 10;

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", (req, res) => {
  console.log(req.body);

  // Saving user input into userInfo
  let userInfo = {
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstname,
    lastName: req.body.lastname
  };
  let data = checkAllInput(userInfo);

  if (data.continue) {
    console.log("This is the userInfo", userInfo);
    bcrypt
      .hash(userInfo.password, saltRounds)
      .then(hash => {
        // console.log(userInfo.email, hash, userInfo.firstName, userInfo.lastName)
        createUser(userInfo.email, hash, userInfo.firstName, userInfo.lastName)
          .then(itm => {
            console.log("This is the res from createUser", itm);
            if (itm.created) {
              let session = req.session;
              session.user = itm.user.dataValues;
              res.redirect("/dashboard");
              return;
            } else {
              console.log("False itm is created");
              res.render("signup", {
                error: {
                  message: "Email is already registered"
                }
              });
              return;
            }
          })
          .catch(er => {
            res.render("signup", {
              error: {
                message: `ERROR: ${er}`
              }
            });
            return;
          });
      })
      .catch(er => {
        res.render("signup", {
          error: {
            message: `ERROR: ${er}`
          }
        });
        return;
      });
  } else {
    res.render("signup", {
      error: data.error
    });
  }
});

function checkAllInput(userInfo, res) {
  if (userInfo.email) {
    console.log(true);
  } else {
    console.log(false);
    return {
      continue: false,
      error: {
        message: "Email cannot be blank"
      }
    };
  }
  if (validator.validate(userInfo.email)) {
    console.log(true);
  } else {
    console.log(false);
    return {
      continue: false,
      error: {
        message: "Please input a valid email"
      }
    };
  }

  if (userInfo.password) {
    console.log(true);
  } else {
    console.log(false);
    return {
      continue: false,
      error: {
        message: "Password cannot be blank"
      }
    };
  }
  if (userInfo.firstName) {
    console.log(true);
  } else {
    console.log(false);
    return {
      continue: false,
      error: {
        message: " First name cannot be blank"
      }
    };
  }
  if (userInfo.lastName) {
    console.log(true);
  } else {
    console.log(false);
    return {
      continue: false,
      error: {
        message: "Last name cannot be blank"
      }
    };
  }

  // IF ALL INPUTS ARE VALID

  return { continue: true };
}

function createUser(userName, hash, firstName, lastName) {
  return new Promise((resolve, reject) => {
    db.user
      .findOrCreate({
        where: { username: userName },
        defaults: {
          username: userName,
          password: hash,
          firstName: firstName,
          lastName: lastName
        }
      })
      .spread((user, created) => {
        let data = { user: user, created: created };
        resolve(data);
      })
      .catch(er => {
        reject(er);
      });
  });
}

module.exports = router;
