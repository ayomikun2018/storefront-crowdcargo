"use client";
import { MessageTextIcon, StarIcon } from "@/components/crowdcargo-icons";
import ModalWrapper from "@/components/elements/modal-wrapper";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import React from "react";

const CustomerRatings = () => {
  return (
    <div className="bg-secondary p-5 bg-no-repeat bg-top-right text-white bg-[url(/assets/ratings.svg)] bg-right">
      <div className="space-y-4 w-6/7 border-r border-gray-700 pr-16">
        <div className="relative rounded-lg bg-gradient-to-r from-blue-700 via-60% to-blue-500 text-white">
          <div className="px-4 py-6 flex justify-between items-center bg-[url(/assets/customer-ratings-illustration.png)] bg-contain bg-no-repeat bg-right">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">Store Ratings</h2>
              <div className="flex gap-2">
                <span className="flex gap-2 items-center text-lg font-semibold">
                  4.85 <StarIcon className="fill-warning size-4" />
                </span>
                <Badge className="bg-white/10">543 Ratings</Badge>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((each) => (
            <div key={each} className="flex gap-3 items-center">
              <span className="flex gap-1 items-center">
                {each}.0 <StarIcon className="fill-warning size-4" />
              </span>
              <Progress value={15 * each} className="h-4" />
              <span>298</span>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <p>Reviews</p>
          <ScrollArea className="h-80">
            <div className="space-y-2">
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-gray-500/10 rounded-lg p-2 flex gap-2 items-start"
                  >
                    <Badge className="text-primary bg-primary/10 text-md rounded-sm px-1">
                      <MessageTextIcon className="!size-4" />
                    </Badge>
                    <div className="space-y-3">
                      <p className="font-semibold">@segun</p>
                      <div className="space-y-2 flex-grow">
                        <p className="">
                          &quot; He delivered the package on time and was very
                          respectful and soft spoken &quot;
                        </p>
                        <div className="flex gap-2">
                          <ModalWrapper
                            hideTitle
                            className="!max-w-screen h-screen"
                            trigger={
                              <Image
                                src="https://dummyimage.com/100x100"
                                alt="review images"
                                className="size-16 object-cover rounded-lg cursor-pointer"
                                height={100}
                                width={100}
                              />
                            }
                          >
                            <div className="w-full max-h-full">
                              <Image
                                src="https://dummyimage.com/1000x800"
                                alt="review images"
                                className="object-cover rounded-lg size-full"
                                height={100}
                                width={100}
                              />
                            </div>
                          </ModalWrapper>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs text-gray-500 font-light">
                            24 Dec 2025, 14:00
                          </span>
                          <span className="inline-flex gap-0.5 items-center">
                            5.0 <StarIcon className="fill-warning size-2.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default CustomerRatings;
