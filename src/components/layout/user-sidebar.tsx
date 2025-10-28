import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";

const UserSidebar = () => {
  return (
    <aside className="w-xs border-r border-r-gray-300 p-3 h-[calc(100vh-88px])] relative divide-y">
      <div className="sticky top-24">
        <div className="flex gap-3 items-center py-4">
          <div className="size-20 rounded-full">
            <Image
              src="https://dummyimage.com/100x100"
              alt="profile avatar"
              className="rounded-full size-full"
              width={100}
              height={100}
            />
          </div>
          <div className="space-y-1">
            <Badge className="uppercase bg-blue-50 text-xs text-gray-500">
              Customer Profile
            </Badge>
            <h3 className="text-2xl font-semibold  leading-6">James Joyce</h3>
            <p className="text-sm">oraimostores@gmail.com</p>
          </div>
        </div>
        <hr />
        <div className="divide-y text-xs">
          <div className="pb-2 pt-3 flex justify-between">
            <span className="text-gray-600">Customer ID</span>
            <span className="font-semibold">123df9y</span>
          </div>
          <div className="pb-2 pt-3 flex justify-between">
            <span className="text-gray-600">Joined CrowdCargo on</span>
            <span className="font-semibold">Jun 24, 2025</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default UserSidebar;
