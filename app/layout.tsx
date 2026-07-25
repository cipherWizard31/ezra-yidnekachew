// app/layout.tsx
import type { Metadata } from "next";
import { Elms_Sans, Geist } from "next/font/google"; // Import the font
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// Configure Elms Sans (it is a variable font)
const elmsSans = Elms_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Built with Elms Sans",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      {/* Inject the class name directly into the body */}
      <body className={elmsSans.className}>
        {children}
      </body>
    </html>
  );
}
