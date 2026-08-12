import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";

import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cuidar em Casa",
  description: "Apoio domiciliar para idosos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${poppins.variable}`}
    >
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}