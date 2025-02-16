const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Student, Lecturer } = require("../models/");

class AuthService {
  async loginUser(email, password, role) {
    let user;

    // Xác định người dùng là Student hay Lecturer
    if (role === "student") {
      user = await Student.findOne({ where: { email } });
    } else if (role === "lecturer") {
      user = await Lecturer.findOne({ where: { email } });
    } else {
      throw new Error("Vai trò không hợp lệ");
    }

    if (!user) {
      throw new Error("Email không tồn tại");
    }

    // Kiểm tra mật khẩu
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Mật khẩu không đúng");
    }

    // Tạo JWT token
    const token = jwt.sign({ id: user.id, email: user.email, role }, "SECRET_KEY", {
      expiresIn: "7d",
    });

    return { token, user };
  }

  async registerUser(name, email, password, role, department = null) {
    let userExists;

    // Kiểm tra xem email đã tồn tại chưa
    if (role === "student") {
      userExists = await Student.findOne({ where: { email } });
    } else if (role === "lecturer") {
      userExists = await Lecturer.findOne({ where: { email } });
    } else {
      throw new Error("Vai trò không hợp lệ");
    }

    if (userExists) {
      throw new Error("Email đã được sử dụng");
    }
    if (!password || typeof password !== "string") {
      throw new Error("Mật khẩu không hợp lệ");
    }
    // Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);

    // Tạo user mới
    let newUser;
    if (role === "student") {
      newUser = await Student.create({ name, email, password: hashedPassword });
    } else if (role === "lecturer") {
      newUser = await Lecturer.create({ name, email, password: hashedPassword, department });
    }

    // Tạo JWT token
    const token = jwt.sign({ id: newUser.id, email: newUser.email, role }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return { token, user: newUser };
  }
}

module.exports = new AuthService();
