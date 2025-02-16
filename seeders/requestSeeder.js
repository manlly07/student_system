const { Request, Student, Lecturer } = require("../models");

const requests = [
  { 
    student_email: "nguyenvana@student.edu.vn", 
    lecturer_email: "nguyenvana@university.edu.vn", 
    title: "Xin tài liệu môn Toán", 
    description: "Em muốn xin tài liệu tham khảo cho môn Toán học để ôn tập tốt hơn.",
    status: "pending"
  },
  { 
    student_email: "tranthib@student.edu.vn", 
    lecturer_email: "levanc@university.edu.vn", 
    title: "Hỗ trợ bài tập lập trình", 
    description: "Em gặp khó khăn với bài tập lập trình Python, thầy có thể hướng dẫn giúp em không?",
    status: "approved"
  },
  { 
    student_email: "levanc@student.edu.vn", 
    lecturer_email: "hoangmyd@university.edu.vn", 
    title: "Hẹn gặp để thảo luận dự án", 
    description: "Em muốn gặp thầy để trao đổi về đề tài nghiên cứu môn Sinh học.",
    status: "pending"
  },
  { 
    student_email: "hoangmyd@student.edu.vn", 
    lecturer_email: "phamquoce@university.edu.vn", 
    title: "Tư vấn về bài thí nghiệm", 
    description: "Em không hiểu cách thực hiện thí nghiệm Hóa học, thầy có thể giúp em không?",
    status: "rejected"
  },
  { 
    student_email: "phamquoce@student.edu.vn", 
    lecturer_email: "dangthaof@university.edu.vn", 
    title: "Hỏi về lịch sử chiến tranh", 
    description: "Em cần thêm tài liệu về chiến tranh thế giới thứ hai để hoàn thành bài luận.",
    status: "pending"
  },
  { 
    student_email: "dangthaof@student.edu.vn", 
    lecturer_email: "vominhg@university.edu.vn", 
    title: "Xin tài liệu triết học", 
    description: "Em muốn xin thêm tài liệu triết học để đọc và tìm hiểu sâu hơn.",
    status: "approved"
  },
  { 
    student_email: "vominhg@student.edu.vn", 
    lecturer_email: "ngokimh@university.edu.vn", 
    title: "Cần tư vấn về kinh tế", 
    description: "Em muốn được thầy giải thích thêm về một số mô hình kinh tế.",
    status: "pending"
  },
  { 
    student_email: "ngokimh@student.edu.vn", 
    lecturer_email: "nguyenvana@university.edu.vn", 
    title: "Hỏi về bài toán xác suất", 
    description: "Em đang gặp khó khăn với bài toán xác suất, thầy có thể giúp em không?",
    status: "rejected"
  }
];

async function seedRequests() {
  for (let req of requests) {
    const student = await Student.findOne({ where: { email: req.student_email } });
    const lecturer = await Lecturer.findOne({ where: { email: req.lecturer_email } });

    if (!student || !lecturer) {
      console.warn(`⚠ Không tìm thấy Student hoặc Lecturer (${req.student_email} - ${req.lecturer_email})`);
      continue;
    }

    await Request.create({
      student_id: student.id,
      lecturer_id: lecturer.id,
      title: req.title,
      description: req.description,
      status: req.status
    });
  }

  console.log("✅ Đã tạo dữ liệu mẫu cho bảng requests!");
}

module.exports = seedRequests;