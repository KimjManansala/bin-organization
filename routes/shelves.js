const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);

const dbShelve = require("../database/dbShelves");

module.exports = router;

router.get("/dashboard/shelve", (req, res) => {
  if (req.session.user) {
    let userId = req.session.user.id;
    let name = req.query.shelve;
    console.log(userId, name);
    dbShelve
      .getShelves(userId, name)
      .then(shelve => {
        //   USER SEARCHED SHELF IS THERE
        if (shelve) {
          console.log(shelve.dataValues.name);
          let session = req.session;
          session.shelve = shelve.dataValues;
        //   res.render("dashboard", {
        //     shelve: {
        //       name: shelve.dataValues.name
        //     },
        //     title: "dashboard"

        //   });
        res.redirect('/dashboard/shelve/bins')
            // Instead of rendeing the boar redirect to a get

        //   USER SEARCHED SHELF IS NOT THERE
        } else {
          res.render("dashboard", {
            title: "dashboard",
            errorSearch: {
              message: "No shelve found"
            }
          });
        }
      })
      .catch(er => {
        console.log("This is an error", er);
      });
  } else {
    res.redirect("/");
  }
});

router.post("/dashboard/shelve", (req, res) => {
  if (req.session.user) {
    let userId = req.session.user.id;
    let name = req.body.shelveName;
    dbShelve
      .createShelve(userId, name)
      .then(data => {
        if (data.created) {
          console.log("This is data.shelve ''Hi", data.shelve.dataValues);
          let session = req.session;
          session.shelve = data.shelve.dataValues;
          res.render("dashboard", {
            shelve: {
              name: data.shelve.dataValues.name
            },
            title: "dashboard"
          });
        } else {
          res.render('dashboard', {
              title: 'dashboard',
              errorAdd : {
                  message: 'Shelve is already made!'
              }
          })
        }
      })
      .catch(er => {
        console.log("This is dashboard/shelve post er", er);
      });
  } else {
    res.redirect("/");
  }
});
