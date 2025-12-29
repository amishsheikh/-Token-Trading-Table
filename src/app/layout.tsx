// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/organisms/Providers"; // Double check this path matches your folder!

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axiom Pulse Clone",
  description: "Real-time token trading table",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* This Provider wrapper is what fixes the "could not find react-redux context" error */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
