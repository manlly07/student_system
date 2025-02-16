const seedStudents = require("./studentSeeder");
const seedLecturers = require("./lecturerSeeder");
const seedBuilding = require("./buildingSeeder");
const seedRoom = require("./roomSeeder");
const seedSubjects = require("./subjectSeeder");
const seedLecturerSubjects = require("./lecturerSubjectSeeder");
const seedLecturerSchedules = require("./lecturerScheduleSeeder");
const seedRequests = require("./requestSeeder");
const seedAppointments = require("./appointmentSeeder");

async function seedAll() {
  console.log("🚀 Bắt đầu seed dữ liệu...");
  await seedStudents();
  await seedLecturers();
  await seedBuilding();
  await seedRoom();
  await seedSubjects();
  await seedLecturerSubjects();
  await seedLecturerSchedules();
  await seedRequests();
  await seedAppointments();

  console.log("🎉 Seed dữ liệu hoàn tất!");
  process.exit(); // Thoát chương trình sau khi seed xong
}

seedAll();
