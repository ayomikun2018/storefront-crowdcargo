"use client";
import { currencyFormatter } from "@/lib/utils";
import {
  Badge,
  CautionIcon,
  CoffeeIcon,
  MapPinIcon,
  PriceTagIcon,
  StarIcon,
} from "@repo/ui";

const CollectionBanner = () => {
  return (
    <section className="py-3 md:py-0">
      {/* <div className="relative md:bg-[url(/assets/collection-banner.svg)]  bg-[url(/assets/shop-collection-banner.svg)] bg-cover bg-center rounded-md overflow-hidden md:border-4 md:border-secondary md:rounded-xl"> */}
      <div className="relative md:bg-[url(/assets/collection-banner.svg)]  bg-[url(/assets/shop-collection-banner.svg)] bg-cover bg-center rounded-md overflow-hidden ">
        <div className="w-full h-48 relative">
          <div className=" p-2">
            <div className="flex justify-between absolute top-10 left-0 p-3 w-full text-sm text-white md:hidden">
              <h2 className="text-2xl font-semibold">
                Shop from your various collections
              </h2>
            </div>
            <div className="absolute  bottom-8">
              <Badge className="flex gap-1 bg-destructive">
                <PriceTagIcon className="!size-4 text-warning" /> 23 COLLECTIONS
              </Badge>
            </div>
          </div>
          <div className="absolute w-full h-full inset-0 bg-black/15" />

          <div className="absolute inset-x-0 bottom-0 text-white hidden md:block">
            <div className="relative h-full p-3 pt-10">
              <div
                className="absolute inset-0 z-0
              backdrop-blur-sm 
              mask-[linear-gradient(to_top,black_50%,transparent)] 
              [-webkit-mask-image:linear-gradient(to_top,black_50%,transparent)]"
              />

              <div className="z-10 relative">
                <div className="flex gap-4 items-center">
                  <h2 className="text-2xl font-semibold">Men's Collection</h2>
                  <Badge className="text-foreground bg-white items-center">
                    24 Items
                  </Badge>
                </div>
                <p className="flex gap-1 items-center text-sm leading-snug">
                  Eu metus a lacus quis dapibus vivamus tristique. Donec vitae
                  fermentum quam neque. Quis nunc suspendisse purus arcu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionBanner;
