import { FC } from "react";
import CollectionBanner from "@/components/collection/collection-banner";
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
} from "@repo/ui";

import { FilterIcon } from "lucide-react";

interface PortalPageProps {
  searchParams: { activeTab: string };
}

const CollectionPageWeb: FC<PortalPageProps> = () => {
  return (
    <div className="max-w-8xl p-5">
      <div className="">
        <WebCollectionTopBar />
        <CollectionBanner />
        <ProductListings />
      </div>
    </div>
  );
};

export default CollectionPageWeb;

const WebCollectionTopBar = () => {
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
