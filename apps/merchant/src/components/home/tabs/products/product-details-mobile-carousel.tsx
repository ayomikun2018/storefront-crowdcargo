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
  return (
    <div className="w-full">
      {/* Main image */}
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full aspect-square bg-white rounded-xl border">
                <Image src={img} alt="" fill className="object-contain p-4" />

                {outOfStock && (
                  <div className="absolute top-3 left-3 bg-destructive text-white text-xs px-3 py-1 rounded-full">
                    Out of stock
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Thumbnails */}
      <ScrollArea className="mt-3">
        <div className="flex gap-3">
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
                width={64}
                height={64}
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
