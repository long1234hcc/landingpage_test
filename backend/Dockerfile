# 1. Chọn hệ điều hành nền (Base Image)
# Dùng bản 'slim' để giảm dung lượng image từ 1GB xuống còn khoảng 150MB
FROM python:3.10-slim

# 2. Đặt thư mục làm việc bên trong Container
WORKDIR /app

# 3. Kỹ thuật "Cache Layer" (Rất quan trọng)
# Chúng ta copy file requirements.txt vào trước thay vì copy toàn bộ code
COPY requirements.txt .

# 4. Cài đặt thư viện
# Thêm --no-cache-dir để Docker không lưu lại các file rác cài đặt, giúp image nhẹ hơn
RUN pip install --no-cache-dir -r requirements.txt

# 5. Copy toàn bộ source code Backend vào thư mục /app trong container
COPY . .

# 6. Mở port 8000 để thế giới bên ngoài có thể gọi vào
EXPOSE 8000

# 7. Lệnh khởi động Server khi Container chạy
# Lưu ý: 'main:app' có nghĩa là file main.py chứa biến app = FastAPI()
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]