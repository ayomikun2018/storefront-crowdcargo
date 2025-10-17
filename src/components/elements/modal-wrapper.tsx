"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Lock } from "lucide-react";

import Image from "next/image";
import type { FC, ReactNode } from "react";

export interface BaseModalProps {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}

interface ModalWrapperProps {
  isOpen?: boolean;
  isLock?: boolean;
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full";
  setIsOpen?: (value: boolean) => void;
  onOpenChange?: (value: boolean) => void;
  type?: "danger" | "success" | "info" | "warning";
  className?:
    | string
    | "center"
    | "auto"
    | "top"
    | "top-center"
    | "bottom"
    | "bottom-center";
  hideLogo?: boolean;
  hideTitle?: boolean;
  headerFullWidth?: boolean;
  showHeaderBorder?: boolean;
  lightBg?: boolean;
  children: ReactNode;
  trigger?: ReactNode;
  title?: ReactNode;
  logo?: ReactNode;
  footer?: ReactNode;
}

const ModalWrapper: FC<ModalWrapperProps> = ({
  isOpen,
  onOpenChange = () => null,
  setIsOpen,
  isLock = false,
  hideLogo = false,
  showHeaderBorder = true,
  hideTitle = false,
  className = "",
  trigger,
  headerFullWidth = true,
  children,
  title,
  footer,
  logo = (
    <Image
      src="https://dummyimage.com/50x50"
      alt="logo"
      className="w-8"
      width={60}
      height={60}
    />
  ),
}) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onOpenChange={(value) => {
          if (setIsOpen) setIsOpen(value);
          onOpenChange(value);
        }}
      >
        <DialogTrigger asChild>{trigger}</DialogTrigger>

        <DialogContent>
          <>
            <DialogTitle
              className={cn(
                `flex gap-3 justify-between  items-center pb-0 py-2 
                `,
                showHeaderBorder && "border-b border-b-foreground-300",
                hideTitle && "hidden"
              )}
            >
              <span
                className={`flex gap-3 items-center font-semibold text-foreground-600 ${
                  headerFullWidth ? "flex-grow" : ""
                }`}
              >
                {!hideLogo && (isLock ? <Lock /> : logo)}
                {title}
              </span>
            </DialogTitle>

            <div
              className={`py-3 max-h-[70vh] overflow-auto ${
                hideTitle ? "pt-7 pb-2" : ""
              }`}
            >
              {children}
            </div>
            {footer && <div className="px-5 py-4">{footer}</div>}
          </>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default ModalWrapper;
