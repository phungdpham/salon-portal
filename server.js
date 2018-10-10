const express = require("express");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//Requiring our models for syncing
const db = require("./models");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Static diretory
app.use(express.static("public"));



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// Start the API server
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});



// //Routes
// //============================================
// require("./routes/api/group-api-routes.js")(app);
// require("./routes/api/service-api-routes.js")(app);
// require("./routes/api/html-routes.js")(app);
