"use client";
import { Label } from "@/components/ui/label";

import { MenuIcon } from "lucide-react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Image from "next/image";

const categories = [
  "Foodstuff",
  "School Items",
  "Appliances",
  "Gadgets",
  "Textbooks",
];
export function AppSidebar() {
  const { toggleSidebar, open } = useSidebar();

  return (
    <div className="flex">
      <Sidebar
        className={cn(
          "relative bg-white",
          open ? "w-(--sidebar-width)" : "w-0"
        )}
        collapsible="offcanvas"
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
                    <div className="flex items-center gap-3 bg-green-50 p-2 px-3 rounded-lg text-lg">
                      <RadioGroupItem
                        value="low-to-high"
                        id="r1"
                        className="border-4 border-blue-100 p-1.5"
                      />
                      <Label htmlFor="r1" className="flex-grow">
                        Low - High
                      </Label>
                    </div>
                    <div className="flex items-center gap-3 bg-green-50 p-2 px-3 rounded-lg text-lg">
                      <RadioGroupItem
                        value="high-to-low"
                        id="r2"
                        className="border-4 border-blue-100 p-1.5"
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
                        className="flex items-center gap-3 bg-green-50 p-2 px-3 rounded-lg text-lg"
                        key={index}
                      >
                        <RadioGroupItem
                          value={each}
                          id={`category-${index}`}
                          className="border-4 border-blue-100 p-1.5"
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
      </Sidebar>
      <button
        className="h-44 rounded-r-lg pt-2 pb-5 text-gray-600 flex flex-col justify-between bg-gray-100 items-center mt-2 cursor-pointer"
        type="button"
        onClick={toggleSidebar}
      >
        <MenuIcon className="text-primary" size={20} />
        <span className="transform rotate-270 text-sm">MENU</span>
      </button>
    </div>
  );
}
