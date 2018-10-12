//Requireing services models
const router = require("express").Router();
const servicesController = require("../../controllers/servicesController");


// Routes
//===================================
    //Matches with "/api/services"
    router.route("/")
        .get(servicesController.findAll)
        .post(servicesController.create)

    //Matches with "/api/services/:id"
    router.route("/:id")
        .get(servicesController.findById)
        .get(servicesController.findByGroup)
        .put(servicesController.update)
        .delete(servicesController.remove);

    //Matches with "/api/services/:groupId"
    router.route("/:groupid")
        .get(servicesController.findByGroup);


    module.exports = router;
