"use client";
import ProductDetailsSheet from "@/components/home/tabs/products/product-details-sheet";
import ProductListingCard from "@/components/home/tabs/products/product-listing-card";
import { useState } from "react";

const AppViewedRecently = () => {
  const [mobileGrid, setMobileGrid] = useState<"two" | "one">("two");

  const [showProductDetails, setShowProductDetails] = useState(false);
  //eslint-disable-next-line
  const [selectedProduct, setSelectedProduct] = useState<any>();
  return (
    <div>
      <div className="bg-blue-50 px-4 py-8 md:hidden ">
        <p className="font-semibold text-xl">Viewed Recently</p>
        <div className="py-5">
          <div
            className="
      flex gap-4 overflow-x-auto scroll-smooth
      no-scrollbar
      snap-x snap-mandatory
      px-1
    "
          >
            {Array(4)
              .fill(null)
              .map((_, index) => {
                const product = {
                  name: "Ramen Noodles from Japan and India",
                  discount: { rate: 15, originalAmount: 12000 },
                  price: 6000,
                };

                return (
                  <div
                    key={index}
                    className="
              snap-start
              min-w-[65%]
              sm:min-w-[45%]
              md:min-w-[30%]
              flex-shrink-0
            "
                  >
                    <ProductListingCard
                      mobileGrid={mobileGrid}
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

export default AppViewedRecently;
