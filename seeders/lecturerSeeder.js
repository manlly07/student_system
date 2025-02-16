const bcrypt = require("bcryptjs");
const { Lecturer } = require("../models");

const lecturers = [
  { name: "Thầy Nguyễn Văn A", email: "nguyenvana@university.edu.vn", department: "Computer Science" },
  { name: "Cô Trần Thị B", email: "tranthib@university.edu.vn", department: "Mathematics" },
  { name: "Thầy Lê Văn C", email: "levanc@university.edu.vn", department: "Physics" },
  { name: "Cô Hoàng Mỹ D", email: "hoangmyd@university.edu.vn", department: "Biology" },
  { name: "Thầy Phạm Quốc E", email: "phamquoce@university.edu.vn", department: "Chemistry" },
  { name: "Cô Đặng Thảo F", email: "dangthaof@university.edu.vn", department: "History" },
  { name: "Thầy Võ Minh G", email: "vominhg@university.edu.vn", department: "Philosophy" },
  { name: "Cô Ngô Kim H", email: "ngokimh@university.edu.vn", department: "Economics" },
  { name: "Thầy Bùi Tiến I", email: "buitieni@university.edu.vn", department: "Engineering" },
  { name: "Cô Hồ Như J", email: "honhuj@university.edu.vn", department: "Literature" }
];

async function seedLecturers() {
  const hashedPassword = await bcrypt.hash("123456", 10);

  for (let lecturer of lecturers) {
    await Lecturer.create({
      name: lecturer.name,
      email: lecturer.email,
      password: hashedPassword,
      department: lecturer.department
    });
  }

  console.log("✅ Đã tạo dữ liệu mẫu cho bảng lecturers!");
}

module.exports = seedLecturers;
