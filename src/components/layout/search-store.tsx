"use client";
import {
  ArrowRightIcon,
  HeartIcon,
  PlusCircleIcon,
  SearchIcon,
} from "@/components/crowdcargo-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn, currencyFormatter } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SearchStore = () => {
  const [showPopover, setShowPopover] = useState(false);
  return (
    <div className="relative w-full">
      <SearchIcon className="absolute inset-y-3.5 left-3 size-4" />
      <Input
        placeholder="Search"
        type="text"
        className="peer w-full h-11 py-3 rounded-3xl outline-none pl-9 bg-gray-100 text-foreground"
        onBlur={() => setShowPopover(false)}
      />
      <div
        className={cn(
          `absolute opacity-0 top-3 -z-[50] duration-300 h-0 peer-focus:h-auto peer-focus:z-20 peer-focus:top-14 peer-focus:opacity-100  bg-white rounded-lg w-full p-2 drop-shadow-2xl !overflow-hidden`,
          showPopover && "z-20 top-14 opacity-100 block"
        )}
      >
        <div className="relative max-h-[60vh] overflow-auto space-y-3 pb-12">
          {Array(4)
            .fill(null)
            .map((each, index) => (
              <div
                key={index}
                className="hover:bg-gray-50 p-2 rounded-lg border border-gray-300 flex gap-2"
              >
                <div className="w-32">
                  <Image
                    src="/assets/pair-trainers.svg"
                    alt="product image"
                    width={100}
                    height={100}
                    className="object-cover size-full rounded-lg border border-gray-200"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <div className="flex justify-between">
                    <Badge className="text-warning bg-yellow-50 rounded-3xl">
                      15% off
                    </Badge>
                    <HeartIcon className="size-4" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="space-y-2">
                      <p className="text-lg">
                        Ramen Noodles from Japan and India
                      </p>
                      <div className="space-y-0.5 leading-4">
                        <p className="text-destructive line-through">
                          {currencyFormatter(1200)}
                        </p>
                        <p className="text-primary text-lg">
                          {currencyFormatter(6000)}
                        </p>
                      </div>
                    </div>
                    <Button className="rounded-3xl flex gap-2 h-8 text-xs">
                      <PlusCircleIcon className="size-4" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          <div className="fixed left-0 bottom-0 w-full bg-white p-2">
            <Button
              asChild
              className="w-full flex gap-2 text-primary hover:text-white bg-primary/10 font-semibold"
            >
              <Link
                href={`/?search=${"Search Product"}`}
                onPointerDown={(e) => {
                  e.preventDefault();
                  const previouslyFocused =
                    document.activeElement as HTMLElement;
                  setTimeout(() => previouslyFocused?.blur(), 1000);
                }}
              >
                See all (140) results <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchStore;
