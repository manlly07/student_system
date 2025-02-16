const express = require("express");
const lecturerController = require("../controllers/lecturerController");

const router = express.Router();

router.get("/:id/free-time", lecturerController.getLecturerFreeTime);
router.get("/:id/schedule", lecturerController.getLecturerSchedule);
router.get("/:id/appointments", lecturerController.getLecturerAppointments);
router.get("/:id/schedule-and-appointments", lecturerController.getLecturerScheduleAndAppointments);

module.exports = router;
