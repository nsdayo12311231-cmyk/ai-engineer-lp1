'use client'

import React from 'react'
import { FadeIn } from '../animations/FadeIn'

export const Section09_Features: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* メインタイトル */}
          <FadeIn delay={0.2} disabled={true}>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-800 mb-8">
                本講座が選ばれる
                <span className="block text-blue-600">3つの理由</span>
              </h2>
            </div>
          </FadeIn>

          {/* 3つの特徴 */}
          <div className="space-y-16">
            
            {/* 特徴1: 実践重視カリキュラム */}
            <FadeIn delay={0.2} disabled={true}>
              <div className="bg-blue-50 rounded-3xl p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  
                  {/* 左側：番号とタイトル */}
                  <div className="flex-1">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-3xl font-black">01</span>
                      </div>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-red-500">
                        実践重視<br />カリキュラム
                      </h3>
                    </div>
                    
                    <div className="space-y-4 text-lg text-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="leading-relaxed">
                          <span className="font-bold text-xl text-blue-600">「手を動かす」ことに徹底フォーカス</span>
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="leading-relaxed">
                          <span className="font-bold text-xl text-green-600">業務直結AIツール開発で実践学習</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* 右側：画像エリア */}
                  <div className="flex-1 flex justify-center">
                    <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                      <div className="text-center text-blue-600">
                        <div className="text-6xl mb-4">💻</div>
                        <p className="text-lg font-medium">※画像サンプル</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* 特徴2: 高い自由度と応用力 */}
            <FadeIn delay={0.3} disabled={true}>
              <div className="bg-purple-50 rounded-3xl p-8 md:p-12">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                  
                  {/* 右側：番号とタイトル */}
                  <div className="flex-1">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-3xl font-black">02</span>
                      </div>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-blue-500">
                        高い自由度と<br />応用力
                      </h3>
                    </div>
                    
                    <div className="space-y-4 text-lg text-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="leading-relaxed">
                          業務改善から<span className="font-bold text-xl text-blue-600">社内・社外へ展開</span>
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="leading-relaxed">
                          <span className="font-bold text-xl text-purple-600">「成果を生み出す人」</span>に成長
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* 左側：画像エリア */}
                  <div className="flex-1 flex justify-center">
                    <div className="w-80 h-80 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center">
                      <div className="text-center text-purple-600">
                        <div className="text-6xl mb-4">🚀</div>
                        <p className="text-lg font-medium">※画像サンプル</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* 特徴3: キャリアに直結するスキル */}
            <FadeIn delay={0.4} disabled={true}>
              <div className="bg-green-50 rounded-3xl p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  
                  {/* 左側：番号とタイトル */}
                  <div className="flex-1">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-3xl font-black">03</span>
                      </div>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-green-500">
                        キャリアに直結<br />するスキル
                      </h3>
                    </div>
                    
                    <div className="space-y-4 text-lg text-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="leading-relaxed">
                          <span className="font-bold text-xl text-green-600">社内で頼られる人材</span>になる
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="leading-relaxed">
                          転職・独立で<span className="font-bold text-xl text-cyan-600">キャリア大幅拡大</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* 右側：画像エリア */}
                  <div className="flex-1 flex justify-center">
                    <div className="w-80 h-80 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
                      <div className="text-center text-green-600">
                        <div className="text-6xl mb-4">🏆</div>
                        <p className="text-lg font-medium">※画像サンプル</p>
                      </div>
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