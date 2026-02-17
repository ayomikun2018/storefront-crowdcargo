"use client";

import useFooterIntersect from "@/hooks/use-footer-intersect";
import { cn, currencyFormatter } from "@/lib/utils";
import {
  Alert,
  AlertDescription,
  BoxIcon,
  Button,
  CartIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
  XCircleIcon,
} from "@repo/ui";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useCartSidebar } from "./cart-sidebar-context";

export function CartSidebar() {
  const { open, setOpen } = useCartSidebar();

  const { intersectionData } = useFooterIntersect();
  const pathname = usePathname();
  useEffect(() => {
    if (pathname == "/checkout" || pathname.startsWith("/portal"))
      setOpen(false);
  }, [pathname]);
  return (
    <div className={open ? "md:w-80" : "w-1"}>
      <Sidebar
        className={cn(
          "border-l border-l-gray-100 bg-white transition-all top-24 h-[calc(100vh-88px])]",
          open ? "w-80" : "w-0",
        )}
        side="right"
        style={{ bottom: `${intersectionData.pixelsVisible}px` }}
      >
        <SidebarHeader className="text-2xl text-gray-600 bg-white pb-5">
          My Cart (4 Items)
        </SidebarHeader>
        <hr className="mx-2" />
        <SidebarContent className="bg-white p-2 pr-0">
          <SidebarMenu className="space-y-3 divide-y divide-y-gray-100">
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <SidebarMenuItem key={index}>
                  <div className="flex gap-2 text-xs p-2">
                    <div className="relative w-auto">
                      <button type="button" className="absolute -top-2 -left-2">
                        <XCircleIcon className="size-5 text-destructive" />
                      </button>
                      <Image
                        src="/assets/pair-trainers.svg"
                        alt="cart item image"
                        width={80}
                        height={80}
                        className="object-cover rounded size-24"
                      />
                    </div>
                    <div className="flex justify-between p-1">
                      <div className="space-y-0 w-3/5">
                        <p className="wrap-normal text-sm">
                          Ramen Noodles Extra Sweet
                        </p>
                        <p className="text-gray-400">Color: Blue Size:L</p>
                        <div className="text-base">
                          {currencyFormatter(40000)}
                        </div>
                      </div>
                      <div className="flex flex-col border border-gray-200 rounded-xl">
                        <button type="button" className="cursor-pointer">
                          <MinusCircleIcon className="size-7 text-primary" />
                        </button>
                        <span className="p-1 h-full grid place-items-center">
                          8
                        </span>
                        <button type="button" className="cursor-pointer">
                          <PlusCircleIcon className="size-7 text-primary" />
                        </button>
                      </div>
                    </div>
                  </div>
                </SidebarMenuItem>
              ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="gap-0 p-0">
          <Alert className="bg-primary/5 text-primary rounded-none">
            <BoxIcon className="text-primary size-6" />
            <AlertDescription className="text-sm wrap-normal">
              Delivery fees are calculated at checkout.
            </AlertDescription>
          </Alert>
          <div className="space-y-2.5 py-2 px-3 bg-secondary text-white border-5 border-primary">
            <div className="flex gap-2">
              <span className="border border-white rounded-lg inline-block p-2 bg-gradient-to-r from-secondary via-secondary to-violet-900">
                <CartIcon className="size-7 !text-white" />
              </span>
              <div className="space-y-0.5">
                <p>4 Items</p>
                <p className="text-lg font-semibold leading-4">
                  {currencyFormatter(12890.0, {
                    currency: "NGN",
                    minimumFractionDigits: 2,
                  })}
                </p>
              </div>
            </div>
            <Button
              className="uppercase flex gap-2 items-center w-full bg-warning text-xs"
              asChild
            >
              <Link href="/checkout">
                Proceed to checkout <ArrowRight size={14} />
              </Link>
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}

//empty ui
// "use client";

// import useFooterIntersect from "@/hooks/use-footer-intersect";
// import { cn, currencyFormatter } from "@/lib/utils";
// import {
//   Alert,
//   AlertDescription,
//   BoxIcon,
//   Button,
//   CartIcon,
//   MinusCircleIcon,
//   PlusCircleIcon,
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuItem,
//   useSidebar,
//   XCircleIcon,
// } from "@repo/ui";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";
// const cartItems: any[] = []; // replace with your real cart state
// const isEmpty = cartItems.length === 0;

// export function CartSidebar() {
//   const { open, setOpen } = useSidebar();

//   const { intersectionData } = useFooterIntersect();
//   const pathname = usePathname();
//   useEffect(() => {
//     if (pathname == "/checkout" || pathname.startsWith("/portal"))
//       setOpen(false);
//   }, [pathname]);
//   return (
//     <div className={open ? "w-80" : "w-1"}>
//       <Sidebar
//         className={cn(
//           "border-l border-l-gray-100 bg-white transition-all top-24 h-[calc(100vh-88px])]",
//           open ? "w-80" : "w-0"
//         )}
//         side="right"
//         style={{ bottom: `${intersectionData.pixelsVisible}px` }}
//       >
//         <SidebarHeader className="text-2xl text-gray-600 bg-white pb-5">
//           My Cart
//           {!isEmpty && (
//             <span className="text-sm text-gray-400 ml-1">
//               ({cartItems.length} Items)
//             </span>
//           )}
//         </SidebarHeader>

//         <hr className="mx-2" />
//         <SidebarContent className="bg-white p-2 pr-0">
//           {isEmpty ? (
//             <div className="h-full flex flex-col items-center justify-center gap-4 px-6 text-center">
//               <Image
//                 src="/assets/empty-cart.svg"
//                 alt="empty cart"
//                 width={200}
//                 height={200}
//                 className="opacity-80"
//               />

//               <h3 className="text-xl font-semibold text-gray-700">
//                 Your Cart is Empty
//               </h3>
//             </div>
//           ) : (
//             <SidebarMenu className="space-y-3 divide-y divide-y-gray-100">
//               {cartItems.map((item, index) => (
//                 <SidebarMenuItem key={index}>
//                   <div className="flex gap-2 text-xs p-2">
//                     <div className="relative w-auto">
//                       <button type="button" className="absolute -top-2 -left-2">
//                         <XCircleIcon className="size-5 text-destructive" />
//                       </button>
//                       <Image
//                         src="/assets/pair-trainers.svg"
//                         alt="cart item image"
//                         width={80}
//                         height={80}
//                         className="object-cover rounded size-24"
//                       />
//                     </div>

//                     <div className="flex justify-between p-1 w-full">
//                       <div className="space-y-0 w-3/5">
//                         <p className="wrap-normal text-sm">
//                           Ramen Noodles Extra Sweet
//                         </p>
//                         <p className="text-gray-400">Color: Blue Size:L</p>
//                         <div className="text-base">
//                           {currencyFormatter(40000)}
//                         </div>
//                       </div>

//                       <div className="flex flex-col border border-gray-200 rounded-xl">
//                         <button type="button">
//                           <MinusCircleIcon className="size-7 text-primary" />
//                         </button>
//                         <span className="p-1 h-full grid place-items-center">
//                           1
//                         </span>
//                         <button type="button">
//                           <PlusCircleIcon className="size-7 text-primary" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           )}
//         </SidebarContent>
//         {!isEmpty && (
//           <SidebarFooter className="gap-0 p-0">
//             <Alert className="bg-primary/5 text-primary rounded-none">
//               <BoxIcon className="text-primary size-6" />
//               <AlertDescription className="text-sm wrap-normal">
//                 Delivery fees are calculated at checkout.
//               </AlertDescription>
//             </Alert>
//             <div className="space-y-2.5 py-2 px-3 bg-secondary text-white border-5 border-primary">
//               <div className="flex gap-2">
//                 <span className="border border-white rounded-lg inline-block p-2 bg-gradient-to-r from-secondary via-secondary to-violet-900">
//                   <CartIcon className="size-7 !text-white" />
//                 </span>
//                 <div className="space-y-0.5">
//                   <p>4 Items</p>
//                   <p className="text-lg font-semibold leading-4">
//                     {currencyFormatter(12890.0, {
//                       currency: "NGN",
//                       minimumFractionDigits: 2,
//                     })}
//                   </p>
//                 </div>
//               </div>
//               <Button
//                 className="uppercase flex gap-2 items-center w-full bg-warning text-xs"
//                 asChild
//               >
//                 <Link href="/checkout">
//                   Proceed to checkout <ArrowRight size={14} />
//                 </Link>
//               </Button>
//             </div>
//           </SidebarFooter>
//         )}
//       </Sidebar>
//     </div>
//   );
// }
