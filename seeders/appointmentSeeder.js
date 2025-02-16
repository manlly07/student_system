const { Appointment, Student, Lecturer, Request, Room } = require("../models");

const appointments = [
  { 
    student_email: "nguyenvana@student.edu.vn", 
    lecturer_email: "nguyenvana@university.edu.vn", 
    request_title: "Xin tài liệu môn Toán",
    room_code: "A101",
    date_time: "2025-02-20 10:00:00",
    status: "pending"
  },
  { 
    student_email: "tranthib@student.edu.vn", 
    lecturer_email: "levanc@university.edu.vn", 
    request_title: "Hỗ trợ bài tập lập trình",
    room_code: "B201",
    date_time: "2025-02-21 14:00:00",
    status: "confirmed"
  },
  { 
    student_email: "levanc@student.edu.vn", 
    lecturer_email: "hoangmyd@university.edu.vn", 
    request_title: "Hẹn gặp để thảo luận dự án",
    room_code: "C301",
    date_time: "2025-02-22 09:00:00",
    status: "pending"
  },
  { 
    student_email: "hoangmyd@student.edu.vn", 
    lecturer_email: "phamquoce@university.edu.vn", 
    request_title: null,  // Không có request liên quan
    room_code: "D401",
    date_time: "2025-02-23 16:00:00",
    status: "cancelled"
  },
  { 
    student_email: "phamquoce@student.edu.vn", 
    lecturer_email: "dangthaof@university.edu.vn", 
    request_title: "Hỏi về lịch sử chiến tranh",
    room_code: "E501",
    date_time: "2025-02-24 11:00:00",
    status: "pending"
  }
];

async function seedAppointments() {
  for (let appt of appointments) {
    const student = await Student.findOne({ where: { email: appt.student_email } });
    const lecturer = await Lecturer.findOne({ where: { email: appt.lecturer_email } });
    const room = await Room.findOne({ where: { code: appt.room_code } });

    let request = null;
    if (appt.request_title) {
      request = await Request.findOne({ where: { title: appt.request_title } });
    }

    if (!student || !lecturer || !room) {
      console.warn(`⚠ Không tìm thấy Student, Lecturer hoặc Room (${appt.student_email} - ${appt.lecturer_email} - ${appt.room_code})`);
      continue;
    }

    await Appointment.create({
      student_id: student.id,
      lecturer_id: lecturer.id,
      request_id: request ? request.id : null,
      room_id: room.id,
      date_time: appt.date_time,
      status: appt.status
    });
  }

  console.log("✅ Đã tạo dữ liệu mẫu cho bảng appointments!");
}

module.exports = seedAppointments;
