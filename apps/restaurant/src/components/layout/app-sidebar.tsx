"use client";

import useFooterIntersect from "@/hooks/use-footer-intersect";
import { cn } from "@/lib/utils";
import {
  ClockIcon,
  EnergyIcon,
  HomeIcon,
  SettingsIcon,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  useSidebar,
} from "@repo/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const navItems = [
  {
    name: "Home",
    icon: HomeIcon,
    route: "/",
  },
  {
    name: "Orders",
    icon: EnergyIcon,
    route: "/portal/orders",
  },
  {
    name: "History",
    icon: ClockIcon,
    route: "/portal/order-history",
  },
  {
    name: "Settings",
    icon: SettingsIcon,
    route: "/portal/settings",
  },
];

export function AppSidebar() {
  const { toggleSidebar, open, setOpen } = useSidebar();

  const { intersectionData } = useFooterIntersect();
  const pathname = usePathname();
  useEffect(() => {
    if (pathname == "/checkout" || pathname.startsWith("/portal"))
      setOpen(false);
  }, [pathname]);

  const MENU_BUTTON_CLASS = cn(
    "flex flex-col gap-2 justify-center group-data-[collapsible=icon]:h-max!  group-data-[collapsible=icon]:w-full! rounded-2xl group/this-button transition-all duration-500"
  );
  return (
    <div className={` flex min-h-screen h-full w-28`}>
      <Sidebar
        className={cn(
          "bg-white transition-all top-24 h-[calc(100vh-88px])] m-3 rounded-3xl border overflow-hidden group-data-[collapsible=icon]:w-20"
        )}
        collapsible="icon"
        style={{ bottom: `${intersectionData.pixelsVisible}px` }}
      >
        <SidebarContent className="bg-white gap-3 rounded-3xl">
          <SidebarGroup className="space-y-5 ">
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map(({ icon: Icon, route, name }, index) => {
                  const allowTooltip = route == pathname ? false : undefined;
                  return (
                    <Tooltip key={index} open={allowTooltip}>
                      <TooltipTrigger asChild>
                        <SidebarMenuButton
                          asChild
                          className={MENU_BUTTON_CLASS}
                          key={index}
                        >
                          <Link href={route}>
                            <span className="rounded-xl bg-gray-100 p-2 block ">
                              <Icon
                                className={cn(
                                  "text-gray-500 size-5!",
                                  pathname == route && "text-primary"
                                )}
                              />
                            </span>
                            {route == pathname && (
                              <span
                                className={cn(
                                  "text-xs transition-all duration-300"
                                )}
                              >
                                {name}
                              </span>
                            )}
                          </Link>
                        </SidebarMenuButton>
                      </TooltipTrigger>
                      <TooltipContent>{name}</TooltipContent>
                    </Tooltip>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      {/* <button
        className={cn(
          "fixed top-[6.7rem] left-(--sidebar-width) h-44 rounded-r-lg pt-2 pb-5 text-gray-600 flex flex-col justify-between bg-gray-100 items-center mt-2 cursor-pointer transition-all  duration-300",

          !open && "left-0"
        )}
        type="button"
        onClick={toggleSidebar}
      >
        <MenuIcon className="text-primary" size={20} />
        <span className="transform rotate-270 text-sm">MENU</span>
      </button> */}
    </div>
  );
}
