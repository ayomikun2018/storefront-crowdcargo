"use client";
import ProductDetailsSheet from "@/components/home/tabs/products/product-details-sheet";
import ProductListingCard from "@/components/home/tabs/products/product-listing-card";
import { ChevronLeft, ChevronRight, ChevronRightIcon } from "lucide-react";
import { useState } from "react";

const ProductViewedRecently = () => {
  const [mobileGrid, setMobileGrid] = useState<"two" | "one">("two");

  const [showProductDetails, setShowProductDetails] = useState(false);
  //eslint-disable-next-line
  const [selectedProduct, setSelectedProduct] = useState<any>();
  return (
    <div>
      <div className="bg-blue-50 px-4 py-8 hidden md:block ">
        <div className="absolute top-4 left-0 right-0 px-4">
          <div className="flex  justify-between items-center ">
            <p className="font-semibold text-xl ">Viewed Recently</p>{" "}
            <div className="flex items-center gap-1 text-gray-500">
              <span className="text-sm">Scroll</span>
              <ChevronRight className="animate-pulse" />
            </div>
          </div>
        </div>

        <div className="py-5 pt-12">
          <div
            className="
      grid
      grid-flow-col
      auto-cols-[220px]
      sm:auto-cols-[240px]
      md:auto-cols-[260px]
      gap-6
      overflow-x-auto
      scroll-smooth
      no-scrollbar
    "
          >
            {Array(6)
              .fill(null)
              .map((_, index) => {
                const product = {
                  name: "Ramen Noodles from Japan and India",
                  discount: { rate: 15, originalAmount: 12000 },
                  price: 6000,
                };

                return (
                  <ProductListingCard
                    key={index}
                    mobileGrid={mobileGrid}
                    product={product}
                    showPin={false}
                    onClick={() => {
                      setSelectedProduct(product);
                      setShowProductDetails(true);
                    }}
                  />
                );
              })}
          </div>
        </div>

        <ProductDetailsSheet
          isOpen={showProductDetails}
          setIsOpen={setShowProductDetails}
          product={selectedProduct}
        />
      </div>
    </div>
  );
};

export default ProductViewedRecently;
