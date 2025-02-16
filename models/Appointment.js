const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Student = require("./Student");
const Lecturer = require("./Lecturer");
const Request = require("./Request");
const Room = require("./Room");

const Appointment = sequelize.define(
  "Appointment",
  {
    id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    student_id: { 
      type: DataTypes.BIGINT, 
      allowNull: false,
      references: { model: "students", key: "id" }
    },
    lecturer_id: { 
      type: DataTypes.BIGINT, 
      allowNull: false,
      references: { model: "lecturers", key: "id" }
    },
    request_id: { 
      type: DataTypes.BIGINT, 
      allowNull: true, // Có thể không có yêu cầu liên quan
      references: { model: "requests", key: "id" }
    },
    room_id: { 
      type: DataTypes.BIGINT, 
      allowNull: false,
      references: { model: "rooms", key: "id" }
    },
    date_time: { type: DataTypes.DATE, allowNull: false },
    status: { 
      type: DataTypes.ENUM("pending", "confirmed", "cancelled"), 
      allowNull: false, 
      defaultValue: "pending" 
    }
  },
  { timestamps: true }
);

// Thiết lập quan hệ với Student, Lecturer, Request, Room
Student.hasMany(Appointment, { foreignKey: "student_id", onDelete: "CASCADE" });
Appointment.belongsTo(Student, { foreignKey: "student_id", onDelete: "CASCADE" });

Lecturer.hasMany(Appointment, { foreignKey: "lecturer_id", onDelete: "CASCADE" });
Appointment.belongsTo(Lecturer, { foreignKey: "lecturer_id", onDelete: "CASCADE" });

Request.hasMany(Appointment, { foreignKey: "request_id", onDelete: "SET NULL" });
Appointment.belongsTo(Request, { foreignKey: "request_id", onDelete: "SET NULL" });

Room.hasMany(Appointment, { foreignKey: "room_id", onDelete: "CASCADE" });
Appointment.belongsTo(Room, { foreignKey: "room_id", onDelete: "CASCADE" });

module.exports = Appointment;
