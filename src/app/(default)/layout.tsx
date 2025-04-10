import type { Metadata } from "next";
import { Electrolize, Kumar_One_Outline, Roboto } from "next/font/google";
import Script from "next/script";

import "../globals.css";
import { Header } from "@/components/layout";
import { Footer } from "@/components/layout/footer";

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
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="3955a298-8009-4614-b2ab-b9f7026086e5"
          type="text/javascript"
          async
        />
        <meta name="google-adsense-account" content="ca-pub-7098826907138268" />
      </head>
      <body
        className={`${electrolize.variable} ${kumar_one_outline.variable} ${anta.variable} font-anta antialiased min-h-[100vh] bg-white`}
      >
        <Header />
        <div className="min-h-[calc(100vh-55px)]">
          <main className="min-h-[calc(100vh-55px)] flex flex-col p-2">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
