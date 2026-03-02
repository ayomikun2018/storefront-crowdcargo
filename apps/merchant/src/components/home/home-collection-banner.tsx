"use client";

import { Badge, Button } from "@repo/ui";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

interface HomeCollectionBannerProps {
  bgImage: string;
  productImage: string; // New prop for the right-side image
  title: string;
  itemCount: number;
  titleTextColor?: string;
  badgeTextColor?: string;
  badgeBackgroundColor?: string;
  bannerBackgroundColor?: string;
  bannerBorderColor?: string; // New
}

const HomeCollectionBanner: FC<HomeCollectionBannerProps> = ({
  bgImage,
  productImage,
  title,
  itemCount,
  titleTextColor = "text-white",
  badgeTextColor = "text-black",
  badgeBackgroundColor = "bg-white",
  bannerBackgroundColor = "#1E1546",
  bannerBorderColor = "#1E1546",
}) => {
  return (
    <div
      className="relative flex-shrink-0 rounded-2xl overflow-hidden bg-center bg-no-repeat my-2 
        border-[4px]
        /* Use 80vw or 85vw depending on how much peek you want */
        w-[82vw] 
        max-w-[400px]"
      style={{
        backgroundColor: bannerBackgroundColor,
        borderColor: bannerBorderColor,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
      }}
    >
      {/* Main Container */}
      <div className="w-[85vw]  max-w-[400px] h-[140px] md:h-[182px] flex items-center justify-between px-5 md:px-8  ">
        {/* LEFT CONTENT: Text and Button */}
        <div className="flex flex-col justify-center gap-3 z-10 w-1/2">
          <div className="space-y-1">
            <h2
              className={clsx(
                "text-xl md:text-2xl font-bold leading-tight",
                titleTextColor,
              )}
            >
              {title}
            </h2>
            <Badge
              className={clsx(
                "w-fit text-[10px] md:text-xs rounded-full px-3 py-0.5",
                badgeBackgroundColor,
                badgeTextColor,
              )}
            >
              {itemCount} Items
            </Badge>
          </div>
          <Link href="/collection">
            <Button className="bg-primary hover:bg-blue-600 text-white rounded-sm h-9 px-5 text-xs font-bold w-fit shadow-lg">
              Shop Now
            </Button>
          </Link>
        </div>

        {/* RIGHT CONTENT: Product Image with White Border Box */}
        <div className="relative w-1/2 h-full flex items-center justify-end">
          <Image
            src={productImage}
            alt={title}
            fill
            className="object-contain p-2 scale-110" // scale-110 makes it "pop" out slightly
          />
        </div>
      </div>
    </div>
  );
};

export default HomeCollectionBanner;
