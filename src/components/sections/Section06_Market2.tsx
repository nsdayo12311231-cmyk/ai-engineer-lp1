'use client'

import React from 'react'
import { FadeIn } from '../animations/FadeIn'

export const Section06_Market2: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-slate-50 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 right-20 w-80 h-80 bg-blue-300 rounded-full blur-xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-300 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* PDFに忠実な2カード構成 */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* 左側：生成AI普及で淘汰が進む */}
            <FadeIn delay={0.2} disabled={true}>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 shadow-xl">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center shadow-md">
                      <div className="text-center">
                        <div className="text-4xl mb-2">⚡</div>
                        <div className="text-xs text-gray-600">※画像サンプル</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-red-600 mb-4">
                      生成AI普及で淘汰が進む
                    </h3>
                    
                    <div className="space-y-3 text-slate-700">
                      <p className="text-lg font-medium">
                        使えるだけではすぐ代替される。
                      </p>
                      <p className="text-lg font-medium">
                        逆に<span className="font-bold text-purple-600">作れる人材は希少価値が高い</span>。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* 右側：日本はAI人材が不足 */}
            <FadeIn delay={0.4} disabled={true}>
              <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-8 shadow-xl">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center shadow-md">
                      <div className="text-center">
                        <div className="text-4xl mb-2">👥</div>
                        <div className="text-xs text-gray-600">※画像サンプル</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-red-600 mb-4">
                      日本はAI人材が不足
                    </h3>
                    
                    <div className="space-y-3 text-slate-700">
                      <p className="text-lg font-medium">
                        経済産業省も<span className="font-bold text-red-600">数十万人規模で不足</span>と発表。
                      </p>
                      <p className="text-lg font-medium">
                        海外との差が開きつつある。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}