const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);

const dbShelve = require("../database/dbBins");
const dbBins = require("../database/dbBins");

router.get("/dashboard/shelve/bins", (req, res) => {
  if (req.session.user) {
    dbBins.findBin(req.session.shelve.id)
    .then(data => {
        console.log('This is data', data)
        data.forEach(itm=>{
            console.log('------------------')
            console.log(itm.dataValues)
            console.log('------------------')
        })
        res.render('dashboard', {
            title: 'dashboard',
            shelve : {
                name: req.session.shelve.name
            },
            bin: data
        })

    });
  } else {
    res.redirect("/");
  }
});

module.exports = router;


// THE SESSION DATA STRUCTURE LOOKS LIKE
// Session {
//     cookie:
//      { path: '/',
//        _expires: null,
//        originalMaxAge: null,
//        httpOnly: true },
//     user:
//      { id: 11,
//        username: 'admin',
//        password: '$2b$10$53jEMI0N0N6fqJ2lUP.7D.O1I0vpd1WG3/gEuPJdLfXOYzJ860JP2',
//        firstName: 'admin',
//        lastName: 'admin',
//        createdAt: '2019-01-30T02:40:12.156Z',
//        updatedAt: '2019-01-30T02:40:12.156Z' },
//     shelve:
//      { id: 4,
//        name: 'testShelve',
//        createdAt: '2019-01-31T22:56:35.615Z',
//        updatedAt: '2019-01-31T22:56:35.615Z',
//        user_id: 11 } 
// }
