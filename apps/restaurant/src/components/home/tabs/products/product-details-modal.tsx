"use client";
import { MinusCircleIcon, PlusCircleIcon } from "@repo/ui";
import ModalWrapper from "@/components/elements/modal-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui";
import { Button } from "@repo/ui";
import { RadioGroup, RadioGroupItem } from "@repo/ui";
import { currencyFormatter } from "@/lib/utils";
import Image from "next/image";
import { Dispatch, FC, SetStateAction } from "react";

interface ProductDetailsModalProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  product: {
    name: string;
    discount: { rate: number; originalAmount: number };
    price: number;
  };
}

const ProductDetailsModal: FC<ProductDetailsModalProps> = ({
  isOpen,
  setIsOpen,
  product,
}) => {
  return (
    <ModalWrapper hideTitle isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="space-y-4">
        <div className="flex gap-4 items-stretch">
          <div className="flex-2">
            <Image
              src="/assets/product-listing.svg"
              alt="product image"
              height={300}
              width={200}
              className=" w-full h-full object-cover object-center rounded-lg"
            />
          </div>
          <div className="flex-3 flex flex-col gap-4 justify-between">
            <h2 className="text-lg leading-5">{product?.name}</h2>
            <div className="space-y-2">
              <p className="text-md text-primary leading-4">
                {currencyFormatter(product?.price)}
              </p>
              <div>
                <div className="flex border border-gray-200 rounded-xl w-max px-1">
                  <button type="button" className="cursor-pointer">
                    <MinusCircleIcon className="size-5 text-primary" />
                  </button>
                  <span className="p-1 h-full grid place-items-center text-sm">
                    8
                  </span>
                  <button type="button" className="cursor-pointer">
                    <PlusCircleIcon className="size-5 text-primary" />
                  </button>
                </div>
              </div>
            </div>
            <Button className="w-full h-10 rounded-none">
              <PlusCircleIcon className="size-4" />
              Add to Cart
            </Button>
          </div>
        </div>
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="dish-info">
            <AccordionTrigger>
              <span className="text-gray-600">More about dish</span>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              deserunt ratione quos, eum incidunt non quibusdam optio labore,
              asperiores, et adipisci. Non, vitae id?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="vendors-info">
            <AccordionTrigger>
              <span className="text-gray-600">Side (Optional)</span>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <RadioGroup>
                <label className="flex gap-2 items-center ">
                  <div className="p-1.5 flex gap-2 rounded-lg flex-grow items-center  bg-blue-50 has-data-[state=checked]:border-primary has-data-[state=checked]:border">
                    <RadioGroupItem value="shrimp" />
                    Shrimp
                  </div>
                  <div className="flex px-1 border border-gray-200 rounded-xl">
                    <button type="button" className="cursor-pointer">
                      <MinusCircleIcon className="size-4 text-primary" />
                    </button>
                    <span className="p-1 h-full grid place-items-center text-xs">
                      2
                    </span>
                    <button type="button" className="cursor-pointer">
                      <PlusCircleIcon className="size-4 text-primary" />
                    </button>
                  </div>
                </label>
                <label className="flex gap-2 items-center">
                  <div className="p-1.5 flex gap-2 rounded-lg flex-grow items-center bg-blue-50 has-data-[state=checked]:border-primary has-data-[state=checked]:border">
                    <RadioGroupItem value="pork" className="peer" />
                    Pork
                  </div>
                  <div className="flex px-1 border border-gray-200 rounded-xl opacity-70 peer-data-[state=checked]:opacity-100">
                    <button type="button" className="cursor-pointer">
                      <MinusCircleIcon className="size-4 text-primary" />
                    </button>
                    <span className="p-1 h-full grid place-items-center text-xs">
                      2
                    </span>
                    <button type="button" className="cursor-pointer">
                      <PlusCircleIcon className="size-4 text-primary" />
                    </button>
                  </div>
                </label>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </ModalWrapper>
  );
};

export default ProductDetailsModal;
