"use client";
import ModalWrapper, {
  BaseModalProps,
} from "@/components/elements/modal-wrapper";
import { currencyFormatter } from "@/lib/utils";
import { Badge, CautionIcon } from "@repo/ui";
import Image from "next/image";
import { FC } from "react";

const OrderSuccessModal: FC<BaseModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <ModalWrapper isOpen={isOpen} hideTitle setIsOpen={setIsOpen}>
      <div className="space-y-4">
        <div className="flex justify-center flex-col items-center gap-3 text-center">
          <Image
            src="https://dummyimage.com/200x100"
            alt="success illustration"
            width={200}
            height={100}
          />
          <p className="font-semibold text-xl w-3/5">
            Thank you for shopping at Oriamo Store
          </p>
        </div>
      </div>
      <div className="divide-y divide-gray-300 text-sm">
        <div className="flex justify-between items-center py-2 gap-4">
          <span>Tracking ID</span>
          <span className="text-primary">12h46g</span>
        </div>
        <div className="flex justify-between items-center py-2 gap-4">
          <span>Amount Paid</span>
          <span className="">{currencyFormatter(7800)}</span>
        </div>
        <div className="flex justify-between items-center py-2 gap-4 border-b border-gray-300">
          <span>Delivery Address</span>
          <span className="text-primary max-w-1/2 truncate">
            36 Ikate Villa, off Fidiso Estate IbejuLekki Phase 1
          </span>
        </div>
      </div>
      <div className="flex bg-primary gap-4 p-1 text-white mt-2 bg-[url(/assets/map-illustration.svg)] bg-bottom-right bg-no-repeat">
        <Image
          alt="qr-code"
          src="/assets/order-success-qr-code.png"
          height={200}
          width={200}
          className="bg-white p-1"
        />
        <p className="text-xl pt-4">Scan QR Code to Track your Item(s)</p>
      </div>
      <Badge className="mt-4 w-full bg-gray-100 text-gray-700 items-center">
        <CautionIcon className="!size-3.5 text-foreground" />
        Your order will arive within 2-3 working days
      </Badge>
    </ModalWrapper>
  );
};

export default OrderSuccessModal;
