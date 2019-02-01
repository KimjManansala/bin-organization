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
        if (shelve) {
          console.log(shelve.dataValues.name);
          let session = req.session;
          session.shelve = shelve.dataValues.id;
          res.render("dashboard", {
            shelve: {
              name: shelve.dataValues.name
            },
            title: "dashboard"
          });
        } else {
          console.log("No shelve found");
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
    dbShelve.createShelve(userId, name)
        .then(data=>{
            if(data.created){
                console.log('This is data.shelve', data.shelve)
            }else{
                console.log('Not created')
            }
        })
        .catch(er=>{
            console.log('This is dashboard/shelve post er', er)
        })
  } else {
    res.redirect("/");
  }
});
