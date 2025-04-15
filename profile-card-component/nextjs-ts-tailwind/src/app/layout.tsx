import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

import bgPatternTop from "./bg-pattern-top.svg";
import bgPatternBottom from "./bg-pattern-bottom.svg";

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
        className={`${kumbhSans.variable} bg-dark-cyan relative h-screen py-[] pt-[173px] font-sans antialiased`}
        style={{
          backgroundImage: `url(${bgPatternTop.src}), url(${bgPatternBottom.src})`,
          backgroundSize: "622px 622px, 622px 622px",
          backgroundPosition:
            "left calc(-311px - 100px) top calc(-311px - 44px), right calc(-311px - 100px) bottom -311px",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        {children}
      </body>
    </html>
  );
}
