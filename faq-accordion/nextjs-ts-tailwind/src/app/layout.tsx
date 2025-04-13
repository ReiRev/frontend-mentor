import type { Metadata } from "next";
import "./globals.css";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  variable: "--font-workSans",
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | FAQ accordion",
  description: "Frontend Mentor | FAQ accordion",
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
    <html lang="en" className={`${workSans.variable} font-workSans bg-purple-100 antialiased relative min-h-screen`}>
      <body className="px-[24px]">
        <picture>
          <source srcSet="./background-pattern-desktop.svg" media="(min-width: 768px)" />
          <img src="./background-pattern-mobile.svg" alt="background" className="absolute top-0 left-0 w-full -z-10" />
        </picture>
        {children}
        <footer className="mx-auto text-xs text-center h-full mt-4 text-gray-800">
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="text-[color:hsl(228,45%,44%)] underline"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/ReiRev" className="text-[color:hsl(228,45%,44%)] underline">
            ReiRev
          </a>
          .
        </footer>
      </body>
    </html>
  );
}
