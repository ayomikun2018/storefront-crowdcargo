"use client";

import { FC, useState } from "react";
import CollectionBanner from "@/components/collection/collection-banner";
import HomeCollectionBanner from "@/components/home/home-collection-banner";
import ProductListings from "@/components/home/tabs/products/product-listings";
import ShareDropdown from "@/components/home/share-dropdown";

import {
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  ShareIcon,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@repo/ui";

import { ArrowBigLeft, ArrowLeft, ChevronLeft, FilterIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface PortalPageProps {
  searchParams: { activeTab: string };
}

type MobileView = "collections" | "details";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const banners = [
  {
    bgImage: "/assets/home-collection-banner.svg",
    title: "Gadgets Go",
    itemCount: 25,
    titleTextColor: "text-white",
    badgeTextColor: "text-black",
    badgeBackgroundColor: "bg-white",
  },
  {
    bgImage: "/assets/home-collection-banner-two.svg",
    title: "My Bags",
    itemCount: 40,
    titleTextColor: "text-black",
    badgeTextColor: "text-white",
    badgeBackgroundColor: "bg-black",
  },
  {
    bgImage: "/assets/home-collection-banner.svg",
    title: "Gadgets Go",
    itemCount: 25,
    titleTextColor: "text-white",
    badgeTextColor: "text-black",
    badgeBackgroundColor: "bg-white",
  },
  {
    bgImage: "/assets/home-collection-banner-two.svg",
    title: "My Bags",
    itemCount: 40,
    titleTextColor: "text-black",
    badgeTextColor: "text-white",
    badgeBackgroundColor: "bg-black",
  },
];

const CollectionPage: FC<PortalPageProps> = () => {
  const [mobileView, setMobileView] = useState<MobileView>("collections");

  return (
    <div className="max-w-8xl p-5">
      <div className="hidden md:block">
        <DesktopTopBar />
        <CollectionBanner />
        <ProductListings />
      </div>
      <div className="block md:hidden">
        {mobileView === "collections" && (
          <MobileCollectionList onSelect={() => setMobileView("details")} />
        )}

        {mobileView === "details" && (
          <Tooltip>
            <TooltipTrigger asChild>
              <MobileCollectionDetails
                onBack={() => setMobileView("collections")}
              />
            </TooltipTrigger>
            <TooltipContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              amet, magnam perferendis dolorum sed iusto repellendus culpa
              provident officiis excepturi illo necessitatibus, consectetur
              minus. Debitis aliquid deserunt qui corrupti necessitatibus.
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default CollectionPage;

const DesktopTopBar = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <p>Oriamo Store / Collections / Winters Wear</p>

        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-36 h-8">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                <SelectItem value="foodstuff">Foodstuff</SelectItem>
                <SelectItem value="school-items">School Items</SelectItem>
                <SelectItem value="appliances">Appliances</SelectItem>
                <SelectItem value="gadgets">Gadgets</SelectItem>
                <SelectItem value="textbooks">Textbooks</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-2 items-center border bg-white text-gray-500 h-8 px-2 rounded-lg text-sm">
              Filter <FilterIcon className="size-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Low - High</DropdownMenuItem>
              <DropdownMenuItem>High - Low</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ShareDropdown
            trigger={
              <Button className="gap-2 h-8">
                <ShareIcon className="size-4" />
                Share
              </Button>
            }
          />
        </div>
      </div>

      <hr className="border-t border-gray-300 mt-2 mb-4" />
    </>
  );
};

const MobileCollectionList = ({ onSelect }: { onSelect: () => void }) => {
  return (
    <section className="w-full flex flex-col gap-2">
      <CollectionBanner />

      {banners.map((banner, index) => (
        <div
          key={index}
          onClick={onSelect}
          className="cursor-pointer"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && onSelect()}
        >
          <HomeCollectionBanner {...banner} />
        </div>
      ))}
    </section>
  );
};

const MobileCollectionDetails = ({ onBack }: { onBack: () => void }) => {
  return (
    <>
      <div className="flex items-center gap-2 mb-1">
        <Button variant="ghost" onClick={onBack}>
          <ArrowLeft className="size-4" />
        </Button>
        <p className="text-sm text-gray-600">
          Oriamo Store / Collections / Winters Wear
        </p>
      </div>
      <div className="w-full">
        <div
          className="
      relative
      flex
      mb-2
      items-stretch
      rounded-3xl
      overflow-hidden
      bg-no-repeat bg-cover
      bg-[url('/assets/collection-detail-bg.svg')]
      min-h-[120px]
    "
        >
          <div className="flex flex-col justify-between px-6 md:px-10 py-6 w-2/3">
            <div>
              <Badge className="bg-secondary text-white mb-4">25 Items</Badge>

              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                Fashionista
              </h2>

              <p className="text-sm md:text-base text-muted-foreground max-w-md">
                Viverra sapien ut elit lorem elementum in faucibus nec
                tincidunt.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-end w-1/3 pr-4">
            <Image
              src="/assets/collection-detail-banner-two.svg"
              alt="Fashion item"
              height={200}
              width={200}
              className="h-full"
            />
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-300 mt-2 mb-4" />

      <ProductListings />
    </>
  );
};

// "use client";
// import CollectionBanner from "@/components/collection/collection-banner";
// import HomeCollectionBanner from "@/components/home/home-collection-banner";
// import HomeCollectionBanners from "@/components/home/home-collection-banners";
// import ShareDropdown from "@/components/home/share-dropdown";
// import ProductListings from "@/components/home/tabs/products/product-listings";
// // import DeliveryAddress from "@/components/portal/orders/delivery-address";
// import Orders from "@/components/portal/orders/orders";
// import {
//   Button,
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
//   ScrollArea,
//   ScrollBar,
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
//   ShareIcon,
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@repo/ui";
// import { FilterIcon } from "lucide-react";
// import Image from "next/image";
// import { FC, useState } from "react";

// interface PortalPageProps {
//   searchParams: { activeTab: string };
// }

// const CollectionPage: FC<PortalPageProps> = ({ searchParams }) => {
//   const [activeTab, setActiveTab] = useState(
//     searchParams.activeTab || "collection",
//   );
//   const banners = [
//     {
//       bgImage: "/assets/home-collection-banner.svg",
//       title: "Gadgets Go",
//       itemCount: 25,
//       titleTextColor: "text-white",
//       badgeTextColor: "text-black",
//       badgeBackgroundColor: "bg-white",
//     },
//     {
//       bgImage: "/assets/home-collection-banner-two.svg",
//       title: "My Bags",
//       itemCount: 40,
//       titleTextColor: "text-black",
//       badgeTextColor: "text-white",
//       badgeBackgroundColor: "bg-black",
//     },
//     {
//       bgImage: "/assets/home-collection-banner.svg",
//       title: "Gadgets Go",
//       itemCount: 25,
//       titleTextColor: "text-white",
//       badgeTextColor: "text-black",
//       badgeBackgroundColor: "bg-white",
//     },
//     {
//       bgImage: "/assets/home-collection-banner-two.svg",
//       title: "My Bags",
//       itemCount: 40,
//       titleTextColor: "text-black",
//       badgeTextColor: "text-white",
//       badgeBackgroundColor: "bg-black",
//     },
//   ];
//   const TAB_CLASS =
//     "text-lg text-gray-600 data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:text-foreground rounded-none !bg-transparent flex-none !shadow-none cursor-pointer !border-r data-[state=active]:font-semibold";
//   return (
//     <div className="max-w-8xl p-5">
//       <hr className="border-t border-gray-300 mt-2 hidden md:block" />
//       <CollectionBanner />
//       <section className="w-full overflow-hidden">
//         <div className=" w-full flex flex-col gap-2">
//           {banners.map((banner, index) => (
//             <HomeCollectionBanner key={index} {...banner} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CollectionPage;
