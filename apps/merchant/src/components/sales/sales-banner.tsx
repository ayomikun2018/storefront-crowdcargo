"use client";
import { currencyFormatter } from "@/lib/utils";
import {
  Badge,
  Button,
  CarIcon,
  CautionIcon,
  CoffeeIcon,
  MapPinIcon,
  PriceTagIcon,
  StarIcon,
} from "@repo/ui";
import { StoreIcon } from "lucide-react";
import Image from "next/image";

const SalesBanner = () => {
  return (
    <section className="py-3">
      <div
        className="rounded-lg md:bg-[url(/assets/sales-carousel-image.svg)]  bg-[url(/assets/sales-mobile-banner.svg)] bg-cover bg-center md:block "
      >
        <div className="w-full h-56  relative">
          <div className="md:flex flex-col text-black text-4xl absolute top-18 right-12 hidden">
            <span>Great Sales @ </span>
            <span>Huge Discount</span>
          </div>
          <div className="md:hidden flex justify-end self-end pl-28 p-3 w-full text-sm absolute bottom-8 left-4 md:bottom-8 md:left-8  flex-col gap-4">
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
      </div>
      {/* <div className="relative w-full hidden md:block">
        <Image
          src="/assets/sales-carousel-image.svg"
          alt="Sales Banner"
          width={1200}
          height={300}
          className="w-full h-auto rounded-lg"
        />

        <div className="absolute md:text-3xl font-semibold text-black  top-12 right-12">
          <div className="md:flex flex-col hidden">
            <span>Great Sales @ </span>
            <span>Huge Discount</span>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default SalesBanner;
