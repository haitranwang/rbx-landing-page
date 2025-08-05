# RBX Landing Page

Landing page hiện đại cho công ty RBX chuyên về Crypto, Blockchain, Trading Bot và Quantitative Research, bao gồm hệ thống quản lý nội dung (CMS) đơn giản.

## 🚀 Tính năng

### Frontend
- **Responsive Design**: Thiết kế tương thích mọi thiết bị
- **Modern UI/UX**: Giao diện đẹp với animation mượt mà
- **Performance**: Tối ưu hóa tốc độ tải trang
- **SEO Friendly**: Tối ưu cho công cụ tìm kiếm

### Admin Panel
- **Dashboard**: Thống kê tổng quan
- **Quản lý bài viết**: Thêm, sửa, xóa bài viết
- **Quản lý người dùng**: Hệ thống phân quyền
- **Quản lý tuyển dụng**: Xử lý ứng tuyển
- **Cài đặt**: Tùy chỉnh website

### Sections
- **Hero Section**: Banner chính với call-to-action
- **About**: Giới thiệu công ty và tầm nhìn
- **Services**: Giải pháp Crypto & Blockchain
- **News**: Tin tức thị trường Crypto
- **Careers**: Trang tuyển dụng với form ứng tuyển
- **Contact**: Form liên hệ và thông tin
- **Footer**: Links và thông tin công ty

## 🛠️ Công nghệ sử dụng

- **Next.js 14**: Framework React hiện đại
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **React Hook Form**: Form handling
- **Zod**: Schema validation

## 📦 Cài đặt

1. Clone repository:
```bash
git clone https://github.com/your-username/rbx-landing-page.git
cd rbx-landing-page
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy development server:
```bash
npm run dev
```

4. Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt

## 🏗️ Cấu trúc dự án

```
rbx-landing-page/
├── app/                    # Next.js App Router
│   ├── admin/             # Admin panel pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Services.tsx       # Services section
│   ├── News.tsx           # News section
│   ├── Contact.tsx        # Contact section
│   ├── Footer.tsx         # Footer
│   └── Loading.tsx        # Loading component
├── public/                # Static assets
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## 🎨 Customization

### Thay đổi màu sắc
Chỉnh sửa file `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        // ... thêm màu khác
      }
    }
  }
}
```

### Thay đổi nội dung
- Cập nhật nội dung trong các components
- Thay đổi thông tin công ty trong `components/About.tsx`
- Cập nhật giải pháp Crypto trong `components/Services.tsx`
- Điều chỉnh tin tức thị trường trong `components/News.tsx`

## 📱 Responsive Design

Website được thiết kế responsive với các breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Scripts có sẵn

```bash
npm run dev          # Chạy development server
npm run build        # Build production
npm run start        # Chạy production server
npm run lint         # Kiểm tra code style
```

### Thêm trang mới

1. Tạo file trong thư mục `app/`
2. Export component mặc định
3. Thêm route vào navigation nếu cần

### Thêm component mới

1. Tạo file trong thư mục `components/`
2. Import và sử dụng trong trang

## 🚀 Deployment

### Vercel (Recommended)
1. Push code lên GitHub
2. Connect repository với Vercel
3. Deploy tự động

### Netlify
1. Build project: `npm run build`
2. Upload thư mục `out/` lên Netlify

### Manual
1. Build: `npm run build`
2. Upload files lên hosting

## 📄 License

MIT License - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 🤝 Contributing

1. Fork project
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📞 Liên hệ

- **Email**: info@rbx.vn
- **Website**: https://rbx.vn
- **GitHub**: [@your-username](https://github.com/your-username)

---

Made with ❤️ by RBX Team
