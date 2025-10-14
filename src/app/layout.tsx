import type { Metadata } from "next";
import { chillaxFont, athleticsFont } from "../../src/lib/font";
import "./globals.css";
import Header from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Merchant Storefront",
  description: "Advance store web portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${athleticsFont.className} ${chillaxFont.variable}  antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
