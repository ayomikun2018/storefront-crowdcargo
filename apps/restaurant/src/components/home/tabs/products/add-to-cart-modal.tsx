"use client";
import ModalWrapper, {
  BaseModalProps,
} from "@/components/elements/modal-wrapper";
import { Button } from "@repo/ui";
import { RadioGroup, RadioGroupItem } from "@repo/ui";
import { PlusSquare } from "lucide-react";
import React, { FC } from "react";

const AddToCartModal: FC<BaseModalProps> = (props) => {
  return (
    <ModalWrapper
      {...props}
      title="Add to Pack"
      className="!max-w-md"
      footer={
        <div className="w-full">
          <Button className="w-full h-16 rounded-3xl"> Add to pack</Button>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          Select a pack for your order{" "}
          <Button
            className="text-primary border border-primary !bg-white"
            size="sm"
          >
            <PlusSquare />
            Create new pack
          </Button>
        </div>
        <RadioGroup>
          <label className="flex gap-2 items-center ">
            <div className="p-1.5 flex gap-2 rounded-lg flex-grow items-center  bg-blue-50 has-data-[state=checked]:border-primary has-data-[state=checked]:border">
              <RadioGroupItem value="pack1" />
              Pack 1
            </div>
          </label>
          <label className="flex gap-2 items-center">
            <div className="p-1.5 flex gap-2 rounded-lg flex-grow items-center bg-blue-50 has-data-[state=checked]:border-primary has-data-[state=checked]:border">
              <RadioGroupItem value="pack2" className="peer" />
              Pack 2
            </div>
          </label>
        </RadioGroup>
      </div>
    </ModalWrapper>
  );
};

export default AddToCartModal;
