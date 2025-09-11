import TextHighlightBox from '@/components/ui/TextHighlightBox';

export default function SolutionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-900">
                解決方法は...
              </h2>
              
              <TextHighlightBox variant="primary" size="lg" className="text-center">
                AIエンジニアスキルを身に付けること
              </TextHighlightBox>
            </div>
            
            <div className="space-y-4 text-lg text-gray-700">
              <p>これからの時代は<span className="text-blue-600 font-semibold">&ldquo;AIを使う人&rdquo;</span>ではなく</p>
              <p className="text-blue-600 font-bold text-xl">&ldquo;AIを作る人&rdquo;が必要とされます。</p>
              
              <div className="bg-white/70 p-6 rounded-lg border border-blue-200">
                <p className="mb-3">多くの講座は知識を学ぶだけで終わりますが、</p>
                <p>資格取得やノウハウだけでは実務にはなかなか活かせません。</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl text-white shadow-2xl relative overflow-hidden">
              {/* 背景装飾 */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-400 opacity-20 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  🎯 本講座は実践特化。
                </h3>
                
                <div className="space-y-4">
                  <p className="text-lg">
                    あなたの業務に<span className="text-orange-300 font-bold">直結するツール</span>を作りながら学び、
                  </p>
                  <p className="text-lg">
                    社内や社会で価値提供できる<span className="text-orange-300 font-bold">AI人材</span>を育てます。
                  </p>
                </div>
                
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* 矢印アイコン */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}