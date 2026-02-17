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

interface ProductDetailsWebCarouselProps {
  images: string[];
  outOfStock?: boolean;
}
const ProductDetailsWebCarousel = ({
  images,
  outOfStock,
}: ProductDetailsWebCarouselProps) => {
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
    <div className="grid grid-cols-4 h-64 gap-2 ">
      <div className="col-span-3">
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {images.map((each, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-64 rounded-lg overflow-hidden border border-gray-300">
                  <Image
                    src={each}
                    alt={`product image ${index}`}
                    height={400}
                    width={400}
                    className={cn(
                      "w-full h-full object-contain",
                      outOfStock && "opacity-80",
                    )}
                  />

                  {outOfStock && (
                    <div className="absolute bottom-0 left-0 right-0 bg-[#B42318CC] text-white text-sm text-center py-2 font-medium rounded-b-lg">
                      Out of Stock
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <ModalWrapper
            hideTitle
            className="!max-w-screen h-screen"
            trigger={
              <Button className="absolute bottom-2 right-2 !bg-gray-100 border border-gray-300 !p-1.5 h-6 text-foreground cursor-pointer">
                <ExpandIcon className="size-4" />
              </Button>
            }
          >
            <div className="w-full max-h-full">
              <Image
                src={images[current]}
                alt="review images"
                className="object-contain rounded-lg w-full h-full"
                height={100}
                width={100}
              />
            </div>
          </ModalWrapper>
        </Carousel>
      </div>
      <div className="flex flex-col gap-2">
        <ScrollArea className="flex flex-col items-baseline gap-3 max-h-[13.5rem] overflow-y-auto pr-2">
          {images.map((each, index) => (
            <button
              key={index}
              type="button"
              className={cn(
                "w-full overflow-hidden cursor-pointer rounded-lg",
                current == index && "border-2 border-primary",
              )}
              onClick={() => handleIndicatorClick(index)}
            >
              <Image
                src={each}
                alt={`product image ${index}`}
                height={100}
                width={100}
                className="w-full h-16 object-full object-contain"
              />
            </button>
          ))}
        </ScrollArea>
        <ShareDropdown
          trigger={
            <Button className="gap-1 h-8">
              <ShareIcon className="size-3.5" />
              Share
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default ProductDetailsWebCarousel;
