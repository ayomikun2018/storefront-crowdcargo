import ProductViewedRecently from "@/components/home/tabs/products/product-viewed-recently";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { AppSidebarProvider } from "@/components/layout/app-sidebar-context";
import AppViewedRecently from "@/components/layout/app-viewed-recently";
import { CartSidebar } from "@/components/layout/cart-sidebar";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { SidebarProvider } from "@repo/ui";
import App from "next/app";
import type { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
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

      <AppViewedRecently />
      <Footer />
    </>
  );
};

export default Layout;
