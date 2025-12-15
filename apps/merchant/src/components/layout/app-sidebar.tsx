"use client";
import { Label } from "@repo/ui";

import { MenuIcon } from "lucide-react";

import useFooterIntersect from "@/hooks/use-footer-intersect";
import { cn } from "@/lib/utils";
import {
  Alert,
  AlertDescription,
  MapPinIcon,
  RadioGroup,
  RadioGroupItem,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@repo/ui";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import AppSidebarAddress from "./app-sidebar-address";

const categories = [
  "Foodstuff",
  "School Items",
  "Appliances",
  "Gadgets",
  "Textbooks",
];
export function AppSidebar() {
  const { toggleSidebar, open, setOpen } = useSidebar();

  const { intersectionData } = useFooterIntersect();
  const pathname = usePathname();
  useEffect(() => {
    if (pathname == "/checkout" || pathname.startsWith("/portal"))
      setOpen(false);
  }, [pathname]);
  return (
    <div
      className={` flex min-h-screen h-ful ${
        open ? "w-[calc(var(--sidebar-width)+1.8rem)]" : "w-[2.5rem]"
      }`}
    >
      <Sidebar
        className={cn(
          "bg-white transition-all top-24 h-[calc(100vh-88px])]",
          open ? "w-(--sidebar-width)" : "w-0"
        )}
        collapsible="offcanvas"
        style={{ bottom: `${intersectionData.pixelsVisible}px` }}
      >
        <SidebarContent className="bg-white gap-3 px-2">
          <div className="py-4">
            <Image
              src="/assets/sidebar-sales-banner.svg"
              alt="sidebar sales banner"
              height={300}
              width={500}
            />
          </div>
          <SidebarGroup className="space-y-5">
            <SidebarGroupLabel className="text-base text-gray-500 uppercase">
              Price Filter
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <RadioGroup>
                    <div className="flex items-center gap-3 bg-primary/5 p-2 px-3 rounded-lg text-lg">
                      <RadioGroupItem
                        value="low-to-high"
                        id="r1"
                        className="border-4 border-blue-100 p-1"
                      />
                      <Label htmlFor="r1" className="flex-grow">
                        Low - High
                      </Label>
                    </div>
                    <div className="flex items-center gap-3 bg-primary/5 p-2 px-3 rounded-lg text-lg">
                      <RadioGroupItem
                        value="high-to-low"
                        id="r2"
                        className="border-4 border-blue-100 p-1"
                      />
                      <Label htmlFor="r2" className="flex-grow">
                        High - Low
                      </Label>
                    </div>
                  </RadioGroup>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <div className="px-4">
            <hr />
          </div>
          <SidebarGroup className="space-y-6">
            <SidebarGroupLabel className="text-base text-gray-500 uppercase">
              Categories
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <RadioGroup className="gap-1">
                    {categories.map((each, index) => (
                      <div
                        className="flex items-center gap-3 bg-primary/5 p-2 px-3 rounded-lg text-lg"
                        key={index}
                      >
                        <RadioGroupItem
                          value={each}
                          id={`category-${index}`}
                          className="border-4 border-blue-100 p-1"
                        />
                        <Label
                          htmlFor={`category-${index}`}
                          className="flex-grow"
                        >
                          {each}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="gap-0 p-0">
          <AppSidebarAddress />
        </SidebarFooter>
      </Sidebar>
      <button
        className={cn(
          "fixed top-[6.7rem] left-(--sidebar-width) h-44 rounded-r-lg pt-2 pb-5 text-gray-600 flex flex-col justify-between bg-gray-100 items-center mt-2 cursor-pointer transition-all  duration-300",

          !open && "left-0"
        )}
        type="button"
        onClick={toggleSidebar}
      >
        <MenuIcon className="text-primary" size={20} />
        <span className="transform rotate-270 text-sm">MENU</span>
      </button>
    </div>
  );
}
