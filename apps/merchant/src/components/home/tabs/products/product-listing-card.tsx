"use client";
import { currencyFormatter } from "@/lib/utils";
import { Badge, Button, HeartIcon, PlusCircleIcon } from "@repo/ui";
import { PinIcon } from "lucide-react";
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
        className={`rounded-lg overflow-hidden bg-gray-100 relative transition-all duration-300 ease-in-out
  ${mobileGrid === "one" ? "h-80" : "h-50"}
  md:h-72
`}
      >
        <Image
          src="/assets/product-listing.svg"
          alt="product image"
          height={500}
          width={300}
          className={`
      w-full h-full object-cover object-center
      transform transition-transform duration-300
      group-hover:scale-125
      ${product.outOfStock ? "opacity-70" : ""}
    `}
        />

        {/* TOP BADGES */}
        <div className="absolute flex p-3 justify-between items-center top-0 left-0 w-full">
          <Badge className="md:text-sm text-xs text-warning bg-gray-50 p-0.5 px-1 rounded-full font-semibold">
            {product.discount.rate}% off
          </Badge>

          {showPin && (
            <div className="bg-white p-1 rounded-full md:hidden">
              <Image
                src="/assets/pin.svg"
                alt="pin image"
                height={14}
                width={14}
              />
            </div>
          )}
        </div>

        {/* OUT OF STOCK BANNER */}
        {product.outOfStock && (
          <div className="absolute bottom-0 left-0 right-0 bg-[#B42318CC] text-white text-sm text-center py-2 font-medium rounded-none">
            Out of Stock
          </div>
        )}
      </div>
      <div className="py-3 md:space-y-3 space-y-1">
        <p
          className={`md:text-xl  ${mobileGrid === "one" ? "text-lg" : "text-base"}`}
        >
          {product?.name}
        </p>
        <div className="md:flex md:justify-between items-stretch ">
          <div
            className={`space-y-0.5 ${mobileGrid === "one" ? "w-full  text-base  gap-2" : " flex flex-col"}`}
          >
            <p
              className={`text-danger line-through text-destructive md:text-base  leading-5 ${mobileGrid === "one" ? "text-base" : "text-xs"}`}
            >
              {currencyFormatter(product?.discount.originalAmount)}
            </p>
            <p
              className={`text-primary md:text-xl text-base font-semibold leading-5 ${mobileGrid === "one" ? "text-xl" : "text-base"}`}
            >
              {currencyFormatter(product?.price)}
            </p>
          </div>
          <Button
            disabled={product.outOfStock}
            className={`
    rounded-3xl md:flex md:gap-2 gap-1 mt-2 md:mt-0 items-center
    h-auto md:text-base text-xs hidden`}
          >
            <PlusCircleIcon className="size-5" />
            {product.outOfStock ? "Add to Cart" : "Add to Cart"}
          </Button>

          <Button
            disabled={product.outOfStock}
            className={`
    rounded-3xl flex md:gap-2 gap-1 mt-2 md:mt-0 items-center
    md:hidden h-auto md:text-base text-xs
    ${mobileGrid === "one" ? "w-full text-sm" : ""}`}
          >
            <PlusCircleIcon className="size-5" />
            {product.outOfStock ? "Add to Cart" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductListingCard;
