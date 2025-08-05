'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Save, X, Image as ImageIcon, Eye, EyeOff } from 'lucide-react'

interface PostEditorProps {
  post?: {
    id?: number
    title: string
    excerpt: string
    content: string
    category: string
    status: 'draft' | 'published'
    image?: string
  }
  onSave: (post: any) => void
  onCancel: () => void
}

const PostEditor = ({ post, onSave, onCancel }: PostEditorProps) => {
  const [formData, setFormData] = useState({
    title: post?.title || '',
    excerpt: post?.excerpt || '',
    content: post?.content || '',
    category: post?.category || 'Tin RBX',
    status: post?.status || 'draft',
    image: post?.image || ''
  })

  const [isPreview, setIsPreview] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      ...formData,
      id: post?.id,
      createdAt: new Date().toISOString()
    })
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">
            {post?.id ? 'Chỉnh sửa bài viết' : 'Thêm bài viết mới'}
          </h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsPreview(!isPreview)}
              className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
            >
              {isPreview ? <EyeOff className="w-4 h-4 mr-1" /> : <Eye className="w-4 h-4 mr-1" />}
              {isPreview ? 'Chỉnh sửa' : 'Xem trước'}
            </button>
            <button
              onClick={onCancel}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex h-[calc(90vh-120px)]">
            {/* Editor */}
            {!isPreview && (
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="space-y-6">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tiêu đề *
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => handleChange('title', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Nhập tiêu đề bài viết"
                      required
                    />
                  </div>

                  {/* Excerpt */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tóm tắt
                    </label>
                    <textarea
                      value={formData.excerpt}
                      onChange={(e) => handleChange('excerpt', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tóm tắt ngắn gọn về bài viết"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Danh mục
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => handleChange('category', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                                          <option value="Trading Bot">Trading Bot</option>
                    <option value="Blockchain">Blockchain</option>
                    <option value="Crypto">Crypto</option>
                    <option value="Research">Quantitative Research</option>
                    <option value="Tin RBX">Tin RBX</option>
                    <option value="Khác">Khác</option>
                    </select>
                  </div>

                  {/* Image */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hình ảnh
                    </label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="text"
                        value={formData.image}
                        onChange={(e) => handleChange('image', e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="URL hình ảnh"
                      />
                      <button
                        type="button"
                        className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                      >
                        <ImageIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nội dung *
                    </label>
                    <textarea
                      value={formData.content}
                      onChange={(e) => handleChange('content', e.target.value)}
                      rows={12}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent font-mono text-sm"
                      placeholder="Nhập nội dung bài viết..."
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Preview */}
            {isPreview && (
              <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">{formData.title}</h1>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>{new Date().toLocaleDateString('vi-VN')}</span>
                    <span className="mx-2">•</span>
                    <span className="text-primary-600 font-medium">{formData.category}</span>
                  </div>
                  {formData.excerpt && (
                    <p className="text-gray-600 mb-4 italic">{formData.excerpt}</p>
                  )}
                  <div className="prose max-w-none">
                    <p className="whitespace-pre-wrap">{formData.content}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Sidebar */}
            <div className="w-80 border-l border-gray-200 p-6 bg-gray-50">
              <div className="space-y-6">
                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Trạng thái
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => handleChange('status', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="draft">Bản nháp</option>
                    <option value="published">Đã đăng</option>
                  </select>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {post?.id ? 'Cập nhật' : 'Tạo bài viết'}
                  </button>
                  <button
                    type="button"
                    onClick={onCancel}
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium"
                  >
                    Hủy
                  </button>
                </div>

                {/* Info */}
                <div className="text-sm text-gray-500">
                  <p>• Tiêu đề: {formData.title.length}/100 ký tự</p>
                  <p>• Tóm tắt: {formData.excerpt.length}/200 ký tự</p>
                  <p>• Nội dung: {formData.content.length}/5000 ký tự</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  )
}

export default PostEditor