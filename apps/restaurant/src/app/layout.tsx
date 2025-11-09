import "@/app/globals.css";
import Providers from "@/app/providers";
import type { Metadata } from "next";
import { athleticsFont, chillaxFont } from "@/lib/font";

export const metadata: Metadata = {
  title: {
    template: "%s | Restaurant Storefront",
    default: "Resturant Storefront",
  },
  description: "Merchant storefront",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
