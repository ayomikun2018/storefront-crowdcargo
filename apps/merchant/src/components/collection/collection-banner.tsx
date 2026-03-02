"use client";

import { useBreakpoint } from "@/hooks/use-breakpoint";
import { Badge, PriceTagIcon } from "@repo/ui";
import Image from "next/image";

const CollectionBanner = () => {

  return (
    <section className="">
      <div className="relative rounded-md overflow-hidden md:hidden block">
        <Image
          src="/assets/collection-mobile-banner.svg"
          alt="Shop Collections"
          width={1200}
          height={500}
          className="w-full h-auto"
          priority
        />


        <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
          <h2 className="text-xl font-semibold max-w-[75%]">
            Shop From Your {""}
            Various Collections
          </h2>

          <Badge className="flex gap-1 bg-destructive w-fit">
            <PriceTagIcon className="size-4 text-warning" />
            23 COLLECTIONS
          </Badge>

        </div>
      </div>

      <section className="py-3 md:py-0 md:block hidden">
        {/* <div className="relative md:bg-[url(/assets/collection-banner.svg)]  bg-[url(/assets/shop-collection-banner.svg)] bg-cover bg-center rounded-md overflow-hidden md:border-4 md:border-secondary md:rounded-xl"> */}
        <div className="relative md:bg-[url(/assets/collection-banner.svg)]  bg-[url(/assets/collection-mobile-banner.svg)] bg-cover bg-center rounded-md overflow-hidden ">
          <div className="w-full h-48 relative">
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
    </section>
  );
};

export default CollectionBanner;
