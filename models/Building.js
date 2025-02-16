const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Building = sequelize.define(
  "Building",
  {
    id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    code: { type: DataTypes.STRING, unique: true, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false }, // Ví dụ: "Khu A", "Khu B"
  },
  { timestamps: true }
);

module.exports = Building;
