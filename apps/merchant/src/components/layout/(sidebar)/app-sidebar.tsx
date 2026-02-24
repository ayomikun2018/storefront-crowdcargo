import React from "react";
import WebSidebar from "./web-sidebar";

export default function AppSidebar() {
  return (
    <>
      <div className="hidden md:block">
        <WebSidebar />
      </div>
    </>
  );
}

// "use client";
// import {
//   Badge,
//   Button,
//   CartIcon,
//   Label,
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
//   SidebarHeader,
//   StarIcon,
//   StoreIcon,
// } from "@repo/ui";

// import {
//   ChevronLeft,
//   ChevronRight,
//   HeadsetIcon,
//   MenuIcon,
//   StarsIcon,
// } from "lucide-react";

// import useFooterIntersect from "@/hooks/use-footer-intersect";
// import { cn } from "@/lib/utils";
// import {
//   Alert,
//   AlertDescription,
//   MapPinIcon,
//   RadioGroup,
//   RadioGroupItem,
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuItem,
//   useSidebar,
// } from "@repo/ui";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";
// import AppSidebarAddress from "./app-sidebar-address";
// import Link from "next/link";
// import SearchStore from "./search-store";
// import ReturnPolicyModal from "../home/return-policy-modal";
// import UserPanel from "./user-panel";
// import { CountriesAtlas } from "@amplifiedhq/countries-atlas";
// import { useAppSidebar } from "./app-sidebar-context";
// import SidebarToggleButton from "../elements/sidebar-toggle-button";
// import HomeBannerCarousel from "../home/home-banner-carousel";
// import { CollectionRow } from "./app-sidebar-row";

// const countries = CountriesAtlas.getCountries().filter((each) =>
//   ["US", "NG", "GB"].includes(each?.code as string),
// );
// const categories = [
//   "Foodstuff",
//   "School Items",
//   "Appliances",
//   "Gadgets",
//   "Textbooks",
// ];
// const collectionItems = [
//   {
//     name: "Winter Wears",
//     image: "/assets/collection-icon.svg",
//     route: "/collection",
//   },
//   {
//     name: "School Items",
//     image: "/assets/collection-icon.svg",
//     route: "/collection",
//   },
// ];

// export function AppSidebar() {
//   const { open, setOpen } = useAppSidebar();
//   const { intersectionData } = useFooterIntersect();
//   const pathname = usePathname();
//   useEffect(() => {
//     if (pathname == "/checkout" || pathname.startsWith("/portal"))
//       setOpen(false);
//   }, [pathname]);

//   return (
//     <div
//       className={` flex min-h-screen h-ful ${
//         open ? "md:w-[calc(var(--sidebar-width)+1.8rem)]" : "md:w-[2.5rem]"
//       }`}
//     >
//       <Sidebar
//         className={cn(
//           "bg-white transition-all top-24 h-[calc(100vh-88px])]",
//           open ? "w-(--sidebar-width)" : "w-0",
//         )}
//         collapsible="offcanvas"
//         style={{ bottom: `${intersectionData.pixelsVisible}px` }}
//       >
//         <SidebarHeader className="md:hidden pt-10 pb-6 border-b border-b-gray-100 bg-primary rounded-b-3xl bg-[url('/assets/sidebar-header-bg.svg')] bg-cover bg-center">
//           <div className="flex  gap-6 items-center md:justify-between">
//             <div className="flex gap-4 items-start ">
//               <div className="rounded-full  inline-block bg-gradient-to-t from-purple-500 to-primary">
//                 <div className=" w-12 h-12 rounded-full  ">
//                   <Image
//                     src="/assets/merchant-avatar.png"
//                     alt="Merchant Avatar"
//                     className="rounded-full size-full object-cover"
//                     height={80}
//                     width={80}
//                   />
//                 </div>
//               </div>
//               <div className="space-y-0.5 text-xs">
//                 <div className="flex gap-1 w-auto">
//                   <h2 className="text-xl leading-5 font-semibold text-white">
//                     Oraimo Store
//                   </h2>
//                   <span className="px-1.5 py-0.5 rounded-md bg-indigo-50 inline-flex items-center gap-1">
//                     4.85
//                     <StarIcon className="size-3 text-yellow-500 fill-yellow-500" />
//                   </span>
//                 </div>

