'use client'

import React from 'react'
import { FadeIn } from '../animations/FadeIn'

export const Section08_Benefits: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-purple-700 to-blue-800 relative overflow-hidden">
      {/* 背景の星空パターン */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse opacity-80" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-pulse opacity-60" />
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-70" />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-white rounded-full animate-pulse opacity-50" />
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse opacity-80" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* メインタイトル */}
          <FadeIn delay={0.2} disabled={true}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 relative">
                <span className="bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent animate-pulse">
                  本講座なら...<br />すべて解決できます！
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-white/30 to-cyan-400/20 blur-md -z-10" />
              </h2>
            </div>
          </FadeIn>

          {/* 説明テキスト */}
          <FadeIn delay={0.4} disabled={true}>
            <div className="text-center mb-16 max-w-5xl mx-auto">
              <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed font-medium">
                多くのスクールが<span className="font-black text-2xl sm:text-3xl text-yellow-300">&quot;知識止まり&quot;</span>で終わる中、<br />本講座は<span className="font-black text-xl sm:text-2xl text-cyan-300">実務に直結するスキル習得</span>にこだわっています。
              </p>
              
              <div className="mt-12 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-yellow-400/30">
                <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed font-medium">
                  ただ学ぶのではなく、
                </p>
                <p className="text-yellow-300 text-2xl sm:text-3xl md:text-4xl font-black mt-2 mb-2">
                  「自分の業務で使えるツール」
                </p>
                <p className="text-white text-xl sm:text-2xl font-bold">
                  を作りながら身につけることで、
                </p>
                <p className="text-cyan-300 text-xl sm:text-2xl font-black mt-4">
                  学びがそのまま成果につながります。
                </p>
              </div>
            </div>
          </FadeIn>

          {/* 3つの特徴 - バランス調整版 */}
          <div className="space-y-4">
            
            {/* 特徴1: 実践重視カリキュラム */}
            <FadeIn delay={0.6} disabled={true}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 min-h-[160px]">
                <div className="max-w-2xl mx-auto px-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl sm:text-3xl font-black">01</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                      実践重視<br />カリキュラム
                    </h3>
                  </div>
                
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="text-white text-lg leading-tight">
                        <span className="font-black text-xl text-yellow-300">「手を動かす」ことに徹底フォーカス</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="text-white text-lg leading-tight">
                        業務直結<span className="font-bold text-lg text-cyan-300">AIツール開発</span>で実践学習
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* 特徴2: 高い自由度と応用力 */}
            <FadeIn delay={0.8} disabled={true}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 min-h-[160px]">
                <div className="max-w-2xl mx-auto px-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl sm:text-3xl font-black">02</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                      高い自由度と<br />応用力
                    </h3>
                  </div>
                
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="text-white text-lg leading-tight">
                        業務改善から<span className="font-bold text-lg text-yellow-300">社内・社外へ展開</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="text-white text-lg leading-tight">
                        <span className="font-black text-xl text-green-400">「成果を生み出す人」</span>に成長
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* 特徴3: キャリアに直結するスキル */}
            <FadeIn delay={1.0} disabled={true}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 min-h-[160px]">
                <div className="max-w-2xl mx-auto px-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl sm:text-3xl font-black">03</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                      キャリアに直結<br />するスキル
                    </h3>
                  </div>
                
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="text-white text-lg leading-tight">
                        <span className="font-black text-xl text-yellow-300">社内で頼られる人材</span>になる
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="text-white text-lg leading-tight">
                        転職・独立で<span className="font-bold text-lg text-cyan-300">キャリア大幅拡大</span>
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