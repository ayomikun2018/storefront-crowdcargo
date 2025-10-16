import ProductListingCard from "@/components/home/tabs/products/product-listing-card";
import { Button } from "@/components/ui/button";
import React from "react";

const ProductListings = () => {
  return (
    <div className="space-y-14">
      <div className="py-5 grid gap-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        {Array(9)
          .fill(null)
          .map((_, index) => (
            <ProductListingCard
              key={index}
              product={{
                name: "Ramen Noodles from Japan and India",
                discount: { rate: 15, originalAmount: 12000 },
                price: 6000,
              }}
            />
          ))}
      </div>
      <div className="flex justify-center">
        <Button className="flex gap-2 px-4 !bg-white text-foreground border border-gray-300 cursor-pointer">
          Load More{" "}
        </Button>
      </div>
    </div>
  );
};

export default ProductListings;
