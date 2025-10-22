import ProductDetailsSheet from "@/components/home/tabs/products/product-details-sheet";
import ProductListingCard from "@/components/home/tabs/products/product-listing-card";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const ProductListings = () => {
  const [showProductDetails, setShowProductDetails] = useState(false);
  //eslint-disable-next-line
  const [selectedProduct, setSelectedProduct] = useState<any>();
  return (
    <>
      <div className="space-y-14">
        <div className="py-5 grid gap-6 grid-cols-[repeat(auto-fit,minmax(230px,1fr))]">
          {Array(9)
            .fill(null)
            .map((_, index) => {
              const product = {
                name: "Ramen Noodles from Japan and India",
                discount: { rate: 15, originalAmount: 12000 },
                price: 6000,
              };
              return (
                <div key={index}>
                  <ProductListingCard
                    product={product}
                    onClick={() => {
                      setSelectedProduct(product);
                      setShowProductDetails(true);
                    }}
                  />
                </div>
              );
            })}
        </div>
        <div className="flex justify-center">
          <Button className="flex gap-2 px-4 !bg-white text-foreground border border-gray-300 cursor-pointer">
            Load More{" "}
          </Button>
        </div>
      </div>
      <ProductDetailsSheet
        isOpen={showProductDetails}
        setIsOpen={setShowProductDetails}
        product={selectedProduct}
      />
    </>
  );
};

export default ProductListings;
