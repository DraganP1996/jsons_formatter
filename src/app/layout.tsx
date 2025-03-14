import type { Metadata } from "next";
import { Electrolize, Kumar_One_Outline, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout";
import { Footer } from "@/components/layout/footer";

const electrolize = Electrolize({
  variable: "--font-electrolize",
  weight: ["400"],
  subsets: ["latin"],
});

const luckiestGuy = Kumar_One_Outline({
  variable: "--font-bungee_shade",
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
      <body
        className={`${electrolize.variable} ${luckiestGuy.variable} ${anta.variable} font-anta antialiased min-h-[100vh] bg-slate-50`}
      >
        <Header />
        <div className="min-h-[calc(100vh-55px)]">
          <main className="min-h-[calc(100vh-55px)] flex flex-col">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
