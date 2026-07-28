import type { Metadata } from "next";
import { Geist, Plus_Jakarta_Sans } from "next/font/google"; // Using standard google fonts
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mainFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ezra Yidnekachew | Social Media Manager",
  description: "Built with Next.js & Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className={`${mainFont.className} bg-slate-950 text-slate-100 font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}