import type { Metadata } from "next";
import { Bebas_Neue, Roboto } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Will Hawkins Collectief — Kans voor Talent",
  description:
    "Mensen in herstel van verslaving of met een GGZ-achtergrond in hun kracht zetten door talenten te ontdekken, te ontwikkelen en te presenteren.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${bebasNeue.variable} ${roboto.variable}`}>
      <body style={{ fontFamily: "var(--font-roboto, sans-serif)" }}>
        {children}
      </body>
    </html>
  );
}
