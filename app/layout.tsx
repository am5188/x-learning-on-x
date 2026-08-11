import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "在 X 上做 AI 持续学习运营实验 | 公开算法 · 结果 · 成本",
  description:
    "公开实验：在 X 的不完整上下文与公开反馈中，AI 运营系统如何通过持续学习提高合格净增粉。含可公开算法公式、结果快照与成本复盘。",
  openGraph: {
    title: "在 X 上做 AI 持续学习运营实验",
    description: "公开算法公式、实现逻辑、结果与成本。云端阶段已暂停，等待本地算力续跑。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
