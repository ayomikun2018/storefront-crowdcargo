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
  Popover,
  PopoverContent,
  PopoverTrigger,
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
const collections = [
  {
    id: 1,
    title: "Fashionista",
    items: 25,
    image: "/assets/collection-detail-banner-two.svg",
  },
  {
    id: 2,
    title: "Fashionista",
    items: 25,
    image: "/assets/collection-detail-banner-two.svg",
  },
  {
    id: 3,
    title: "Fashionista",
    items: 25,
    image: "/assets/collection-detail-banner-two.svg",
  },
  {
    id: 4,
    title: "Fashionista",
    items: 25,
    image: "/assets/collection-detail-banner-two.svg",
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
          <MobileCollectionDetails
            onBack={() => setMobileView("collections")}
          />
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
    <section className="w-full flex flex-col gap-1">
      <CollectionBanner />
      <hr className="border-gray-300 my-2" />

      <div className="space-y-3">
        {collections.map((collection, index) => (
          <div
            key={collection.id}
            className="relative flex items-center justify-between rounded-xl border-4 border-secondary overflow-hidden bg-muted px-3 py-4 md:p-10"
          >
            <div className="flex flex-col gap-3 max-w-lg">
              <h2 className="text-xl md:text-2xl font-semibold">
                {collection.title}
              </h2>

              <Badge className="bg-secondary text-white w-fit">
                {collection.items} Items
              </Badge>

              <Button
                variant="outline"
                className="w-fit bg-primary text-white font-semibold text-xs"
                onClick={() => onSelect()}
              >
                Shop Now
              </Button>
            </div>

            <div className="flex-shrink-0">
              <Image
                src={collection.image}
                alt={collection.title}
                width={200}
                height={200}
                className="w-auto h-auto max-h-40 md:max-h-56"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const MobileCollectionDetails = ({ onBack }: { onBack: () => void }) => {
  return (
    <>
      <div className="mb-2">
        <div className="relative flex items-center justify-between rounded-xl bg-muted p-4 md:p-10 border-4 border-secondary">
          {/* LEFT CONTENT */}

          <div className="flex flex-col justify-between gap-3 max-w-lg">
            <Badge className="bg-secondary text-white w-fit">25 Items</Badge>

            <h2 className="text-xl md:text-2xl font-semibold">Fashionista</h2>
            <Popover>
              <PopoverTrigger asChild>
                <p className="text-sm md:text-base text-muted-foreground">
                  Viverra sapien ut elit lorem elementum in faucibus nec
                  tincid...
                </p>
              </PopoverTrigger>

              <PopoverContent className="w-60 p-3 mt-3">
                <div className="space-y-1 rounded p-1">
                  <p className="text-sm">
                    Ornare turpis enim ullamcorper platea adipiscing. Tincidunt
                    lorem id est enim diam varius. Lacus mattis tellus pulvinar
                    laoreet sed. Egestas.
                  </p>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-shrink-0">
            <Image
              src="/assets/collection-detail-banner-two.svg"
              alt="Fashion item"
              width={200}
              height={200}
              className="w-auto h-auto max-h-40 md:max-h-56"
              priority
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
