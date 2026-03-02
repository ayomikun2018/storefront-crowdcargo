// "use client";
// import SearchStore from "@/components/layout/search-store";
// import UserPanel from "@/components/layout/user-panel";
// import { CountriesAtlas } from "@amplifiedhq/countries-atlas";
// import {
//   Badge,
//   Button,
//   CartIcon,
//   HeadsetIcon,
//   MapPinIcon,
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
//   StarIcon,
//   useSidebar,
// } from "@repo/ui";
// import Image from "next/image";
// import Link from "next/link";
// import ReturnPolicyModal from "../home/return-policy-modal";
// import { MenuIcon } from "lucide-react";
// import SidebarToggleButton from "../elements/sidebar-toggle-button";
// import { useState } from "react";

// import { useAppSidebar } from "./app-sidebar-context";
// import { useCartSidebar } from "./cart-sidebar-context";

// const countries = CountriesAtlas.getCountries().filter((each) =>
//   ["US", "NG", "GB"].includes(each?.code as string),
// );

// export default function Header() {
//   const { toggleSidebar: toggleApp } = useAppSidebar();
//   const { toggleSidebar: toggleCart } = useCartSidebar();
//   return (
//     <>
//       <div className="sticky top-0 border-b border-b-gray-100 z-30 bg-background">
//         <header className="mx-auto p-3">
//           <nav className="flex gap-6 items-center md:justify-between">
//             {/* Mobile menu toggle */}
//             <button
//               type="button"
//               onClick={toggleApp}
//               className="md:hidden flex justify-between items-center self-center cursor-pointer text-gray-600 h-10"
//             >
//               <MenuIcon className="" size={20} />
//             </button>
//             {/* <SidebarToggleButton /> */}
//             <div className="flex gap-4 items-center">
//               <div className="rounded-full p-[0.2rem] inline-block bg-gradient-to-t from-purple-500 to-primary">
//                 <div className="md:h-16 md:w-16  w-9 h-9 rounded-full  ">
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
//                 <span className="hidden px-1.5 py-0.5 rounded-md bg-indigo-50 md:inline-flex gap-2 items-center">
//                   4.85{" "}
//                   <StarIcon className="size-3 text-yellow-500 fill-yellow-500" />
//                 </span>
//                 <h2 className="text-lg leading-5 font-semibold md:block hidden">
//                   Oraimo Store
//                 </h2>
//                 <h2 className="text-lg leading-5 font-semibold  md:hidden bg-primary/5  outline outline-gray-300 rounded-full p-1 pr-4">
//                   Oraimo Store
//                 </h2>
//                 <p className="hidden md:flex gap-1 text-primary items-center ">
//                   <MapPinIcon className="text-gray-500 size-3" />{" "}
//                   <span className="truncate max-w-40">
//                     37, Nnobi street, Surulere
//                   </span>
//                 </p>
//               </div>
//             </div>

//             <div className="hidden md:w-[45%] md:flex gap-5">
//               <SearchStore />
//             </div>
//             <div className="flex gap-4 items-center md:bg-transparent md:rounded-none bg-gray-100 rounded-full p-2">
//               <div className="md:flex hidden">
//                 <Select defaultValue="NG">
//                   <SelectTrigger className="p-2 rounded-md border !h-11 w-28">
//                     <SelectValue placeholder="Select Country" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {countries.map((country, index) => (
//                       <SelectItem key={index} value={country.code as string}>
//                         {/* eslint-disable*/}
//                         <img
//                           src={`https://flagcdn.com/w20/${country.iso2?.toLowerCase()}.png`}
//                           alt={`${country.country} flag`}
//                           className="w-5 h-4 object-cover"
//                           loading="lazy"
//                         />{" "}
//                         {country.currency?.split(",")[0]}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               <Button
//                 className="text-white rounded-2xl md:flex  hidden gap-2 bg-green-600 hover:bg-initial"
//                 asChild
//               >
//                 <Link href="#">
//                   <HeadsetIcon className="size-5" /> Help
//                 </Link>
//               </Button>

//               <ReturnPolicyModal
//                 trigger={
//                   <Button className="text-white rounded-2xl md:flex gap-2 bg-secondary hover:bg-initial hidden">
//                     Return Policy
//                   </Button>
//                 }
//               />

//               <button
//                 type="button"
//                 className="relative cursor-pointer"
//                 onClick={toggleCart}
//               >
//                 <Badge
//                   className="absolute -top-2 right-0 px-1 size-4 text-xs rounded-full"
//                   variant="destructive"
//                 >
//                   1
//                 </Badge>
//                 <CartIcon className="size-7 text-primary" />
//               </button>
//               <UserPanel />
//             </div>
//           </nav>
//         </header>
//       </div>
//     </>
//   );
// }
"use client";
import SearchStore from "@/components/layout/search-store";
import { CountriesAtlas } from "@amplifiedhq/countries-atlas";
import {
  Badge,
  Button,
  CartIcon,
  HeadsetIcon,
  Input,
  Label,
  MapPinIcon,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  StarIcon,
  useSidebar,
} from "@repo/ui";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ReturnPolicyModal from "@/components/home/return-policy-modal";
import UserPanel from "./shared/user-panel";

const countries = CountriesAtlas.getCountries().filter((each) =>
  ["US", "NG", "GB"].includes(each?.code as string),
);

