//Requireing services models
var db = require("../../models");

// Routes
//====================================
module.exports = function(app) {
    //Get route for getting all of the services
    app.get("/api/services", function(req, res) {
        var query = {};
        if (req.query.group_id) {
            query.GroupId = req.query.group_id;
        }
        db.Service.findAll({
            where: query
        }).then(function(dbService) {
            res.json(dbService);
        });
    });

    //Get route for retreiving a single service
    app.get("/api/services/:id", function(req, res) {
        db.Service.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbService) {
            console.log(dbService);
            res.json(dbService);
        });
    });

    //Post route for saving a new service
    app.post("/api/services", function(req, res) {
        db.Service.create({
            name: req.body.name,
            price: req.body.price,
            group: req.body.group
        }).
            then(function(dbService) {
                res.json(dbService);
        })
    })

    // Delete route for deleting services
    app.delete("/api/services/:id", function(req, res) {
        db.Service.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbService) {
            res.json(dbService);
        });
    });

    // PUT route for updating Services
  app.put("/api/services", function(req, res) {
    db.Service.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbService) {
      res.json(dbService);
    });
  });
}