const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/database");

// Import models để Sequelize tự động tạo bảng nếu chưa có

const routes = require("./routes"); // Import tất cả routes từ index.js

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Đồng bộ database
sequelize.sync({ force: false }).then(() => {
  console.log("✅ Database synchronized!");
});

// Sử dụng Routes
app.use("/api", routes);

// Khởi động server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
