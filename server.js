//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//set up express app
var PORT = process.env.PORT || 3000;
var app = express();

//models for syncing
var db = require("./models");

//serve static content for the app from the public directory in the application directory
app.use(express.static(__dirname + "/public"));


app.use(bodyParser.urlencoded({ extended: false }));

//override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// var router = require("./controllers/takos_controllers.js"); - replaced with api-routes

//import routes to give the server access to them.
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.use("/", router);

db.sequelize.sync().then(() => {
    console.log("App listening on PORT " + PORT);
    app.listen(PORT);
}).catch(error => {
    console.log(error);
});