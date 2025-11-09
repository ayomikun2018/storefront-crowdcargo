"use client";
import { PlusCircleIcon } from "@repo/ui";
import AddToCartModal from "@/components/home/tabs/products/add-to-cart-modal";
import { Button } from "@repo/ui";
import { currencyFormatter } from "@/lib/utils";
import Image from "next/image";
import { FC, useState } from "react";

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
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);
  return (
    <>
      <div
        className="flex flex-col transition-transform group transform hover:-translate-y-2 p-2 border rounded-lg"
        tabIndex={-1}
        onClick={onClick}
      >
        <div className="h-56 rounded-lg overflow-hidden relative">
          <Image
            src="/assets/product-listing.svg"
            alt="product image"
            height={500}
            width={300}
            className=" w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-300 rounded-lg"
          />
        </div>
        <div className="py-3 space-y-3">
          <p className="text-lg">{product?.name}</p>
          <div className="flex justify-between items-center">
            <div className="space-y-0.5">
              <p className="text-danger text-primary text-xl font-semibold leading-5">
                {currencyFormatter(product?.price)}
              </p>
            </div>
            <Button
              className="rounded-none flex gap-2 items-center text-white cursor-pointer h-8"
              onClick={(e) => {
                e.stopPropagation();
                setShowAddToCartModal(true);
              }}
            >
              <PlusCircleIcon className="size-5" /> Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <AddToCartModal
        isOpen={showAddToCartModal}
        setIsOpen={setShowAddToCartModal}
      />
    </>
  );
};

export default ProductListingCard;
