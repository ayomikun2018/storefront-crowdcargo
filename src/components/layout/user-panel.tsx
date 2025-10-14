"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, UserIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const UserPanel = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-2 items-center">
        <UserIcon size={20} /> <ChevronDown size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-3 space-y-2">
        <DropdownMenuLabel className="p-2 bg-gray-100 flex gap-2 rounded-lg">
          <Image
            src="/assets/user-avatar.png"
            width={80}
            height={80}
            alt="user avatar"
            className="size-12"
          />
          <div className="space-y-2">
            <p>John Doe</p>
            <p className="text-muted-foreground">ID Number: 0000000</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuItem className="hover:bg-gray-50">
          Login with CrowdCargo ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:bg-gray-50">
          Sign Up
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserPanel;
