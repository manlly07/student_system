const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Building = require("./Building");

const Room = sequelize.define(
  "Room",
  {
    id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    code: { type: DataTypes.STRING, unique: true, allowNull: false },
    building_id: { type: DataTypes.BIGINT, allowNull: false }
  },
  { timestamps: true }
);

// Thiết lập quan hệ với bảng Building
Building.hasMany(Room, { foreignKey: "building_id" });
Room.belongsTo(Building, { foreignKey: "building_id" });

module.exports = Room;
