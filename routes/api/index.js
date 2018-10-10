const router = require("express").Router();
const groupRoutes = require("./group-api-routes");
const serviceRoutes = require("./service-api-routes");
const appointmentRoutes = require("./appointment-api-routes");

//Routes for groups, services, appointments
router.use("/groups", groupRoutes);
router.use("/services", serviceRoutes);
router.use("/appointments", appointmentRoutes);

module.exports = router;
