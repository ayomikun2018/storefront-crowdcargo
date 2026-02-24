"use client";

import SearchStore from "@/components/layout/search-store";
import UserPanel from "@/components/layout/user-panel";
import {
  Badge,
  Button,
  CartIcon,
  MapPinIcon,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Sheet,
  SheetContent,
  StarIcon,
  useSidebar,
} from "@repo/ui";
import Image from "next/image";
import { useState } from "react";
import { CountriesAtlas } from "@amplifiedhq/countries-atlas";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";
import SidebarToggleButton from "@/components/elements/sidebar-toggle-button";
import { MobileSidebarSheet } from "../(sidebar)/mobile-sidebar-sheet";

const countries = CountriesAtlas.getCountries().filter((each) =>
  ["US", "NG", "GB"].includes(each?.code as string),
);

const MobileHeader = () => {
  const { toggleSidebar, setOpen: setSidebarOpen } = useSidebar();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const isCollectionRoute = pathname.startsWith("/collection");
  const isProductDetailsRoute = pathname.startsWith("/product");

  const [selectedCountry] = useState("NG");

  const selectedCountryData = countries.find(
    (country) => country.code === selectedCountry,
  );

  return (
    <div className="sticky top-0 z-30 bg-background border-b border-gray-100">
      <header className="p-3 space-y-3">
        <MobileSidebarSheet open={open} setOpen={setOpen} />
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* LEFT ICON (Conditional) */}
            {isCollectionRoute || isProductDetailsRoute ? (
              <button
                onClick={() => router.back()}
                className="p-2  bg-gray-100 rounded-full"
              >
                <ArrowLeftIcon className="size-4" />
              </button>
            ) : (
              <SidebarToggleButton open={open} setOpen={setOpen} />
            )}

            {/* Avatar (hide on collection page if you want cleaner look) */}
            {!isCollectionRoute && (
              <div className="rounded-full p-[2px] bg-gradient-to-t from-purple-500 to-primary">
                <div className="w-9 h-9 rounded-full overflow-hidden">
                  <Image
                    src="/assets/merchant-avatar.png"
                    alt="Merchant Avatar"
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            )}

            {/* Title Section */}
            <div className="text-xs space-y-1">
              {isCollectionRoute ? (
                <h2 className="text-3xl font-semibold px-3 py-1">
                  Collections
                </h2>
              ) : (
                <Popover>
                  <PopoverTrigger asChild>
                    <h2 className="text-lg font-semibold bg-primary/5 border border-gray-300 rounded-full px-3 py-1 min-w-40">
                      Oraimo Store
                    </h2>
                  </PopoverTrigger>
                  <PopoverContent className="w-60 p-2 ml-26 mt-3 ">
                    <div className="grid gap-4 bg-gray-100 rounded p-2">
                      <div className="space-y-1">
                        <h4 className="leading-none font-bold ">
                          Merchant Data
                        </h4>
                        <hr className="border-gray-300" />
                        <div className=" text-sm flex gap-2 items-center">
                          <span className="text-muted-foreground ">
                            Country:{" "}
                          </span>
                          {selectedCountryData && (
                            <div className="flex gap-1 items-center">
                              Nigeria
                              <img
                                src={`https://flagcdn.com/w20/${selectedCountryData.iso2?.toLowerCase()}.png`}
                                alt={`${selectedCountryData.country} flag`}
                                className="w-5 h-4  rounded-full"
                                loading="lazy"
                              />
                              <span>{selectedCountryData.country}</span>
                            </div>
                          )}
                        </div>
                        <p className="text-sm">
                          <span className="text-muted-foreground ">
                            {" "}
                            State/Region:{" "}
                          </span>
                          Lagos
                        </p>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4 bg-gray-100 rounded-full px-3 py-2">
            <button
              type="button"
              className="relative"
              onClick={() => toggleSidebar()}
            >
              <Badge
                className="absolute -top-2 -right-2 size-4 text-xs rounded-full"
                variant="destructive"
              >
                1
              </Badge>
              <CartIcon className="size-6 text-primary" />
            </button>

            <UserPanel />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default MobileHeader;
