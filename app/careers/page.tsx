'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code,
  Database,
  TrendingUp,
  Shield,
  Users,
  Send,
  MapPin,
  Clock,
  DollarSign,
  Briefcase
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CareerSuccessModal from '@/components/CareerSuccessModal'
import JobDetailModal from '@/components/JobDetailModal'

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showJobModal, setShowJobModal] = useState(false)
  const [selectedJobData, setSelectedJobData] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null as File | null
  })

  const jobPositions = [
    {
      id: 1,
      title: 'Senior Blockchain Developer',
      department: 'Blockchain',
      location: 'Hà Nội / Remote',
      type: 'Full-time',
      salary: '2,000 - 4,000 USD',
      experience: '3-5 năm',
      icon: Code,
      description: 'Phát triển các giải pháp blockchain, smart contracts và DeFi protocols.',
      requirements: [
        'Thành thạo Solidity, Rust hoặc Go',
        'Kinh nghiệm với Ethereum, Polkadot hoặc Cosmos',
        'Hiểu biết sâu về DeFi protocols',
        'Kinh nghiệm với Web3.js, Ethers.js',
        'Có portfolio về blockchain projects'
      ],
      responsibilities: [
        'Thiết kế và phát triển smart contracts',
        'Tối ưu hóa gas fees và security',
        'Làm việc với cross-chain solutions',
        'Code review và mentoring junior developers'
      ]
    },
    {
      id: 2,
      title: 'Quantitative Researcher',
      department: 'Research',
      location: 'Hà Nội',
      type: 'Full-time',
      salary: '3,000 - 6,000 USD',
      experience: '2-4 năm',
      icon: TrendingUp,
      description: 'Nghiên cứu và phát triển các mô hình định lượng cho trading strategies.',
      requirements: [
        'Thạc sĩ/PhD về Toán, Thống kê, hoặc Tài chính',
        'Thành thạo Python, R, hoặc MATLAB',
        'Kinh nghiệm với machine learning algorithms',
        'Hiểu biết về financial markets',
        'Có publication trong lĩnh vực quantitative finance'
      ],
      responsibilities: [
        'Phát triển trading algorithms',
        'Backtesting và optimization',
        'Risk management models',
        'Market analysis và forecasting'
      ]
    },
    {
      id: 3,
      title: 'AI Trading Bot Developer',
      department: 'Trading',
      location: 'Hà Nội / Remote',
      type: 'Full-time',
      salary: '2,500 - 5,000 USD',
      experience: '2-4 năm',
      icon: Code,
      description: 'Phát triển các trading bot sử dụng AI và machine learning.',
      requirements: [
        'Thành thạo Python, C++ hoặc Java',
        'Kinh nghiệm với TensorFlow, PyTorch',
        'Hiểu biết về financial APIs',
        'Kinh nghiệm với real-time systems',
        'Có background về trading hoặc finance'
      ],
      responsibilities: [
        'Phát triển trading algorithms',
        'Tích hợp với các exchanges',
        'Monitoring và maintenance',
        'Performance optimization'
      ]
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Hà Nội',
      type: 'Full-time',
      salary: '1,500 - 3,000 USD',
      experience: '2-3 năm',
      icon: Shield,
      description: 'Quản lý infrastructure và deployment cho các hệ thống trading.',
      requirements: [
        'Thành thạo Docker, Kubernetes',
        'Kinh nghiệm với AWS, GCP hoặc Azure',
        'Hiểu biết về CI/CD pipelines',
        'Kinh nghiệm với monitoring tools',
        'Có background về security'
      ],
      responsibilities: [
        'Quản lý cloud infrastructure',
        'Automation và deployment',
        'Security và compliance',
        'Performance monitoring'
      ]
    },
    {
      id: 5,
      title: 'Data Scientist',
      department: 'Data',
      location: 'Hà Nội / Remote',
      type: 'Full-time',
      salary: '2,000 - 4,000 USD',
      experience: '2-4 năm',
      icon: Database,
      description: 'Phân tích dữ liệu thị trường và phát triển insights cho trading decisions.',
      requirements: [
        'Thành thạo Python, SQL',
        'Kinh nghiệm với pandas, numpy, scikit-learn',
        'Hiểu biết về data visualization',
        'Kinh nghiệm với big data technologies',
        'Có background về statistics'
      ],
      responsibilities: [
        'Data analysis và modeling',
        'Feature engineering',
        'Model validation',
        'Reporting và visualization'
      ]
    },
    {
      id: 6,
      title: 'Business Development Manager',
      department: 'Business',
      location: 'Hà Nội / TP.HCM',
      type: 'Full-time',
      salary: '1,500 - 3,000 USD',
      experience: '3-5 năm',
      icon: Users,
      description: 'Phát triển quan hệ đối tác và mở rộng thị trường cho các sản phẩm crypto.',
      requirements: [
        'Kinh nghiệm trong fintech hoặc crypto',
        'Network mạnh trong crypto community',
        'Kỹ năng negotiation và communication',
        'Hiểu biết về regulatory landscape',
        'Có kinh nghiệm international business'
      ],
      responsibilities: [
        'Tìm kiếm và phát triển partnerships',
        'Market research và strategy',
        'Client relationship management',
        'Regulatory compliance'
      ]
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Gửi email đến hr@rbx.vn
    const mailtoLink = `mailto:hr@rbx.vn?subject=Ứng tuyển vị trí ${formData.position}&body=Tên: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AĐiện thoại: ${formData.phone}%0D%0AKinh nghiệm: ${formData.experience}%0D%0A%0D%0ANội dung: ${formData.message}`
    window.open(mailtoLink)
    setShowSuccessModal(true)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }))
    }
  }

  const handleJobClick = (job: any) => {
    console.log('Job clicked:', job.title)
    setSelectedJobData(job)
    setShowJobModal(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Gia nhập <span className="text-primary-600">RBX</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Tham gia cùng chúng tôi xây dựng tương lai của tài chính số.
              RBX đang tìm kiếm những tài năng xuất sắc trong lĩnh vực Crypto, Blockchain và AI.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600">Vị trí đang tuyển</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-primary-600 mb-2">Remote</div>
                <div className="text-gray-600">Làm việc từ xa</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-primary-600 mb-2">Competitive</div>
                <div className="text-gray-600">Lương cạnh tranh</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vị trí đang tuyển
            </h2>
            <p className="text-lg text-gray-600">
              Khám phá các cơ hội nghề nghiệp tại RBX
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobPositions.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-primary-500"
                onClick={() => handleJobClick(job)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleJobClick(job)
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Xem chi tiết vị trí ${job.title}`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-200 transition-colors">
                        <job.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">{job.title}</h3>
                        <p className="text-primary-600 font-medium">{job.department}</p>
                      </div>
                    </div>
                    <div className="text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{job.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                      {job.type}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <DollarSign className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="font-semibold text-green-600">{job.salary}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Briefcase className="w-4 h-4 mr-2 flex-shrink-0" />
                      {job.experience}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary-600 font-medium">Xem chi tiết</span>
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                      <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ứng tuyển ngay
            </h2>
            <p className="text-lg text-gray-600">
              Gửi CV và thông tin ứng tuyển về <span className="text-primary-600 font-medium">hr@rbx.vn</span>
            </p>
          </motion.div>

          <motion.div
            id="application-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                    placeholder="Nhập họ và tên"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                    placeholder="example@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                    placeholder="+84 xxx xxx xxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vị trí ứng tuyển *
                  </label>
                  <select
                    value={formData.position}
                    onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-gray-900"
                    required
                  >
                    <option value="">Chọn vị trí</option>
                    {jobPositions.map(job => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kinh nghiệm làm việc
                </label>
                <textarea
                  value={formData.experience}
                  onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                  placeholder="Mô tả kinh nghiệm làm việc của bạn..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CV/Resume
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                />
                <p className="text-sm text-gray-500 mt-1">Chấp nhận file PDF, DOC, DOCX (tối đa 5MB)</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Thông tin bổ sung
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                  placeholder="Giới thiệu về bản thân, lý do ứng tuyển, portfolio, GitHub, LinkedIn..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Gửi ứng tuyển
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tại sao chọn RBX?
            </h2>
            <p className="text-lg text-gray-600">
              Những lợi ích khi làm việc tại RBX
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Lương cạnh tranh',
                description: 'Mức lương cao hơn thị trường 20-30% với bonus theo performance',
                icon: DollarSign
              },
              {
                title: 'Remote work',
                description: 'Làm việc từ xa linh hoạt, không bị giới hạn địa lý',
                icon: MapPin
              },
              {
                title: 'Learning & Development',
                description: 'Được đào tạo về Crypto, Blockchain và AI cutting-edge',
                icon: Users
              },
              {
                title: 'Stock options',
                description: 'Cơ hội sở hữu cổ phần công ty và token allocation',
                icon: TrendingUp
              },
              {
                title: 'Flexible hours',
                description: 'Thời gian làm việc linh hoạt, focus vào kết quả',
                icon: Clock
              },
              {
                title: 'Global team',
                description: 'Làm việc với team quốc tế, môi trường đa văn hóa',
                icon: Users
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <CareerSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        position={formData.position}
      />

      <JobDetailModal
        job={selectedJobData}
        isOpen={showJobModal}
        onClose={() => {
          console.log('Closing modal')
          setShowJobModal(false)
          setSelectedJobData(null)
        }}
      />
    </div>
  )
}

export default CareersPage