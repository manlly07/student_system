const express = require("express");
const { authController } = require("../controllers");

const router = express.Router();

// API login chung cho cả Student và Lecturer
router.post("/login", authController.login);
router.post("/register", authController.register);

module.exports = router;
