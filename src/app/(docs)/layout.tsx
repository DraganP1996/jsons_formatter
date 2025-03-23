import type { Metadata } from "next";
import { Electrolize, Kumar_One_Outline, Roboto } from "next/font/google";
import Script from "next/script";

import "../globals.css";

const electrolize = Electrolize({
  variable: "--font-electrolize",
  weight: ["400"],
  subsets: ["latin"],
});

const kumar_one_outline = Kumar_One_Outline({
  variable: "--font-kumar_one_outline",
  weight: "400",
  subsets: ["latin"],
});

const anta = Roboto({
  variable: "--font-anta",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jsonsformatter.com"),
  alternates: {
    canonical: "/",
  },
  bookmarks: `https://jsonsformatter.com`,
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7098826907138268"
          crossOrigin="anonymous"
        />
        <meta name="google-adsense-account" content="ca-pub-7098826907138268" />
      </head>
      <body
        className={`${electrolize.variable} ${kumar_one_outline.variable} ${anta.variable} font-anta antialiased min-h-[100vh] bg-white`}
      >
        <div className="min-h-[100vh]">
          <main className="min-h-[100vh] flex flex-col">{children}</main>
        </div>
      </body>
    </html>
  );
}
