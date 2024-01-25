"use client";

import "./globals.css";
import FirebaseProvider from "@/firebase";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <FirebaseProvider>
        <body className={poppins.className}>
          <Navbar />
          {children}
        </body>
      </FirebaseProvider>
    </html>
  );
}
