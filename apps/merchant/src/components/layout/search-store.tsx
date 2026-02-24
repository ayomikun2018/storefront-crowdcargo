// "use client";
// import { useBreakpoint } from "@/hooks/use-breakpoint";
// import { cn, currencyFormatter } from "@/lib/utils";
// import {
//   ArrowRightIcon,
//   Badge,
//   Button,
//   HeartIcon,
//   Input,
//   PlusCircleIcon,
//   SearchIcon,
// } from "@repo/ui";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// const SearchStore = () => {
//   const [showPopover, setShowPopover] = useState(false);
//   const { isMobile, isTablet, isDesktop } = useBreakpoint();
//   return (
//     <div className="relative w-full  ">
//       <SearchIcon className="absolute inset-y-3.5 left-3 size-4" />
//       <Input
//         placeholder="Search Oriamo Store"
//         type="text"
//         className="peer w-full h-11 py-3 md:rounded-3xl  rounded-full outline-none pl-9 bg-gray-100 text-foreground     md:ring-0   ring-1 ring-primary  "
//         onBlur={() => setShowPopover(false)}
//       />
//       <div
//         className={cn(
//           `absolute opacity-0 top-3 -z-[50] duration-300 h-0 peer-focus:h-auto peer-focus:z-20 peer-focus:top-14 peer-focus:opacity-100  bg-white rounded-lg w-full p-2 drop-shadow-2xl !overflow-hidden`,
//           showPopover && "z-20 top-14 opacity-100 block",
//         )}
//       >
//         <div className="relative max-h-[60vh] overflow-auto space-y-3 pb-12 bg-red-600">
//           {Array(4)
//             .fill(null)
//             .map((each, index) => (
//               <div
//                 key={index}
//                 className="hover:bg-gray-50 p-2 rounded-lg border border-gray-300 flex gap-2"
//               >
//                 <div className="w-32">
//                   <Image
//                     src="/assets/pair-trainers.svg"
//                     alt="product image"
//                     width={100}
//                     height={100}
//                     className="object-cover size-full rounded-lg border border-gray-200"
//                   />
//                 </div>
//                 <div className="space-y-2 w-full">
//                   <div className="flex justify-between">
//                     <Badge className="text-warning bg-yellow-50 rounded-3xl">
//                       15% off
//                     </Badge>
//                     <HeartIcon className="size-4" />
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <div className="space-y-2">
//                       <p className="text-lg">
//                         Ramen Noodles from Japan and India
//                       </p>
//                       <div className="space-y-0.5 leading-4">
//                         <p className="text-destructive line-through">
//                           {currencyFormatter(1200)}
//                         </p>
//                         <p className="text-primary text-lg">
//                           {currencyFormatter(6000)}
//                         </p>
//                       </div>
//                     </div>
//                     <Button className="rounded-3xl flex gap-2 h-8 text-xs">
//                       <PlusCircleIcon className="size-4" />
//                       Add to Cart
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           <div className="fixed left-0 bottom-0 w-full bg-white p-2">
//             <Button
//               asChild
//               className="w-full flex gap-2 text-primary hover:text-white bg-primary/10 font-semibold"
//             >
//               <Link
//                 href={`/?search=${"Search Product"}`}
//                 onPointerDown={(e) => {
//                   e.preventDefault();
//                   const previouslyFocused =
//                     document.activeElement as HTMLElement;
//                   setTimeout(() => previouslyFocused?.blur(), 1000);
//                 }}
//               >
//                 See all (140) results <ArrowRightIcon className="size-4" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchStore;
"use client";

