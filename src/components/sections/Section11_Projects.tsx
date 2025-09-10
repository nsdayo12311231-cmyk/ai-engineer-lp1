'use client'

import React, { useState } from 'react'
import { FadeIn } from '../animations/FadeIn'

export const Section11_Projects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const projects = [
    {
      title: "AIサポートアシスタント",
      description: "チャット形式で社内問い合わせに自動回答するシステム",
      week: "Week 3-4 (2週間)",
      icon: "🚀"
    },
    {
      title: "リアルタイム在庫管理アプリ",
      description: "AI予測機能付きの在庫管理システム",
      week: "Week 7 (1週間・中間発表)",
      icon: "🚀"
    },
    {
      title: "社内ナレッジ共有システム",
      description: "文書を自動分類・検索可能なナレッジベース",
      week: "Week 7-8 (10日間)",
      icon: "🚀"
    },
    {
      title: "業務効率化ダッシュボード",
      description: "各部署のデータを統合・可視化するダッシュボード",
      week: "Week 9-10 (2週間)",
      icon: "🚀"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* メインタイトル */}
          <FadeIn delay={0.2} disabled={true}>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-800 mb-8">
                実際の制作課題
              </h2>
              <p className="text-xl text-gray-600 font-medium">
                実践的なAIツールを段階的に制作していきます
              </p>
            </div>
          </FadeIn>

          {/* スライダーエリア */}
          <div className="relative">
            <FadeIn delay={0.4} disabled={true}>
              <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-blue-200 rounded-3xl p-8 md:p-16 relative overflow-hidden">
                
                {/* 中央カード */}
                <div className="flex justify-center">
                  <div className="w-80 h-96 md:w-96 md:h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col justify-center items-center relative">
                    
                    {/* アイコンエリア */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-8xl md:text-9xl mb-6">
                          {projects[currentSlide].icon}
                        </div>
                        <p className="text-blue-600 text-lg font-medium">
                          ※アプリ画面サンプル
                        </p>
                      </div>
                    </div>
                    
                    {/* 下部情報 */}
                    <div className="p-8 pt-0">
                      <div className="text-center mb-4">
                        <span className="inline-block bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-lg font-bold">
                          {projects[currentSlide].week}
                        </span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-black text-gray-800 text-center">
                        {projects[currentSlide].title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* ナビゲーションボタン */}
                <button
                  onClick={prevSlide}
                  className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors z-10"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors z-10"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </FadeIn>

            {/* インジケーター */}
            <div className="flex justify-center gap-3 mt-12">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}