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
  let binId = req.query.bin;
  console.log("This is biniD", binId);
  let bin = req.session.bin;
  dbItems
    .getItems(binId)
    .then(items => {
      console.log(items);
      if (items.length === 0) {
        res.render("dashboard", {
          title: "dashboard",
          shelve: {
            name: req.session.shelve.name
          },
          bin: bin,
          items: {
            none: "Doesn't that you have any items in here"
          }
        });
      }else{
          console.log('SENDING WITH DATA')
        res.render("dashboard", {
            title: "dashboard",
            shelve: {
              name: req.session.shelve.name
            },
            bin: bin,
            items: {
              data: items,
            }
          });
      }
    })
    .catch(e => {
      console.error("This is the er", e);
    });
});