//                 <p className="flex gap-1 items-center text-sm md:text-gray-500 text-white bg-gray-400/10 px-1 rounded-full text-light mt-1 w-4/5">
//                   <MapPinIcon className=" size-5 " /> 37, Nnobi street, Surulere
//                 </p>
//                 <div className="flex  gap-1 pt-3">
//                   <Button
//                     className="text-white rounded-2xl md:flex   gap-1  bg-secondary hover:bg-initial text-sm px-1"
//                     asChild
//                     size="sm"
//                   >
//                     <Link href="#">
//                       <Image
//                         src="/assets/shop.svg"
//                         alt="shop"
//                         height={15}
//                         width={15}
//                       />
//                       Store Info <ChevronRight className="size-4" />
//                     </Link>
//                   </Button>
//                   <Button
//                     className="text-white rounded-2xl md:flex   gap-1  bg-secondary hover:bg-initial"
//                     size="sm"
//                     asChild
//                   >
//                     <Link href="#">
//                       <Image
//                         src="/assets/star.svg"
//                         alt="shop"
//                         height={15}
//                         width={15}
//                       />
//                       Review (2)
//                       <ChevronRight className="size-4" />
//                     </Link>
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* <div className="flex  gap-4 w-[80%]">
//             <Button
//               className="text-white rounded-2xl md:flex   gap-2 bg-green-600 hover:bg-initial"
//               asChild
//             >
//               <Link href="#">
//                 <HeadsetIcon className="size-5" />
//               </Link>
//             </Button>

//             <ReturnPolicyModal
//               trigger={
//                 <Button className="text-white rounded-2xl md:flex gap-2 bg-secondary hover:bg-initial ">
//                   Return Policy
//                 </Button>
//               }
//             />
//           </div> */}
//         </SidebarHeader>
//         <SidebarContent className="bg-white gap-1 px-2">
//           <div className="py-4">
//             <Link href="/sales" className="md:block hidden">
//               <Image
//                 src="/assets/sidebar-sales-banner.svg"
//                 alt="sidebar sales banner"
//                 height={300}
//                 width={500}
//                 className="cursor-pointer rounded-xl hover:opacity-90 transition"
//               />
//             </Link>
//             <Link href="/sales" className="md:hidden block">
//               <Image
//                 src="/assets/banner.svg"
//                 alt="sidebar sales banner"
//                 height={300}
//                 width={500}
//                 className="cursor-pointer rounded-xl hover:opacity-90 transition"
//               />
//             </Link>
//             <div className="md:hidden block mt-4">
//               <HomeBannerCarousel />
//             </div>
//           </div>
//           <SidebarGroup className="space-y-5 hidden md:block">
//             <SidebarGroupLabel className="md:text-base text-sm text-gray-500 uppercase ">
//               Price Filter
//             </SidebarGroupLabel>
//             <SidebarGroupContent>
//               <SidebarMenu>
//                 <SidebarMenuItem>
//                   <RadioGroup>
//                     <div className="flex items-center gap-3 bg-primary/5 p-2 px-3 rounded-lg text-lg">
//                       <RadioGroupItem
//                         value="low-to-high"
//                         id="r1"
//                         className="border-4 border-blue-100 p-1"
//                       />
//                       <Label htmlFor="r1" className="flex-grow">
//                         Low - High
//                       </Label>
//                     </div>
//                     <div className="flex items-center gap-3 bg-primary/5 p-2 px-3 rounded-lg text-lg">
//                       <RadioGroupItem
//                         value="high-to-low"
//                         id="r2"
//                         className="border-4 border-blue-100 p-1"
//                       />
//                       <Label htmlFor="r2" className="flex-grow">
//                         High - Low
//                       </Label>
//                     </div>
//                   </RadioGroup>
//                 </SidebarMenuItem>
//               </SidebarMenu>
//             </SidebarGroupContent>
//           </SidebarGroup>
//           <SidebarGroup className="md:hidden">
//             <div className=" md:border-t ">
//               {" "}
//               <SidebarGroupLabel className="md:text-base text-sm text-gray-500 uppercase flex justify-between border-b rounded-none">
//                 <div>
//                   {" "}
//                   Collections
//                   <Badge className="bg-foreground rounded-md text-white px-2 ml-1">
//                     2
//                   </Badge>
//                 </div>
//                 <ChevronRight />
//               </SidebarGroupLabel>
//             </div>
//             <Link href="/collection">
//               <section className="space-y-2 mx-auto pt-4 ">
//                 <CollectionRow
//                   title="Gadgets Go"
//                   icon="/assets/headphone.svg"
//                 />
//                 <CollectionRow
//                   title="Gadgets Go"
//                   icon="/assets/headphone.svg"
//                 />
//                 <CollectionRow
//                   title="Gadgets Go"
//                   icon="/assets/headphone.svg"
//                 />
//               </section>
//             </Link>
//           </SidebarGroup>

