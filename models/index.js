const sequelize = require("../config/database");

// Import tất cả models
const Student = require("./Student");
const Lecturer = require("./Lecturer");
const Request = require("./Request");
const Appointment = require("./Appointment");
const Room = require("./Room");
const Building = require("./Building");
const Subject = require("./Subject");
const LecturerSubject = require("./LecturerSubject");
const LecturerSchedule = require("./LecturerSchedule");

// Đồng bộ database
sequelize.sync({ force: false }).then(() => {
  console.log("✅ Database synchronized!");
});

module.exports = {
  Room,
  Building,
  Request,
  Appointment,
  Student,
  Lecturer,
  Subject,
  LecturerSubject,
  LecturerSchedule,
};
