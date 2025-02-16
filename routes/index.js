const express = require("express");
const authRoutes = require("./authRoutes");
const lecturersRoutes = require("./lecturerRoutes");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/lecturers", authMiddleware ,lecturersRoutes);

module.exports = router;