const WebHeader = () => {
  const { toggleSidebar, open, setOpen } = useSidebar();
  const [selectedCountry, setSelectedCountry] = useState("NG");

  const getSelectedCountryData = () => {
    return countries.find((country) => country.code === selectedCountry);
  };

  const selectedCountryData = getSelectedCountryData();
  const pathname = usePathname();

  const hiddenRoutes = ["/checkout/checkout-success"];
  const hideCartButton = hiddenRoutes.includes(pathname);

  return (
    <div className="sticky top-0 border-b border-b-gray-100 z-30 bg-background">
      <header className="mx-auto p-3">
        <nav className="flex gap-6 items-center md:justify-between">
          {/* Mobile menu toggle */}
          {/* <button
            type="button"
            className="md:hidden flex flex-col justify-between items-center cursor-pointer text-gray-600 h-10"
            onClick={() => setOpen(true)}
          >
            <MenuIcon className="text-primary" size={20} />
            <span className="text-xs font-semibold">MENU</span>
          </button> */}
          {/* <SidebarToggleButton /> */}
          <div className="flex gap-4 items-center">
            <div className="rounded-full p-[0.2rem] inline-block bg-gradient-to-t from-purple-500 to-primary">
              <div className="md:h-16 md:w-16  w-9 h-9 rounded-full  ">
                <Image
                  src="/assets/merchant-avatar.png"
                  alt="Merchant Avatar"
                  className="rounded-full size-full object-cover"
                  height={80}
                  width={80}
                />
              </div>
            </div>

            <div className="space-y-0.5 text-xs">
              <span className="hidden px-1.5 py-0.5 rounded-md bg-indigo-50 md:inline-flex gap-2 items-center">
                4.85{" "}
                <StarIcon className="size-3 text-yellow-500 fill-yellow-500" />
              </span>
              <h2 className="text-lg leading-5 font-semibold md:block hidden">
                Oraimo Store
              </h2>

              <Popover>
                <PopoverTrigger
                  asChild
                  className="text-lg leading-5  font-semibold  md:hidden bg-primary/5  outline outline-gray-300 rounded-full p-1 pr-4 "
                >
                  Oraimo Store
                </PopoverTrigger>
                <PopoverContent className="w-60 p-2 ml-26 mt-3 ">
                  <div className="grid gap-4 bg-gray-100 rounded p-2">
                    <div className="space-y-1">
                      <h4 className="leading-none font-bold ">Merchant Data</h4>
                      <hr className="border-gray-300" />
                      <p className=" text-sm flex gap-2 items-center">
                        <span className="text-muted-foreground ">
                          Country:{" "}
                        </span>
                        {selectedCountryData && (
                          <div className="flex gap-1 items-center">
                            Nigeria
                            <img
                              src={`https://flagcdn.com/w20/${selectedCountryData.iso2?.toLowerCase()}.png`}
                              alt={`${selectedCountryData.country} flag`}
                              className="w-5 h-4  rounded-full"
                              loading="lazy"
                            />
                            <span>{selectedCountryData.country}</span>
                          </div>
                        )}
                      </p>
                      <p className="text-sm">
                        <span className="text-muted-foreground ">
                          {" "}
                          State/Region:{" "}
                        </span>
                        Lagos
                      </p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <p className="hidden md:flex gap-1 text-primary items-center ">
                <MapPinIcon className="text-gray-500 size-3" />{" "}
                <span className="truncate max-w-40">
                  37, Nnobi street, Surulere
                </span>
              </p>
            </div>
          </div>

          <div className="hidden md:w-[45%] md:flex gap-5">
            <SearchStore />
          </div>
          <div className="flex gap-4 items-center md:bg-transparent md:rounded-none bg-gray-100 rounded-full p-2">
            <div className="md:flex hidden">
              <Select defaultValue="NG" onValueChange={setSelectedCountry} >
                <SelectTrigger className="p-2 rounded-md border !h-11 w-28">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country, index) => (
                    <SelectItem key={index} value={country.code as string}>
                      {/* eslint-disable*/}
                      <img
                        src={`https://flagcdn.com/w20/${country.iso2?.toLowerCase()}.png`}
                        alt={`${country.country} flag`}
                        className="w-5 h-4 object-cover"
                        loading="lazy"
                      />{" "}
                      {country.currency?.split(",")[0]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              className="text-white rounded-2xl md:flex  hidden gap-2 bg-green-600 hover:bg-initial"
              asChild
            >
              <Link href="#">
                <HeadsetIcon className="size-5" /> Help
              </Link>
            </Button>

            <ReturnPolicyModal
              trigger={
                <Button className="text-white rounded-2xl md:flex gap-2 bg-secondary hover:bg-initial hidden">
                  Return Policy
                </Button>
              }
            />
            {!hideCartButton && (
              <button
                type="button"
                className="relative cursor-pointer"
                onClick={() => toggleSidebar()}
              >
                <Badge
                  className="absolute -top-2 right-0 px-1 size-4 text-xs rounded-full"
                  variant="destructive"
                >
                  1
                </Badge>
                <CartIcon className="size-7 text-primary" />
              </button>
            )}

            <UserPanel />
            {/* <CartSidebarWeb /> */}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default WebHeader;
