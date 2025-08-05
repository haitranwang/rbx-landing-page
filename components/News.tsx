'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

const News = () => {
  const news = [
    {
      id: 1,
      title: 'RBX ra mắt Trading Bot mới với AI tiên tiến',
      excerpt: 'RBX vừa ra mắt phiên bản Trading Bot mới với thuật toán AI tiên tiến, có khả năng phân tích thị trường real-time và tối ưu hóa lợi nhuận.',
      date: '17/07/2025',
      category: 'Trading Bot',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'RBX phát triển giải pháp DeFi cho thị trường Việt Nam',
      excerpt: 'RBX đang phát triển các giải pháp DeFi (Decentralized Finance) phù hợp với thị trường Việt Nam, bao gồm lending, yield farming và staking.',
      date: '15/07/2025',
      category: 'Blockchain',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Nghiên cứu định lượng: Xu hướng thị trường Crypto 2025',
      excerpt: 'Đội ngũ Quantitative Research của RBX phân tích xu hướng thị trường cryptocurrency và dự báo các cơ hội đầu tư tiềm năng trong năm 2025.',
      date: '12/07/2025',
      category: 'Research',
      image: '/api/placeholder/400/250'
    }
  ]

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tin tức <span className="text-primary-600">Crypto</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cập nhật những tin tức mới nhất về thị trường Crypto, Blockchain và các sản phẩm của RBX.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
            >
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">R</span>
                  </div>
                  <p className="text-gray-600">RBX News</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.date}
                  <span className="mx-2">•</span>
                  <span className="text-primary-600 font-medium">{item.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <button className="text-primary-600 hover:text-primary-700 font-semibold flex items-center group-hover:translate-x-1 transition-all">
                  Xem thêm
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Xem tất cả tin tức
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default News