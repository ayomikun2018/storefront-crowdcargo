import { XCircleIcon } from "@/components/crowdcargo-icons";
import ModalWrapper, {
  BaseModalProps,
} from "@/components/elements/modal-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { DialogClose } from "@/components/ui/dialog";
import React, { FC } from "react";

const ReturnPolicyModal: FC<BaseModalProps> = ({ trigger }) => {
  return (
    <ModalWrapper
      trigger={trigger}
      className="md:max-w-6xl w-full max-h-[80vh] overflow-auto py-1"
      hideTitle
      hideCloseButton
    >
      <div className="relative rounded-lg bg-gradient-to-r from-blue-700 via-60% to-blue-500 text-white">
        <div className="px-4 py-6 flex justify-between items-center bg-[url(/assets/return-policy-illustration.svg)] bg-no-repeat bg-right">
          <div className="space-y-3">
            <Badge className="bg-white/20 text-white">
              Last Updated: 3 days ago
            </Badge>
            <h2 className="text-2xl font-semibold">Return Policy</h2>
          </div>

          <DialogClose className="bg-white/10 p-2 rounded-full">
            <XCircleIcon className="size-6" />
          </DialogClose>
        </div>
      </div>
      <Accordion type="single" collapsible className="divide-y divide-gray-300">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger className="text-lg font-semibold">
                {index + 1}.0 Introduction
              </AccordionTrigger>
              <AccordionContent>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                eius illo natus. Illo obcaecati dignissimos quod nihil
                exercitationem, sequi saepe quidem fugiat labore tempora nostrum
                aspernatur iusto praesentium fugit corrupti, eaque itaque?
                Aliquid nesciunt eius numquam!
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
    </ModalWrapper>
  );
};

export default ReturnPolicyModal;
