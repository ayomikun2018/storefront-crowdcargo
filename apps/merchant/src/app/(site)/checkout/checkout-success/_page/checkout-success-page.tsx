
"use client";

import Image from "next/image";
import { CautionIcon } from "@repo/ui";
import { Package } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CheckoutSuccessPage() {
  const orderDetails = [
    { label: "Order Date:", value: "24/07/2024" },
    {
      label: "Order ID / Tracking ID:",
      value: "NGR-0126-23456-7DT",
      bold: true,
    },
    { label: "Name:", value: "Shola Benson", bold: true },
    { label: "Phone number:", value: "+234906 879 0982" },
    { label: "No of Items:", value: "8 Items" },
    { label: "Total Paid:", value: "₦6,200", bold: true },
  ];

  const deliveryDetails = [
    { label: "Address:", value: "24 Bridge Shomolu Street" },
    { label: "Country:", value: "Nigeria" },
    { label: "State:", value: "Lagos State" },
    { label: "Area:", value: "Shola Benson", bold: true },
  ];

  const items = [
    {
      name: "Tofa Chair from House of Chairs 7x7” (Brown)",
      meta: "Color: Blue | Size: L | QTY: 3",
      price: 40000,
      oldPrice: 50000,
      discounted: true,
    },
    {
      name: "Modern Sofa",
      meta: "Color: Black | Size: XL | QTY: 1",
      price: 120000,
    },
    {
      name: "Wooden Table",
      meta: "Color: Brown | Size: M | QTY: 2",
      price: 50000,
    },
  ];

  const sections = [
    { title: "ORDER / CUSTOMER DETAILS", data: orderDetails },
    { title: "DELIVERY INFORMATION", data: deliveryDetails },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
        <div className="space-y-8 pr-14">
          <Header />

          {sections.map((section, i) => (
            <Section key={i} title={section.title}>
              {section.data.map((item, idx) => (
                <KeyValue key={idx} {...item} />
              ))}
            </Section>
          ))}

          <Section
            title={`ITEMS IN CART (${items.length})`}
            contentClassName="border-none divide-y"
            dividerClassName="hidden"
          >
            {items.map((item, index) => (
              <OrderItem key={index} {...item} />
            ))}
          </Section>
        </div>

        <RightPanel />
      </div>
    </div>
  );
}
function Header() {
  return (
    <div className="text-center space-y-2">
      <h1 className="text-2xl font-semibold">Order Confirmed.</h1>
      <p className="text-2xl font-semibold">
        Thank you for shopping at Oriamo Store
      </p>
      <p className="text-sm text-gray-500">
        We’ve sent a confirmation email to{" "}
        <span className="text-primary font-semibold">emmy4eva@gmail.com</span>
      </p>
    </div>
  );
}
function Section({
  title,
  children,
  className,
  contentClassName,
  dividerClassName,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  dividerClassName?: string;
}) {
  return (
    <div className={cn("space-y-3", className)}>
      <p className="font-extrabold text-gray-500 text-sm">{title}</p>

      <div className={cn("border-t border-b divide-y", contentClassName)}>
        {children}
      </div>

      <div
        className={cn(
          "border-dashed border-t border-gray-300 mt-6",
          dividerClassName,
        )}
      />
    </div>
  );
}

function KeyValue({
  label,
  value,
  bold,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <div className="flex justify-between px-4 py-2 text-sm">
      <span className="text-gray-500">{label}</span>
      <span className={bold ? "font-semibold" : ""}>{value}</span>
    </div>
  );
}
function OrderItem({
  name,
  meta,
  price,
  oldPrice,
  discounted,
}: {
  name: string;
  meta: string;
  price: number;
  oldPrice?: number;
  discounted?: boolean;
}) {
  return (
    <div className="flex gap-4 px-4 py-4">
      <div className="border rounded p-1">
        <Image
          src="/assets/product-listing.svg"
          alt="Product"
          width={64}
          height={64}
          className=" rounded bg-gray-100"
        />
      </div>

      <div className="flex-1  justify-center flex flex-col ">
        <p className="text-sm font-bold">{name}</p>
        <p className="text-xs text-gray-500">{meta}</p>
      </div>

      <div className="text-right   justify-center flex flex-col">
        {discounted && oldPrice && (
          <p className="line-through text-destructive text-xs">
            ₦{oldPrice.toLocaleString()}
          </p>
        )}
        <p className="text-primary font-medium">₦{price.toLocaleString()}</p>
      </div>
    </div>
  );
}
function RightPanel() {
  return (
    <div className=" py-10 relative border-l  ">
      <div className="flex flex-col items-center text-center">
        <Image
          src="https://dummyimage.com/260x160"
          alt="success illustration"
          width={260}
          height={160}
        />
      </div>

      <div className="relative bg-primary text-white  overflow-hidden mt-20">
        <div className="grid  gap-4 pt-4 pl-4">
          <div className="flex justify-center gap-3">
            <div className=" h-14  flex items-center">
              <Image
                alt="qr-code"
                src="/assets/qr-code.svg"
                width={300}
                height={300}
                className="mt-16 bg-white"
              />
            </div>
            <div className="grid-cols-2">
              {" "}
              <p className="text-lg leading-snug  font-bold pr-2 pb-2">
                Find & Shop <span className="underline">Oriamo Store</span> and
                Track your Order on the CrowdCargo App
              </p>
              <div className="inline-flex items-center gap-2 bg-white text-black py-1 my-2  rounded-full text-xs font-medium w-fit">
                <Image
                  alt="download-app"
                  src="/assets/download-app.svg"
                  width={120}
                  height={120}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-1 right-0 w-26 h-16  pointer-events-none">
          <Image
            src="/assets/map-illustration.svg"
            alt="map"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 bg-[#1E1B4B] text-white  py-2  text-xs">
        <span className="inline-flex items-center gap-2">
          <Package size={12} /> Your order will arrive within 2–3 working days
        </span>
      </div>

      <div className=" bg-gradient-to-r from-yellow-700 to-yellow-400  flex items-center gap-2 bg-warning text-white  py-2 px-1 text-xs ">
        <CautionIcon className="size-4 text-white" />
        This is an inter-state delivery. This vendor is based in Lagos
      </div>
    </div>
  );
}
