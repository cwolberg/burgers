var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8070;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

/*
app.get("/", function(req, res) {
  res.json(path.join(__dirname, "views/index.html"));
});
*/

var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});
