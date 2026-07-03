import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "林 美聡 | Research Portfolio",
  description: "医療・腸内細菌・AIを軸に、健康寿命の延伸を目指す研究ポートフォリオ。",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false, noimageindex: true } },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#fffafb" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body><Providers>{children}</Providers></body></html>;
}
