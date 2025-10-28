import { AppSidebar } from "@/components/layout/app-sidebar";
import { CartSidebar } from "@/components/layout/cart-sidebar";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import UserSidebar from "@/components/layout/user-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
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
            <UserSidebar />
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
