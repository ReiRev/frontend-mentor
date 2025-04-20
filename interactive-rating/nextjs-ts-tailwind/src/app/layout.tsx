import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const overpass = Overpass({
  variable: "--font-overpass",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Interactive Rating",
  description: "Interactive Rating",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${overpass.variable} font-overpass bg-gray-950 pt-[153px] font-[15px] antialiased lg:pt-[192px]`}
      >
        <div
          className="bg-radial-[9] mx-auto w-[327px] rounded-[15px] text-white md:w-[412px] md:rounded-[28px]"
          style={{
            background: "radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%)",
          }}
        >
          <Suspense>{children}</Suspense>
        </div>
      </body>
    </html>
  );
}
