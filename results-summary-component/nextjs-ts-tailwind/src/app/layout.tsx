import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hankenGrotesk",
  weight: ["500", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Results summary component",
  description: "Results summary component",
  icons: {
    icon: "./favicon-32x32.png",
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
        className={`${hankenGrotesk.variable} font-hankenGrotesk bg-pale-blue text-[18px] antialiased md:py-[284px]`}
      >
        {children}
      </body>
    </html>
  );
}
