"use client";
import CustomerRatings from "@/components/home/tabs/customer-ratings";
import DeliveryPolicy from "@/components/home/tabs/delivery-policy";
import ProductListings from "@/components/home/tabs/products/product-listings";
import ProductViewedRecently from "@/components/home/tabs/products/product-viewed-recently";
import StoreInformation from "@/components/home/tabs/store-information";
import { useCartSidebar } from "@/components/layout/(sidebar)/cart-sidebar-context";
import { CartFooter } from "@/components/layout/(sidebar)/cart-sidebar-mobile";
import SearchStoreMobile from "@/components/layout/search-store-mobile";
import {
  Badge,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  FilterIcon,
  Input,
  PriceTagIcon,
  ScrollArea,
  ScrollBar,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui";
import Link from "next/link";

// text-xs text-gray-600 data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:text-foreground rounded-none !bg-transparent flex-none !shadow-none cursor-pointer px-0 uppercase
const HomePageMobile = ({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) => {
  const { search } = searchParams;
  const { openMobile } = useCartSidebar();
  const MOBILE_TAB_CLASS =
    "bg-gray-100  px-2 rounded-xl outline-none  text-muted-foreground text-xs \
   data-[state=active]:border-primary \
   data-[state=active]:text-primary \
   md:shadow-none \
   data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:bg-blue-50 data-[state=active]:font-semibold";
  const itemCount = 4;
  return (
    <>
      <div className="max-w-8xl 2xl:container px-5 md:p-5  pb-5 pt-3  mx-auto  ">
        {!search ? (
          <>
            <div>
              <div className="mb-3">
                <SearchStoreMobile />
              </div>
              <Tabs defaultValue="products" className="w-full">
                <TabsList className=" bg-transparent   border-y border-y-gray-200 py-2 rounded-none w-full justify-start  h-auto gap-4 overflow-auto min-w-full max-w-0">
                  <Link href="/sales" className="">
                    <div className=" w-full p-2 flex gap-1  px-2 rounded-xl items-center  outline-none text-white  bg-[#D92D20] border border-accent-foreground  data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:bg-destructive">
                      <PriceTagIcon className="size-5 text-white " />
                      <span className="whitespace-nowrap text-xs">
                        ON SALES
                      </span>
                      <Badge className="rounded-full bg-warning text-white font-semibold text-xs">
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
                    <div className=" flex items-center w-full p-2  gap-1  px-2 rounded-xl outline-none text-muted-foreground bg-gray-100     data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:bg-destructive">
                      <span className="whitespace-nowrap text-xs">
                        Collections
                      </span>
                      <Badge className="rounded-full bg-accent-foreground text-white font-semibold">
                        4
                      </Badge>
                    </div>
                  </Link>
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
            <Input
              autoFocus
              placeholder="Search Oriamo Store"
              className="flex-1 rounded-full bg-gray-100 ring-1 ring-primary mt-1 mb-4"
            />

            <div className="flex justify-between items-center border-y py-1">
              <span className="text-sm">
                5 Results for{" "}
                <span className="text-primary font-semibold">"Phone"</span>
              </span>
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

            <ProductListings search={search} />

            <div className="">
              <ScrollArea>
                <ProductViewedRecently />
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
        )}
      </div>
      {!openMobile && <CartFooter itemCount={itemCount} variant="fixed" />}
    </>
  );
};

export default HomePageMobile;

//only mobile not extracted

// import HomeBannerCarousel from "@/components/home/home-banner-carousel";
// import ShareDropdown from "@/components/home/share-dropdown";
// import CustomerRatings from "@/components/home/tabs/customer-ratings";
// import DeliveryPolicy from "@/components/home/tabs/delivery-policy";
// import ProductListings from "@/components/home/tabs/products/product-listings";
// import StoreInformation from "@/components/home/tabs/store-information";
// import {
//   Button,
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
//   ShareIcon,
// } from "@repo/ui";
// import { CategorySelect, FilterDropdown, TAB_CLASS } from "./shared/shared-ui";

// export const HomePageWeb = () => {
//   return (
//     <div className="max-w-8xl 2xl:container px-5 md:p-5  pb-5 pt-3  mx-auto md:space-y-5  ">
//       <HomeBannerCarousel />

//       <Tabs defaultValue="products" className="w-full">
//         <TabsList className="bg-transparent border-b border-b-gray-200 rounded-none w-full justify-start py-2 h-auto gap-4 overflow-auto">
//           <TabsTrigger value="products" className={TAB_CLASS}>
//             Products
//           </TabsTrigger>
//           <TabsTrigger value="store-information" className={TAB_CLASS}>
//             Store Information
//           </TabsTrigger>
//           <TabsTrigger value="delivery-policy" className={TAB_CLASS}>
//             Delivery Policy
//           </TabsTrigger>
//           <TabsTrigger value="customer-reviews" className={TAB_CLASS}>
//             Customer Reviews
//           </TabsTrigger>

//           <div className="flex gap-2 justify-end flex-grow">
//             <CategorySelect />
//             <FilterDropdown />
//             <ShareDropdown
//               trigger={
//                 <Button className="gap-2 h-8">
//                   <ShareIcon className="size-4" />
//                   Share
//                 </Button>
//               }
//             />
//           </div>
//         </TabsList>

//         <div className="mt-4">
//           <TabsContent value="products">
//             <ProductListings />
//           </TabsContent>
//           <TabsContent value="store-information">
//             <StoreInformation />
//           </TabsContent>
//           <TabsContent value="delivery-policy">
//             <DeliveryPolicy />
//           </TabsContent>
//           <TabsContent value="customer-reviews">
//             <CustomerRatings />
//           </TabsContent>
//         </div>
//       </Tabs>
//     </div>
//   );
// };
