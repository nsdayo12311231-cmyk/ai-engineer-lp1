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
  title: "AI時代に求められるAIエンジニア講座 | CodeBoost",
  description: "完全未経験OK！プログラミングと生成AIスキルを習得し、AI時代に活躍する生成AIエンジニアへ。無料相談受付中！",
  keywords: "AI,生成AI,エンジニア,プログラミング,スクール,講座,未経験OK,CodeBoost",
  authors: [{ name: "CodeBoost" }],
  creator: "CodeBoost",
  publisher: "CodeBoost",
  robots: "index, follow",
  openGraph: {
    title: "AI時代に求められるAIエンジニア講座 | CodeBoost",
    description: "完全未経験OK！プログラミングと生成AIスキルを習得し、AI時代に活躍する生成AIエンジニアへ",
    type: "website",
    locale: "ja_JP",
    siteName: "CodeBoost",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI時代に求められるAIエンジニア講座 | CodeBoost",
    description: "完全未経験OK！プログラミングと生成AIスキルを習得し、AI時代に活躍する生成AIエンジニアへ",
  },
  alternates: {
    canonical: "https://code-boost.jp",
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
              "name": "AI時代に求められるAIエンジニア講座",
              "description": "完全未経験OK！プログラミングと生成AIスキルを習得し、AI時代に活躍する生成AIエンジニアへ",
              "provider": {
                "@type": "Organization",
                "name": "CodeBoost"
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
