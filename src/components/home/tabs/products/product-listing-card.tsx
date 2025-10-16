"use client";
import { HeartIcon, PlusCircleIcon } from "@/components/crowdcargo-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { currencyFormatter } from "@/lib/utils";
import Image from "next/image";
import React, { FC } from "react";

interface ProductListingCardProps {
  product: {
    name: string;
    discount: { rate: number; originalAmount: number };
    price: number;
  };
}

const ProductListingCard: FC<ProductListingCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col group">
      <div className="h-56 rounded-lg overflow-hidden bg-gray-100 relative">
        <Image
          src="/assets/product-listing.png"
          alt="product image"
          height={500}
          width={300}
          className="object-cover object-center transform group-hover:scale-125 transition-transform duration-300"
        />
        <div className="absolute flex p-3 justify-between items-center top-0 left-0 w-full">
          <Badge className="text-sm text-warning bg-yellow-50 p-0.5 px-1">
            {product.discount.rate}% off
          </Badge>
          <HeartIcon className="size-6 fill-danger" />
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
