'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
  disabled?: boolean  // 無効化オプション追加
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className = '',
  disabled = false  // デフォルトは無効化しない
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // disabled=trueの場合は何もしない
    if (disabled) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target) // 一度表示されたら監視を停止（パフォーマンス向上）
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px' // 事前読み込み
      }
    )

    const element = ref.current
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const directions = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
    none: {}
  }

  // disabled=trueの場合は即座に表示（アニメーションなし）
  if (disabled) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directions[direction]
      }}
      animate={isVisible ? {
        opacity: 1,
        x: 0,
        y: 0
      } : {}}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}