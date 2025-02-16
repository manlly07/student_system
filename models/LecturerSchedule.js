const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Lecturer = require("./Lecturer");
const Subject = require("./Subject");
const Room = require("./Room");

const LecturerSchedule = sequelize.define(
  "lecturer_schedules",
  {
    id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    day_of_week: {
      type: DataTypes.ENUM("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"),
      allowNull: false
    },
    start_time: { type: DataTypes.TIME, allowNull: false },
    end_time: { type: DataTypes.TIME, allowNull: false },
    room_id: { type: DataTypes.BIGINT, allowNull: false }
  },
  { timestamps: true }
);

// Liên kết với Lecturer, Subject, Room
Lecturer.hasMany(LecturerSchedule, { foreignKey: "lecturer_id" });
LecturerSchedule.belongsTo(Lecturer, { foreignKey: "lecturer_id" });

Subject.hasMany(LecturerSchedule, { foreignKey: "subject_id" });
LecturerSchedule.belongsTo(Subject, { foreignKey: "subject_id" });

Room.hasMany(LecturerSchedule, { foreignKey: "room_id" });
LecturerSchedule.belongsTo(Room, { foreignKey: "room_id" });

module.exports = LecturerSchedule;
