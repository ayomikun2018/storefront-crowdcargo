"use client";

import { FC } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import CollectionBanner from "@/components/collection/collection-banner";
import ProductListings from "@/components/home/tabs/products/product-listings";
import {
  Badge,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@repo/ui";
import Image from "next/image";

type MobileView = "collections" | "details";

interface CollectionItem {
  id: number;
  title: string;
  items: number;
  image: string;
}

const collections: CollectionItem[] = [
  {
    id: 1,
    title: "Fashionista",
    items: 25,
    image: "/assets/collection-detail-banner-two.svg",
  },
  {
    id: 2,
    title: "Summer Vibes",
    items: 18,
    image: "/assets/collection-detail-banner-two.svg",
  },
  {
    id: 3,
    title: "Urban Style",
    items: 30,
    image: "/assets/collection-detail-banner-two.svg",
  },
  {
    id: 4,
    title: "Gen Z",
    items: 20,
    image: "/assets/collection-detail-banner-two.svg",
  },
];
interface PortalPageProps {
  searchParams: { activeTab: string };
}
const CollectionPageMobile: FC<PortalPageProps> = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentView = (searchParams.get("view") as MobileView) || "collections";
  const selectedId = searchParams.get("id");

  const handleSelectCollection = (id: number) => {
    router.push(`/collection?view=details&id=${id}`);
  };

  const handleBack = () => {
    router.push("/collection");
  };

  return (
    <div className="max-w-8xl p-5">
      {currentView === "collections" ? (
        <MobileCollectionList onSelect={handleSelectCollection} />
      ) : (
        <MobileCollectionDetails
          onBack={handleBack}
          collectionId={selectedId}
        />
      )}
    </div>
  );
};

