'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, Clock, DollarSign, Briefcase, Users, Calendar } from 'lucide-react'

interface JobPosition {
  id: number
  title: string
  department: string
  location: string
  type: string
  salary: string
  experience: string
  icon: any
  description: string
  requirements: string[]
  responsibilities: string[]
}

interface JobDetailModalProps {
  job: JobPosition | null
  isOpen: boolean
  onClose: () => void
}

const JobDetailModal = ({ job, isOpen, onClose }: JobDetailModalProps) => {
  if (!job) return null

  console.log('JobDetailModal render:', { isOpen, job: job.title, showFooter: true })

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200 flex-shrink-0">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <job.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>
                    <p className="text-primary-600 font-medium text-lg">{job.department}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto flex-1">
              {/* Job Info Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 text-primary-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Địa điểm</p>
                    <p className="text-sm">{job.location}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-3 text-primary-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Loại hình</p>
                    <p className="text-sm">{job.type}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="w-5 h-5 mr-3 text-primary-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Mức lương</p>
                    <p className="text-sm font-semibold text-green-600">{job.salary}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Briefcase className="w-5 h-5 mr-3 text-primary-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Kinh nghiệm</p>
                    <p className="text-sm">{job.experience}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Mô tả công việc</h3>
                <p className="text-gray-600 leading-relaxed">{job.description}</p>
              </div>

              {/* Requirements */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Yêu cầu</h3>
                <ul className="space-y-2">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsibilities */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Trách nhiệm</h3>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Lợi ích</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Lương cạnh tranh + Bonus
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Remote work linh hoạt
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Stock options
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Learning & Development
                  </div>
                </div>
              </div>
            </div>

            {/* Footer - Fixed at bottom */}
            <div className="p-6 border-t border-gray-200 bg-gray-50 flex-shrink-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Đóng
                </button>
                <button
                  onClick={() => {
                    onClose()
                    // Scroll to application form
                    document.getElementById('application-form')?.scrollIntoView({
                      behavior: 'smooth'
                    })
                  }}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Ứng tuyển ngay
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default JobDetailModal