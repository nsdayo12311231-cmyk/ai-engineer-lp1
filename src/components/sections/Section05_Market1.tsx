'use client'

import React from 'react'
import { FadeIn } from '../animations/FadeIn'

export const Section05_Market1: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-slate-100 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 right-20 w-80 h-80 bg-blue-300 rounded-full blur-xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-300 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* メインタイトル */}
          <FadeIn delay={0.2} disabled={true}>
            <div className="text-center mb-16">
              <div className="inline-block bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl px-8 py-4 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  なぜ<span className="text-yellow-300">"今"</span>AIスキルが必要なのか？
                </h2>
              </div>
              
              <FadeIn delay={0.4} disabled={true}>
                <p className="text-slate-700 text-xl sm:text-2xl md:text-3xl font-medium">
                  世界中でAI人材が不足し、日本は特に遅れを取っています。
                </p>
              </FadeIn>
            </div>
          </FadeIn>

          {/* メインコンテンツ */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* 左側：市場データ */}
            <div className="flex-1">
              <FadeIn delay={0.6} disabled={true}>
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 shadow-xl">
                  <div className="text-center space-y-6">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-6">
                      世界のAI市場は急拡大
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="text-lg sm:text-xl md:text-2xl text-blue-700 font-medium">
                        <span className="font-bold text-3xl sm:text-4xl text-blue-800">2030年</span>には<span className="font-bold text-red-600">数百兆円規模</span>に拡大予定。
                      </div>
                      
                      <div className="text-lg sm:text-xl text-blue-600 font-medium">
                        今はまだ<span className="font-bold text-purple-600">黎明期</span>。
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* 右側：グラフ風ビジュアル */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <FadeIn delay={0.8} disabled={true}>
                <div className="w-full max-w-md h-96 relative">
                  {/* シンプルなグラフ風デザイン */}
                  <div className="w-full h-full bg-white rounded-2xl p-6 shadow-xl">
                    <div className="h-full flex flex-col">
                      {/* グラフタイトル */}
                      <div className="text-center mb-6">
                        <h4 className="text-lg font-bold text-slate-700">AI市場成長予測</h4>
                      </div>
                      
                      {/* 棒グラフ風 */}
                      <div className="flex-1 flex items-end justify-center space-x-4">
                        <div className="flex flex-col items-center space-y-2">
                          <div className="w-12 h-20 bg-gradient-to-t from-blue-400 to-blue-600 rounded-t" />
                          <span className="text-xs text-slate-600">2020</span>
                        </div>
                        
                        <div className="flex flex-col items-center space-y-2">
                          <div className="w-12 h-32 bg-gradient-to-t from-cyan-400 to-cyan-600 rounded-t" />
                          <span className="text-xs text-slate-600">2023</span>
                        </div>
                        
                        <div className="flex flex-col items-center space-y-2">
                          <div className="w-12 h-48 bg-gradient-to-t from-green-400 to-green-600 rounded-t animate-pulse" />
                          <span className="text-xs text-slate-600 font-bold">2030</span>
                        </div>
                      </div>
                      
                      {/* 成長矢印 */}
                      <div className="mt-4 flex justify-center">
                        <div className="flex items-center text-green-600">
                          <span className="text-2xl">📈</span>
                          <span className="ml-2 font-bold">急成長</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 画像サンプル注記 */}
                  <div className="absolute bottom-4 right-4 text-sm text-slate-500 opacity-60">
                    ※画像サンプル
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* 追加インパクト要素 */}
          <FadeIn delay={0.4} disabled={true}>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full px-8 py-4 shadow-lg">
                <span className="text-3xl">⚡</span>
                <span className="text-lg sm:text-xl font-bold text-orange-600">
                  今がチャンスの時期です！
                </span>
                <span className="text-3xl">⚡</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}