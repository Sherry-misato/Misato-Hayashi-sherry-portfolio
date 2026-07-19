import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Misato Hayashi | Research Portfolio",
  description: "Portfolio of Misato Hayashi, an Applied Informatics student at Hosei University interested in medical AI, microbiome research, and healthy longevity.",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false, noimageindex: true } },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#fffafb" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
