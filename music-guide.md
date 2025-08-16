# Wedding Music

Để thêm nhạc nền cho website, bạn có thể:

1. **Tạo thư mục `music`** trong project
2. **Thêm file nhạc** (format MP3 hoặc OGG) vào thư mục này
3. **Cập nhật đường dẫn** trong file HTML

## Đề xuất nhạc cưới:

- **A Thousand Years** - Christina Perri
- **Perfect** - Ed Sheeran  
- **All of Me** - John Legend
- **Marry Me** - Train
- **Canon in D** - Pachelbel (instrumental)

## Cách thêm nhạc:

1. Đặt file nhạc vào `music/wedding-song.mp3`
2. Cập nhật HTML:
```html
<audio id="backgroundMusic" loop preload="auto">
    <source src="music/wedding-song.mp3" type="audio/mpeg">
    <source src="music/wedding-song.ogg" type="audio/ogg">
</audio>
```

## Lưu ý:
- Nhiều trình duyệt chặn auto-play nhạc
- Người dùng cần tương tác với trang để nhạc có thể phát
- Nút điều khiển nhạc đã được thêm ở góc phải dưới
