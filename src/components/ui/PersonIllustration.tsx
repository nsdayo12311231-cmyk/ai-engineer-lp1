interface PersonIllustrationProps {
  className?: string;
  pose?: 'thinking' | 'presenting' | 'working';
}

export default function PersonIllustration({ 
  className = ""
}: PersonIllustrationProps) {
  return (
    <div className={`relative ${className}`}>
      <svg 
        viewBox="0 0 400 500" 
        className="w-full h-auto drop-shadow-lg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="personGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6"/>
          </linearGradient>
        </defs>
        
        {/* 考えるポーズのシルエット */}
        <path 
          d="M200 100 C220 90 240 95 250 120 L250 180 C250 200 240 220 220 230 L180 230 C160 220 150 200 150 180 L150 120 C150 95 170 90 200 100 Z" 
          fill="url(#personGradient)"
        />
        
        {/* 体部分 */}
        <rect 
          x="170" y="230" width="60" height="120" 
          rx="15" fill="url(#personGradient)"
        />
        
        {/* 腕（考えるポーズ） */}
        <path 
          d="M170 250 C150 260 140 280 145 300 C150 320 160 330 180 325 L180 280 Z" 
          fill="url(#personGradient)"
        />
        <path 
          d="M230 250 C250 260 260 280 255 300 C250 320 240 330 220 325 L220 280 Z" 
          fill="url(#personGradient)"
        />
        
        {/* 装飾的な要素 */}
        <circle cx="320" cy="150" r="30" fill="#f97316" opacity="0.3"/>
        <circle cx="80" cy="200" r="20" fill="#3b82f6" opacity="0.4"/>
        <circle cx="350" cy="300" r="15" fill="#1e3a8a" opacity="0.5"/>
      </svg>
    </div>
  );
}