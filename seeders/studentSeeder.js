const bcrypt = require("bcryptjs");
const { Student } = require("../models");

const students = [
  { name: "Nguyễn Văn A", email: "nguyenvana@student.edu.vn" },
  { name: "Trần Thị B", email: "tranthib@student.edu.vn" },
  { name: "Lê Văn C", email: "levanc@student.edu.vn" },
  { name: "Hoàng Mỹ D", email: "hoangmyd@student.edu.vn" },
  { name: "Phạm Quốc E", email: "phamquoce@student.edu.vn" },
  { name: "Đặng Thảo F", email: "dangthaof@student.edu.vn" },
  { name: "Võ Minh G", email: "vominhg@student.edu.vn" },
  { name: "Ngô Kim H", email: "ngokimh@student.edu.vn" },
  { name: "Bùi Tiến I", email: "buitieni@student.edu.vn" },
  { name: "Hồ Như J", email: "honhuj@student.edu.vn" }
];

async function seedStudents() {
  const hashedPassword = await bcrypt.hash("123456", 10);

  for (let student of students) {
    await Student.create({
      name: student.name,
      email: student.email,
      password: hashedPassword
    });
  }

  console.log("✅ Đã tạo dữ liệu mẫu cho bảng students!");
}

module.exports = seedStudents;
