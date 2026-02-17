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
import Image from "next/image";
import React from "react";

const SalesBannerCarousel = () => {
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
    <div className="rounded-lg overflow-hidden ">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem className="rounded-lg md:bg-[url(/assets/sales-carousel-image.svg)] md:ml-2  bg-[url(/assets/sales-mobile-banner.svg)] bg-cover bg-center  ">
            <div className="w-full h-56  relative">
              <div className="md:flex hidden justify-between absolute top-0 left-0 p-3 w-full text-sm">
                <div className="flex gap-3 ">
                  <Button className="flex gap-2 items-center p-1 !px-1.5 text-xs h-5 rounded-sm">
                    <StoreIcon className="w-4" />
                    Fashion Store
                  </Button>
                  <Button className="flex gap-2 items-center p-1 !px-1.5 text-xs h-5 rounded-sm !bg-white text-foreground">
                    <CarIcon className="w-4" />
                    We are 5mins away
                  </Button>
                </div>

                <Badge className="flex gap-1 bg-destructive">
                  <PriceTagIcon className="!size-4 text-warning" /> ON SALES
                </Badge>
              </div>
              <div className="md:flex flex-col text-black text-4xl absolute top-18 right-12 hidden">
                <span>Great Sales @ </span>
                <span>Huge Discount</span>
              </div>
              <div className="md:hidden flex justify-end self-end ml-28 p-3 w-full text-sm absolute bottom-8 left-4 md:bottom-8 md:left-8  flex-col gap-4">
                <div className="flex  items-center font-semibold text-lg gap-4">
                  <Image
                    src="/assets/merchant-avatar.png"
                    alt="Merchant Avatar"
                    className="rounded-full size-20 object-cover"
                    height={60}
                    width={60}
                  />
                  <h2 className="">Oriamo Store</h2>
                </div>
                <Badge className="flex gap-1 bg-destructive">
                  <PriceTagIcon className="!size-4 text-warning" /> 23 ITEMS ON
                  SALES
                </Badge>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="rounded-lg">
            <div className="w-full bg-[url(https://dummyimage.com/600x200)] bg-cover bg-center h-56" />
          </CarouselItem>
          <CarouselItem className="rounded-lg">
            <div className="w-full bg-[url(https://dummyimage.com/600x200)] bg-cover bg-center h-56" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-2 cursor-pointer" />
        <CarouselNext className="right-2 cursor-pointer" />
        <div className="flex gap-3 absolute md:bottom-4 bottom-2 right-2">
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

export default SalesBannerCarousel;
