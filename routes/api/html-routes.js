//Dependencies
//==============================
var path = require("path");

//Routes
//==============================
module.exports = function(app) {
    //index route loads view.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../../client/public/appointment"));
    });

    //service menu loads grouped services
    app.get("./services", function(req, res) {
        res.sendFile(path.join(__dirname, "../../client/public/services"))
    });
};

