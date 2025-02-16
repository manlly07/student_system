const { Room, Building } = require("../models");

const rooms = [
  { name: "Phòng 101", code: "A101", building_code: "A01" },
  { name: "Phòng 102", code: "A102", building_code: "A01" },
  { name: "Phòng 103", code: "A103", building_code: "A01" },
  { name: "Phòng 201", code: "B201", building_code: "B01" },
  { name: "Phòng 202", code: "B202", building_code: "B01" },
  { name: "Phòng 301", code: "C301", building_code: "C01" },
  { name: "Phòng 302", code: "C302", building_code: "C01" },
  { name: "Phòng 401", code: "D401", building_code: "D01" },
  { name: "Phòng 501", code: "E501", building_code: "E01" },
  { name: "Phòng 601", code: "F601", building_code: "F01" }
];

async function seedRooms() {
  for (let room of rooms) {
    const building = await Building.findOne({ where: { code: room.building_code } });

    if (!building) {
      console.warn(`⚠ Không tìm thấy Building với code: ${room.building_code}`);
      continue;
    }

    await Room.create({
      name: room.name,
      code: room.code,
      capacity: room.capacity,
      building_id: building.id
    });
  }

  console.log("✅ Đã tạo dữ liệu mẫu cho bảng rooms!");
}

seedRooms();
module.exports = seedRooms;
