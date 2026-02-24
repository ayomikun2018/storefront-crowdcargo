"use client";
import { Badge, Label } from "@repo/ui";
import useFooterIntersect from "@/hooks/use-footer-intersect";
import { cn } from "@/lib/utils";
import {
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
} from "@repo/ui";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import AppSidebarAddress from "./app-sidebar-address";
import Link from "next/link";
import { CountriesAtlas } from "@amplifiedhq/countries-atlas";
import { useAppSidebar } from "./app-sidebar-context";
import SidebarToggleButton from "@/components/elements/sidebar-toggle-button";

const countries = CountriesAtlas.getCountries().filter((each) =>
  ["US", "NG", "GB"].includes(each?.code as string),
);
const categories = [
  "Foodstuff",
  "School Items",
  "Appliances",
  "Gadgets",
  "Textbooks",
];
const collectionItems = [
  {
    name: "Winter Wears",
    image: "/assets/collection-icon.svg",
    route: "/collection",
  },
  {
    name: "School Items",
    image: "/assets/collection-icon.svg",
    route: "/collection",
  },
];

export default function WebSidebar() {
  const { open, toggleSidebar, setOpen } = useAppSidebar();
  const { intersectionData } = useFooterIntersect();
  const pathname = usePathname();
  useEffect(() => {
    if (pathname == "/checkout" || pathname.startsWith("/portal"))
      setOpen(false);
  }, [pathname]);

  return (
    <div
      className={` flex min-h-screen h-ful ${
        open ? "md:w-[calc(var(--sidebar-width)+1.8rem)]" : "md:w-[2.5rem]"
      }`}
    >
      <Sidebar
        className={cn(
          "bg-white transition-all top-24 h-[calc(100vh-88px])]",
          open ? "w-(--sidebar-width)" : "w-0",
        )}
        collapsible="offcanvas"
        style={{ bottom: `${intersectionData.pixelsVisible}px` }}
      >
        <SidebarContent className="flex-1 overflow-y-auto bg-white gap-1 px-2">
          <div className="py-4">
            <Link href="/sales">
              <Image
                src="/assets/sidebar-sales-banner.svg"
                alt="sidebar sales banner"
                height={300}
                width={500}
                className="cursor-pointer rounded-xl hover:opacity-90 transition"
              />
            </Link>
          </div>

          <SidebarGroup className="space-y-5">
            <SidebarGroupLabel className="text-base text-gray-500 uppercase">
              Price Filter
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <RadioGroup>
                    {["Low - High", "High - Low"].map((label, i) => (
                      <div
                        key={label}
                        className="flex items-center gap-3 bg-primary/5 p-2 px-3 rounded-lg text-lg"
                      >
                        <RadioGroupItem
                          value={label.toLowerCase()}
                          id={`web-r${i}`}
                          className="border-4 border-blue-100 p-1"
                        />
                        <Label htmlFor={`web-r${i}`} className="flex-grow">
                          {label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup className="space-y-6">
            <SidebarGroupLabel className="text-base text-gray-500 uppercase flex justify-between border-b rounded-none">
              <div className="flex items-center">
                Collections
                <Badge className="bg-foreground rounded-md text-white px-2 ml-1">
                  2
                </Badge>
              </div>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="flex flex-col gap-3">
                {collectionItems.map(({ name, image, route }, index) => (
                  <SidebarMenuItem key={index}>
                    <Link href={route}>
                      <div
                        className={cn(
                          "flex items-center gap-3 p-2 px-3 rounded-lg transition-all",
                          pathname === route
                            ? "bg-primary/10 outline outline-1 outline-primary"
                            : "bg-primary/5 hover:bg-primary/10",
                        )}
                      >
                        <div className="relative w-8 h-8 shrink-0 rounded-md overflow-hidden">
                          <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="flex-grow text-sm font-medium">
                          {name}
                        </span>
                      </div>
                    </Link>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="gap-0 p-0 hidden md:block">
          <AppSidebarAddress />
        </SidebarFooter>
      </Sidebar>
      <SidebarToggleButton variant="floating" open={open} setOpen={setOpen} />
    </div>
  );
}
