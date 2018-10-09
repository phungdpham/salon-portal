//requiring groups and services models

//Routes for grouped services

//===================================
module.export = function(app) {
    // Get route for getting all of the groups
    app.get("/api/groups/", function(req, res) {
        db.Group.findAll({})
            .then(function(dbGroup) {
                res.json(dbGroup);
            });
    });

    //get route for retrieving a single group
    app.get("./api/groups/:id", function(req, res) {
        db.Group.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function(dbGroup) {
                res.json(dbGroup)
            })
    });

    //get route for saving a new group
    app.post("./api/groups", function(req, res) {
        console.log(req.body);
        db.Group.create({
            name: req.body.title,
            body: req.body.body,
        })
            .then(function(dbGroup) {
                res.json(dbGroup)
            })
    });

    //get route for deleting a single group
    group.delete("./api/groups/:id", function(req, res) {
        db.Group.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function(dbGroup) {
                res.json(dbGroup)
            })
    });
    //get route for updating group group
    group.put("./api/groups", function(req, res) {
        db.Group.update({
            where: {
                id: req.body.id
            }
        })
            .then(function(dbGroup) {
                res.json(dbGroup)
            })
    });
};