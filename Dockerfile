# Sử dụng Node.js phiên bản LTS
FROM node:20

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json để cài đặt trước dependencies
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Thiết lập biến môi trường
ENV PORT=5000

# Mở cổng 5000 để ứng dụng có thể được truy cập
EXPOSE 5000

# Chạy server khi container khởi động
CMD ["node", "server.js"]
