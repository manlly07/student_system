const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Student = require("./Student");
const Lecturer = require("./Lecturer");

const Request = sequelize.define(
  "Request",
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
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    status: { 
      type: DataTypes.ENUM("pending", "approved", "rejected", "completed"), 
      allowNull: false, 
      defaultValue: "pending" 
    }
  },
  { timestamps: true }
);

// Thiết lập quan hệ với Student và Lecturer
Student.hasMany(Request, { foreignKey: "student_id", onDelete: "CASCADE" });
Request.belongsTo(Student, { foreignKey: "student_id", onDelete: "CASCADE" });

Lecturer.hasMany(Request, { foreignKey: "lecturer_id", onDelete: "CASCADE" });
Request.belongsTo(Lecturer, { foreignKey: "lecturer_id", onDelete: "CASCADE" });

module.exports = Request;