import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cn, currencyFormatter } from "@/lib/utils";
import {
  ArrowRightIcon,
  Badge,
  Button,
  HeartIcon,
  Input,
  PlusCircleIcon,
  SearchIcon,
} from "@repo/ui";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SearchStore = () => {
  const [showPopover, setShowPopover] = useState(false);
  const { isMobile } = useBreakpoint();

  const items = [
    {
      name: "Tofa Chair ",
      meta: "Color: Blue | Size: L | QTY: 3",
      price: 40000,
      oldPrice: 50000,
      discounted: true,
    },
    {
      name: "Modern Sofa",
      meta: "Color: Black | Size: XL | QTY: 1",
      price: 120000,
    },
    {
      name: "Wooden Table",
      meta: "Color: Brown | Size: M | QTY: 2",
      price: 50000,
    },
  ];

  const SearchResults = () => (
    <div className="relative max-h-[60vh] overflow-auto space-y-3 pb-3">
      {/* 💻 Desktop Results */}
      {!isMobile &&
        Array(4)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="hover:bg-gray-50 p-2 rounded-lg border border-gray-300 flex gap-2"
            >
              <div className="w-32">
                <Image
                  src="/assets/pair-trainers.svg"
                  alt="product image"
                  width={100}
                  height={100}
                  className="object-cover size-full rounded-lg border border-gray-200"
                />
              </div>

              <div className="space-y-2 w-full">
                <div className="flex justify-between">
                  <Badge className="text-warning bg-yellow-50 rounded-3xl">
                    15% off
                  </Badge>
                  <HeartIcon className="size-4" />
                </div>

                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <p className="text-lg">
                      Ramen Noodles from Japan and India
                    </p>

                    <div className="space-y-0.5 leading-4">
                      <p className="text-destructive line-through">
                        {currencyFormatter(1200)}
                      </p>
                      <p className="text-primary text-lg">
                        {currencyFormatter(6000)}
                      </p>
                    </div>
                  </div>

                  <Button className="rounded-3xl flex gap-2 h-8 text-xs">
                    <PlusCircleIcon className="size-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}

      {/* 📱 Mobile Results */}
      {isMobile &&
        items.map(({ name, meta, price, oldPrice, discounted }, index) => (
          <div key={index} className="flex border-b gap-4 px-4 py-2 w-full">
            <div className="border rounded p-2">
              <Image
                src="/assets/product-listing.svg"
                alt="Product"
                width={86}
                height={86}
                className="rounded bg-gray-100"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="pb-1 font-bold">{name}</p>
              <p className="text-xs text-gray-500">{meta}</p>
              <p className="text-primary font-semibold text-sm pb-1">
                ₦{price.toLocaleString()}
              </p>
              <Button className="rounded-3xl gap-1 h-8 text-xs w-30 ">
                <PlusCircleIcon className="size-4" />
                Add to Cart
              </Button>
            </div>
          </div>
        ))}

      {/* Bottom CTA */}
      <div className="w-full bg-white">
        <Button
          asChild
          className="w-full flex gap-2 text-primary hover:text-white bg-primary/10 font-semibold mt-4 md:mt-0"
        >
          <Link
            href={`/?search=Search Product`}
            onPointerDown={(e) => {
              e.preventDefault();
              const previouslyFocused = document.activeElement as HTMLElement;
              setTimeout(() => previouslyFocused?.blur(), 100);
            }}
          >
            See all (140) results
            <ArrowRightIcon className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="relative w-full">
      <SearchIcon className="absolute inset-y-3.5 left-3 size-4" />

      <Input
        placeholder="Search Oriamo Store"
        type="text"
        className={cn(
          "peer w-full h-11 py-3 pl-9 bg-gray-100 text-foreground outline-none",
          "rounded-full md:rounded-3xl",
          "ring-1 ring-primary md:ring-0",
        )}
        onFocus={() => {
          if (isMobile) setShowPopover(true);
        }}
        onClick={() => {
          if (isMobile) setShowPopover(true);
        }}
        onBlur={() => {
          if (!isMobile) setShowPopover(false);
        }}
      />

      {/* 💻 Desktop Popover */}
      {!isMobile && (
        <div
          className={cn(
            "absolute opacity-0 top-3 -z-[50] duration-300 h-0",
            "peer-focus:h-auto peer-focus:z-20 peer-focus:top-14 peer-focus:opacity-100",
            "bg-white rounded-lg w-full p-2 drop-shadow-2xl overflow-hidden",
            showPopover && "z-20 top-14 opacity-100 block",
          )}
        >
          <SearchResults />
        </div>
      )}

      {/* 📱 Mobile Full Screen */}
      {isMobile && (
        <>
          {/* Optional backdrop */}
          {showPopover && (
            <div
              className="fixed inset-0 bg-black/30 z-40 "
              onClick={() => setShowPopover(false)}
            />
          )}

          {/* Bottom Sheet */}
          <div
            className={cn(
              "fixed top-0 left-0 right-0 z-50",
              "bg-white rounded-b-2xl shadow-2xl",
              "h-[58vh] transition-all duration-300",
              showPopover
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0 pointer-events-none",
            )}
          >
            <div className="flex justify-center pt-2">
              <div className="w-10 h-1.5 bg-gray-300 rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center gap-2 p-3 border-b">
              <Button
                variant="ghost"
                onClick={() => setShowPopover(false)}
                className="rounded-full bg-gray-100"
              >
                <ArrowLeftIcon className="size-4" />
              </Button>

              <Input
                autoFocus
                placeholder="Search Oriamo Store"
                className="flex-1 rounded-full bg-gray-100 ring-1 ring-primary"
              />
            </div>

            {/* Results */}
            <div className="p-3  overflow-y-auto h-[calc(60vh-80px)]">
              <SearchResults />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchStore;
