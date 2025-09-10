import { Section01_Hero } from '@/components/sections/Section01_Hero'
import { Section02_Problems } from '@/components/sections/Section02_Problems'
import { Section03_Solution } from '@/components/sections/Section03_Solution'
import { Section04_Skills } from '@/components/sections/Section04_Skills'
import { Section05_Market1 } from '@/components/sections/Section05_Market1'
import { Section06_Market2 } from '@/components/sections/Section06_Market2'
import { Section07_Problems2 } from '@/components/sections/Section07_Problems2'
import { Section08_Benefits } from '@/components/sections/Section08_Benefits'
import { Section09_Features } from '@/components/sections/Section09_Features'
import { Section10_Support } from '@/components/sections/Section10_Support'
import { Section11_Projects } from '@/components/sections/Section11_Projects'
import { Section12_FAQ } from '@/components/sections/Section12_FAQ'
import { Section13_Company } from '@/components/sections/Section13_Company'
import { ScrollProgress } from '@/components/animations/ScrollProgress'
import { FixedCTA } from '@/components/layout/FixedCTA'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* スクロール進捗バー */}
      <ScrollProgress />
      
      {/* メインコンテンツ */}
      <main>
        {/* ファーストビューセクション */}
        <Section01_Hero />
        
        {/* 共感パート（問題提起） */}
        <Section02_Problems />
        
        {/* 解決策提示パート */}
        <Section03_Solution />
        
        {/* AIエンジニアスキル説明 */}
        <Section04_Skills />
        
        {/* 市場背景1（AI市場急拡大） */}
        <Section05_Market1 />
        
        {/* 市場背景2（AI人材不足） */}
        <Section06_Market2 />
        
        {/* 他講座でよくあること */}
        <Section07_Problems2 />
        
        {/* 本講座の特徴 */}
        <Section08_Benefits />
        
        {/* 本講座が選ばれる3つの理由 */}
        <Section09_Features />
        
        {/* 安心のサポート体制 */}
        <Section10_Support />
        
        {/* 実際の制作課題 */}
        <Section11_Projects />
        
        {/* よくある質問 */}
        <Section12_FAQ />
        
        {/* 会社情報 */}
        <Section13_Company />
      </main>
      
      {/* 固定CTAボタン */}
      <FixedCTA />
    </div>
  );
}
