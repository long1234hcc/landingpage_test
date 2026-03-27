# ==========================================
# STAGE 1: MÔI TRƯỜNG BUILD (Builder)
# Nhiệm vụ: Tải thư viện và nén code React thành các file tĩnh
# ==========================================
FROM node:18-alpine AS builder

WORKDIR /app

# Kỹ thuật Cache Layer: Copy file quản lý thư viện vào trước
COPY package.json package-lock.json ./

# Dùng 'npm ci' thay vì 'npm install' - Best practice cho môi trường tự động
# Nó cài đặt chính xác các phiên bản trong package-lock.json, không tự ý nâng cấp
RUN npm ci

# Copy toàn bộ source code giao diện vào
COPY . .

# Chạy lệnh build (Nén mã nguồn). Kết quả sẽ nằm trong thư mục /app/dist
RUN npm run build


# ==========================================
# STAGE 2: MÔI TRƯỜNG CHẠY THỰC TẾ (Production)
# Nhiệm vụ: Dùng Nginx làm Web Server siêu nhẹ để host file tĩnh
# ==========================================
FROM nginx:alpine

# Xóa cái trang web "Welcome to Nginx" mặc định đi
RUN rm -rf /usr/share/nginx/html/*

# Phép màu đây: Copy thư mục 'dist' từ cái STAGE 1 (tên là builder) sang STAGE 2 này
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy file cấu hình Nginx để React xử lý Router không bị lỗi 404 (Giải thích bên dưới)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Nginx mặc định chạy ở port 80
EXPOSE 80

# Chạy Nginx ở chế độ background
CMD ["nginx", "-g", "daemon off;"]