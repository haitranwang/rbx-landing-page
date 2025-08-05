import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RBX - Crypto & Blockchain Solutions',
  description: 'RBX - Công ty công nghệ hàng đầu Việt Nam chuyên về Crypto, Blockchain, Trading Bot và Quantitative Research',
  keywords: 'RBX, crypto, blockchain, trading bot, quantitative research, cryptocurrency, Việt Nam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}