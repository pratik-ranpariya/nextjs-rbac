import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import NewsFlash from "@/components/NewsFlash";
import Navbar from "@/components/Navbar";
import SubscribeBanner from "@/components/SubscribeBanner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: "Dynamic Business",
  description: "Your trusted source for business news and insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${sourceSans.variable}`}>
        <SubscribeBanner />
        <NewsFlash />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
