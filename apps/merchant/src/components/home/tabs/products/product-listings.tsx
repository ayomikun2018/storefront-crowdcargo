"use client";
import ProductDetailsSheet from "@/components/home/tabs/products/product-details-sheet";
import ProductListingCard from "@/components/home/tabs/products/product-listing-card";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  FilterIcon,
  ScrollArea,
  ScrollBar,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@repo/ui";
import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { ViewToggleButton } from "@/components/elements/view-toggle-button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import HomeCollectionBanners from "../../home-collection-banners";
import ProductViewedRecently from "./product-viewed-recently";
import { useBreakpoint } from "@/hooks/use-breakpoint";

const ProductListings = ({ search }: { search?: string }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [mobileGrid, setMobileGrid] = useState<"two" | "one">("two");
  const { isMobile } = useBreakpoint();
  const router = useRouter();
  const isHomeMobileSearch = isHomePage && isMobile && !!search;

  const [showProductDetails, setShowProductDetails] = useState(false);
  //eslint-disable-next-line
  const [selectedProduct, setSelectedProduct] = useState<any>();
  return (
    <>
      {!isHomeMobileSearch && (
        <div className="flex gap-2 md:hidden items-center w-full pr-0.5 pt-1 ">
          <div className="flex gap-4 items-center rounded-lg bg-gray-100  p-1 px-2 w-1/4">
            <ViewToggleButton
              active={mobileGrid === "two"}
              onClick={() => setMobileGrid("two")}
              activeIcon="/assets/grid-active.svg"
              inactiveIcon="/assets/grid-inactive.svg"
            />
            <ViewToggleButton
              active={mobileGrid === "one"}
              onClick={() => setMobileGrid("one")}
              activeIcon="/assets/list-active.svg"
              inactiveIcon="/assets/list-inactive.svg"
            />
          </div>

          <Select>
            <SelectTrigger className="w-2/4 !h-8">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                <SelectItem value="foodstuff">Foodstuff</SelectItem>
                <SelectItem value="school-items">School Items</SelectItem>
                <SelectItem value="appliances">Appliances</SelectItem>
                <SelectItem value="Gadgets">gadgets</SelectItem>
                <SelectItem value="Textbooks">Textbooks</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <DropdownMenu>
            <DropdownMenuTrigger className=" w-1/3 flex gap-2 items-center border !bg-white text-gray-500 cursor-pointer h-8 px-2 py-1 rounded-lg text-sm">
              <FilterIcon className="size-3.5" /> Filter{" "}
              <ChevronDownIcon className="size-4 text-gray-300" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Low - High</DropdownMenuItem>
              <DropdownMenuItem>High - Low</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
      <div className="md:space-y-12 space-y-4">
        <div
          className={`
      py-5 grid md:gap-6 gap-3 transition-all duration-300 ease-in-out 
     ${
       isHomeMobileSearch
         ? "grid-cols-2"
         : mobileGrid === "one"
           ? "grid-cols-1"
           : "grid-cols-2"
     }

      md:grid-cols-[repeat(auto-fit,minmax(230px,1fr))]
    `}
        >
          {Array(10)
            .fill(null)
            .map((_, index) => {
              const product = {
                id: `product-${index}`,
                name: "Ramen Noodles from Japan and India",
                discount: { rate: 15, originalAmount: 12000 },
                price: 6000,
                outOfStock: index % 3 === 0,
              };

              if (index === 3) return null;
              return (
                <div key={index}>
                  <ProductListingCard
                    mobileGrid={mobileGrid}
                    product={product}
                    showPin={index < 2}
                    onClick={() => {
                      if (isMobile) {
                        const productData = JSON.stringify(product);
                        router.push(
                          `/product/${product.id}?data=${encodeURIComponent(productData)}`,
                        );
                      } else {
                        setSelectedProduct(product);
                        setShowProductDetails(true);
                      }
                    }}
                  />
                </div>
              );
            })}
        </div>
        <div className="flex justify-center ">
          <Button className="flex gap-2 px-4 !bg-white text-foreground border border-gray-300 cursor-pointer">
            Load more
          </Button>
        </div>
        {/* Inject Shop Collection Banner */}
        {isHomePage && (
          <div className="border-y border-gray-300 mt-10 md:mt-0 ">
            <div className="flex justify-between items-center text-center">
              <p className="md:text-2xl text-2xl font-semibold pt-2">
                Shop Collection
              </p>
              <Link
                href="/collection"
                className="text-sm underline text-primary"
              >
                See all
              </Link>
            </div>

            <ScrollArea
              className={`
        grid gap-6 transition-all duration-300 ease-in-out  py-2
        ${mobileGrid === "one" ? "grid-cols-1" : "grid-cols-2"}
        grid-cols-[repeat(auto-fit,minmax(230px,1fr))]
      `}
            >
              <HomeCollectionBanners />
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        )}

        <div className="">
          <ScrollArea
            className={`
        grid gap-6 transition-all duration-300 ease-in-out
        ${mobileGrid === "one" ? "grid-cols-1" : "grid-cols-2"}
        grid-cols-[repeat(auto-fit,minmax(230px,1fr))]
      `}
          >
            <ProductViewedRecently />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
      {!isMobile && (
        <ProductDetailsSheet
          isOpen={showProductDetails}
          setIsOpen={setShowProductDetails}
          product={selectedProduct}
        />
      )}
    </>
  );
};

export default ProductListings;
