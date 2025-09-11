import TextHighlightBox from '@/components/ui/TextHighlightBox';
import PersonIllustration from '@/components/ui/PersonIllustration';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-300 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* 左側: テキストコンテンツ */}
          <div className="lg:col-span-7 space-y-8">
            {/* メインキャッチコピー */}
            <div className="space-y-6">
              <TextHighlightBox variant="white" size="lg">
                <span className="text-blue-600">AI時代</span>
                <span className="text-gray-800">に求められる</span>
              </TextHighlightBox>
              
              <TextHighlightBox variant="accent" size="lg">
                AIを使いこなせる
              </TextHighlightBox>
              
              <TextHighlightBox variant="white" size="lg">
                <span className="text-gray-800">エンジニアへ</span>
              </TextHighlightBox>
            </div>
            
            {/* サブタイトル */}
            <div className="text-white space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold">
                生成AI × プログラミングスクール
              </h2>
              <div className="space-y-2 text-lg lg:text-xl">
                <p className="font-semibold">完全未経験OK！</p>
                <p>プログラミングと生成AIスキルを習得し</p>
                <p>AI時代に活躍する生成AIエンジニアへ</p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="pt-6">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group">
                今すぐ無料相談を予約
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* 右側: 人物イラスト */}
          <div className="lg:col-span-5">
            <PersonIllustration className="w-full max-w-md mx-auto lg:max-w-full" />
          </div>
        </div>
      </div>
      
      {/* 下部の追加情報 */}
      <div className="absolute bottom-0 left-0 right-0 bg-blue-800/30 backdrop-blur-sm border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-white">
            <p className="text-lg font-semibold mb-2">🔥 先着枠が埋まり次第即終了！</p>
            <div className="flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-orange-400 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}