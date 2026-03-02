"use client";
import ShareDropdown from "@/components/home/share-dropdown";
import ProductListings from "@/components/home/tabs/products/product-listings";
import SalesBanner from "@/components/sales/sales-banner";
import {
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
} from "@repo/ui";
import { FilterIcon } from "lucide-react";
import { FC, useState } from "react";

interface PortalPageProps {
  searchParams: { activeTab: string };
}

const SalesPageMobile: FC<PortalPageProps> = ({ searchParams }) => {
  const [activeTab, setActiveTab] = useState(
    searchParams.activeTab || "collection",
  );

  const TAB_CLASS =
    "text-lg text-gray-600 data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:text-foreground rounded-none !bg-transparent flex-none !shadow-none cursor-pointer !border-r data-[state=active]:font-semibold";
  return (
    <div className="max-w-8xl p-5">
      <div className=" justify-between hidden md:flex md:pb-3 items-center  ">
        <p className="">Oriamo Store/ Collections/ Winters Wear</p>

        <div className="flex gap-2 justify-end grow">
          <Select>
            <SelectTrigger className="w-36 h-8!">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                <SelectItem value="foodstuff">Foodstuff</SelectItem>
                <SelectItem value="school-items">School Items</SelectItem>
                <SelectItem value="appliances">Appliances</SelectItem>
                <SelectItem value="Gadgets">gadgets</SelectItem>
                <SelectItem value="Textbooks">Textbooks</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-2 items-center border !bg-white text-gray-500 cursor-pointer h-8 px-2 py-1 rounded-lg text-sm">
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
      <hr className="border-t border-gray-300 " />

      <SalesBanner />
      <div className="mb-2" />
      <ProductListings />
    </div>
  );
};

export default SalesPageMobile;
