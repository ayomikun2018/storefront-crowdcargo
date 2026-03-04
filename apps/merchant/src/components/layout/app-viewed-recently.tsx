"use client";

import { Suspense, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { ScrollArea, ScrollBar } from "@repo/ui";
import ProductDetailsSheet from "@/components/home/tabs/products/product-details-sheet";
import ProductViewedRecentlyCard from "../home/tabs/products/product-viewed-recently-card";

// 1. The Internal Content Component
const ViewedRecentlyContent = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [showProductDetails, setShowProductDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Logic dependent on searchParams must be inside here
  const isCollectionLanding =
    pathname === "/collection" && !searchParams.get("view");
  const hardHiddenRoutes = [
    "/checkout",
    "/customer-review",
    "/delivery-policy",
    "/store-information",
    "/portal",
  ];
  const isHardHidden = hardHiddenRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (isCollectionLanding || isHardHidden) return null;

  return (
    <section className="bg-[#EBF2FF] py-6 md:hidden">
      <div className="px-4">
        <h2 className="text-[22px] font-bold text-gray-800 mb-4">
          Viewed Recently
        </h2>

        <ScrollArea className="w-full">
          <div className="flex gap-3 pb-4">
            {Array(5)
              .fill(null)
              .map((_, index) => {
                const product = {
                  name: "Chinese Food",
                  discount: { rate: 15, originalAmount: 12000 },
                  price: 6000,
                };

                return (
                  <div key={index} className="w-[155px] shrink-0">
                    <ProductViewedRecentlyCard
                      mobileGrid="two"
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
          <ScrollBar orientation="horizontal" className="opacity-0" />
        </ScrollArea>
      </div>

      <ProductDetailsSheet
        isOpen={showProductDetails}
        setIsOpen={setShowProductDetails}
        product={selectedProduct}
      />
    </section>
  );
};

// 2. The Exported Component with Suspense Boundary
const AppViewedRecently = () => {
  return (
    <Suspense fallback={null}>
      <ViewedRecentlyContent />
    </Suspense>
  );
};

export default AppViewedRecently;
// "use client";
// import ProductDetailsSheet from "@/components/home/tabs/products/product-details-sheet";
// import ProductListingCard from "@/components/home/tabs/products/product-listing-card";
// import { useState } from "react";

// const AppViewedRecently = () => {
// const [mobileGrid, setMobileGrid] = useState<"two" | "one">("two");

// const [showProductDetails, setShowProductDetails] = useState(false);
// //eslint-disable-next-line
// const [selectedProduct, setSelectedProduct] = useState<any>();
//   return (
//     <div>
//       <div className="bg-blue-50 px-4 py-8 md:hidden">
//         <p className="font-semibold text-xl">Viewed Recently</p>
//         <div className="py-5">
//           <div
//             className="
//       flex gap-4 overflow-x-auto scroll-smooth
//       no-scrollbar
//       snap-x snap-mandatory
//       px-1
//     "
//           >
//             {Array(4)
//               .fill(null)
//               .map((_, index) => {
//                 const product = {
//                   name: "Ramen Noodles from Japan and India",
//                   discount: { rate: 15, originalAmount: 12000 },
//                   price: 6000,
//                 };

//                 return (
//                   <div
//                     key={index}
//                     className="
//               snap-start
//               min-w-[65%]
//               sm:min-w-[45%]
//               md:min-w-[30%]
//               flex-shrink-0
//             "
//                   >
//                     <ProductListingCard
//                       mobileGrid={mobileGrid}
//                       product={product}
//                       onClick={() => {
//                         setSelectedProduct(product);
//                         setShowProductDetails(true);
//                       }}
//                     />
//                   </div>
//                 );
//               })}
//           </div>
//         </div>

//         <ProductDetailsSheet
//           isOpen={showProductDetails}
//           setIsOpen={setShowProductDetails}
//           product={selectedProduct}
//         />
//       </div>
//     </div>
//   );
// };

// export default AppViewedRecently;
