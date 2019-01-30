const express = require("express");
const app = express();
module.export = app;

// BODY PARSER
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// EXPRESS SESSION
const session = require("express-session");
const sessionsObj = {
  secret: "bin organizer",
  resave: "false",
  saveUninitialized: "false",
  cookie: {}
};
if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}
app.use(session(sessionsObj));

// Cookies
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.static(__dirname + "/public"));


// Handle bars

const hbs = require('express-handlebars')



// VIEW engine set up
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts'}))
// app.set('views', path.join(__dirname, 'views'))x
app.set('view engine', 'hbs')







app.get('/', (req,res)=>{
    res.render('home')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("App listening on port " + port);
});


app.use(require('./routes/register'))
