import Providers from "@/app/providers";
import { AppSidebar } from "@/components/layout/app-sidebar";
import Header from "@/components/layout/header";
import type { Metadata } from "next";
import { athleticsFont, chillaxFont } from "../../src/lib/font";
import "@/app/globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { CartSidebar } from "@/components/layout/cart-sidebar";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Merchant Storefront",
    default: "Merchant Storefront",
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
        <Providers>
          <SidebarProvider>
            <div className="w-full">
              <Header />
              <div className="flex relative">
                <div>
                  <SidebarProvider>
                    <AppSidebar />
                  </SidebarProvider>
                </div>
                <main className="flex-grow">{children}</main>
                <div>
                  <CartSidebar />
                </div>
              </div>
            </div>
          </SidebarProvider>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
