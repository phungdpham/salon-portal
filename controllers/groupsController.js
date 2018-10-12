const db = require("../models");

//Defining methods for groupsController

module.exports = {
    findAll: function(req, res) {
        db.Group
            .findAll({})
            .then(function(dbGroup) {
                res.json(dbGroup);
            });
    },
    findById: function(req, res) {
        db.Group
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(function(dbGroup) {
                res.json(dbGroup)
            })
    },
    create: function(req, res) {
        console.log("in the create");
        // const groupName=req.body;
        // db.Group
        //     .create({
        //         groupName
        //     })
        //     .then(function(dbGroup) {
        //         res.json(dbGroup)
        //     })
    },
    update: function(req, res) {
        db.Group
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function(dbGroup) {
                    res.json(dbGroup)
            })
    },
    remove: function(req, res) {
        db.Group
            .update({
                    where: {
                        id: req.body.id
                    }
            })
            .then(function(dbGroup) {
                res.json(dbGroup)
            })
        }
};