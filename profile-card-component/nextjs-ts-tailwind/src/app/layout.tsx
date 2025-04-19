import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Profile card component",
  description: "Profile card component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.variable} bg-dark-cyan background-pattern relative h-screen pt-[147px] font-sans antialiased lg:pt-[173px]`}
      >
        {children}
      </body>
    </html>
  );
}
