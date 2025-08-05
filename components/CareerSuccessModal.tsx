'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Mail, X } from 'lucide-react'

interface CareerSuccessModalProps {
  isOpen: boolean
  onClose: () => void
  position: string
}

const CareerSuccessModal = ({ isOpen, onClose, position }: CareerSuccessModalProps) => {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Gửi ứng tuyển thành công!
        </h3>

        <p className="text-gray-600 mb-6">
          Cảm ơn bạn đã quan tâm đến vị trí <span className="font-semibold">{position}</span> tại RBX.
          Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
        </p>

        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center mb-2">
            <Mail className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-600 font-medium">hr@rbx.vn</span>
          </div>
          <p className="text-sm text-blue-700">
            Email ứng tuyển đã được gửi đến địa chỉ trên
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={onClose}
            className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
          >
            Đóng
          </button>
          <button
            onClick={() => window.location.href = '/careers'}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold transition-colors"
          >
            Xem thêm vị trí khác
          </button>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
      </motion.div>
    </motion.div>
  )
}

export default CareerSuccessModal