import Providers from "@/app/providers";
import { AppSidebar } from "@/components/layout/app-sidebar";
import Header from "@/components/layout/header";
import type { Metadata } from "next";
import { athleticsFont, chillaxFont } from "../../src/lib/font";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { CartSidebar } from "@/components/layout/cart-sidebar";

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
        <Providers>
          <SidebarProvider>
            <div className="w-full overflow-x-hidden">
              <Header />
              <div className="flex">
                <div>
                  <SidebarProvider>
                    <AppSidebar />
                  </SidebarProvider>
                </div>
                <main className="flex-grow">{children}</main>
                <CartSidebar />
              </div>
            </div>
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}
