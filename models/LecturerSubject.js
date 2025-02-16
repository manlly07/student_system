const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Lecturer = require("./Lecturer");
const Subject = require("./Subject");

const LecturerSubject = sequelize.define(
  "lecturer_subjects",
  {
    id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
  },
  { timestamps: true }
);

// Liên kết nhiều-nhiều giữa Lecturer và Subject
Lecturer.belongsToMany(Subject, { through: LecturerSubject, foreignKey: "lecturer_id" });
Subject.belongsToMany(Lecturer, { through: LecturerSubject, foreignKey: "subject_id" });

module.exports = LecturerSubject;
