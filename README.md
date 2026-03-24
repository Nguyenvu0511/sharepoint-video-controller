# 🤖 SharePoint Video Controller (YouTube Style)

**SharePoint Video Controller** là một Chrome Extension nhẹ nhàng giúp bạn điều khiển trình phát video trên SharePoint bằng các phím tắt quen thuộc như đang xem YouTube. 

### ✨ Tính năng chính
Extension này hỗ trợ các phím tắt sau:
* **Space / K**: Tạm dừng hoặc tiếp tục phát video (Play/Pause).
* **F**: Bật/Tắt chế độ toàn màn hình (Fullscreen).
* **M**: Bật/Tắt tiếng (Mute/Unmute).
* **Mũi tên Trái/Phải (← / →)**: Tua nhanh hoặc lùi lại 5 giây.
* **Mũi tên Lên/Xuống (↑ / ↓)**: Tăng/Giảm 5% âm lượng (có thông báo hiển thị trong Console).

### 🛠 Hướng dẫn cài đặt
Vì đây là extension tự phát triển, bạn có thể cài đặt thủ công qua chế độ Developer:

1. Tải toàn bộ mã nguồn về máy (hoặc `git clone`).
2. Mở trình duyệt Chrome (hoặc Edge), truy cập địa chỉ: `chrome://extensions/`.
3. Bật **"Developer mode"** (Chế độ cho nhà phát triển) ở góc trên bên phải.
4. Nhấn nút **"Load unpacked"** (Tải tiện ích đã giải nén).
5. Chọn thư mục chứa các file (`manifest.json`, `content.js`, `icon.png`).
6. Truy cập vào SharePoint của bạn và tận hưởng!

### 📝 Ghi chú
* Extension hiện tại được cấu hình để hoạt động trên domain: `https://studyvn.sharepoint.com/*`. 
* Nếu bạn muốn dùng cho domain khác, hãy chỉnh sửa mục `matches` trong file `manifest.json`.

---
Made with ❤️ for better productivity.
