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
    let items = [];
    dbItems
      .getItems(binId)
      .then(itemsArray => {
        itemsArray.forEach(e => {
          items.push(e.dataValues);
        });
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
    let user_id = req.session.user.id;

    dbItems
      .addItems(bin_id, user_id, name)
      .then(itm => {
        console.log("This should be something nteitmting", itm);
        res.redirect(`/dashboard/shelve/bins/items/?bin=${bin_id}`);
      })
      .catch(e => {
        console.log(e);
      });
  } else {
    res.redirect("/");
  }
});

router.delete("/dashboard/shelve/bins/items", (req, res) => {
  if (req.session.user) {
    let bin_id = parseInt(req.session.openBin);
    let user_id = req.session.user.id;

    let item = req.body.name;
    console.log(item);

    dbItems
      .deleteItems(bin_id, user_id, item)
      .then(e => {
        console.log("Hi! Please delete");
        // res.redirect(`/dashboard/shelve/bins/items/`);
        // res.send( {redirect: `/dashboard/shelve/bins/items/?bin=${bin_id}`})
        res.send({success: true})
      })
      .catch(e => {
        console.log("This is e", e);
      });
  } else {
    res.redirect("/");
  }
});
