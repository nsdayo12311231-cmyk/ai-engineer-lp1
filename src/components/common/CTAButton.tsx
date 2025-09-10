'use client'

import React from 'react'

interface CTAButtonProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary'
  className?: string
  children?: React.ReactNode
}

export const CTAButton: React.FC<CTAButtonProps> = ({ 
  size = 'lg', 
  variant = 'primary',
  className = '',
  children = 'LINE登録で詳細を受け取る'
}) => {
  const handleLineClick = () => {
    // LINE公式アカウントの登録URL（実際のURLに変更してください）
    window.open('https://line.me/R/ti/p/@your-line-account', '_blank')
  }

  const sizeClasses = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-12 py-5 text-lg md:text-xl'
  }

  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
  }

  return (
    <button
      onClick={handleLineClick}
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95
        ${className}
        flex items-center justify-center gap-2
      `}
    >
      <span>📱</span>
      {children}
    </button>
  )
}