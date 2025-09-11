export const breakpoints = {
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;

export const containerSizes = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg', 
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl'
} as const;

// メタ広告対応のアスペクト比
export const adAspectRatios = {
  story: 'aspect-[9/16]',    // Instagram/Facebook Story
  square: 'aspect-square',    // Feed投稿
  video: 'aspect-video'       // 動画広告
} as const;