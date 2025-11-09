"use client";
import { currencyFormatter } from "@/lib/utils";
import { Badge, Button, HeartIcon, PlusCircleIcon } from "@repo/ui";
import Image from "next/image";
import { FC } from "react";

interface ProductListingCardProps {
  product: {
    name: string;
    discount: { rate: number; originalAmount: number };
    price: number;
  };
  onClick: () => void;
}

const ProductListingCard: FC<ProductListingCardProps> = ({
  product,
  onClick,
}) => {
  return (
    <div className="flex flex-col group" tabIndex={-1} onClick={onClick}>
      <div className="h-72 rounded-lg overflow-hidden bg-gray-100 relative">
        <Image
          src="/assets/product-listing.svg"
          alt="product image"
          height={500}
          width={300}
          className=" w-full h-full object-cover object-center transform group-hover:scale-125 transition-transform duration-300"
        />
        <div className="absolute flex p-3 justify-between items-center top-0 left-0 w-full">
          <Badge className="text-sm text-warning bg-yellow-50 p-0.5 px-1">
            {product.discount.rate}% off
          </Badge>
          <HeartIcon className="size-6 text-destructive fill-destructive" />
        </div>
      </div>
      <div className="py-3 space-y-3">
        <p className="text-xl">{product?.name}</p>
        <div className="flex justify-between items-stretch">
          <div className="space-y-0.5">
            <p className="text-danger line-through text-destructive text-base leading-5">
              {currencyFormatter(product?.discount.originalAmount)}
            </p>
            <p className="text-danger text-primary text-xl font-semibold leading-5">
              {currencyFormatter(product?.price)}
            </p>
          </div>
          <Button className="rounded-3xl flex gap-2 items-center text-white h-auto cursor-pointer">
            <PlusCircleIcon className="size-5" /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductListingCard;
