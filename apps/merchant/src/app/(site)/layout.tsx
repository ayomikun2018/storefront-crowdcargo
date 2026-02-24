import ProductViewedRecently from "@/components/home/tabs/products/product-viewed-recently";
import AppSidebar from "@/components/layout/(sidebar)/app-sidebar";
import CartSidebar from "@/components/layout/(sidebar)/cart-sidebar";
import AppViewedRecently from "@/components/layout/app-viewed-recently";
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
        <div className="w-full ">
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

// import { AppSidebar } from "@/components/layout/app-sidebar";
// import { AppSidebarProvider } from "@/components/layout/app-sidebar-context";
// import { CartSidebar } from "@/components/layout/cart-sidebar";
// import { CartSidebarProvider } from "@/components/layout/cart-sidebar-context"; // Assuming this exists
// import Footer from "@/components/layout/footer";
// import Header from "@/components/layout/header";
// import { SidebarProvider } from "@repo/ui";
// import type { FC, ReactNode } from "react";

// interface LayoutProps {
//   children: ReactNode;
// }

// const Layout: FC<LayoutProps> = ({ children }) => {
//   return (
//     <SidebarProvider>
//       {" "}
//       {/* Base UI Provider */} {/* Logic for Left Sidebar */}{" "}
//       {/* Logic for Right Sidebar */}
//       <div className="flex flex-col min-h-screen w-full">
//         <Header />

//         <div className="flex flex-1 relative">
//           {/* Left Sidebar */}
//           <AppSidebar />

//           {/* Main Content */}
//           <main className="flex-grow">{children}</main>

//           {/* Right Sidebar */}
//           <CartSidebar />
//         </div>

//         <Footer />
//       </div>
//     </SidebarProvider>
//   );
// };

// export default Layout;
// import { AppSidebar } from "@/components/layout/app-sidebar";
// import { AppSidebarProvider } from "@/components/layout/app-sidebar-context";
// import { CartSidebar } from "@/components/layout/cart-sidebar";
// import { CartSidebarProvider } from "@/components/layout/cart-sidebar-context";
// import Footer from "@/components/layout/footer";
// import Header from "@/components/layout/header";
// import { SidebarProvider } from "@repo/ui";
// import type { FC, ReactNode } from "react";

// interface LayoutProps {
//   children: ReactNode;
// }

// const Layout: FC<LayoutProps> = ({ children }) => {
//   return (
//     <SidebarProvider>
//       <AppSidebarProvider>
//         <CartSidebarProvider>
//           <div className="flex flex-col min-h-screen w-full bg-white">
//             <Header />

//             <div className="flex flex-1 relative overflow-hidden">
//               {/* Left Side */}
//               <AppSidebar />

//               {/* Main Workspace */}
//               <main className="flex-grow overflow-y-auto">{children}</main>

//               {/* Right Side */}
//               <CartSidebar />
//             </div>

//             <Footer />
//           </div>
//         </CartSidebarProvider>
//       </AppSidebarProvider>
//     </SidebarProvider>
//   );
// };

// export default Layout;
