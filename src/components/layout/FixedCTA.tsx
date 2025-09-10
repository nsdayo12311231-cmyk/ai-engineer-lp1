'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CTAButton } from '../common/CTAButton'

export const FixedCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      
      // スクロール位置が100px以上で表示
      setIsVisible(scrollTop > 100)
      
      // 最下部近くにいる時は少し上にずらす
      setIsAtBottom(scrollTop + windowHeight > docHeight - 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`
            fixed left-4 right-4 z-40 md:left-1/2 md:transform md:-translate-x-1/2 md:max-w-sm
            ${isAtBottom ? 'bottom-8' : 'bottom-4'}
          `}
        >
          <div className="bg-white rounded-full shadow-2xl border border-gray-100 p-2">
            <CTAButton 
              size="md"
              className="w-full shadow-none hover:shadow-lg pulse-animation"
            />
          </div>
          
          {/* 上向き矢印アニメーション */}
          <div className="flex justify-center mt-2">
            <motion.div
              animate={{ y: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}