"use client";

import { Badge, Button } from "@repo/ui";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

interface HomeCollectionBannerProps {
  bgImage: string;
  title: string;
  itemCount: number;
  titleTextColor?: string;
  badgeTextColor?: string;
  badgeBackgroundColor?: string;
}

const HomeCollectionBanner: FC<HomeCollectionBannerProps> = ({
  bgImage,
  title,
  itemCount,
  titleTextColor = "text-white",
  badgeTextColor = "text-black",
  badgeBackgroundColor = "bg-white",
}) => {
  return (
    <div
      className="
        relative
        flex-shrink-0
        rounded-2xl
        overflow-hidden
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "100%",
      }}
    >
      <div className="aspect-[3/2] w-[70vw] max-w-[420px]  flex flex-col md:px-8 px-2">
        <div className="">
          <h2
            className={clsx(
              "md:text-2xl text-lg font-semibold pt-10 md:pt-16",
              titleTextColor,
            )}
          >
            {title}
          </h2>

          <Badge
            className={clsx(
              "w-fit md:text-sm text-xs rounded-full",
              badgeBackgroundColor,
              badgeTextColor,
            )}
          >
            {itemCount} Items
          </Badge>
        </div>

        <div className="pt-4">
          <Link href="/collection">
            <Button className=" bg-primary text-white p-1 rounded-md px-6 py-2 md:px-6 md:text-base text-xs font-semibold md:mt-8 ">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCollectionBanner;
