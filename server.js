const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

//serves static files
app.use(express.static(__dirname + "/public"));

//parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set up handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes and give the server access to them
var mainRoutes = require("./controllers/burgers_controllers");
app.use(mainRoutes);

//listen
app.listen(PORT, function () {
  console.log("Server listening on: PORT" + PORT);
});