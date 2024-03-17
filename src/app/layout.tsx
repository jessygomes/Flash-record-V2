import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BgVideo from "./components/Navbar/BgVideo/BgVideo";

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
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* <BgVideo /> */}
      </body>
    </html>
  );
}
