"use client";

import HomeBannerCarousel from "@/components/home/home-banner-carousel";
import ShareDropdown from "@/components/home/share-dropdown";
import CustomerRatings from "@/components/home/tabs/customer-ratings";
import DeliveryPolicy from "@/components/home/tabs/delivery-policy";
import ProductListings from "@/components/home/tabs/products/product-listings";
import ProductViewedRecently from "@/components/home/tabs/products/product-viewed-recently";
import StoreInformation from "@/components/home/tabs/store-information";
import AppViewedRecently from "@/components/layout/app-viewed-recently";
import SearchStore from "@/components/layout/search-store";
import {
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  FilterIcon,
  PriceTagIcon,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  ShareIcon,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui";
import Link from "next/link";

// text-xs text-gray-600 data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:text-foreground rounded-none !bg-transparent flex-none !shadow-none cursor-pointer px-0 uppercase
const HomePage = ({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) => {
  const { search } = searchParams;
  const TAB_CLASS =
    "text-xs text-gray-600 data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:text-foreground rounded-none !bg-transparent flex-none !shadow-none cursor-pointer px-0 uppercase";
  const MOBILE_TAB_CLASS =
    "bg-gray-100  px-2 rounded-xl outline-none  text-muted-foreground \
   data-[state=active]:border-primary \
   data-[state=active]:text-primary \
   md:shadow-none \
   data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:bg-blue-50 data-[state=active]:font-semibold";

  return (
    <div className="max-w-8xl 2xl:container px-5 md:p-5  pb-5 pt-3  mx-auto md:space-y-5  ">
      {!search ? (
        <>
          <div className="hidden md:block">
            <>
              <div className="">
                <HomeBannerCarousel />
              </div>
              <Tabs defaultValue="products" className="w-full">
                <TabsList className="bg-transparent border-b border-b-gray-200 rounded-none w-full justify-start py-2 h-auto gap-4 overflow-auto min-w-full max-w-0">
                  <TabsTrigger value="products" className={TAB_CLASS}>
                    Products
                  </TabsTrigger>
                  <TabsTrigger value="store-information" className={TAB_CLASS}>
                    Store Information
                  </TabsTrigger>
                  <TabsTrigger value="delivery-policy" className={TAB_CLASS}>
                    Delivery Policy
                  </TabsTrigger>
                  <TabsTrigger value="customer-reviews" className={TAB_CLASS}>
                    Customer Reviews
                  </TabsTrigger>
                  <div className="flex gap-1 justify-end flex-grow">
                    <Select>
                      <SelectTrigger className="w-36 !h-8">
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Categories</SelectLabel>
                          <SelectItem value="foodstuff">Foodstuff</SelectItem>
                          <SelectItem value="school-items">
                            School Items
                          </SelectItem>
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
                </TabsList>
                <TabsContent value="products">
                  <ProductListings />
                </TabsContent>
                <TabsContent value="store-information">
                  <StoreInformation />
                </TabsContent>
                <TabsContent value="delivery-policy">
                  <DeliveryPolicy />
                </TabsContent>
                <TabsContent value="customer-reviews">
                  <CustomerRatings />
                </TabsContent>
              </Tabs>
            </>
          </div>
          <div className="md:hidden ">
            <div className="hidden md:block">
              <HomeBannerCarousel />
            </div>
            <div className="mb-3  md:hidden">
              <SearchStore />
            </div>
            <Tabs defaultValue="products" className="w-full">
              <TabsList className="bg-transparent border-b border-b-gray-200 rounded-none w-full justify-start py-1 h-auto gap-4 overflow-auto min-w-full max-w-0 hidden md:block">
                <TabsTrigger value="products" className={TAB_CLASS}>
                  Products
                </TabsTrigger>
                <TabsTrigger value="store-information" className={TAB_CLASS}>
                  Store Information
                </TabsTrigger>
                <TabsTrigger value="delivery-policy" className={TAB_CLASS}>
                  Delivery Policy
                </TabsTrigger>
                <TabsTrigger value="customer-reviews" className={TAB_CLASS}>
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
                        <SelectItem value="school-items">
                          School Items
                        </SelectItem>
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
              </TabsList>
              <TabsList className=" bg-transparent   border-y border-y-gray-200 py-2 rounded-none w-full justify-start  h-auto gap-4 overflow-auto min-w-full max-w-0 md:hidden">
                <Link href="/sales" className="md:hidden">
                  <div className=" w-full p-2 flex gap-1  px-2 rounded-xl outline-none text-white  bg-destructive border border-accent-foreground  data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:bg-destructive">
                    <PriceTagIcon className="size-6 text-white " />
                    <span className="whitespace-nowrap">ON SALES</span>
                    <Badge className="rounded-full bg-warning text-white font-semibold">
                      4
                    </Badge>
                  </div>
                </Link>

                <TabsTrigger
                  value="products"
                  className={`${MOBILE_TAB_CLASS} `}
                >
                  Products
                  <Badge className="rounded-full bg-accent-foreground font-semibold ">
                    4
                  </Badge>
                </TabsTrigger>
                <Link href="/collection">
                  <div className=" w-full p-2 flex gap-1  px-2 rounded-xl outline-none text-muted-foreground bg-gray-100     data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:bg-destructive">
                    <span className="whitespace-nowrap">Collections</span>
                    <Badge className="rounded-full bg-accent-foreground text-white font-semibold">
                      4
                    </Badge>
                  </div>
                </Link>
                <TabsTrigger
                  value="store-information"
                  className={MOBILE_TAB_CLASS}
                >
                  Store Information
                </TabsTrigger>
                <TabsTrigger
                  value="delivery-policy"
                  className={MOBILE_TAB_CLASS}
                >
                  Delivery Policy
                </TabsTrigger>
                <TabsTrigger
                  value="customer-reviews"
                  className={MOBILE_TAB_CLASS}
                >
                  Customer Reviews
                </TabsTrigger>
                <div className="md:flex  hidden gap-2 justify-end  flex-grow ">
                  <Select>
                    <SelectTrigger className="w-36 !h-8">
                      Filter <FilterIcon className="size-3.5" />
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Categories</SelectLabel>
                        <SelectItem value="foodstuff">Foodstuff</SelectItem>
                        <SelectItem value="school-items">
                          School Items
                        </SelectItem>
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
                  <div className="hidden md:block">
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
              </TabsList>

              <TabsContent value="products">
                <ProductListings />
              </TabsContent>
              <TabsContent value="store-information">
                <StoreInformation />
              </TabsContent>
              <TabsContent value="delivery-policy">
                <DeliveryPolicy />
              </TabsContent>
              <TabsContent value="customer-reviews">
                <CustomerRatings />
              </TabsContent>
            </Tabs>
          </div>
        </>
      ) : (
        <div className="">
          <div>
            <span className="text-muted-foreground text-sm">
              Oriamo Stores/ Food
            </span>
          </div>
          <div className="flex justify-between">
            <h1 className="flex gap-2 text-xl font-semibold">
              Search Results <span className="text-primary">"Food"</span>
              <Badge className="bg-black text-warning">140 Items</Badge>
            </h1>
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
                <DropdownMenuTrigger className="flex gap-2 items-center border !bg-white text-gray-500 cursor-pointer h-8 px-2 py-1 rounded-lg text-sm">
                  Filter <FilterIcon className="size-3.5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Low - High</DropdownMenuItem>
                  <DropdownMenuItem>High - Low</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <ProductListings />
          <AppViewedRecently />
        </div>
      )}
    </div>
  );
};

export default HomePage;
