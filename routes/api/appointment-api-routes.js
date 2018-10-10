//Requireing  models
var db = require("../../models");

//Routes for appointments

//===================================
module.exports = function(app) {
    // Get route for getting all of the appointment
    app.get("/api/appointments/", function(req, res) {
        db.Appointment.findAll({})
            .then(function(dbAppointment) {
                res.json(dbAppointment);
            });
    });

    //get route for retrieving an appointment
    app.get("./api/appointments/:id", function(req, res) {
        db.Group.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function(dbAppointment) {
                res.json(dbAppointment)
            })
    });

    //Post route for saving a new appointment
    app.post("./api/appointments", function(req, res) {
        console.log(req.body);
        db.Group.create({
            name: req.body.title,
            phoneNum: req.body.phoneNum,
            selectService: req.body.phoneNum,
            selectDate: req.body.selectDate,
            selectTime: req.body.selectTime
        })
            .then(function(dbAppointment) {
                res.json(dbAppointment)
            })
    });

    //get route for deleting an appointment
    group.delete("./api/appointments/:id", function(req, res) {
        db.Group.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function(dbAppointment) {
                res.json(dbAppointment)
            })
    });
    //get route for updating an appointment
    group.put("./api/appointments", function(req, res) {
        db.Group.update({
            where: {
                id: req.body.id
            }
        })
            .then(function(dbAppointment) {
                res.json(dbAppointment)
            })
    });
};