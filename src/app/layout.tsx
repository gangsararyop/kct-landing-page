import type { Metadata } from "next";
import { EB_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToProvider from "@/providers/ScrollToProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-garamond",
});

export const metadata: Metadata = {
  title: "PT. Karya Cakra Trimatra",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ebGaramond.variable}`}
    >
      <link rel="icon" href="/static/logo/logo-color.png" sizes="any" />
      <body>
        <ScrollToProvider>
          <Navbar />
          {children}
          <Footer />
        </ScrollToProvider>
      </body>
    </html>
  );
}
