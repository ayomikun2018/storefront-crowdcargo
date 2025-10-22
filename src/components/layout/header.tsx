"use client";
import {
  CartIcon,
  HeadsetIcon,
  MapPinIcon,
  SearchIcon,
  StarIcon,
} from "@/components/crowdcargo-icons";
import SearchStore from "@/components/layout/search-store";
import UserPanel from "@/components/layout/user-panel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSidebar } from "@/components/ui/sidebar";
import { CountriesAtlas } from "@amplifiedhq/countries-atlas";
import Image from "next/image";
import Link from "next/link";

const countries = CountriesAtlas.getCountries().filter((each) =>
  ["US", "NG", "GB"].includes(each?.code as string)
);

const Header = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <div className="sticky top-0 border-b border-b-gray-100 z-30 bg-background">
      <header className="container mx-auto p-3">
        <nav className="flex  gap-6 items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className="rounded-full p-[0.2rem] inline-block bg-gradient-to-t from-purple-500 to-primary">
              <div className="h-16 w-16 rounded-full ">
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
              <span className="px-1.5 py-0.5 rounded-md bg-indigo-50 inline-flex gap-2 items-center">
                4.85{" "}
                <StarIcon className="size-4 text-yellow-500 fill-yellow-500" />
              </span>
              <h2 className="text-lg leading-5">Oraimo Store</h2>
              <p className="flex gap-1 text-primary items-center">
                <MapPinIcon className="text-gray-500 size-3" /> 37, Nnobi
                street, Surulere
              </p>
            </div>
          </div>

          <div className="w-[45%] flex gap-5">
            <SearchStore />
          </div>
          <div className="flex gap-4 items-center">
            <Select defaultValue="NG">
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
            <Button
              className="text-white rounded-2xl flex gap-2 bg-green-600 hover:bg-initial"
              asChild
            >
              <Link href="#">
                <HeadsetIcon className="size-5" /> Help
              </Link>
            </Button>
            <Button
              className="text-white rounded-2xl flex gap-2 bg-secondary hover:bg-initial"
              asChild
            >
              <Link href="#">Return Policy</Link>
            </Button>
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
            <UserPanel />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
