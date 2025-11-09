"use client";
import { currencyFormatter } from "@/lib/utils";
import { Badge, CautionIcon, CoffeeIcon, MapPinIcon, StarIcon } from "@repo/ui";

const HomeBanner = () => {
  return (
    <section className=" bg-[url(/assets/hero-banner-image.jpg)] bg-cover bg-center">
      <div className="w-full h-48 relative ">
        <div className="absolute w-full h-full inset-0 bg-black/15" />
        <div className="flex justify-between absolute top-0 left-0 p-3 w-full text-sm ">
          <div className="flex gap-3">
            <Badge className="flex gap-2 items-center p-1 px-1.5 text-xs h-5 rounded-sm bg-white text-foreground">
              <CoffeeIcon className="w-4" />
              30 - 60 mins
              <CautionIcon className="size-3.5! text-primary" />
            </Badge>
          </div>
          <div className="flex gap-4">
            <Badge className="flex gap-1 bg-white text-foreground">
              From {currencyFormatter(1200)}
            </Badge>
            <Badge className="flex gap-1 bg-white text-foreground">
              <MapPinIcon className="size-4" /> 5 mins Away
            </Badge>
          </div>
        </div>
        <div className="absolute inset-x-0 bg-transparent bottom-0 text-white  ">
          <div className="relative h-full p-3 pt-10">
            <div
              className="absolute inset-0 z-0
              backdrop-blur-sm 
              mask-[linear-gradient(to_top,black_50%,transparent)] 
              [-webkit-mask-image:linear-gradient(to_top,black_50%,transparent)]"
            />

            <div className="z-10 relative">
              <div className="flex gap-4 items-center">
                <h2 className="text-2xl font-semibold">
                  Labule FoodCourt Nigeria
                </h2>
                <Badge className="text-foreground bg-white items-center">
                  4.85{" "}
                  <StarIcon className="text-warning fill-warning size-3.5!" />
                </Badge>
              </div>
              <p className="flex gap-1 items-center">
                <MapPinIcon className="size-4" />
                37, Nnobi street, Surulere, Lagos Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
