import type {Metadata} from "next";
import {Roboto, Zen_Kaku_Gothic_New} from "next/font/google";
import Navigation from "./components/Navigation";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-zen-kaku-gothic-new",
  display: "swap",
});

export const metadata: Metadata = {
  title: "大井勇星 / Yusei Oi",
  description:
    "2001年和歌山県生まれ。京都精華大学グラフィックデザインコース卒業。MAQを経て、CHOCOLATE（外部パートナー）として活動。2025年よりgroovisions所属。ロゴ、ポスター、パッケージなどのデザインを軸に幅広く手掛けている。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${roboto.variable} ${zenKakuGothicNew.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
