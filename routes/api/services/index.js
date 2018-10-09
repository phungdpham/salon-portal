const router = require("express").Router();
const serviceRoutes = require("./services");

//Service Routes
router.use("./services", bookRoutes);

module.exports = router;