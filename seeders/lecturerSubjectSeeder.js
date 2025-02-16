const { Lecturer, Subject, LecturerSubject } = require("../models");

const lecturerSubjects = [
  { lecturer_email: "nguyenvana@university.edu.vn", subject_code: "MATH101" },
  { lecturer_email: "nguyenvana@university.edu.vn", subject_code: "PHYS101" },
  { lecturer_email: "tranthib@university.edu.vn", subject_code: "MATH101" },
  { lecturer_email: "levanc@university.edu.vn", subject_code: "CS101" },
  { lecturer_email: "levanc@university.edu.vn", subject_code: "CS102" },
  { lecturer_email: "hoangmyd@university.edu.vn", subject_code: "BIO101" },
  { lecturer_email: "phamquoce@university.edu.vn", subject_code: "CHEM101" },
  { lecturer_email: "dangthaof@university.edu.vn", subject_code: "HIST101" },
  { lecturer_email: "vominhg@university.edu.vn", subject_code: "PHIL101" },
  { lecturer_email: "ngokimh@university.edu.vn", subject_code: "ECO101" },
  { lecturer_email: "ngokimh@university.edu.vn", subject_code: "ECO102" }
];

async function seedLecturerSubjects() {
  for (let ls of lecturerSubjects) {
    const lecturer = await Lecturer.findOne({ where: { email: ls.lecturer_email } });
    const subject = await Subject.findOne({ where: { code: ls.subject_code } });

    if (!lecturer || !subject) {
      console.warn(`⚠ Không tìm thấy Lecturer hoặc Subject (${ls.lecturer_email} - ${ls.subject_code})`);
      continue;
    }

    await LecturerSubject.create({
      lecturer_id: lecturer.id,
      subject_id: subject.id
    });
  }

  console.log("✅ Đã tạo dữ liệu mẫu cho bảng lecturer_subjects!");
}
seedLecturerSubjects();
module.exports = seedLecturerSubjects;
