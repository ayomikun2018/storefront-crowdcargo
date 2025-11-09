"use client";
import { MapPinIcon } from "@repo/ui";
import OrderDetailsSheet from "@/components/portal/orders/order-details-sheet";
import { Badge } from "@repo/ui";
import { Card, CardContent, CardHeader } from "@repo/ui";
import { currencyFormatter } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

const Orders = () => {
  const [showOrderDetailsSheet, setShowOrderDetailsSheet] = useState(false);
  return (
    <>
      <div className="space-y-4">
        <div className="flex gap-4 pt-3">
          <Badge className="bg-blue-50 text-foreground">Active Orders</Badge>
          <Badge className="bg-white border-gray-500 border-1 text-gray-500">
            Delivery History
          </Badge>
        </div>
        {Array.from({ length: 3 }).map((each, index) => (
          <Card key={index} className="p-2 py-1 gap-2">
            <CardHeader className="p-0 gap-1">
              <div className="flex justify-between items-center p-3">
                <div className="space-y-1">
                  <span className="uppercase text-xs text-gray-600">
                    Package Id
                  </span>
                  <p className="uppercase text-sm">NGE:1108220003</p>
                </div>
                <div className="space-y-1">
                  <button
                    className="uppercase text-xs text-primary"
                    type="button"
                    onClick={() => setShowOrderDetailsSheet(true)}
                  >
                    Click To view Product
                  </button>
                  <p className="uppercase text-gray-500 text-xs text-end">
                    Thu, Jun 16, 2024
                  </p>
                </div>
              </div>
              <hr />
            </CardHeader>
            <CardContent className="p-2 space-y-4">
              <div className="p-3 bg-blue-50 flex justify-between rounded-lg">
                <div className="gap-3 border-r flex items-center text-sm pr-3">
                  <Image
                    src="https://dummyimage.com/50x50"
                    className="rounded-full object-cover size-7"
                    alt="profile image"
                    width={50}
                    height={50}
                  />
                  Ayomide A.
                </div>
                <div className="flex gap-2 items-center text-sm">
                  <MapPinIcon className="text-primary size-4" />
                  <span className="font-semibold">30 mins away</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="h-2 rounded-xl w-full bg-primary" />
                  <p className="text-xs text-center">
                    Accepted{" "}
                    <span className="text-gray-500"> (12/12/24, 03:00am)</span>
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="h-2 rounded-xl w-full bg-primary" />
                  <p className="text-xs text-center">
                    Pick up
                    <span className="text-gray-500"> (12/12/24, 03:00am)</span>
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="h-2 rounded-xl w-full bg-blue-50" />
                  <p className="text-xs text-center">
                    Pick up
                    <span className="text-gray-500"> (12/12/24, 03:00am)</span>
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-2 rounded shadow bg-gray-200 flex gap-2 items-center text-sm ">
                  <span className="size-2.5 rounded-full bg-primary" />
                  Kingdom Hall
                </div>
                <div className="p-2 rounded shadow bg-gray-200 flex gap-2 items-center text-sm">
                  ICM, Ikeja, Lagos Nigeria
                </div>
                <div className="flex justify-between">
                  <div className="text-sm">
                    <span>Origin:</span>
                    <span className="text-gray-600"> Self</span>
                  </div>
                  <span className="font-semibold">
                    {currencyFormatter(4000)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <OrderDetailsSheet
        isOpen={showOrderDetailsSheet}
        setIsOpen={setShowOrderDetailsSheet}
      />
    </>
  );
};

export default Orders;
