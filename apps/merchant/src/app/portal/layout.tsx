import AppSidebar from "@/components/layout/(sidebar)/app-sidebar";
import CartSidebar from "@/components/layout/(sidebar)/cart-sidebar";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { SidebarProvider } from "@repo/ui";
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
          <div className="flex">
            <AppSidebar />
            <main className="flex-grow min-h-screen">{children}</main>
            <div>
              <CartSidebar />
            </div>
          </div>
        </div>
      </SidebarProvider>
      <Footer />
    </>
  );
};
export default Layout;
