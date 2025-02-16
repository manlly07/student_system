const { authService } = require("../services/");

class AuthController {
  async login(req, res) {
    try {
      const { email, password, role } = req.body;
      
      if (!email || !password || !role) {
        return res.status(400).json({ message: "Vui lòng nhập đầy đủ email, password và role" });
      }

      const { token, user } = await authService.loginUser(email, password, role);

      res.status(200).json({
        message: "Đăng nhập thành công",
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role
        }
      });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async register(req, res) {
    try {
      const { name, email, password, role, department } = req.body;

      if (!name || !email || !password || !role) {
        return res.status(400).json({ message: "Vui lòng nhập đầy đủ thông tin" });
      }

      const { token, user } = await authService.registerUser(name, email, password, role, department);

      res.status(201).json({
        message: "Đăng ký thành công",
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role,
          department: user.department || null
        }
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new AuthController();
