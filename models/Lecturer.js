const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Lecturer = sequelize.define("Lecturer", {
  id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  department: { type: DataTypes.STRING },
}, { timestamps: true });


module.exports = Lecturer;
