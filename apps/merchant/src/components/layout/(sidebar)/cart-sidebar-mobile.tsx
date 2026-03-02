"use client";

import { useCartSidebar } from "./cart-sidebar-context";
import { cn, currencyFormatter } from "@/lib/utils";
import { Button, CartIcon, Sidebar, SidebarTrigger } from "@repo/ui";
import {
  ArrowLeft,
  ArrowLeftIcon,
  ArrowRight,
  BoxIcon,
  Minus,
  MinusCircleIcon,
  Plus,
  PlusCircleIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type CartItem = {
  name: string;
  meta: string;
  price: number;
};

type ViewProps = {
  setOpenMobile: (open: boolean) => void;
};

type FilledViewProps = ViewProps & {
  cartItems: CartItem[];
};

type FooterProps = {
  itemCount: number;
  setOpen: (open: boolean) => void;
};
type CartFooterProps = {
  itemCount: number;
  variant?: "fixed" | "inline";
};
export function CartSidebarMobile() {
  const { open, setOpen, setOpenMobile } = useCartSidebar();
  const router = useRouter();
  const cartItems = [
    {
      name: "Tofa Chair ",
      meta: "Color: Blue | Size: L | QTY: 3",
      price: 40000,
      oldPrice: 50000,
      discounted: true,
    },
    {
      name: "Tofa Chair ",
      meta: "Color: Black | Size: XL | QTY: 1",
      price: 120000,
    },
    {
      name: "Tofa Chair ",
      meta: "Color: Brown | Size: M | QTY: 2",
      price: 50000,
    },
  ];
  const isEmpty = cartItems.length === 0;
  return (
    <div className={open ? "w-full" : "w-0"}>
      <Sidebar
        side="right"
        className={cn(
          "fixed inset-0 z-50 bg-white",
          open ? "translate-x-0" : "translate-x-full",
          "transition-transform duration-300",
        )}
      >
        {isEmpty ? (
          <EmptyCartView setOpenMobile={setOpenMobile} />
        ) : (
          <FilledCartView cartItems={cartItems} setOpenMobile={setOpenMobile} />
        )}
      </Sidebar>
    </div>
  );
}
function EmptyCartView({ setOpenMobile }: ViewProps) {
  return (
    <div className="flex flex-col h-full bg-[#F5F5F5]">
      <div className="px-4 py-4">
        <button
          onClick={() => setOpenMobile(false)}
          className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
        >
          ✕
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <div className="bg-[#DDE6F2] rounded-[70px] p-14 mb-6">
          <Image
            src="/assets/shopping-cart.svg"
            alt="empty cart"
            width={140}
            height={140}
          />
          <p className="text-gray-700 text-lg font-medium">
            Your cart is empty
          </p>
        </div>
      </div>

      <div className="flex flex-col  items-center bg-white px-4 pt-4 pb-6 border-t space-y-4 items-center  ">
        <Button className="text-primary bg-blue-100 rounded-full  border border-primary items-center justify-center">
          {" "}
          <PlusCircleIcon /> Add Item
        </Button>
        <hr className="text-gray-800" />

        <button
          disabled
          className="w-full bg-blue-300 text-white py-4 rounded-3xl font-semibold "
        >
          Checkout
        </button>

        <div className="flex justify-center">
          <div className="flex items-center gap-2 bg-blue-100 text-gray-500 px-4 py-2 rounded-full text-sm">
            <BoxIcon className="size-4 text-primary" />
            Shipping fee calculated at checkout
          </div>
        </div>
      </div>
    </div>
  );
}
function FilledCartView({ cartItems, setOpenMobile }: FilledViewProps) {
  return (
    <div className="flex flex-col h-full">
      {/* HEADER */}
      <div className="flex py-4 items-center justify-between border-b px-2">
        <div className="flex gap-2 items-center">
          <Button
            onClick={() => setOpenMobile(false)}
            variant="ghost"
            className="rounded-full bg-gray-100 "
          >
            <ArrowLeftIcon className="size-4" />
          </Button>
          <div className="bg-primary text-white py-0 px-2 rounded-full text-lg font-bold w-auto">
            Cart ({cartItems.length} items)
          </div>
        </div>
        <div className="flex items-center bg-gray-100 rounded-full p-2 gap-2">
          <Button className="text-primary bg-blue-100 rounded-full border border-primary">
            {" "}
            <PlusCircleIcon /> Add
          </Button>
          <div className="rounded-full bg-gradient-to-t from-purple-500 to-primary p-0.5 items-start">
            <div className="w-8 h-8 rounded-full overflow-hidden ">
              <Image
                src="/assets/merchant-avatar.png"
                alt="Avatar"
                height={50}
                width={50}
                className="object-cover size-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3">
        <CartItems items={cartItems} />
      </div>

      <CartFooter itemCount={cartItems.length} variant="inline" />
    </div>
  );
}
function CartItems({ items }: { items: any[] }) {
  return (
    <div className="space-y-4">
      {items.map(({ name, meta, price, oldPrice, discounted }, index) => (
        <div key={index} className="flex border-b gap-4  py-2 w-full">
          <div className="border rounded p-2 ">
            <Image
              src="/assets/product-listing.svg"
              alt="Product"
              width={100}
              height={100}
              className="rounded bg-gray-100 pt-3"
            />
          </div>
          {/* <div className="w-16 h-16 rounded-full relative overflow-hidden">
            <Image
              src="/assets/product-listing.svg"
              alt="profile"
              fill
              className="object-cover"
            />
          </div> */}

          <div className="flex flex-col justify-center">
            <p className="pb-1 font-bold">{name}</p>
            <p className="text-xs text-gray-500">{meta}</p>
            <p className="text-primary font-semibold text-sm pb-1">
              ₦{price.toLocaleString()}
            </p>
            <div className="flex  justify-between px-2 border border-primary rounded-xl w-3/4">
              <button type="button" className="cursor-pointer">
                <MinusCircleIcon className="size-5 text-primary" />
              </button>
              <span className="p-1 h-full grid place-items-center">1</span>
              <button type="button" className="cursor-pointer">
                <PlusCircleIcon className="size-5 text-primary" />
              </button>
            </div>
            <p className="underline text-xs text-[#B42318] pt-1">Remove</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function CartFooter({ itemCount, variant = "fixed" }: CartFooterProps) {
  if (!itemCount) return null;

  return (
    <div
      className={cn(
        "z-50  border-t shadow-lg",
        variant === "fixed" && "fixed bottom-0 left-0 right-0  bg-blue-50 ",
        variant === "inline" && "relative w-full",
      )}
    >
      <div className="gap-0 p-0">
        <div className="mx-2 bg-primary/5 py-2 rounded-lg">
          <div className="flex items-center justify-center gap-2 bg-blue-100 text-gray-500 text-[13px] px-3 py-1.5 rounded-full w-fit mx-auto">
            <BoxIcon className="text-primary size-4 shrink-0" />
            <span className="leading-none">
              Shipping fee calculated at checkout
            </span>
          </div>
        </div>

        <div className="flex items-start gap-2 py-2 px-3 bg-secondary text-white">
          <span className="mt-3 border border-white rounded-lg inline-block p-2 bg-gradient-to-r from-secondary via-secondary to-violet-900">
            <CartIcon className="size-8 !text-white" />
          </span>

          <div className="space-y-1 flex-1">
            <div className="flex  items-center  justify-between space-y-0.5 gap-4">
              <p> Subtotal (4 Items)</p>

              <p className="text-lg font-semibold leading-4">
                {currencyFormatter(12890.0, {
                  currency: "NGN",
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
            <Button
              className="uppercase flex gap-2 items-center w-full bg-warning text-xs rounded-sm"
              asChild
            >
              <Link href="/checkout">
                Proceed to checkout <ArrowRight size={14} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
