"use client";
import { cn, currencyFormatter } from "@/lib/utils";
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

const ProductViewedRecentlyCard: FC<ProductListingCardProps> = ({
  product,
  mobileGrid,
  showPin,
  onClick,
}) => {
  return (
    <div className="flex flex-col group cursor-pointer" onClick={onClick}>
      <div
        className={cn(
          "rounded-sm overflow-hidden bg-gray-100  relative transition-all",
          mobileGrid === "one" ? "h-64" : "h-38",
          "md:h-72",
        )}
      >
        <Image
          src="/assets/product-listing.svg"
          alt="product image"
          fill // Using fill + object-contain to match the screenshot's 'centered chair' look
          className={cn(
            "object-contain p-4 transition-transform duration-300 group-hover:scale-110",
            product.outOfStock && "opacity-70",
          )}
        />

        <div className="absolute inset-x-0 top-0 flex justify-between items-start p-2">
          <Badge className="text-[8px] md:text-sm text-warning bg-gray-50 p-0.5 md:px-1 rounded-full font-semibold">
            {product.discount.rate}% off
          </Badge>

          {/* <button className="bg-white p-1.5 rounded-full shadow-sm">
            <HeartIcon className="size-4 text-gray-400" />
          </button> */}
        </div>
      </div>

      <div className="pt-2 space-y-1">
        <p className="text-sm font-medium leading-tight text-gray-700 line-clamp-2">
          {product?.name}
        </p>

        <div className="flex flex-col">
          <p className="text-xs text-destructive line-through">
            {currencyFormatter(product?.discount.originalAmount)}
          </p>
          <p className="text-base font-bold text-primary">
            {currencyFormatter(product?.price)}
          </p>
        </div>

    
           <Button
            disabled={product.outOfStock}
            className={`
            rounded-3xl flex md:gap-2 gap-1 mt-2 md:mt-0 items-center py-1.5 md:py-0
            md:hidden h-auto md:text-base text-xs 
            ${mobileGrid === "one" ? "w-full text-sm" : ""}`}
          >
            <PlusCircleIcon className="md:size-5 size-4" />
            Add to Cart
          </Button>
      </div>
    </div>
  );
};

export default ProductViewedRecentlyCard;
