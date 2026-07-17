import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "林美聡 | Research Portfolio",
  description: "医療AI、腸内細菌叢、STEAM活動を軸にした林美聡の研究ポートフォリオ。",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false, noimageindex: true } },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#fffafb" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
