'use client'

import { motion } from 'framer-motion'
import { Target, Users, Award, Globe } from 'lucide-react'

const About = () => {
  const stats = [
    {
      icon: Target,
      number: '2025',
      label: 'Mục tiêu',
      description: 'Top 10 Crypto Company Đông Nam Á'
    },
    {
      icon: Users,
      number: '50+',
      label: 'Chuyên gia',
      description: 'Đội ngũ AI, Blockchain, Finance'
    },
    {
      icon: Award,
      number: '99.9%',
      label: 'Uptime',
      description: 'Trading Bot hoạt động ổn định'
    },
    {
      icon: Globe,
      number: '24/7',
      label: 'Giao dịch',
      description: 'Hệ thống hoạt động liên tục'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Về <span className="text-primary-600">RBX</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            RBX là công ty công nghệ hàng đầu Việt Nam, tiên phong trong lĩnh vực Crypto, Blockchain
            và cung cấp các giải pháp Trading Bot, Quantitative Research cho thị trường tài chính số.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Tầm nhìn chiến lược
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              RBX đặt mục tiêu trở thành công ty hàng đầu Đông Nam Á về Crypto, Blockchain và Trading Bot,
              cung cấp các giải pháp tài chính số tiên tiến cho thị trường toàn cầu.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Trading Bot</h4>
                  <p className="text-gray-600">Phát triển các bot giao dịch tự động với thuật toán AI tiên tiến</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Blockchain</h4>
                  <p className="text-gray-600">Nghiên cứu và phát triển các giải pháp blockchain cho tài chính số</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Quantitative Research</h4>
                  <p className="text-gray-600">Phân tích dữ liệu và phát triển các mô hình định lượng</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8">
              <div className="aspect-video bg-gradient-to-br from-primary-200 to-secondary-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">R</span>
                  </div>
                  <p className="text-gray-600">Made by RBX</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
              <div className="font-semibold text-gray-900 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About