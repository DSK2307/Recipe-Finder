"use client";

import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FavoritesProvider } from "@/context/FavoritesContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-amber-100 text-gray-800`}>
        <FavoritesProvider>
          <Header />
          {children}
          <Footer />
        </FavoritesProvider>
      </body>
    </html>
  );
}