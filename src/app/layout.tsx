import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "実践型AIエンジニア講座 | 社内で唯一のAI人材になる",
  description: "実務に直結するAIスキルを身につける実践型講座。AIツールを作りながら学び、社内で頼られるAI人材を目指せます。LINE登録で詳細資料配布中！",
  keywords: "AI,人工知能,エンジニア,講座,プログラミング,スキルアップ,転職,副業,実践型",
  authors: [{ name: "株式会社SKH" }],
  creator: "株式会社SKH",
  publisher: "株式会社SKH",
  robots: "index, follow",
  openGraph: {
    title: "実践型AIエンジニア講座 | 社内で唯一のAI人材になる",
    description: "実務に直結するAIスキルを身につける実践型講座。AIツールを作りながら学び、社内で頼られるAI人材を目指せます。",
    type: "website",
    locale: "ja_JP",
    siteName: "実践型AIエンジニア講座",
  },
  twitter: {
    card: "summary_large_image",
    title: "実践型AIエンジニア講座 | 社内で唯一のAI人材になる",
    description: "実務に直結するAIスキルを身につける実践型講座。AIツールを作りながら学び、社内で頼られるAI人材を目指せます。",
  },
  alternates: {
    canonical: "https://ai-engineer-course.com",
  },
  other: {
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "実践型AIエンジニア講座",
              "description": "実務に直結するAIスキルを身につける実践型講座。AIツールを作りながら学び、社内で頼られるAI人材を目指せます。",
              "provider": {
                "@type": "Organization",
                "name": "株式会社SKH",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "大阪府吹田市千里山東",
                  "addressRegion": "大阪府",
                  "postalCode": "2-4-3",
                  "addressCountry": "JP"
                }
              },
              "courseMode": "online",
              "educationalLevel": "beginner",
              "audience": {
                "@type": "Audience",
                "audienceType": "professionals"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
