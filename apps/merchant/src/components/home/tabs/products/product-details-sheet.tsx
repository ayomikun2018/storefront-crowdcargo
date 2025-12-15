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
import { Dispatch, FC, SetStateAction } from "react";

interface ProductDetailsSheetProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  product: {
    name: string;
    discount: { rate: number; originalAmount: number };
    price: number;
  };
}

const colors = ["Red", "Blue", "Yellow", "Green"];
const sizes = ["S", "L", "XL", "XXL"];

const ProductDetailsSheet: FC<ProductDetailsSheetProps> = ({
  isOpen,
  setIsOpen,
  product,
}) => {
  const ACCORDION_CLASS =
    "[&>svg]:hidden [&[data-state=open]>svg.plus]:hidden [&[data-state=open]>svg.minus]:inline-block [&[data-state=closed]>svg.plus]:inline-block [&[data-state=closed]>svg.minus]:hidden group cursor-pointer";
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="">
        <div>
          <SheetHeader className="space-y-1 pb-0 gap-0">
            <SheetTitle className="text-xl font-semibold">
              <div className="space-y-0.5 max-w-4/5">
                <p className="text-sm text-gray-600 font-light">
                  Oraimo Store / Food
                </p>
                <p className="leading-6">{product?.name}</p>
                <p className="text-primary">
                  {currencyFormatter(product?.price)}
                </p>
              </div>
            </SheetTitle>
            <SheetDescription className="text-foreground" asChild>
              <p className="flex gap-4">
                In Stock:{" "}
                <span className="text-destructive">Only 5 Left Buy Now</span>
              </p>
            </SheetDescription>
          </SheetHeader>
          <hr className="border border-muted" />
        </div>
        <ScrollArea className="px-4 max-h-[calc(100vh-140px)] pb-20 relative">
          <div className="space-y-4 ">
            <ProductDetailsCarousel
              images={Array(5)
                .fill(null)
                .map(() => "/assets/pair-trainers.svg")}
            />
            <hr className="border border-muted" />
            <div className="grid grid-cols-4">
              <button className="bg-gray-100 hover:bg-gray-200 flex justify-between items-center px-2 py-0.5 pr-0 rounded-l-lg cursor-pointer text-gray-300 hover:text-gray-200">
                <MinusCircleIcon className="text-primary size-5" />
                <span className="text-lg">|</span>
              </button>
              <span className="col-span-2 px-2 py-0.5 flex items-center justify-center  bg-gray-100">
                8
              </span>
              <button className="bg-gray-100 hover:bg-gray-200 flex justify-between items-center px-2 py-0.5 pl-0 rounded-r-lg cursor-pointer text-gray-300 hover:text-gray-200">
                <span className="text-lg">|</span>
                <PlusCircleIcon className="text-primary size-5" />
              </button>
            </div>
            <hr className="border border-muted" />
            <div className="grid grid-cols-2 gap-3">
              <SelectGroup>
                <SelectLabel className="pl-0">Select Color</SelectLabel>
                <Select defaultValue={colors[0]}>
                  <SelectTrigger className="p-2 rounded-md border !h-8 w-full">
                    <SelectValue placeholder="Select Country" />
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
              <div className="space-y-1">
                <SelectGroup>
                  <SelectLabel className="pl-0">Select Size</SelectLabel>
                  <Select defaultValue={sizes[0]}>
                    <SelectTrigger className="p-2 rounded-md border !h-8 w-full">
                      <SelectValue placeholder="Select Country" />
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
            </div>
            <hr className="border border-muted" />
            <Button className="flex gap-2 w-[22rem] h-12 fixed bottom-0">
              <PlusCircleIcon className="size-5" />
              Add to Cart
            </Button>

            <Accordion
              type="single"
              collapsible
              className="w-full"
              // defaultValue="product-information"
            >
              <AccordionItem value="product-information">
                <AccordionTrigger className={ACCORDION_CLASS}>
                  <span className="text-gray-600">Product Information</span>
                  <MinusCircleIcon className="size-4 minus" />
                  <PlusCircleIcon className="size-4 plus" />
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  {/* <p>
                    Our flagship product combines cutting-edge technology with
                    sleek design. Built with premium materials, it offers
                    unparalleled performance and reliability.
                  </p>
                  <p>
                    Key features include advanced processing capabilities, and
                    an intuitive user interface designed for both beginners and
                    experts.
                  </p> */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi deserunt ratione quos, eum incidunt non quibusdam
                  optio labore, asperiores, et adipisci. Non, vitae id?
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="vendors-info">
                <AccordionTrigger className={ACCORDION_CLASS}>
                  <span className="text-gray-600">Vendors Info</span>
                  <MinusCircleIcon className="size-4 minus" />
                  <PlusCircleIcon className="size-4 plus" />
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <ul className="list-disc pl-5 text-xs text-gray-500">
                    <li>This vendor is based in Lagos</li>

                    <li>Delivers in Lagos within 48 hours</li>

                    <li>Delivers nationwide 2-5 working days</li>

                    <li>This vendor do return policy.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ratings-and-reviews">
                <AccordionTrigger className={ACCORDION_CLASS}>
                  <span className="text-gray-600">Ratings & Reviews</span>
                  <MinusCircleIcon className="size-4 minus" />
                  <PlusCircleIcon className="size-4 plus" />
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
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
