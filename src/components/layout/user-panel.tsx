"use client";
import LogInSheet from "@/components/auth/auth-sheet";
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
import React, { useState } from "react";

const UserPanel = () => {
  const [showLogInSheet, setShowLogInSheet] = useState(false);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-2 items-center">
          <UserIcon size={20} /> <ChevronDown size={20} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-2 space-y-1 mr-2">
          <DropdownMenuLabel className="p-2 bg-gray-100 flex gap-2 rounded-lg items-center">
            <Image
              src="/assets/user-avatar.png"
              width={80}
              height={80}
              alt="user avatar"
              className="size-12"
            />
            <div className="space-y-0.5">
              <p className="text-base leading-4">John Doe</p>
              <p className="text-muted-foreground text-xs">
                ID Number: 0000000
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem
            className="hover:bg-gray-50"
            onClick={() => setShowLogInSheet(true)}
          >
            Login with CrowdCargo ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="hover:bg-gray-50">
            Sign Up
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <LogInSheet isOpen={showLogInSheet} setIsOpen={setShowLogInSheet} />
    </>
  );
};

export default UserPanel;
