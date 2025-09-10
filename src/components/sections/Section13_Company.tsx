'use client'

import React from 'react'
import { FadeIn } from '../animations/FadeIn'

export const Section13_Company: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* 会社情報 */}
          <FadeIn delay={0.2} disabled={true}>
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-8">
                株式会社SKH
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                大阪府吹田市千里山東2-4-3
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}