'use client'

import React from 'react'
import { FadeIn } from '../animations/FadeIn'

export const Section03_Solution: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 relative overflow-hidden">
      {/* 背景の放射状パターン */}
      <div className="absolute inset-0">
        <svg viewBox="0 0 1200 800" className="w-full h-full opacity-20">
          <defs>
            <radialGradient id="solutionGradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.3" />
              <stop offset="50%" stopColor="white" stopOpacity="0.1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* 放射状ライン */}
          {Array.from({ length: 16 }).map((_, i) => (
            <line
              key={i}
              x1="600"
              y1="400"
              x2={600 + 500 * Math.cos((i * Math.PI * 2) / 16)}
              y2={400 + 500 * Math.sin((i * Math.PI * 2) / 16)}
              stroke="url(#solutionGradient)"
              strokeWidth="2"
            />
          ))}
          {/* 中心円 */}
          <circle cx="600" cy="400" r="100" fill="url(#solutionGradient)" />
          <circle cx="600" cy="400" r="200" fill="none" stroke="url(#solutionGradient)" strokeWidth="2" />
          <circle cx="600" cy="400" r="300" fill="none" stroke="url(#solutionGradient)" strokeWidth="1" />
        </svg>
      </div>

      {/* 浮遊要素 */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
      <div className="absolute top-32 right-20 w-16 h-16 bg-white/15 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* 導入テキスト */}
          <FadeIn delay={0.2}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 tracking-wider">
              解決方法は...
            </h2>
          </FadeIn>

          {/* メインタイトル */}
          <FadeIn delay={0.4} disabled={true}>
            <div className="mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 relative">
                <span className="bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent animate-pulse">
                  AIエンジニアスキル
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/15 via-white/25 to-cyan-400/15 blur-lg -z-10" />
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white relative">
                <span className="bg-gradient-to-r from-cyan-300 via-white to-yellow-300 bg-clip-text text-transparent">
                  を身に付けることです！
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/15 via-white/25 to-yellow-400/15 blur-lg -z-10" />
              </h1>
            </div>
          </FadeIn>

          {/* 説明テキスト3段落 */}
          <div className="space-y-8 text-white text-lg sm:text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
            
            <FadeIn delay={0.6} disabled={true}>
              <p className="font-medium bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                これからの時代は<span className="font-bold text-yellow-300">&quot;AIを使う人&quot;</span>ではなく<br />
                <span className="font-bold text-yellow-300">&quot;AIを作れる人&quot;</span>が必要とされます。
              </p>
            </FadeIn>

            <FadeIn delay={0.8} disabled={true}>
              <p className="font-medium bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                多くの講座は知識を学ぶだけで終わります。<br />
                資格取得やノウハウだけでは実務にはなかなか活かせません。
              </p>
            </FadeIn>

            <FadeIn delay={1.0} disabled={true}>
              <div className="relative">
                <p className="font-bold text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent">
                  本講座は実践特化。<span className="font-black">&quot;あなたの業務に直結するツール&quot;</span>を作りながら学び、社内や社会で価値提供できるAI人材を育てます。
                </p>
                {/* 強調ライン */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-yellow-400 via-white to-cyan-400 opacity-80 animate-pulse" />
              </div>
            </FadeIn>
          </div>

          {/* 装飾要素 */}
          <FadeIn delay={1.2} disabled={true}>
            <div className="mt-16 flex justify-center items-center space-x-8">
              {/* AI関連アイコン */}
              <div className="w-16 h-16 opacity-60 animate-spin" style={{ animationDuration: '10s' }}>
                <svg viewBox="0 0 64 64" className="w-full h-full text-white">
                  <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="32" cy="32" r="4" fill="currentColor" />
                  <path d="M32 8 L32 20 M32 44 L32 56 M8 32 L20 32 M44 32 L56 32" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              
              <div className="text-white text-4xl font-bold opacity-60">⚡</div>
              
              <div className="w-16 h-16 opacity-60 animate-pulse">
                <svg viewBox="0 0 64 64" className="w-full h-full text-white">
                  <rect x="8" y="8" width="48" height="48" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M16 16 L48 48 M48 16 L16 48" stroke="currentColor" strokeWidth="2" />
                  <circle cx="32" cy="32" r="8" fill="currentColor" />
                </svg>
              </div>
            </div>
          </FadeIn>

          {/* 画像サンプル注記 */}
          <FadeIn delay={1.4} disabled={true}>
            <div className="mt-12 text-white/60 text-sm">
              ※画像サンプル
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}