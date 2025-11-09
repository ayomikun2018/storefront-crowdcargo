"use client";

import useFooterIntersect from "@/hooks/use-footer-intersect";
import { cn, currencyFormatter } from "@/lib/utils";
import {
  Button,
  CartIcon,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  EditIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
  XCircleIcon,
} from "@repo/ui";
import { ArrowRight, ChevronDownIcon, PlusSquareIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function CartSidebar() {
  const { open, setOpen } = useSidebar();

  const { intersectionData } = useFooterIntersect();
  const pathname = usePathname();
  useEffect(() => {
    if (pathname == "/checkout" || pathname.startsWith("/portal"))
      setOpen(false);
  }, [pathname]);
  return (
    <div className={open ? "w-80" : "w-1"}>
      <Sidebar
        className={cn(
          "border-l border-l-gray-100 bg-white transition-all top-24 h-[calc(100vh-88px])]",
          open ? "w-80" : "w-0"
        )}
        side="right"
        style={{ bottom: `${intersectionData.pixelsVisible}px` }}
      >
        <SidebarHeader className="text-2xl text-gray-600 bg-white pb-3">
          My Cart (2 Items)
        </SidebarHeader>
        <hr className="mx-2" />
        <SidebarContent className="bg-white p-2 pr-0 divide-y">
          {Array.from({ length: 2 }).map((_, index, array) => (
            <Collapsible defaultOpen className="group/collapsible" key={index}>
              <SidebarGroup>
                <SidebarGroupLabel asChild>
                  <CollapsibleTrigger asChild>
                    <div className="cursor-pointer">
                      <div className="flex gap-2 items-center w-1/2">
                        <div className="flex gap-2">
                          <span className="text-lg font-semibold">
                            Pack {index + 1}
                          </span>
                          <button type="button">
                            <EditIcon className="size-4 text-primary" />
                          </button>
                        </div>
                        <ChevronDownIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </div>
                      <button type="button" className="ml-auto">
                        <PlusCircleIcon className="size-6" />
                      </button>
                    </div>
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarMenu
                    className={cn(
                      "space-y-3 divide-y divide-y-gray-100 overflow-auto",
                      array.length > 2
                        ? "max-h-[20vh]"
                        : array.length == 2
                          ? "max-h-[40vh]"
                          : ""
                    )}
                  >
                    {Array(3)
                      .fill(null)
                      .map((_, index) => (
                        <SidebarMenuItem key={index}>
                          <div className="flex gap-2 text-xs p-2">
                            <div className="relative w-auto">
                              <button
                                type="button"
                                className="absolute -top-2 -left-2 bg-white rounded-full"
                              >
                                <XCircleIcon className="size-5 text-destructive" />
                              </button>
                              <Image
                                src="/assets/cart-item.png"
                                alt="cart item image"
                                width={80}
                                height={80}
                                className="object-cover rounded-lg size-24 p-1 border"
                              />
                            </div>
                            <div className="flex justify-between p-1">
                              <div className="space-y-0 w-3/5">
                                <p className="wrap-normal text-sm">
                                  Ramen Noodles Extra Sweet
                                </p>
                                <p className="text-gray-400">
                                  Color: Blue Size:L
                                </p>
                                <div className="text-base">
                                  {currencyFormatter(40000)}
                                </div>
                              </div>
                              <div className="flex flex-col border border-gray-200 rounded-xl">
                                <button
                                  type="button"
                                  className="cursor-pointer"
                                >
                                  <MinusCircleIcon className="size-7 text-primary" />
                                </button>
                                <span className="p-1 h-full grid place-items-center">
                                  8
                                </span>
                                <button
                                  type="button"
                                  className="cursor-pointer"
                                >
                                  <PlusCircleIcon className="size-7 text-primary" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </SidebarMenuItem>
                      ))}
                  </SidebarMenu>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          ))}
        </SidebarContent>
        <SidebarFooter className="gap-0 p-0 bg-white border-t">
          <div className="py-3 flex justify-center">
            <Button
              className="text-primary! border border-primary rounded-xl"
              variant="outline"
              color="primary"
            >
              <PlusSquareIcon /> Create new pack
            </Button>
          </div>
          <div className="space-y-2.5 py-2 px-3 bg-secondary text-white border-5 border-primary">
            <div className="flex gap-2">
              <span className="border border-white rounded-lg inline-block p-2 bg-gradient-to-r from-secondary via-secondary to-violet-900">
                <CartIcon className="size-7 !text-white" />
              </span>
              <div className="space-y-0.5">
                <p>4 Items</p>
                <p className="text-lg font-semibold leading-4">
                  {currencyFormatter(12890.0, {
                    currency: "NGN",
                    minimumFractionDigits: 2,
                  })}
                </p>
              </div>
            </div>
            <Button
              className="uppercase flex gap-2 items-center w-full bg-warning text-xs"
              asChild
            >
              <Link href="/checkout">
                Proceed to checkout <ArrowRight size={14} />
              </Link>
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}
