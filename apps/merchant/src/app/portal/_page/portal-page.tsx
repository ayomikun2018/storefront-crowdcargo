"use client";
import { ChevronLeftIcon } from "@repo/ui";
import DeliveryAddress from "@/components/portal/orders/delivery-address";
import Orders from "@/components/portal/orders/orders";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui";
import Link from "next/link";
import { FC, useState } from "react";

interface PortalPageProps {
  searchParams: { activeTab: string };
}

const PortalPage: FC<PortalPageProps> = ({ searchParams }) => {
  const [activeTab, setActiveTab] = useState(
    searchParams.activeTab || "orders"
  );

  const TAB_CLASS =
    "text-lg text-gray-600 data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:text-foreground rounded-none !bg-transparent flex-none !shadow-none cursor-pointer !border-r data-[state=active]:font-semibold";
  return (
    <div className="max-w-7xl p-5">
      <Tabs className="w-full" onValueChange={setActiveTab} value={activeTab}>
        <TabsList className="bg-transparent border-b border-b-gray-200 rounded-none w-full justify-start py-1 h-auto gap-4 overflow-auto min-w-full max-w-0 z-30">
          <Link href="/" className="pr-2 border-r">
            <ChevronLeftIcon className="size-5" />
          </Link>
          <TabsTrigger value="orders" className={TAB_CLASS}>
            Orders
          </TabsTrigger>
          <TabsTrigger value="delivery-address" className={TAB_CLASS}>
            Delivery Address
          </TabsTrigger>
        </TabsList>
        <TabsContent value="orders">
          <Orders />
        </TabsContent>
        <TabsContent value="delivery-address">
          <DeliveryAddress />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PortalPage;
