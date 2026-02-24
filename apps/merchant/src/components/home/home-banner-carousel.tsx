"use client";
import { cn } from "@/lib/utils";
import {
  Badge,
  Button,
  CarIcon,
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  PriceTagIcon,
  StoreIcon,
} from "@repo/ui";
import { FlagIcon } from "lucide-react";
import React from "react";

const HomeBannerCarousel = () => {
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
    <div className="rounded-lg overflow-hidden md:h-auto h-34  ">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem className="rounded-lg bg-[url(/assets/carousel-image-1.svg)] bg-cover bg-center md:h-56 h-34 ">
            <div className="w-full relative">
              <div className="flex justify-between absolute top-0 left-0 p-3 w-full text-sm">
                <div className="flex gap-3">
                  <Button className="flex gap-2 items-center p-1 !px-1.5 text-xs h-5 rounded-sm">
                    <>
                      <FlagIcon className="w-4 md:hidden block" />
                      <StoreIcon className="w-4 hidden md:block" />
                    </>
                    Fashion Store
                  </Button>
                  <Button className="gap-2 items-center p-1 !px-1.5 text-xs h-5 rounded-sm !bg-white text-foreground  md:flex">
                    <CarIcon className="w-4" />
                    We are 5mins away
                  </Button>
                </div>
                <Badge className="flex gap-1 bg-destructive hidden md:flex">
                  <PriceTagIcon className="!size-4 text-warning" /> ON SALES
                </Badge>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="rounded-lg">
            <div className="w-full bg-[url(https://dummyimage.com/600x200)] bg-cover bg-center md:h-56 h-34" />
          </CarouselItem>
          <CarouselItem className="rounded-lg">
            <div className="w-full bg-[url(https://dummyimage.com/600x200)] bg-cover bg-center md:h-56 h-34" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-2 cursor-pointer" />
        <CarouselNext className="right-2 cursor-pointer" />
        <div className="flex gap-3 absolute bottom-2 right-2">
          {Array(api?.scrollSnapList().length || 0)
            .fill(0)
            .map((_, index) => (
              <button
                key={index}
                type="button"
                className={cn(
                  "w-8 h-1.5 bg-gray-100/50 cursor-pointer",
                  current == index && "bg-primary",
                )}
                onClick={() => handleIndicatorClick(index)}
              />
            ))}
        </div>
      </Carousel>
    </div>
  );
};

export default HomeBannerCarousel;
