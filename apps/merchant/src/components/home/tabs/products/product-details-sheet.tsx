"use client";
import ProductDetailsCarousel from "@/components/home/tabs/products/product-details-carousel";
import ProductDetailsReviews from "@/components/home/tabs/products/product-details-reviews";
import { currencyFormatter } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  MinusCircleIcon,
  PlusCircleIcon,
  ScrollArea,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@repo/ui";
import { EyeIcon } from "lucide-react";
import { Dispatch, FC, SetStateAction } from "react";
import ProductDetailsMobileCarousel from "./product-details-mobile-carousel";
import ProductDetailsWebCarousel from "./product-details-web-carousel";

interface ProductDetailsSheetProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  product: {
    name: string;
    discount: { rate: number; originalAmount: number };
    price: number;
    outOfStock?: boolean;
  } | null;
}

const colors = ["Red", "Blue", "Yellow", "Green"];
const sizes = ["S", "L", "XL", "XXL"];

const ProductDetailsSheet: FC<ProductDetailsSheetProps> = ({
  isOpen,
  setIsOpen,
  product,
}) => {
  if (!product) return null;

  const ACCORDION_CLASS =
    "[&>svg]:hidden [&[data-state=open]>svg.plus]:hidden [&[data-state=open]>svg.minus]:inline-block [&[data-state=closed]>svg.plus]:inline-block [&[data-state=closed]>svg.minus]:hidden group cursor-pointer";

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent>
        {/* HEADER */}
        <div>
          <SheetHeader className="space-y-1 pb-0 gap-0">
            <SheetTitle className="text-xl font-semibold">
              <div className="space-y-0.5 max-w-4/5">
                <p className="text-sm text-gray-600 font-light">
                  Oraimo Store / Food
                </p>
                <p className="leading-6">{product.name}</p>
                <p className="text-primary">
                  {currencyFormatter(product.price)}
                </p>
              </div>
            </SheetTitle>

            <SheetDescription className="text-foreground" asChild>
              {product.outOfStock ? (
                <p className="text-destructive font-medium">Out of Stock</p>
              ) : (
                <p className="flex gap-1">
                  In Stock:
                  <span className="text-primary">Only 5 Left Buy Now</span>
                </p>
              )}
            </SheetDescription>
          </SheetHeader>

          <hr className="border border-muted" />
        </div>

        {/* BODY */}
        <ScrollArea className="px-4 max-h-[calc(100vh-140px)] pb-20 relative">
          <div className="space-y-4">
            {/* IMAGES */}

            <div>
              {/* MOBILE */}
              <div className="md:hidden">
                <ProductDetailsMobileCarousel
                  images={Array(5)
                    .fill(null)
                    .map(() => "/assets/pair-trainers.svg")}
                  outOfStock={product.outOfStock}
                />
              </div>

              {/* DESKTOP */}
              <div className="hidden md:block">
                <ProductDetailsWebCarousel
                  images={Array(5)
                    .fill(null)
                    .map(() => "/assets/pair-trainers.svg")}
                  outOfStock={product.outOfStock}
                />
              </div>
            </div>

            <hr className="border border-muted" />

            {/* SIZE CHART */}
            <Button className="text-gray-700 rounded-full w-full border border-gray-500 bg-gray-200 px-2 py-1">
              <EyeIcon className="size-4" />
              <span className="text-sm">View Size Chart</span>
            </Button>

            {/* QUANTITY */}
            <div
              className={`grid grid-cols-4 ${
                product.outOfStock ? "opacity-50 pointer-events-none" : ""
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

            {/* VARIANTS */}
            <div className="grid grid-cols-2 gap-3">
              <SelectGroup>
                <SelectLabel className="pl-0">Select Color</SelectLabel>
                <Select>
                  <SelectTrigger className="p-2 rounded-md border !h-8 w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {colors.map((each, index) => (
                      <SelectItem key={index} value={each}>
                        {each}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </SelectGroup>

              <SelectGroup>
                <SelectLabel className="pl-0">Select Size</SelectLabel>
                <Select>
                  <SelectTrigger className="p-2 rounded-md border !h-8 w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {sizes.map((each, index) => (
                      <SelectItem key={index} value={each}>
                        {each}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </SelectGroup>
            </div>

            <hr className="border border-muted" />

            {/* ADD TO CART */}

            <Button
              disabled={product.outOfStock}
              className={`flex gap-2 w-[22rem] h-12  ${
                product.outOfStock ? "cursor-not-allowed" : ""
              }`}
            >
              <PlusCircleIcon className="size-5" />
              {product.outOfStock ? "Out of Stock" : "Add to Cart"}
            </Button>
            {/* ACCORDION */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="product-information">
                <AccordionTrigger className={ACCORDION_CLASS}>
                  <span className="text-gray-600">Item description</span>
                  <MinusCircleIcon className="size-4 minus" />
                  <PlusCircleIcon className="size-4 plus" />
                </AccordionTrigger>
                <AccordionContent className="text-balance">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi deserunt ratione quos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="vendors-info">
                <AccordionTrigger className={ACCORDION_CLASS}>
                  <span className="text-gray-600">Vendors Info</span>
                  <MinusCircleIcon className="size-4 minus" />
                  <PlusCircleIcon className="size-4 plus" />
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 text-xs text-gray-500">
                    <li>This vendor is based in Lagos</li>
                    <li>Delivers in Lagos within 48 hours</li>
                    <li>Nationwide delivery 2–5 working days</li>
                    <li>Return policy available</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ratings-and-reviews">
                <AccordionTrigger className={ACCORDION_CLASS}>
                  <span className="text-gray-600">Ratings & Reviews</span>
                  <MinusCircleIcon className="size-4 minus" />
                  <PlusCircleIcon className="size-4 plus" />
                </AccordionTrigger>
                <AccordionContent>
                  <ProductDetailsReviews />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default ProductDetailsSheet;
