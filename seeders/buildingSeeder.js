const { Building } = require("../models");

const buildings = [
  { name: "Tòa A", code: "A01", location: "Khu Trung tâm" },
  { name: "Tòa B", code: "B01", location: "Khu Đông" },
  { name: "Tòa C", code: "C01", location: "Khu Tây" },
  { name: "Tòa D", code: "D01", location: "Khu Nam" },
  { name: "Tòa E", code: "E01", location: "Khu Bắc" },
  { name: "Tòa F", code: "F01", location: "Khu Ký túc xá" },
  { name: "Tòa G", code: "G01", location: "Khu Thư viện" },
  { name: "Tòa H", code: "H01", location: "Khu Nghiên cứu" },
  { name: "Tòa I", code: "I01", location: "Khu Thể thao" },
  { name: "Tòa J", code: "J01", location: "Khu Văn phòng" }
];

async function seedBuildings() {
  for (let building of buildings) {
    await Building.create({
      name: building.name,
      code: building.code,
      location: building.location
    });
  }

  console.log("✅ Đã tạo dữ liệu mẫu cho bảng buildings!");
}

module.exports = seedBuildings;