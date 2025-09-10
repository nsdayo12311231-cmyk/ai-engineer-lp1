'use client'

import React from 'react'
import { FadeIn } from '../animations/FadeIn'

export const Section10_Support: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* メインタイトル */}
          <FadeIn delay={0.2} disabled={true}>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-blue-900 mb-8">
                安心のサポート体制
              </h2>
              <p className="text-xl sm:text-2xl text-blue-700 font-bold">
                一人で挫折しない。仲間と共に成長できる環境があります！
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* 左側：サポート項目リスト */}
            <div className="flex-1 space-y-6">
              
              <FadeIn delay={0.4} disabled={true}>
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      オープンチャットでいつでも相談できる
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      疑問や困ったことがあればすぐに質問可能。講師や仲間からの回答でスムーズに学習を進められます。
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5} disabled={true}>
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      質問会で講師とマンツーマン対話
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      週1回の個別質問会で、あなたの疑問を直接解決。つまずきポイントを的確にサポートします。
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.6} disabled={true}>
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      実践会で仲間と一緒に手を動かせる
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      週2回の実践会で、同じ目標を持つ仲間と実際にコードを書きながら学習。モチベーション維持にも効果的です。
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.7} disabled={true}>
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      専用プラットフォームで<br />
                      学習記録・課題提出・交流が可能
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      学習の進捗管理から課題提出、受講生同士の交流まで、すべてを一つのプラットフォームで完結できます。
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* 右側：画像エリア */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <FadeIn delay={0.8} disabled={true}>
                <div className="w-96 h-96 bg-white rounded-3xl shadow-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                    <div className="text-center text-blue-600">
                      <div className="text-8xl mb-4">🤝</div>
                      <p className="text-lg font-medium">※画像サンプル</p>
                      <p className="text-sm text-gray-500 mt-2">
                        講師とマンツーマンで<br />
                        相談している様子
                      </p>
                    </div>
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