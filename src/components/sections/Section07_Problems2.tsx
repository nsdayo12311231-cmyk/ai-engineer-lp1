'use client'

import React from 'react'
import { FadeIn } from '../animations/FadeIn'

export const Section07_Problems2: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-red-50 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 left-20 w-80 h-80 bg-red-300 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-300 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* メインタイトル */}
          <FadeIn delay={0.2} disabled={true}>
            <div className="text-center mb-16">
              <div className="inline-block bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl px-8 py-4 mb-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  他のスクールでよくある<br />落とし穴が...
                </h2>
              </div>
              
              <FadeIn delay={0.4} disabled={true}>
                <p className="text-slate-700 text-lg sm:text-xl md:text-2xl font-medium">
                  知識止まりで実務に直結しないのが<br />現実...！
                </p>
              </FadeIn>
            </div>
          </FadeIn>

          {/* 4つの問題点グリッド - 最大限コンパクト */}
          <div className="grid grid-cols-2 gap-1 mb-6 max-w-2xl mx-auto">
            
            {/* 問題1: 動画や教材を眺めるだけで終了 */}
            <FadeIn delay={0.2} disabled={true}>
              <div className="bg-white rounded-md p-2 shadow border border-red-200">
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-1 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-base">📺</span>
                  </div>
                  
                  <h3 className="text-xs font-bold text-red-600 leading-tight">
                    動画や教材を眺めるだけで終了
                  </h3>
                  
                </div>
              </div>
            </FadeIn>

            {/* 問題2: 資格取得がゴールになっている */}
            <FadeIn delay={0.3} disabled={true}>
              <div className="bg-white rounded-md p-2 shadow border border-red-200">
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-1 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-base">🏆</span>
                  </div>
                  
                  <h3 className="text-xs font-bold text-red-600 leading-tight">
                    資格取得がゴールになっている
                  </h3>
                  
                </div>
              </div>
            </FadeIn>

            {/* 問題3: 知識は増えるが実務に活かせない */}
            <FadeIn delay={0.4} disabled={true}>
              <div className="bg-white rounded-md p-2 shadow border border-red-200">
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-1 bg-gradient-to-br from-green-100 to-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-base">📚</span>
                  </div>
                  
                  <h3 className="text-xs font-bold text-red-600 leading-tight">
                    知識は増えるが実務に活かせない
                  </h3>
                  
                </div>
              </div>
            </FadeIn>

            {/* 問題4: 副業で稼げるばかり強調 */}
            <FadeIn delay={0.5} disabled={true}>
              <div className="bg-white rounded-md p-2 shadow border border-red-200">
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-1 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-base">💰</span>
                  </div>
                  
                  <h3 className="text-xs font-bold text-red-600 leading-tight">
                    副業で稼げるばかり強調
                  </h3>
                  
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 結論メッセージ */}
          <FadeIn delay={0.6} disabled={true}>
            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 rounded-full px-12 py-6 shadow-2xl">
                <p className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                  知識止まりで実務に直結しないのが現実...！
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}