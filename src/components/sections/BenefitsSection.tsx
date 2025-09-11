import TextHighlightBox from '@/components/ui/TextHighlightBox';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: "🚀",
      title: "業務効率化",
      description: "AIツールで作業時間を50%削減"
    },
    {
      icon: "💰", 
      title: "年収アップ",
      description: "AI人材の平均年収は100万円以上アップ"
    },
    {
      icon: "🏆",
      title: "競争優位性",
      description: "社内で唯一のAI人材として重宝される"
    },
    {
      icon: "🔧",
      title: "実践スキル",
      description: "実際の業務で使えるツール開発能力"
    },
    {
      icon: "📈",
      title: "キャリア拡大",
      description: "転職・独立の選択肢が大幅に増加"
    },
    {
      icon: "🌟",
      title: "未来対応",
      description: "AI時代に必要なスキルを先取り"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-300 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-blue-300 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <TextHighlightBox variant="accent" size="lg" className="inline-block mb-6">
            本講座なら...すべて解決できます！
          </TextHighlightBox>
          
          <div className="text-white space-y-4">
            <p className="text-xl lg:text-2xl">
              多くのスクールが<span className="text-orange-300 font-bold">&ldquo;知識止まり&rdquo;</span>で終わる中、
            </p>
            <p className="text-xl lg:text-2xl">
              本講座は<span className="text-orange-300 font-bold">実務に直結するスキル習得</span>にこだわっています。
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4 text-center">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{benefit.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-white text-lg lg:text-xl mb-6">
              ただ学ぶのではなく、
            </p>
            <TextHighlightBox variant="white" size="lg" className="inline-block mb-6">
              <span className="text-blue-600">自分の業務で使えるツール</span>を作りながら身につけることで、
            </TextHighlightBox>
            <p className="text-white text-lg lg:text-xl">
              学びがそのまま<span className="text-orange-300 font-bold">成果</span>につながります。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}