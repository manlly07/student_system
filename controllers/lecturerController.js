const lecturerService = require("../services/lecturerService");

class LecturerController {
  async getLecturerFreeTime(req, res) {
    try {
      const lecturerId = req.params.id;
      const freeTimes = await lecturerService.getLecturerFreeTime(lecturerId);
      res.status(200).json(freeTimes);
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Lỗi server", error });
    }
  }

  async getLecturerSchedule(req, res) {
    try {
      const lecturerId = req.params.id;
      const schedule = await lecturerService.getLecturerSchedule(lecturerId);
      res.status(200).json(schedule);
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Lỗi server", error });
    }
  }

  async getLecturerAppointments(req, res) {
    try {
      const lecturerId = req.params.id;
      const appointments = await lecturerService.getLecturerAppointments(lecturerId);
      res.status(200).json(appointments);
    } catch (error) {
      res.status(500).json({ message: "Lỗi server", error });
    }
  }

  async getLecturerScheduleAndAppointments(req, res) {
    try {
      const lecturerId = req.params.id;
      const data = await lecturerService.getLecturerScheduleAndAppointments(lecturerId);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Lỗi server", error });
    }
  }
}

module.exports = new LecturerController();
