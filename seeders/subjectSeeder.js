const { Subject } = require("../models");

const subjects = [
  { name: "Toán học", code: "MATH101" },
  { name: "Vật lý", code: "PHYS101" },
  { name: "Hóa học", code: "CHEM101" },
  { name: "Sinh học", code: "BIO101" },
  { name: "Lập trình Python", code: "CS101" },
  { name: "Cấu trúc dữ liệu", code: "CS102" },
  { name: "Hệ điều hành", code: "CS103" },
  { name: "Kinh tế vi mô", code: "ECO101" },
  { name: "Kinh tế vĩ mô", code: "ECO102" },
  { name: "Quản lý dự án", code: "BUS101" },
  { name: "Marketing", code: "BUS102" },
  { name: "Lịch sử thế giới", code: "HIST101" },
  { name: "Địa lý", code: "GEO101" },
  { name: "Tâm lý học", code: "PSY101" },
  { name: "Triết học", code: "PHIL101" }
];

async function seedSubjects() {
  for (let subject of subjects) {
    await Subject.create({
      name: subject.name,
      code: subject.code
    });
  }

  console.log("✅ Đã tạo dữ liệu mẫu cho bảng subjects!");
}

module.exports = seedSubjects;
