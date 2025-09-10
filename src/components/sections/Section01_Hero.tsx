'use client'

import React from 'react'
import { FadeIn } from '../animations/FadeIn'
import { CTAButton } from '../common/CTAButton'

export const Section01_Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景グラデーション（PDFの紫-青グラデーション） */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-blue-800" />
      
      {/* 動的な背景要素 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 浮遊する円形要素 */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse" />
        <div className="absolute top-40 left-40 w-16 h-16 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* 幾何学的なライン */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 1080">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 300 Q500 200 1000 300 T1920 300" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          <path d="M0 500 Q400 400 800 500 T1920 500" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
        </svg>
      </div>
      
      {/* 背景のオーバーレイ */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* 強化されたビジュアル要素 */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 overflow-hidden z-5">
        {/* 大きなAIアイコン */}
        <div className="absolute top-1/4 right-8 w-32 h-32 opacity-20 animate-pulse">
          <svg viewBox="0 0 128 128" className="w-full h-full text-white">
            <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="3" fill="none" />
            <circle cx="64" cy="64" r="8" fill="currentColor" />
            <path d="M64 12 L64 36 M64 92 L64 116 M12 64 L36 64 M92 64 L116 64" stroke="currentColor" strokeWidth="3" />
            <path d="M28 28 L48 48 M80 48 L100 28 M100 100 L80 80 M48 80 L28 100" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        
        {/* デジタル要素 */}
        <div className="absolute bottom-1/3 right-16 w-20 h-20 opacity-30 animate-bounce" style={{ animationDelay: '1s' }}>
          <svg viewBox="0 0 80 80" className="w-full h-full text-white">
            <rect x="10" y="10" width="60" height="60" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M20 20 L60 60 M60 20 L20 60" stroke="currentColor" strokeWidth="1" />
            <circle cx="40" cy="40" r="8" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:max-w-2xl">
          
          {/* メインタイトル - 超インパクト版 */}
          <FadeIn delay={0.2}>
            <h1 className="text-white mb-8 relative">
              <span className="block text-xl sm:text-2xl md:text-3xl font-bold mb-4 opacity-95 tracking-wider">
                社内で唯一の
              </span>
              <span className="block relative mb-4">
                <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black relative z-10">
                  <span className="bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent animate-pulse">
                    "AI人材"
                  </span>
                </span>
                {/* 強力な光のエフェクト */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-white/30 to-cyan-400/20 blur-md -z-10 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/15 via-white/20 to-cyan-200/15 blur-lg -z-20" />
              </span>
              <span className="block text-xl sm:text-2xl md:text-3xl font-bold opacity-95 tracking-wider">
                になる
              </span>
            </h1>
          </FadeIn>

          {/* サブタイトル - 強化版 */}
          <FadeIn delay={0.4} disabled={true}>
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10 relative">
              <span className="bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
                実践型AIエンジニア講座
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 opacity-60 animate-pulse" />
            </h2>
          </FadeIn>

          {/* 説明文 - 強化版 */}
          <FadeIn delay={0.6} disabled={true}>
            <div className="text-white text-lg sm:text-xl md:text-2xl mb-12 space-y-3">
              <p className="font-bold bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
                ✦ 社内へ本気で価値提供
              </p>
              <p className="font-bold bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">
                ✦ 社外での活躍へと繋がる
              </p>
              <p className="font-bold bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent">
                ✦ 実践型カリキュラム
              </p>
            </div>
          </FadeIn>

          {/* CTAボタン - 超インパクト版 */}
          <FadeIn delay={0.8} disabled={true}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <CTAButton 
                size="lg"
                className="text-xl sm:text-2xl px-12 py-6 shadow-2xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 animate-pulse border-2 border-yellow-300"
              >
                <span className="font-black tracking-wide">
                  📱 LINE登録で詳細を受け取る
                </span>
              </CTAButton>
            </div>
          </FadeIn>

          {/* 注記テキスト */}
          <FadeIn delay={1.0} disabled={true}>
            <div className="mt-8 text-white/80 text-sm space-y-1">
              <p>※ボタン配置</p>
              <p>※画面下に同ボタン常時表示</p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* モバイル用の画像プレースホルダー */}
      <div className="absolute bottom-4 right-4 lg:hidden">
        <div className="text-white/60 text-xs">※画像サンプル</div>
      </div>

      {/* 下部のスクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center text-white/70">
          <div className="text-sm mb-2">スクロール</div>
          <div className="w-px h-12 bg-white/30 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}