//           <Link href="/collection">
//             <SidebarGroup className="space-y-6  md:border-gray-100  hidden md:block">
//               <SidebarGroupLabel className="md:text-base text-sm text-gray-500 uppercase flex justify-between border-b rounded-none">
//                 <div>
//                   {" "}
//                   Collections
//                   <Badge className="bg-foreground rounded-md text-white px-2 ml-1">
//                     2
//                   </Badge>
//                 </div>
//               </SidebarGroupLabel>

//               <SidebarGroupContent>
//                 <SidebarMenu className="md:flex flex-col gap-3  ">
//                   {collectionItems.map(({ name, image, route }, index) => {
//                     const isActive = pathname === route;
//                     return (
//                       <SidebarMenuItem key={index}>
//                         <div
//                           className={cn(
//                             "flex items-center gap-3 p-2 px-3 rounded-lg transition-all",
//                             isActive
//                               ? "bg-primary/10 outline outline-1 outline-primary"
//                               : "bg-primary/5 hover:bg-primary/10 hover:outline hover:outline-1 hover:outline-primary",
//                           )}
//                         >
//                           <div className="relative w-8 h-8 shrink-0 rounded-md overflow-hidden">
//                             <Image
//                               src={image}
//                               alt={name}
//                               fill
//                               className="object-contain"
//                             />
//                           </div>

//                           <span className="flex-grow text-sm font-medium">
//                             {name}
//                           </span>
//                         </div>
//                       </SidebarMenuItem>
//                     );
//                   })}
//                 </SidebarMenu>
//               </SidebarGroupContent>
//             </SidebarGroup>
//           </Link>
//         </SidebarContent>
//         <SidebarFooter className="block    md:hidden bg-gray-100 p-0">
//           <AppSidebarAddress />
//           <div className="flex gap-1 items-center  p-1 py-4  bg-secondary">
//             <div className="flex">
//               <Select defaultValue="NG">
//                 <SelectTrigger className="p-2 rounded-md border !h-11 w-28 bg-white text-black">
//                   <SelectValue placeholder="Select Country" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {countries.map((country, index) => (
//                     <SelectItem key={index} value={country.code as string}>
//                       {/* eslint-disable*/}
//                       <img
//                         src={`https://flagcdn.com/w20/${country.iso2?.toLowerCase()}.png`}
//                         alt={`${country.country} flag`}
//                         className="w-5 h-4 object-cover"
//                         loading="lazy"
//                       />{" "}
//                       {country.currency?.split(",")[0]}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//             <Button
//               className="text-white rounded-2xl md:flex   gap-1  bg-primary hover:bg-initial"
//               size="sm"
//               asChild
//             >
//               <Link href="#">
//                 Return Policy
//                 <ChevronRight className="size-4" />
//               </Link>
//             </Button>
//             <Button
//               className="text-white rounded-2xl md:flex   gap-1 bg-green-600 hover:bg-initial"
//               asChild
//             >
//               <Link href="#">
//                 <HeadsetIcon className="size-5" /> Chat
//               </Link>
//             </Button>
//           </div>
//         </SidebarFooter>
//         <SidebarFooter className="gap-0 p-0 hidden md:block">
//           <AppSidebarAddress />
//         </SidebarFooter>
//       </Sidebar>
//       <SidebarToggleButton variant="floating" />
//     </div>
//   );
// }
