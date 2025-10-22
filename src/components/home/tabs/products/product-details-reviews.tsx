"use client";
import { MessageTextIcon, StarIcon } from "@/components/crowdcargo-icons";
import ModalWrapper from "@/components/elements/modal-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductDetailsReviews = () => {
  return (
    <div className="space-y-4">
      <div className="px-2 py-3 bg-gray-100 flex justify-between items-center rounded-lg">
        <div className="flex gap-1 items-center">
          <span className="font-semibold text-2xl">4.85</span>
          <StarIcon className="size-4 fill-warning" />{" "}
          <span className="text-4xl font-light text-gray-300">|</span>
          <div className="space-y-0.5 leading-5">
            <p>Overall Ratings</p>
            <p className="text-gray-500">543 Ratings</p>
          </div>
        </div>
        <Link
          href="#"
          className="uppercase text-primary hover:underline text-xs"
        >
          View Ratings
        </Link>
      </div>
      <Button
        variant="outline"
        className="text-primary bg-primary/10 w-full border-primary h-12"
      >
        Add your Own Ratings
      </Button>
      <div className="space-y-2">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-2 flex gap-2 items-start"
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
    </div>
  );
};

export default ProductDetailsReviews;
