"use client";

import { MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppSidebar } from "../layout/app-sidebar-context";

type SidebarToggleButtonProps = {
  variant?: "floating" | "header";
};

const SidebarToggleButton = ({
  variant = "header",
}: SidebarToggleButtonProps) => {
  const { open, toggleSidebar } = useAppSidebar();

  if (variant === "floating") {
    return (
      <button
        type="button"
        onClick={toggleSidebar}
        className={cn(
        
          "fixed top-[6.7rem] h-44 rounded-r-lg pt-2 pb-5  ",
          "text-gray-600 flex flex-col justify-between items-center",
          "bg-gray-100 cursor-pointer transition-all duration-300",
          open ? "left-(--sidebar-width)" : "left-0",
        )}
      >
        <MenuIcon className="text-primary" size={20} />
        <span className="transform rotate-270 text-sm">MENU</span>
      </button>
    );
  }

  // header variant
  return (
    <button
      type="button"
      onClick={toggleSidebar}
      className="md:hidden flex justify-between items-center self-center cursor-pointer text-gray-600 h-10"
    >
      <MenuIcon className="" size={20} />
    </button>
  );
};

export default SidebarToggleButton;
