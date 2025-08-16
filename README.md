# Thiệp Cưới Online - Mai Quang & Lê Trinh

Trang thiệp cưới online hiện đại với giao diện đẹp mắt và nhiều tính năng hấp dẫn.

## Tính năng

✨ **Giao diện hiện đại**: Thiết kế trẻ trung, đơn giản với Tailwind CSS
🎨 **Hiệu ứng mượt mà**: Animations đẹp mắt và chuyển động tự nhiên
📱 **Responsive Design**: Hiển thị hoàn hảo trên mọi thiết bị
⏰ **Đếm ngược**: Thời gian thực đến ngày cưới
📸 **Album ảnh**: Gallery với lightbox effect
💳 **QR Code**: Mã QR cho chuyển khoản mừng cưới
🚀 **Tối ưu hiệu suất**: Lazy loading, service worker, preload images

## Công nghệ sử dụng

- HTML5
- CSS3 với Tailwind CSS
- Vanilla JavaScript
- QR Code.js library
- Service Worker
- Google Fonts (Dancing Script, Playfair Display, Inter)

## Cấu trúc file

```
Wedding/
├── index.html          # Trang chính
├── styles.css          # CSS tùy chỉnh
├── script.js           # JavaScript logic
├── sw.js              # Service Worker
├── README.md          # Hướng dẫn
└── images/            # Thư mục hình ảnh
    ├── _Z5A3461 (1).jpg
    ├── _Z5A3699 (1).jpg
    ├── _Z5A4024.jpg
    ├── _Z5A4414 (1).jpg
    └── _Z5A4459.jpg
```

## Thông tin sự kiện

### Nhà nữ
- **Hôn lễ**: 15:00 ngày 23/09/2025 tại tư gia
- **Lễ cưới**: 11:00 ngày 24/09/2025 tại Nhà hàng Thiên Ân Palace

### Nhà nam
- **Hôn lễ**: 09:00 ngày 25/09/2025 tại tư gia
- **Lễ cưới**: 11:00 ngày 25/09/2025 tại Nhà văn hoá khu vực 3

## Thông tin chuyển khoản

- **Ngân hàng**: Vietcombank
- **Số tài khoản**: 0311000717630
- **Tên chủ tài khoản**: MAI VAN QUANG

## Hướng dẫn sử dụng

1. **Chạy local**: Mở file `index.html` bằng trình duyệt web
2. **Deploy**: Upload toàn bộ thư mục lên web hosting
3. **Tùy chỉnh**: Chỉnh sửa thông tin trong file `index.html`

## Tối ưu hóa

### Hình ảnh
- Sử dụng lazy loading để tải ảnh khi cần
- Preload các ảnh quan trọng
- Responsive images cho mobile

### Hiệu suất
- Service Worker cache static files
- Minified CSS/JS (có thể thêm)
- Debounced scroll events

### SEO
- Meta tags đầy đủ
- Semantic HTML
- Alt text cho images

## Tùy chỉnh

### Thay đổi màu sắc
Chỉnh sửa trong Tailwind config hoặc CSS custom:
```css
:root {
    --primary-color: #f43f5e;
    --secondary-color: #ec4899;
}
```

### Thêm/bớt ảnh
1. Thêm ảnh vào thư mục `images/`
2. Cập nhật gallery section trong `index.html`
3. Thêm vào service worker cache

### Thay đổi thông tin
Chỉnh sửa các section tương ứng trong `index.html`:
- Hero section: Tên cặp đôi, ngày cưới
- Couple section: Thông tin gia đình
- Events section: Lịch trình sự kiện
- Gift section: Thông tin chuyển khoản

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

© 2025 Wedding Invitation. Made with ❤️
