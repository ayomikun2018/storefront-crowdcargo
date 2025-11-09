"use client";
import {
  Badge,
  CautionIcon,
  CopyIcon,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@repo/ui";
import { CircleCheck } from "lucide-react";
import { Dispatch, FC, SetStateAction } from "react";

interface OrderDetailsSheetProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const OrderDetailsSheet: FC<OrderDetailsSheetProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="">
        <SheetHeader>
          <div className="flex gap-4 items-center pb-3">
            <SheetTitle className="text-xl">Track Item</SheetTitle>
            <Badge className="bg-green-50 text-foregorund">
              <span className="size-2.5 rounded-full bg-green-500" /> In Transit
            </Badge>
          </div>
          <hr />
        </SheetHeader>

        <div className="p-4 text-xs space-y-4">
          <div className="p-4 rounded-lg border ">
            <p className="uppercase text-xs text-gray-500 font-light">
              Package Information
            </p>
            <div className="divide-y divide-gray-300">
              <div className="py-2 flex justify-between">
                <span className="text-gray-700">No of Items</span>
                <span className="font-semibold">6</span>
              </div>
              <div className="py-2 flex justify-between">
                <span className="text-gray-700">ID:</span>
                <span className="flex gap-2 items-center">
                  <button type="button" className="text-primary flex gap-1">
                    CVk7HBD <CopyIcon className="size-4" />
                  </button>
                </span>
              </div>
              <div className="py-2 flex justify-between">
                <span className="text-gray-700">Order Date:</span>
                <span className="flex gap-2 items-center font-semibold">
                  24/12/2025
                </span>
              </div>
              <div className="flex justify-center pt-4">
                <p className="flex items-center bg-blue-50 text-gray-700 text-xs rounded-lg p-1 gap-1 w-4/5">
                  <CautionIcon className="size-6 text-foreground" />
                  Copy the id and paste in the crowd cargo to track id in real
                  time
                </p>
              </div>
            </div>
          </div>
          <div className="divide-y">
            <div className="flex items-center gap-4 py-2">
              <span className="rounded-full p-0.5 border border-primary">
                <CircleCheck size={20} className="text-white fill-primary" />
              </span>
              <div className="space-y-1 text-xs">
                <p className="text-primary text-sm">Accepted </p>
                <p className="text-gray-700">
                  Your order has ben accepted by runner{" "}
                </p>
                <p className="text-gray-500">19 Oct 2025, 12:18pm</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-2">
              <span className="rounded-full p-0.5 border border-primary">
                <CircleCheck size={20} className="text-white fill-primary" />
              </span>
              <div className="space-y-1 text-xs">
                <p className="text-primary text-sm">Pick up </p>
                <p className="text-gray-700">
                  Waiting for vendor to confirm your order
                </p>
                <p className="text-gray-500">19 Oct 2025, 12:18pm</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-2 opacity-50">
              <span className="rounded-full p-0.5 border border-primary">
                <CircleCheck size={20} className="text-white fill-primary" />
              </span>
              <div className="space-y-1 text-xs">
                <p className="text-primary text-sm">Delivered </p>
                <p className="text-gray-700">
                  Waiting for vendor to confirm your order
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-lg border ">
            <p className="uppercase text-xs text-gray-500 font-light">
              Merchant Information
            </p>
            <div className="divide-y divide-gray-300">
              <div className="py-2 flex justify-between">
                <span className="text-gray-700">Name</span>
                <span className="font-semibold">Oriamo Store</span>
              </div>
              <div className="py-2 flex justify-between">
                <span className="text-gray-700">ID:</span>
                <span className="flex gap-2 items-center">
                  <button type="button" className="flex gap-1">
                    Oriamo Store
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default OrderDetailsSheet;
