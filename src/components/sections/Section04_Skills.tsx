'use client'

import React from 'react'
import { FadeIn } from '../animations/FadeIn'

export const Section04_Skills: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-blue-50 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full blur-xl opacity-40" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-200 rounded-full blur-xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200 rounded-full blur-xl opacity-25" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* メインタイトル */}
          <FadeIn delay={0.2} disabled={true}>
            <div className="text-center mb-16">
              <div className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl px-8 py-4 mb-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  AIエンジニアスキルとは？
                </h2>
              </div>
              
              {/* サブタイトル */}
              <FadeIn delay={0.4} disabled={true}>
                <div className="text-slate-700 text-xl sm:text-2xl md:text-3xl font-medium mb-4">
                  ——AIを<span className="font-bold text-blue-600">&quot;使う側&quot;</span>から<span className="font-bold text-purple-600">&quot;作れる側&quot;</span>へ——
                </div>
                <div className="text-slate-600 text-lg sm:text-xl md:text-2xl font-medium">
                  業務を効率化し、新しい価値を生み出す
                </div>
              </FadeIn>
            </div>
          </FadeIn>

          {/* メインコンテンツ：左テキスト + 右画像 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* 左側：説明テキスト */}
            <div className="flex-1 space-y-8">
              <FadeIn delay={0.6} disabled={true}>
                <div className="text-slate-700 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed space-y-6">
                  <p className="font-medium">
                    <span className="font-bold text-blue-600">AIを組み込んだ業務効率化ツール</span>や<br />
                    <span className="font-bold text-purple-600">社内システム</span>を自分で開発し、
                  </p>
                  
                  <p className="font-medium">
                    <span className="font-bold text-cyan-600">仕事の自動化</span>や<span className="font-bold text-green-600">新しい価値提供</span>に<br />
                    つなげられる<span className="font-bold text-orange-600 text-2xl sm:text-3xl md:text-4xl">実践的スキル</span>です。
                  </p>
                </div>
              </FadeIn>

              {/* 特徴ポイント */}
              <FadeIn delay={0.8} disabled={true}>
                <div className="space-y-4 mt-8">
                  <div className="flex items-start gap-4 p-4 bg-white/60 rounded-xl shadow-sm">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">AI</span>
                    </div>
                    <div className="text-slate-700 font-medium text-lg">
                      業務効率化ツールの<span className="font-bold text-blue-600">自社開発</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white/60 rounded-xl shadow-sm">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">⚡</span>
                    </div>
                    <div className="text-slate-700 font-medium text-lg">
                      仕事の<span className="font-bold text-purple-600">自動化・効率化</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white/60 rounded-xl shadow-sm">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">💡</span>
                    </div>
                    <div className="text-slate-700 font-medium text-lg">
                      社内外での<span className="font-bold text-green-600">新しい価値創造</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* 右側：シンプルなビジュアル要素 */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <FadeIn delay={1.0} disabled={true}>
                <div className="w-full max-w-lg h-96 lg:h-[500px] relative">
                  {/* シンプルなAI関連ビジュアル */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-xl flex items-center justify-center">
                    <div className="text-center space-y-8">
                      {/* 大きなAIアイコン */}
                      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                        <span className="text-white text-4xl font-black">AI</span>
                      </div>
                      
                      {/* キーワード */}
                      <div className="space-y-3">
                        <div className="text-2xl font-bold text-blue-600">開発・構築</div>
                        <div className="text-xl font-medium text-purple-600">自動化・効率化</div>
                        <div className="text-lg font-medium text-cyan-600">価値創造</div>
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
        </div>
      </div>
    </section>
  )
}