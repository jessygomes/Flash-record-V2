import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BgVideo from "./components/Navbar/BgVideo/BgVideo";
import Navbar from "../app/components/Navbar/Navbar";
import Footer from "./components/Navbar/Footer/Footer";
import Noise from "./components/Navbar/Noise/Noise";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FLASH",
  description: "Eclaire la scène avec Flash Record",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Noise />
      <Navbar />
      <body className={inter.className}>
        <Analytics />
        {children}
        {/* <BgVideo /> */}
      </body>
      <Footer />
    </html>
  );
}
