"use client";

import {
  FilterIcon,
  MapPinIcon,
  ShareIcon,
} from "@/components/crowdcargo-icons";
import EditIcon from "@/components/crowdcargo-icons/edit-icon";
import HomeBannerCarousel from "@/components/home/home-banner-carousel";
import ProductListings from "@/components/home/tabs/products/product-listings";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HomePage = () => {
  return (
    <div className="max-w-7xl p-5 mx-auto space-y-5">
      <div>
        <p className="text-end text-xs flex items-center justify-end gap-1 py-3">
          <span className="inline-flex gap-1 text-gray-500 items-center">
            <MapPinIcon className="size-4" /> Delivery Address
          </span>
          <span className="text-primary inline-flex gap-1 items-center">
            37, Nnobi street, Surulere <EditIcon className="size-4" />
          </span>
        </p>
        <HomeBannerCarousel />
      </div>
      <Tabs defaultValue="products" className="w-full">
        <TabsList className="bg-transparent border-b border-b-gray-200 rounded-none w-full justify-start py-1 h-auto gap-4 overflow-auto min-w-full max-w-0">
          <TabsTrigger
            value="products"
            className="text-xs text-gray-600 data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:text-foreground rounded-none !bg-transparent flex-none !shadow-none cursor-pointer px-0 uppercase"
          >
            Products
          </TabsTrigger>
          <TabsTrigger
            value="store-information"
            className="text-xs text-gray-600 data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:text-foreground rounded-none !bg-transparent flex-none !shadow-none cursor-pointer px-0 uppercase"
          >
            Store Information
          </TabsTrigger>
          <TabsTrigger
            value="delivery-policy"
            className="text-xs text-gray-600 data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:text-foreground rounded-none !bg-transparent flex-none !shadow-none cursor-pointer px-0 uppercase"
          >
            Delivery Policy
          </TabsTrigger>
          <TabsTrigger
            value="customer-reviews"
            className="text-xs text-gray-600 data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:text-foreground rounded-none !bg-transparent flex-none !shadow-none cursor-pointer px-0 uppercase"
          >
            Customer Reviews
          </TabsTrigger>
          <div className="flex gap-2 justify-end flex-grow">
            <Select>
              <SelectTrigger className="w-36 !h-8">
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
              <DropdownMenuTrigger>
                <Button className="flex gap-2 items-center border !bg-white text-gray-500 cursor-pointer h-8">
                  Filter <FilterIcon className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Low - High</DropdownMenuItem>
                <DropdownMenuItem>High - Low</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="gap-2 h-8">
              <ShareIcon className="size-4" />
              Share
            </Button>
          </div>
        </TabsList>
        <TabsContent value="products">
          <ProductListings />
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default HomePage;
