# Wedding Music Setup

Để thêm nhạc thật cho website:

## Option 1: Local Files (cho development)
1. Tải file nhạc MP3 về
2. Đặt vào thư mục `music/wedding-song.mp3`
3. Cập nhật HTML:
```html
<source src="music/wedding-song.mp3" type="audio/mpeg">
```

## Option 2: Online Hosting (recommended)
1. Upload nhạc lên service như:
   - SoundCloud
   - Internet Archive
   - Your own web hosting

2. Cập nhật HTML với URL:
```html
<source src="https://your-domain.com/wedding-song.mp3" type="audio/mpeg">
```

## Recommended Wedding Songs:
- A Thousand Years - Christina Perri
- Perfect - Ed Sheeran  
- All of Me - John Legend
- Canon in D - Pachelbel
- Wedding March - Wagner

## Current Setup:
- Uses data URL for silent audio (works locally)
- Shows user prompt for better UX
- Complies with browser autoplay policies
- No CORS issues
