import ProductDetailsModal from "@/components/home/tabs/products/product-details-modal";
import ProductListingCard from "@/components/home/tabs/products/product-listing-card";
import { Button } from "@repo/ui";
import { RadioGroup, RadioGroupItem } from "@repo/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui";
import { currencyFormatter } from "@/lib/utils";
import { useState } from "react";

const ProductListings = () => {
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  //eslint-disable-next-line
  const [selectedProduct, setSelectedProduct] = useState<any>();
  return (
    <>
      <div className="flex gap-5  mb-4 items-center border-b pb-2">
        <Select defaultValue="prices">
          <SelectTrigger className="p-2 rounded-md !h-8 border-0 w-20 text-xs">
            <SelectValue className="w-28" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={"PRICES"}>PRICES</SelectItem>
            <SelectItem value={"5000"}>{currencyFormatter(5000)}</SelectItem>
            <SelectItem value={"7000"}>{currencyFormatter(7000)}</SelectItem>
          </SelectContent>
        </Select>
        <RadioGroup
          className="flex gap-3 text-xs items-center"
          onValueChange={setSelectedCategory}
        >
          <label className="flex gap-1 text-primary border-r pr-3">
            <RadioGroupItem value="all" />
            ALL DISHES
          </label>
          <label className="flex gap-1 items-center rounded-lg border p-2">
            <RadioGroupItem value="soups" />
            Soups
          </label>
          <label className="flex gap-1 items-center rounded-lg border p-2">
            <RadioGroupItem value="foreign" />
            Forign Meals
          </label>
          <label className="flex gap-1 items-center rounded-lg border p-2">
            <RadioGroupItem value="breakfast" />
            Breakfast
          </label>
          <label className="flex gap-1 items-center rounded-lg border p-2">
            <RadioGroupItem value="desserts" />
            Desserts
          </label>
          <label className="flex gap-1 items-center rounded-lg border p-2">
            <RadioGroupItem value="sushi" />
            Sushi
          </label>
        </RadioGroup>
      </div>
      <p className="font-semibold capitalize my-2 text-sm">
        {selectedCategory}
      </p>
      <div className="space-y-14">
        <div className="pb-5 grid gap-6 grid-cols-[repeat(auto-fit,minmax(230px,1fr))]">
          {Array(9)
            .fill(null)
            .map((_, index) => {
              const product = {
                name: "Chinese Food Chinese Food Delicacy",
                discount: { rate: 15, originalAmount: 12000 },
                price: 6000,
              };
              return (
                <div key={index}>
                  <ProductListingCard
                    product={product}
                    onClick={() => {
                      setSelectedProduct(product);
                      setShowProductDetails(true);
                    }}
                  />
                </div>
              );
            })}
        </div>
        <div className="flex justify-center">
          <Button className="flex gap-2 px-4 !bg-white text-foreground border border-gray-300 cursor-pointer">
            Load More{" "}
          </Button>
        </div>
      </div>
      <ProductDetailsModal
        isOpen={showProductDetails}
        setIsOpen={setShowProductDetails}
        product={selectedProduct}
      />
    </>
  );
};

export default ProductListings;
