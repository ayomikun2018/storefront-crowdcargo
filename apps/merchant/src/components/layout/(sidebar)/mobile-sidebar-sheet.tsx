// import { Sheet, SheetContent, SheetFooter, SheetHeader } from "@repo/ui";
// import {
//   Badge,
//   Button,
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarHeader,
// } from "@repo/ui";

// import { ChevronRight, HeadsetIcon } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useAppSidebar } from "./app-sidebar-context";
// import HomeBannerCarousel from "@/components/home/home-banner-carousel";
// import AppSidebarAddress from "./app-sidebar-address";
// import { CollectionRow } from "./app-sidebar-row";
// export function MobileSidebarSheet({
//   open,
//   setOpen,
// }: {
//   open: boolean | undefined;
//   setOpen: ((open: boolean) => void) | undefined;
// }) {
//   console.log("CartSheetMobile rendered with open:", open);
//   return (
//     <Sheet open={open} onOpenChange={setOpen}>
//       <SheetContent side="left" className="h-[95vh] rounded-t-2xl p-0">
//         {/* <Sidebar className={open ? "w-full" : "w-0"}> */}
//         {/* Header */}
//         <SheetHeader className="pt-10 pb-6 bg-primary text-white rounded-b-3xl">
//           <div className="flex gap-4">
//             <Image
//               src="/assets/merchant-avatar.png"
//               alt="avatar"
//               width={50}
//               height={50}
//               className="rounded-full"
//             />

//             <div>
//               <h2 className="text-lg font-semibold">Oraimo Store</h2>
//               <p className="text-sm opacity-80">37, Nnobi street, Surulere</p>

//               <div className="flex gap-2 mt-2">
//                 <Button size="sm" asChild>
//                   <Link href="#">Store Info</Link>
//                 </Button>

//                 <Button size="sm" asChild>
//                   <Link href="#">Reviews</Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </SheetHeader>

//         {/* Content */}
//         <SidebarContent className="p-3 space-y-4">
//           {/* Banner */}
//           <Image
//             src="/assets/banner.svg"
//             alt="banner"
//             width={400}
//             height={200}
//             className="rounded-xl"
//           />

//           <HomeBannerCarousel />

//           {/* Collections */}
//           <Link href="/collection">
//             <div>
//               <div className="flex justify-between border-b pb-2">
//                 Collections
//                 <ChevronRight />
//               </div>

//               <div className="space-y-2 mt-3">
//                 {[1, 2, 3].map((_, i) => (
//                   <CollectionRow
//                     key={i}
//                     title="Gadgets"
//                     icon="/assets/headphone.svg"
//                   />
//                 ))}
//               </div>
//             </div>
//           </Link>
//         </SidebarContent>

//         {/* Footer */}
//         <SheetFooter className="bg-gray-100 p-3 space-y-3">
//           <AppSidebarAddress />

//           <div className="flex gap-2">
//             <Button asChild>
//               <Link href="#">Return Policy</Link>
//             </Button>

//             <Button className="bg-green-600 text-white" asChild>
//               <Link href="#">
//                 <HeadsetIcon className="size-4" />
//               </Link>
//             </Button>
//           </div>
//         </SheetFooter>
//         {/* </Sidebar> */}
//       </SheetContent>
//     </Sheet>
//   );
// }
// export function MobileSidebarSheet({
//   open,
//   setOpen,
// }: {
//   open: boolean | undefined;
//   setOpen: ((open: boolean) => void) | undefined;
// }) {
"use client";

import {
  Badge,
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  StarIcon,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
} from "@repo/ui";
import { ChevronRight, HeadsetIcon, MapPinIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CountriesAtlas } from "@amplifiedhq/countries-atlas";
import AppSidebarAddress from "./app-sidebar-address";
import HomeBannerCarousel from "@/components/home/home-banner-carousel";
import { SidebarCollectionRow } from "./mobile-sidebar-collection-row";

const countries = CountriesAtlas.getCountries().filter((each) =>
  ["US", "NG", "GB"].includes(each?.code as string),
);

