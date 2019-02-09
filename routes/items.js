const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);
module.exports = router;

const dbItems = require("../database/dbItems");

router.get("/dashboard/shelve/bins/items", (req, res) => {
  if (req.session.user) {
    let binId = req.query.bin;
    let bin = req.session.bin;
    req.session.openBin = binId;
    console.log("This is req.session", req.session);
    let items = [];
    dbItems
      .getItems(binId)
      .then(itemsArray => {
        itemsArray.forEach(e => {
          items.push(e.dataValues);
        });
        console.log("~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("This is this", items);
        if (items.length === 0) {
          res.render("dashboard", {
            title: "dashboard",
            shelve: {
              name: req.session.shelve.name
            },
            bin: bin,
            items: {
              none: "Doesn't seem that you have any items in here"
            }
          });
        } else {
          res.render("dashboard", {
            title: "dashboard",
            shelve: {
              name: req.session.shelve.name
            },
            bin: bin,
            items: {
              data: items
            }
          });
        }
      })
      .catch(e => {
        console.error("This is the er", e);
      });
  } else {
    res.redirect("/");
  }
});

router.post("/dashboard/shelve/bins/items", (req, res) => {
  if (req.session.user) {


    let name = req.body.item;
    let bin_id = parseInt(req.session.openBin);
    let user_id = req.session.user.id

    dbItems.addItems(bin_id, user_id, name)
      .then(itm=>{
        console.log('This should be something nteitmting', itm)
        res.redirect(`/dashboard/shelve/bins/items/?bin=${bin_id}`)
      })
      .catch(e=>{
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        console.log(e)
      })
  } else {
    res.redirect("/");
  }
});
