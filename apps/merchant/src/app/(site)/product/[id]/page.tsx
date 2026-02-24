"use client";
import ShareDropdown from "@/components/home/share-dropdown";
import ProductDetailsMobileCarousel from "@/components/home/tabs/products/product-details-mobile-carousel";
import ProductDetailsReviews from "@/components/home/tabs/products/product-details-reviews";
import ProductListings from "@/components/home/tabs/products/product-listings";
import ProductViewedRecently from "@/components/home/tabs/products/product-viewed-recently";
// import DeliveryAddress from "@/components/portal/orders/delivery-address";
import SalesBannerCarousel from "@/components/sales/sales-banner-carousel";
import { currencyFormatter } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  ScrollArea,
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
import {
  ArrowLeftIcon,
  EyeIcon,
  FilterIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "lucide-react";
import { useSearchParams } from "next/dist/client/components/navigation";
import Image from "next/image";
import { Dispatch, FC, SetStateAction, useState } from "react";

interface ProductDetailsPageProps {
  searchParams: { activeTab: string };
}
interface ProductDetailsPageProps {}
const ProductDetailsPage: FC<ProductDetailsPageProps> = () => {
  const searchParams = useSearchParams();
  const productData = searchParams.get("data")
    ? JSON.parse(decodeURIComponent(searchParams.get("data")!))
    : null;
  console.log("productData", productData);

  if (!productData) {
    return <div>Product not found</div>;
  }
  const colors = ["Red", "Blue", "Yellow", "Green"];
  const sizes = ["S", "L", "XL", "XXL"];

  return (
    <div className="w-full h-screen max-w-none rounded-none p-0 flex flex-col  ">
      <section className="p-4">
        <div className="text-xl font-semibold">
          <div className="space-y-0.5 ">
            <p className="leading-6">{productData?.name}</p>
            <p className="text-primary">
              {currencyFormatter(productData?.price)}
            </p>
          </div>
        </div>
      </section>
      <ScrollArea className="px-4 max-h-[calc(100vh-140px)]  relative">
        <div className="space-y-4">
          <div>
            <ProductDetailsMobileCarousel
              images={Array(3)
                .fill(null)
                .map(() => "/assets/pair-trainers.svg")}
              outOfStock={productData?.outOfStock}
            />
          </div>

          <hr className="border border-muted" />

          <Button className="text-gray-700 rounded-full w-full border border-gray-500 bg-gray-200 px-2 py-1">
            <EyeIcon className="size-4" />
            <span className="text-sm">View Size Chart</span>
          </Button>

          <div
            className={`grid grid-cols-4 ${
              productData.outOfStock ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <button className="bg-gray-100 hover:bg-gray-200 flex justify-between items-center px-2 py-0.5 pr-0 rounded-l-lg cursor-pointer">
              <MinusCircleIcon className="text-primary size-5" />
              <span className="text-lg">|</span>
            </button>

            <span className="col-span-2 px-2 py-0.5 flex items-center justify-center bg-gray-100">
              8
            </span>

            <button className="bg-gray-100 hover:bg-gray-200 flex justify-between items-center px-2 py-0.5 pl-0 rounded-r-lg cursor-pointer">
              <span className="text-lg">|</span>
              <PlusCircleIcon className="text-primary size-5" />
            </button>
          </div>

          <hr className="border border-muted" />

          <div className="flex items-center gap-3">
            <div className="flex-1">
              <Select>
                <SelectTrigger className="p-2 rounded-lg border !h-10 w-full">
                  <SelectValue placeholder="Color" />
                </SelectTrigger>
                <SelectContent>
                  {colors.map((each, index) => (
                    <SelectItem key={index} value={each}>
                      {each}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="h-8 w-px bg-gray-200" />

            <div className="flex-1">
              <Select>
                <SelectTrigger className="p-2 rounded-lg border !h-10 w-full">
                  <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent>
                  {sizes.map((each, index) => (
                    <SelectItem key={index} value={each}>
                      {each}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <hr className="border border-muted" />

          <Button
            disabled={productData.outOfStock}
            className={`flex gap-2 w-full h-12 font-semibold rounded-xl  ${
              productData.outOfStock ? "cursor-not-allowed" : ""
            }`}
          >
            <PlusCircleIcon className="size-5" />
            {productData.outOfStock ? "Out of Stock" : "Add to Cart"}
          </Button>
          <Accordion
            type="multiple"
            defaultValue={[
              "product-information",
              "ratings-and-reviews",
              "vendors-info",
            ]}
            className="w-full"
          >
            <AccordionItem value="product-information">
              <AccordionTrigger className="cursor-default hover:no-underline [&>svg]:hidden">
                <span className="text-gray-600 font-semibold">
                  Item description
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-balance">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi deserunt ratione quos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ratings-and-reviews">
              <AccordionTrigger className="cursor-default hover:no-underline [&>svg]:hidden">
                <span className="text-gray-600 font-semibold">
                  Ratings & Reviews
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <ProductDetailsReviews />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vendors-info">
              <AccordionTrigger className="cursor-default hover:no-underline [&>svg]:hidden">
                <span className="text-gray-600 font-semibold">
                  Vendors Info
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 text-sm text-gray-500">
                  <li>This vendor is based in Lagos</li>
                  <li>Delivers in Lagos within 48 hours</li>
                  <li>Nationwide delivery 2–5 working days</li>
                  <li>Return policy available</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <ProductViewedRecently />
        </div>
      </ScrollArea>
    </div>
  );
};

export default ProductDetailsPage;
