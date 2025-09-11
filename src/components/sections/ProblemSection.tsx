export default function ProblemSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
            こんな課題はありませんか？
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "AIツールを使いこなせない",
              "プログラミングスキルが不足", 
              "業務効率化ができない",
              "競合に遅れを取っている",
              "新しい技術についていけない",
              "キャリアに不安を感じる"
            ].map((problem, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">{problem}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-red-50 rounded-xl border border-red-200">
            <h3 className="text-xl font-bold text-red-800 mb-4">
              ⚠️ このまま放置すると...
            </h3>
            <div className="text-red-700 space-y-2">
              <p>• AI時代に取り残される</p>
              <p>• 競合他社との差が拡大</p>
              <p>• キャリアの選択肢が狭まる</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}