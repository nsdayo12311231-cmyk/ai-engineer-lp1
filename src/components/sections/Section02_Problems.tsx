'use client'

import React from 'react'
import { FadeIn } from '../animations/FadeIn'

export const Section02_Problems: React.FC = () => {
  const problems = [
    {
      text: "キャリアアップ",
      highlight: "に限界を感じる",
      color: "from-red-400 to-red-600"
    },
    {
      text: "転職したいが",
      highlight: "スキル",
      suffix: "がない",
      color: "from-orange-400 to-red-500"
    },
    {
      text: "AIに",
      highlight: "仕事を奪われる",
      suffix: "のではないか",
      color: "from-purple-400 to-red-500"
    },
    {
      text: "学んでも",
      highlight: "実務で使える",
      suffix: "のか不安",
      color: "from-blue-400 to-purple-500"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-blue-50 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-15 blur-xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full opacity-15 blur-xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* メインタイトル */}
          <FadeIn delay={0.2} disabled={true}>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  こんな悩みを感じていませんか？
                </span>
              </h2>
            </div>
          </FadeIn>

          {/* 問題リスト + イラスト */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* 左側：問題リスト */}
            <div className="flex-1 space-y-8">
              {problems.map((problem, index) => (
                <FadeIn key={index} delay={0.4 + index * 0.2}>
                  <div className="flex items-center gap-4 group">
                    {/* ブレット */}
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                    
                    {/* 問題テキスト */}
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-700">
                      <span>{problem.text}</span>
                      <span className={`bg-gradient-to-r ${problem.color} bg-clip-text text-transparent mx-1`}>
                        {problem.highlight}
                      </span>
                      {problem.suffix && <span>{problem.suffix}</span>}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* 右側：イラスト */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <FadeIn delay={1.0} disabled={true}>
                <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                  {/* 困った人のSVGイラスト */}
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    {/* 背景円 */}
                    <circle cx="200" cy="200" r="180" fill="url(#worryGradient)" opacity="0.1" />
                    
                    {/* グラデーション定義 */}
                    <defs>
                      <linearGradient id="worryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                      <linearGradient id="personGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#64748B" />
                        <stop offset="100%" stopColor="#475569" />
                      </linearGradient>
                    </defs>
                    
                    {/* 人物のシルエット */}
                    <g transform="translate(200, 200)">
                      {/* 頭 */}
                      <circle cx="0" cy="-60" r="35" fill="url(#personGradient)" />
                      
                      {/* 体 */}
                      <rect x="-25" y="-25" width="50" height="80" rx="10" fill="url(#personGradient)" />
                      
                      {/* 腕（困ったポーズ） */}
                      <rect x="-45" y="-15" width="15" height="40" rx="7" fill="url(#personGradient)" transform="rotate(-20)" />
                      <rect x="30" y="-15" width="15" height="40" rx="7" fill="url(#personGradient)" transform="rotate(20)" />
                      
                      {/* 足 */}
                      <rect x="-15" y="55" width="12" height="45" rx="6" fill="url(#personGradient)" />
                      <rect x="3" y="55" width="12" height="45" rx="6" fill="url(#personGradient)" />
                      
                      {/* 困った表情（？マーク） */}
                      <text x="25" y="-40" fontSize="24" fill="#EF4444" fontWeight="bold">？</text>
                      <text x="-35" y="-35" fontSize="20" fill="#F59E0B" fontWeight="bold">！</text>
                      <text x="30" y="20" fontSize="18" fill="#EF4444">？</text>
                    </g>
                    
                    {/* 不安要素の雲 */}
                    <g opacity="0.6">
                      <ellipse cx="120" cy="100" rx="25" ry="15" fill="#94A3B8" />
                      <ellipse cx="300" cy="130" rx="30" ry="18" fill="#94A3B8" />
                      <ellipse cx="80" cy="320" rx="20" ry="12" fill="#94A3B8" />
                      <ellipse cx="320" cy="290" rx="28" ry="16" fill="#94A3B8" />
                    </g>
                  </svg>
                  
                  {/* 画像サンプル注記 */}
                  <div className="absolute bottom-4 right-4 text-sm text-slate-500 opacity-60">
                    ※画像サンプル
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}