'use client'

import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const footerLinks = {
    about: [
      { name: 'Thông điệp Chủ tịch', href: '#message' },
      { name: 'Thông điệp Tổng giám đốc', href: '#ceo-message' },
      { name: 'Giá trị cốt lõi', href: '#values' },
      { name: 'Lịch sử', href: '#history' },
      { name: 'Tầm nhìn chiến lược', href: '#vision' },
      { name: 'Mạng lưới hoạt động', href: '#network' },
      { name: 'Đội ngũ lãnh đạo', href: '#leadership' },
      { name: 'Trách nhiệm xã hội', href: '#csr' },
      { name: 'Giải thưởng', href: '#awards' },
      { name: 'Đối tác và khách hàng', href: '#partners' },
    ],
    ecosystem: [
      { name: 'Công nghệ', href: '#technology' },
      { name: 'Viễn thông', href: '#telecom' },
      { name: 'Giáo dục', href: '#education' },
      { name: 'Công ty thành viên', href: '#subsidiaries' },
    ],
    investor: [
      { name: 'Đại hội đồng cổ đông', href: '#shareholders' },
      { name: 'Công bố thông tin', href: '#disclosure' },
      { name: 'Báo cáo', href: '#reports' },
      { name: 'Thông tin cổ phiếu', href: '#stock' },
      { name: 'Quản trị công ty', href: '#governance' },
    ],
    other: [
      { name: 'Tin tức', href: '#news' },
      { name: 'Tuyển dụng', href: '/careers' },
      { name: 'Liên hệ', href: '#contact' },
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="ml-3 text-xl font-bold">RBX</span>
            </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
              Công ty công nghệ hàng đầu Việt Nam, tiên phong trong lĩnh vực Crypto, Blockchain
              và cung cấp các giải pháp Trading Bot, Quantitative Research cho thị trường tài chính số.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Về RBX */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Về RBX</h3>
            <ul className="space-y-3">
              {footerLinks.about.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Giải pháp RBX */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Giải pháp RBX</h3>
            <ul className="space-y-3">
              {footerLinks.ecosystem.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-6 mt-8">Nhà đầu tư</h3>
            <ul className="space-y-3">
              {footerLinks.investor.slice(0, 3).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Khác</h3>
            <ul className="space-y-3">
              {footerLinks.other.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 RBX. Tất cả quyền được bảo lưu.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Điều khoản sử dụng
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Sơ đồ Website
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Liên hệ & Trợ giúp
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Thương hiệu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer