"use";
import { ExpandIcon, ShareIcon } from "@repo/ui";
import ModalWrapper from "@/components/elements/modal-wrapper";
import ShareDropdown from "@/components/home/share-dropdown";
import { Button } from "@repo/ui";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@repo/ui";
import { ScrollArea } from "@repo/ui";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC } from "react";

interface ProductDetailsMobileCarouselProps {
  images: string[];
  outOfStock?: boolean;
}
const ProductDetailsMobileCarousel = ({
  images,
  outOfStock,
}: ProductDetailsMobileCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const handleIndicatorClick = (index: number) => {
    if (!api) {
      return;
    }
    api.scrollTo(index);
    setCurrent(index);
  };

  React.useEffect(() => {
    if (!api) {
      return;
    }
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const stockCount = 4; // Replace with actual stock count if dynamic

  return (
    <div className="w-full">
      {/* Main image */}
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {images.map((each, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[345px] rounded-lg overflow-hidden border border-gray-300">
                {/* Stock badge */}
                {!outOfStock && (
                  <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-lg z-10">
                    {stockCount} units in Stock
                  </div>
                )}

                <Image
                  src={each}
                  alt={`product image ${index}`}
                  fill
                  className={cn(
                    "w-full h-full object-contain",
                    outOfStock && "opacity-80",
                  )}
                />

                {outOfStock && (
                  <div className="absolute bottom-0 left-0 right-0 bg-[#B42318CC] text-white text-sm text-center py-4 font-semibold rounded-b-lg">
                    Out of Stock
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Thumbnails */}
      <ScrollArea className="mt-3">
        <div className="flex items-center justify-center gap-3">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "w-16 h-16 rounded-lg border overflow-hidden",
                current === index && "border-primary",
              )}
            >
              <Image
                src={img}
                alt=""
                width={74}
                height={74}
                className="object-contain"
              />
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ProductDetailsMobileCarousel;