const MobileCollectionList = ({
  onSelect,
}: {
  onSelect: (id: number) => void;
}) => {
  return (
    <section className="w-full flex flex-col gap-1">
      <CollectionBanner />
      <hr className="border-gray-300 my-2" />

      <div className="space-y-3">
        {collections.map((collection, index) => (
          <div
            key={collection.id}
            className="relative flex items-center justify-between rounded-xl border-4 border-secondary overflow-hidden bg-muted px-4 py-5"
          >
            <div className="flex flex-col gap-2 items-start">
              <h2 className="text-xl font-bold leading-tight">
                {collection.title}
              </h2>
              <Badge className="bg-secondary text-white w-fit text-[10px]">
                {collection.items} Items
              </Badge>
              <Button
                className="bg-primary text-white font-semibold text-xs mt-4 h-8 px-6 rounded-lg"
                onClick={() => onSelect(collection.id)}
              >
                Shop Now
              </Button>
            </div>

            <div className="w-1/3 flex justify-end">
              <Image
                src={collection.image}
                alt={collection.title}
                width={150}
                height={150}
                className="object-contain"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const MobileCollectionDetails = ({
  onBack,
  collectionId,
}: {
  onBack: () => void;
  collectionId: string | null;
}) => {
  return (
    <div className="animate-in fade-in slide-in-from-right duration-200">
      {/* <Button
        variant="ghost"
        onClick={onBack}
        className="mb-4 p-0 h-auto flex gap-2 text-primary"
      >
        <span className="text-lg">←</span> Back to Collections
      </Button> */}

      <div className="relative flex items-center justify-between rounded-xl  p-5 border-4 border-secondary bg-cover bg-no-repeat bg-[url(/assets/collection-background.svg)]">
        <div className="flex flex-col gap-2 items-start max-w-[60%] ">
          <Badge className="bg-secondary text-white w-fit text-[10px]">
            25 Items
          </Badge>
          <h2 className="text-xl font-bold">Fashionista</h2>
          <Popover>
            <PopoverTrigger asChild>
              <p className="text-xs text-muted-foreground line-clamp-2 cursor-pointer">
                Viverra sapien ut elit lorem elementum in faucibus nec tincid...
              </p>
            </PopoverTrigger>
            <PopoverContent className="w-60 p-3">
              <p className="text-sm">
                Full description goes here. Ornare turpis enim ullamcorper
                platea adipiscing.
              </p>
            </PopoverContent>
          </Popover>
        </div>

        <div className="w-1/3">
          <Image
            src="/assets/collection-detail-banner-two.svg"
            alt="Fashion item"
            width={150}
            height={150}
            className="object-contain"
            priority
          />
        </div>
      </div>

      <hr className="border-t border-gray-300 my-2 " />
      <ProductListings />
    </div>
  );
};

export default CollectionPageMobile;
// "use client";

// import { FC, useState } from "react";
// import CollectionBanner from "@/components/collection/collection-banner";
// import HomeCollectionBanner from "@/components/home/home-collection-banner";
// import ProductListings from "@/components/home/tabs/products/product-listings";
// import ShareDropdown from "@/components/home/share-dropdown";

// import {
//   Badge,
//   Button,
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
//   ShareIcon,
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from "@repo/ui";

// import { ArrowBigLeft, ArrowLeft, ChevronLeft, FilterIcon } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter, useSearchParams } from "next/navigation";

// interface PortalPageProps {
//   searchParams: { activeTab: string };
// }
// type MobileView = "collections" | "details";
// const collections = [
//   {
//     id: 1,
//     title: "Fashionista",
//     items: 25,
//     image: "/assets/collection-detail-banner-two.svg",
//   },
//   {
//     id: 2,
//     title: "Fashionista",
//     items: 25,
//     image: "/assets/collection-detail-banner-two.svg",
//   },
//   {
//     id: 3,
//     title: "Fashionista",
//     items: 25,
//     image: "/assets/collection-detail-banner-two.svg",
//   },
//   {
//     id: 4,
//     title: "Fashionista",
//     items: 25,
//     image: "/assets/collection-detail-banner-two.svg",
//   },
// ];

// // const CollectionPageMobile: FC<PortalPageProps> = () => {
// //   const [mobileView, setMobileView] = useState<MobileView>("collections");

// //   return (
// //     <div className="max-w-8xl p-5">
// //       <div className="block">
// //         {mobileView === "collections" && (
// //           <MobileCollectionList onSelect={() => setMobileView("details")} />
// //         )}

// //         {mobileView === "details" && (
// //           <MobileCollectionDetails
// //             onBack={() => setMobileView("collections")}
// //           />
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CollectionPageMobile;
// interface MobileCollectionListProps {
//   onSelect: (id: number) => void; // Must match the parent function signature
// }
// const CollectionPageMobile: FC<PortalPageProps> = () => {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   // Get the current view from URL, default to 'collections'
//   const currentView = searchParams.get("view") || "collections";

//   const goToDetails = (id: number) => {
//     // This adds ?view=details&id=1 to your URL
//     router.push(`/collection?view=details&id=${id}`);
//   };

//   const goBack = () => {
//     router.push("/collection");
//   };
//   return (
//     <div className="max-w-8xl p-5">
//       {currentView === "collections" ? (
//         <MobileCollectionList onSelect={goToDetails} />
//       ) : (
//         <MobileCollectionDetails onBack={goBack} />
//       )}
//     </div>
//   );
// };

// export default CollectionPageMobile;
// const MobileCollectionList = ({ onSelect }: { onSelect: () => void }) => {
//   return (
//     <section className="w-full flex flex-col gap-1">
//       <CollectionBanner />
//       <hr className="border-gray-300 my-2" />

//       <div className="space-y-3">
//         {collections.map((collection, index) => (
//           <div
//             key={collection.id}
//             className="relative flex items-center justify-between rounded-xl border-4 border-secondary overflow-hidden bg-muted px-3 py-4 "
//           >
//             <div className="flex flex-col gap-3 max-w-lg">
//               <h2 className="text-xl md:text-2xl font-semibold">
//                 {collection.title}
//               </h2>

//               <Badge className="bg-secondary text-white w-fit">
//                 {collection.items} Items
//               </Badge>

//               <Button
//                 variant="outline"
//                 className="w-fit bg-primary text-white font-semibold text-xs mt-4"
//                 onClick={() => onSelect()}
//               >
//                 Shop Now
//               </Button>
//             </div>

//             <div className="flex-shrink-0">
//               <Image
//                 src={collection.image}
//                 alt={collection.title}
//                 width={200}
//                 height={200}
//                 className="w-auto h-auto max-h-40 md:max-h-56"
//                 priority={index === 0}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// const MobileCollectionDetails = ({ onBack }: { onBack: () => void }) => {
//   return (
//     <>
//       <div className="mb-2">
//         <div className="relative flex items-center justify-between rounded-xl bg-muted p-4 md:p-10 border-4 border-secondary">
//           {/* LEFT CONTENT */}

//           <div className="flex flex-col justify-between gap-3 max-w-lg">
//             <Badge className="bg-secondary text-white w-fit">25 Items</Badge>

//             <h2 className="text-xl md:text-2xl font-semibold">Fashionista</h2>
//             <Popover>
//               <PopoverTrigger asChild>
//                 <p className="text-sm md:text-base text-muted-foreground">
//                   Viverra sapien ut elit lorem elementum in faucibus nec
//                   tincid...
//                 </p>
//               </PopoverTrigger>

//               <PopoverContent className="w-60 p-3 mt-3">
//                 <div className="space-y-1 rounded p-1">
//                   <p className="text-sm">
//                     Ornare turpis enim ullamcorper platea adipiscing. Tincidunt
//                     lorem id est enim diam varius. Lacus mattis tellus pulvinar
//                     laoreet sed. Egestas.
//                   </p>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="flex-shrink-0">
//             <Image
//               src="/assets/collection-detail-banner-two.svg"
//               alt="Fashion item"
//               width={200}
//               height={200}
//               className="w-auto h-auto max-h-40 md:max-h-56"
//               priority
//             />
//           </div>
//         </div>
//       </div>

//       <hr className="border-t border-gray-300 mt-2 mb-4" />

//       <ProductListings />
//     </>
//   );
// };
