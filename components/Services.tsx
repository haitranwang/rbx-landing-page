'use client'

import { motion } from 'framer-motion'
import { Code, Wifi, GraduationCap, Building2 } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Trading Bot',
      description: 'Phát triển các bot giao dịch tự động với thuật toán AI tiên tiến, tối ưu hóa lợi nhuận và giảm thiểu rủi ro.',
      features: ['AI Trading Algorithms', 'Risk Management', 'Real-time Monitoring', 'Multi-exchange Support']
    },
    {
      icon: Wifi,
      title: 'Blockchain Solutions',
      description: 'Cung cấp các giải pháp blockchain toàn diện cho DeFi, NFT, Smart Contracts và ứng dụng tài chính phi tập trung.',
      features: ['DeFi Development', 'Smart Contracts', 'NFT Platforms', 'Cross-chain Solutions']
    },
    {
      icon: GraduationCap,
      title: 'Quantitative Research',
      description: 'Nghiên cứu định lượng chuyên sâu với các mô hình toán học và phân tích dữ liệu thị trường tài chính.',
      features: ['Market Analysis', 'Statistical Models', 'Backtesting', 'Portfolio Optimization']
    },
    {
      icon: Building2,
      title: 'Crypto Solutions',
      description: 'Giải pháp toàn diện cho thị trường cryptocurrency bao gồm exchange, wallet và các dịch vụ tài chính số.',
      features: ['Crypto Exchange', 'Digital Wallet', 'Payment Gateway', 'Crypto Consulting']
    }
  ]

  return (
    <section id="ecosystem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Giải pháp <span className="text-primary-600">RBX</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            RBX tiên phong trong lĩnh vực Crypto, Blockchain và Trading Bot. Chúng tôi cung cấp các giải pháp
            tài chính số toàn diện, từ bot giao dịch tự động đến nghiên cứu định lượng chuyên sâu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 text-primary-600 hover:text-primary-700 font-semibold transition-colors">
                Xem thêm →
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
                      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Powered by RBX</h3>
              <p className="text-xl mb-6 max-w-3xl mx-auto">
                Với công nghệ AI và blockchain tiên tiến, RBX cung cấp các giải pháp tài chính số
                giúp nhà đầu tư tối ưu hóa lợi nhuận, giảm thiểu rủi ro và tham gia vào thị trường
                cryptocurrency một cách an toàn và hiệu quả.
              </p>
              <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Demo Trading Bot
              </button>
            </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services