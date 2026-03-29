import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://findsignl.com"),
  title: "Signl — Body Intelligence App",
  description:
    "Most apps don't know your metabolism. Signl figures it out. Real targets. Weekly recalibration. No streaks. Find the Signal.",
  openGraph: {
    title: "Signl — Find the Signal",
    description: "The fitness app that actually learns your metabolism.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${dmSans.variable} ${spaceMono.variable} font-dm antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
