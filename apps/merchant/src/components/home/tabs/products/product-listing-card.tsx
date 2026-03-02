"use client";

import { cn, currencyFormatter } from "@/lib/utils";
import { Badge, Button, PlusCircleIcon } from "@repo/ui";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface ProductListingCardProps {
  product: {
    name: string;
    discount: { rate: number; originalAmount: number };
    price: number;
    outOfStock?: boolean;
  };
  mobileGrid: "two" | "one";
  onClick: () => void;
  showPin?: boolean;
}

const ProductListingCard: FC<ProductListingCardProps> = ({
  product,
  mobileGrid,
  showPin,
  onClick,
}) => {
  return (
    <div className="flex flex-col group" tabIndex={-1} onClick={onClick}>
      <div
        className={`relative md:rounded-lg rounded-sm overflow-hidden bg-gray-100 transition-all duration-300
        ${mobileGrid === "one" ? "h-80 " : "h-42"} md:h-72`}
      >
        <Image
          src="/assets/product-listing.svg"
          alt="product image"
          fill
          className={`w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110 ${
            product.outOfStock ? "opacity-70" : ""
          }`}
        />

        {/* TOP BADGES */}
        <div
          className={cn(
            "absolute inset-x-0 top-0 flex justify-between items-start",
            // mobileGrid === "one" gets more breathing room (p-4), others get p-2
            mobileGrid === "one" ? "p-2" : "p-2",
            "md:p-2",
          )}
        >
          <Badge
            className={cn(
              "text-warning bg-white/95 border-none shadow-sm font-bold rounded-full transition-all md:text-xs",
              // Larger padding and text for the single column view
              mobileGrid === "one"
                ? "px-2 py-1 text-xs"
                : "py-1 px-1 text-[8px]",
            )}
          >
            {product.discount.rate}% off
          </Badge>
          {showPin && (
            <div
              className={cn(
                "bg-white rounded-md shadow-sm flex items-center justify-center md:hidden",
                // Scale the pin container for the larger grid
                mobileGrid === "one" ? "p-2 rounded-md" : "p-1.5",
              )}
            >
              <Image
                src="/assets/pin.svg"
                alt="pin"
                height={mobileGrid === "one" ? 14 : 14}
                width={mobileGrid === "one" ? 14 : 14}
              />
            </div>
          )}

          {/* {showPin ? (
            <div
              className={cn(
                "bg-white rounded-full shadow-sm flex items-center justify-center",
                // Scale the pin container for the larger grid
                mobileGrid === "one" ? "p-2 rounded-xl" : "p-1.5",
              )}
            >
              <Image
                src="/assets/pin.svg"
                alt="pin"
                height={mobileGrid === "one" ? 18 : 14}
                width={mobileGrid === "one" ? 18 : 14}
              />
            </div>
          ) : (
            <button
              className={cn(
                "bg-white rounded-full shadow-sm text-gray-400 hover:text-danger transition-colors",
                mobileGrid === "one" ? "p-2" : "p-1.5",
              )}
            >
              <HeartIcon
                className={mobileGrid === "one" ? "size-5" : "size-3.5"}
              />
            </button>
          )} */}
        </div>

        {/* OUT OF STOCK */}
        {product.outOfStock && (
          <div
            className={cn(
              "absolute bottom-0 left-0 right-0 bg-[#B42318CC] text-white text-xs md:text-sm text-center py-2 font-medium",
              mobileGrid === "one" ? "py-2 text-base" : "py-2 ",
            )}
          >
            Out of Stock
          </div>
        )}
      </div>

      <div className="py-3 space-y-0.5 md:space-y-3">
        <p
          className={`md:text-xl ${
            mobileGrid === "one" ? "text-lg pb-2" : "text-sm"
          }`}
        >
          {product.name}
        </p>

        <div className="md:flex md:justify-between items-stretch">
          <div
            className={`${
              mobileGrid === "one"
                ? "w-full text-base gap-2 flex"
                : "flex flex-col space-y-0.5"
            }`}
          >
            <p
              className={`line-through text-destructive leading-5 md:text-base ${
                mobileGrid === "one" ? "text-xl" : "text-xs"
              }`}
            >
              {currencyFormatter(product.discount.originalAmount)}
            </p>

            <p
              className={`text-primary font-semibold leading-5 md:text-xl ${
                mobileGrid === "one" ? "text-2xl" : "text-base"
              }`}
            >
              {currencyFormatter(product.price)}
            </p>
          </div>

          <Button
            disabled={product.outOfStock}
            className="hidden md:flex items-center gap-2 mt-2 md:mt-0 rounded-3xl text-xs md:text-base h-auto"
          >
            <PlusCircleIcon className="size-5" />
            Add to Cart
          </Button>

          <Button
            disabled={product.outOfStock}
            className={`
            rounded-3xl flex md:gap-2 gap-1 mt-2 md:mt-0 items-center py-1.5 md:py-0
            md:hidden h-auto md:text-base text-xs 
            ${mobileGrid === "one" ? "w-full text-base py-2 mt-4" : ""}`}
          >
            <PlusCircleIcon className="md:size-5 size-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductListingCard;
