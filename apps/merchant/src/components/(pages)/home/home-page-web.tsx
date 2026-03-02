"use client";
import HomeBannerCarousel from "@/components/home/home-banner-carousel";
import ShareDropdown from "@/components/home/share-dropdown";
import CustomerRatings from "@/components/home/tabs/customer-ratings";
import DeliveryPolicy from "@/components/home/tabs/delivery-policy";
import ProductListings from "@/components/home/tabs/products/product-listings";
import StoreInformation from "@/components/home/tabs/store-information";
import {
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  FilterIcon,
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

const HomePageWeb = ({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) => {
  const { search } = searchParams;
  const TAB_CLASS =
    "text-xs text-gray-600 data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:text-foreground rounded-none !bg-transparent flex-none !shadow-none cursor-pointer px-0 uppercase";

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
        </>
      ) : (
        <div className="">
          <>
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
              <div className="md:flex gap-2 justify-end md:grow hidden">
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
                  <DropdownMenuTrigger className="flex gap-2 items-center border bg-white! text-gray-500 cursor-pointer h-8 px-2 py-1 rounded-lg text-sm">
                    Filter <FilterIcon className="size-3.5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Low - High</DropdownMenuItem>
                    <DropdownMenuItem>High - Low</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </>

          <ProductListings search={search} />

          {/* <AppViewedRecently /> */}
        </div>
      )}
    </div>
  );
};

export default HomePageWeb;



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
