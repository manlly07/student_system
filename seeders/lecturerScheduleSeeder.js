const { LecturerSchedule, Lecturer, Subject, Room } = require("../models");

const lecturerSchedules = [
  { lecturer_email: "nguyenvana@university.edu.vn", subject_code: "MATH101", room_code: "A101", day_of_week: "Monday", start_time: "08:00:00", end_time: "10:00:00" },
  { lecturer_email: "nguyenvana@university.edu.vn", subject_code: "PHYS101", room_code: "A102", day_of_week: "Wednesday", start_time: "13:00:00", end_time: "15:00:00" },
  { lecturer_email: "tranthib@university.edu.vn", subject_code: "MATH101", room_code: "B201", day_of_week: "Tuesday", start_time: "10:00:00", end_time: "12:00:00" },
  { lecturer_email: "levanc@university.edu.vn", subject_code: "CS101", room_code: "C301", day_of_week: "Thursday", start_time: "09:00:00", end_time: "11:00:00" },
  { lecturer_email: "levanc@university.edu.vn", subject_code: "CS102", room_code: "C302", day_of_week: "Friday", start_time: "14:00:00", end_time: "16:00:00" },
  { lecturer_email: "hoangmyd@university.edu.vn", subject_code: "BIO101", room_code: "D401", day_of_week: "Monday", start_time: "07:30:00", end_time: "09:30:00" },
  { lecturer_email: "phamquoce@university.edu.vn", subject_code: "CHEM101", room_code: "E501", day_of_week: "Wednesday", start_time: "10:30:00", end_time: "12:30:00" },
  { lecturer_email: "dangthaof@university.edu.vn", subject_code: "HIST101", room_code: "F601", day_of_week: "Thursday", start_time: "13:30:00", end_time: "15:30:00" },
  { lecturer_email: "vominhg@university.edu.vn", subject_code: "PHIL101", room_code: "A103", day_of_week: "Friday", start_time: "08:30:00", end_time: "10:30:00" },
  { lecturer_email: "ngokimh@university.edu.vn", subject_code: "ECO101", room_code: "B202", day_of_week: "Tuesday", start_time: "14:30:00", end_time: "16:30:00" }
];

async function seedLecturerSchedules() {
  for (let schedule of lecturerSchedules) {
    const lecturer = await Lecturer.findOne({ where: { email: schedule.lecturer_email } });
    const subject = await Subject.findOne({ where: { code: schedule.subject_code } });
    const room = await Room.findOne({ where: { code: schedule.room_code } });

    if (!lecturer || !subject || !room) {
      console.warn(`⚠ Không tìm thấy Lecturer, Subject hoặc Room (${schedule.lecturer_email} - ${schedule.subject_code} - ${schedule.room_code})`);
      continue;
    }

    await LecturerSchedule.create({
      lecturer_id: lecturer.id,
      subject_id: subject.id,
      room_id: room.id,
      day_of_week: schedule.day_of_week,
      start_time: schedule.start_time,
      end_time: schedule.end_time
    });
  }

  console.log("✅ Đã tạo dữ liệu mẫu cho bảng lecturer_schedule!");
}

module.exports = seedLecturerSchedules;
