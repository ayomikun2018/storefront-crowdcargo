"use client";

import { cn } from "@/lib/utils";
import {
  ArrowRightIcon,
  Button,
  Input,
  PlusCircleIcon,
  SearchIcon,
  useSidebar,
} from "@repo/ui";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SearchStoreMobile = () => {
  const [showPopover, setShowPopover] = useState(false);
  const { toggleSidebar } = useSidebar();

  const items = [
    {
      name: "Tofa Chair",
      meta: "Color: Blue | Size: L | QTY: 3",
      price: 40000,
    },
    {
      name: "Modern Sofa",
      meta: "Color: Black | Size: XL | QTY: 1",
      price: 120000,
    },
    {
      name: "Wooden Table",
      meta: "Color: Brown | Size: M | QTY: 2",
      price: 50000,
    },
  ];

  const SearchResults = () => (
    <div className="relative max-h-[60vh] overflow-auto space-y-3 pb-3">
      {items.map(({ name, meta, price }, index) => (
        <div key={index} className="flex border-b gap-4 px-4 py-2 w-full">
          <div className="border rounded p-2">
            <Image
              src="/assets/product-listing.svg"
              alt="Product"
              width={86}
              height={86}
              className="rounded bg-gray-100"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="pb-1 font-bold">{name}</p>
            <p className="text-xs text-gray-500">{meta}</p>
            <p className="text-primary font-semibold text-sm pb-1">
              ₦{price.toLocaleString()}
            </p>

            <Button
              className="rounded-3xl gap-1 h-8 text-xs w-30"
              onClick={() => {
                setShowPopover(false); // close search
                toggleSidebar(); // open cart
              }}
            >
              <PlusCircleIcon className="size-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      ))}

      <div className="w-full bg-white">
        <Button
          asChild
          className="w-full flex gap-2 text-primary hover:text-white bg-primary/10 font-semibold mt-4"
        >
          <Link href="/?search=Search Product">
            See all (140) results
            <ArrowRightIcon className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="relative w-full">
      <SearchIcon className="absolute inset-y-3.5 left-3 size-4" />

      <Input
        placeholder="Search Oriamo Store"
        type="text"
        className={cn(
          "w-full h-11 py-3 pl-9 bg-gray-100 text-foreground outline-none",
          "rounded-full ring-1 ring-primary",
        )}
        onFocus={() => setShowPopover(true)}
        onClick={() => setShowPopover(true)}
      />

      {/* Backdrop */}
      {showPopover && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setShowPopover(false)}
        />
      )}

      {/* Bottom Sheet */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "bg-white rounded-b-2xl shadow-2xl",
          "h-[58vh] transition-all duration-300",
          showPopover
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none",
        )}
      >
        {/* Handle */}
        <div className="flex justify-center pt-2">
          <div className="w-10 h-1.5 bg-gray-300 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center gap-2 p-3 border-b">
          <Button
            variant="ghost"
            onClick={() => setShowPopover(false)}
            className="rounded-full bg-gray-100"
          >
            <ArrowLeftIcon className="size-4" />
          </Button>

          <Input
            autoFocus
            placeholder="Search Oriamo Store"
            className="flex-1 rounded-full bg-gray-100 ring-1 ring-primary"
          />
        </div>

        {/* Results */}
        <div className="p-3 overflow-y-auto h-[calc(60vh-80px)]">
          <SearchResults />
        </div>
      </div>
    </div>
  );
};

export default SearchStoreMobile;
