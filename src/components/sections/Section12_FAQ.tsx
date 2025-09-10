'use client'

import React, { useState } from 'react'
import { FadeIn } from '../animations/FadeIn'

export const Section12_FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "プログラミング未経験でも参加できますか？",
      answer: "はい、大丈夫です。\n本講座は基礎から始め、課題を通じて実際にツールを作りながら学ぶスタイルなので、未経験の方でも安心して取り組めます。"
    },
    {
      question: "どれくらいの時間を確保すれば良いですか？",
      answer: "週に3〜5時間程度の学習を目安にしてください。\n週1回の質問会や週2回の実践会に参加すれば、着実にスキルを定着できます。"
    },
    {
      question: "仕事や家庭と両立できますか？",
      answer: "はい。オンライン学習＋コミュニティ型なので、隙間時間でも進められます。\n実践会や質問会も録画やアーカイブで確認できます。"
    },
    {
      question: "受講後にどんなスキルが身につきますか？",
      answer: "自分や社内で使えるAIツールを開発できるスキルが身につきます。\n業務効率化はもちろん、社内での価値向上やキャリアアップにつながります。"
    },
    {
      question: "LINE登録は無料ですか？",
      answer: "はい、LINE登録は完全無料です。\n詳細資料や最新情報をお送りします。強引な勧誘なども一切ありませんので、安心してご登録ください。"
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* メインタイトル */}
          <FadeIn delay={0.2} disabled={true}>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-800 mb-8">
                よくある質問
              </h2>
            </div>
          </FadeIn>

          {/* FAQ一覧 */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.1} disabled={true}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold flex-shrink-0 mt-1">
                        Q{index + 1}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed">
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`transform transition-transform duration-200 flex-shrink-0 ml-4 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-8 pb-6">
                      <div className="flex items-start gap-4">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full text-sm font-bold flex-shrink-0">
                          A
                        </span>
                        <div className="text-gray-700 leading-relaxed text-lg">
                          {faq.answer.split('\n').map((line, lineIndex) => (
                            <p key={lineIndex} className={lineIndex > 0 ? 'mt-4' : ''}>
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}