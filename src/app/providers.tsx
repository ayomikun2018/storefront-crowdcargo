"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { FC, ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      {/* <SidebarProvider>{children};</SidebarProvider> */}
      {children}
    </>
  );
};
export default Providers;
