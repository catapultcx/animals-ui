const express = require("express");
const router = new express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.index);
router.get("/login", controller.login);
router.get("/signup", controller.signup);

module.exports = router;
