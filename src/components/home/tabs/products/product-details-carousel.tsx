"use";
import { ExpandIcon, ShareIcon } from "@/components/crowdcargo-icons";
import ModalWrapper from "@/components/elements/modal-wrapper";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC } from "react";

interface ProductDetailsCarouselProps {
  images: string[];
}
const ProductDetailsCarousel: FC<ProductDetailsCarouselProps> = ({
  images,
}) => {
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
    <div className="grid grid-cols-5 h-80 gap-2">
      <div className="col-span-4">
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {images.map((each, index) => (
              <CarouselItem className="" key={index}>
                <Image
                  src={each}
                  alt={`product image ${1}`}
                  height={400}
                  width={400}
                  className="border border-gray-300 rounded-lg object-full w-full h-80 object-center"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <ModalWrapper
            hideTitle
            trigger={
              <Button className="absolute bottom-2 right-2 !bg-gray-100 border border-gray-300 !p-1.5 h-6 text-foreground cursor-pointer">
                <ExpandIcon className="size-4" />
              </Button>
            }
          >
            <Image
              src={images[current]}
              alt="review images"
              className=" object-cover rounded-lg size-[400px] "
              height={100}
              width={100}
            />
          </ModalWrapper>
        </Carousel>
      </div>
      <div className="flex flex-col gap-2">
        <ScrollArea className="flex flex-col items-baseline gap-3 max-h-[17.5rem] overflow-y-auto">
          {images.map((each, index) => (
            <button
              key={index}
              type="button"
              className={cn(
                "w-full overflow-hidden cursor-pointer rounded-lg",
                current == index && "border-2 border-primary"
              )}
              onClick={() => handleIndicatorClick(index)}
            >
              <Image
                src={each}
                alt={`product image ${1}`}
                height={100}
                width={100}
                className="w-full h-20 object-full object-center"
              />
            </button>
          ))}
        </ScrollArea>
        <Button className="gap-2 h-8">
          <ShareIcon className="size-4" />
          Share
        </Button>
      </div>
    </div>
  );
};

export default ProductDetailsCarousel;