export function MobileSidebarSheet({
  open,
  setOpen,
}: {
  open: boolean | undefined;
  setOpen: ((open: boolean) => void) | undefined;
}) {
  console.log("CartSheetMobile rendered with open:", open);
  const closeSheet = () => {
    if (setOpen) setOpen(false);
  };
  return (
    <Sheet open={open} onOpenChange={setOpen} mobile-sidebar-sheet>
      <SheetTitle></SheetTitle>
      <SheetContent
        side="left"
        className="p-0 flex flex-col gap-0 w-[85%] sm:w-[380px] overflow-y-auto mobile-sidebar-sheet"
      >
        {/* Merchant Header */}

        <SheetHeader className="text-left pt-12 px-4 border-b border-b-gray-100 bg-primary rounded-b-3xl bg-[url('/assets/sidebar-header-bg.svg')] bg-cover bg-center">
          <div className="flex gap-4 items-center">
            <div className="rounded-full bg-gradient-to-t from-purple-500 to-primary p-0.5 items-start">
              <div className="w-12 h-12 rounded-full overflow-hidden ">
                <Image
                  src="/assets/merchant-avatar.png"
                  alt="Avatar"
                  height={80}
                  width={80}
                  className="object-cover size-full"
                />
              </div>
            </div>

            <div className="space-y-0.5 text-xs pt-2 ">
              <div className="flex gap-1 items-center">
                <h2 className="text-2xl leading-5 font-semibold text-white">
                  Oraimo Store
                </h2>

                <span className="px-1.5 py-0.5 rounded-md bg-indigo-50 inline-flex items-center gap-1">
                  4.85{" "}
                  <StarIcon className="size-3 text-yellow-500 fill-yellow-500" />
                </span>
              </div>

              <p className="flex gap-1 items-center text-[12px] text-white bg-gray-400/10 px-2 py-0.5 rounded-full mt-1">
                <MapPinIcon className="size-3" /> 37, Nnobi street, Surulere
              </p>
              <div className="flex gap-1 pt-2">
                <Button
                  className="text-white rounded-2xl bg-secondary text-xs h-8 flex-1"
                  asChild
                  onClick={closeSheet}
                >
                  <Link href="/store-information">
                    <Image
                      src="/assets/shop.svg"
                      alt="shop"
                      height={14}
                      width={14}
                      className="mr-1"
                    />{" "}
                    Store Info <ChevronRight />
                  </Link>
                </Button>
                <Button
                  className="text-white rounded-2xl bg-secondary text-xs h-8 flex-1"
                  asChild
                  onClick={closeSheet}
                >
                  <Link href="/customer-review">
                    <Image
                      src="/assets/star.svg"
                      alt="star"
                      height={14}
                      width={14}
                      className="mr-1"
                    />{" "}
                    Reviews (8)
                    <ChevronRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </SheetHeader>

        {/* Content Area */}

        <div className="flex-grow overflow-y-auto px-4">
          <div className="py-4">
            <Link href="/sales">
              <Image
                src="/assets/banner.svg"
                alt="banner"
                height={300}
                width={500}
                className="rounded-xl w-full"
              />
            </Link>

            <div className="mt-4">
              <HomeBannerCarousel />
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm text-gray-500 uppercase flex justify-between border-b pb-2 font-semibold">
              <div className="flex items-center">
                Collections{" "}
                <Badge className="bg-foreground text-white ml-2">2</Badge>
              </div>
              <ChevronRight className="size-4 text-black" />
            </div>

            <Link
              href="/collection"
              onClick={closeSheet}
              className="space-y-2 pb-6"
            >
              <SidebarCollectionRow
                title="Gadgets Go"
                icon="/assets/headphone.svg"
              />
              <SidebarCollectionRow
                title="Gadgets Go"
                icon="/assets/headphone.svg"
              />
              <SidebarCollectionRow
                title="Gadgets Go"
                icon="/assets/headphone.svg"
              />
            </Link>
          </div>
        </div>

        {/* Footer Area */}

        <SheetFooter className="bg-gray-100 p-0 block mt-auto">
          <Button asChild onClick={closeSheet}>
            <AppSidebarAddress />
          </Button>

          <div className="flex gap-2 items-center p-3 bg-secondary py-6">
            <Select defaultValue="NG">
              <SelectTrigger className="h-10 w-26 bg-white text-black">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.code} value={country.code as string}>
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://flagcdn.com/w20/${country.iso2?.toLowerCase()}.png`}
                        alt="flag"
                        className="w-4"
                      />

                      {country.currency?.split(",")[0]}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button className="text-white rounded-full bg-primary h-10" asChild>
              <Link href="#">
                Return Policy <ChevronRight className="size-4 ml-1" />
              </Link>
            </Button>

            <Button
              className="bg-green-600 rounded-full w-10 h-10 p-0 flex items-center justify-center text-white"
              asChild
            >
              <Link href="#">
                <HeadsetIcon className="size-5" />
              </Link>
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
