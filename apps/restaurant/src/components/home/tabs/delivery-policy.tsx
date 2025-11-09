"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui";

const DeliveryPolicy = () => {
  const ACCORDION_CLASS = "[&>svg]:text-lg [&>svg]:text-white";
  return (
    <div className="bg-secondary p-5 bg-no-repeat bg-top-right text-white">
      <div className="relative rounded-lg bg-gradient-to-r from-blue-700 via-60% to-blue-500 text-white">
        <div className="px-4 py-6 flex justify-between items-center bg-[url(/assets/delivery-policy.svg)] bg-no-repeat bg-right">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Delivery Policy</h2>
            <p className="text-xs text-foreground-500">
              Last Updated: 3 days ago
            </p>
          </div>
        </div>
      </div>
      <Accordion type="single" collapsible className="">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <AccordionItem
              value={`item-${index + 1}`}
              key={index}
              className="border-b border-gray-700"
            >
              <AccordionTrigger
                className={`${ACCORDION_CLASS} text-lg font-semibold`}
              >
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
    </div>
  );
};

export default DeliveryPolicy;
