const db = require("../models");

//Defining methods for groupsController

module.exports = {
    findAll: function(req, res) {
        db.Service
            .findAll({})
            .then(function(dbService) {
                res.json(dbService);
            });
    },
    findById: function(req, res) {
        db.Service
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(function(dbService) {
                res.json(dbService)
            })
    },
    findByGroup: function(req, res) {
        var query = {};
        if (req.query.group_id) {
            query.GroupId = req.query.group_id;
        }
        db.Service
        .findAll({
            where: query
        })
        .then(function(dbService) {
            res.json(dbService);
        });
    },
    create: function(req, res) {
        console.log(req.body);
        db.Service
            .create({
                serviceName: req.body.serviceName,
                price: req.body.price,
                group: req.body.group
            })
            .then(function(dbService) {
                res.json(dbService);
        })
    },
    update: function(req, res) {
        db.Service
            .update(
                req.body, { where: {id: req.body.id }
            })
            .then(function(dbService) {
                res.json(dbService);
        });
    },
    remove: function(req, res) {
        db.Service
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function(dbService) {
                res.json(dbService);
            });
    }
};