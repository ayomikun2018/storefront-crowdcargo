"use client";
import OrderSuccessModal from "@/components/checkout/order-success-modal";
import {
  BoxIcon,
  CautionIcon,
  ChevronLeftIcon,
  EditIcon,
} from "@/components/crowdcargo-icons";
import FloatingInput, {
  FloatingSelect,
} from "@/components/elements/floating-input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { currencyFormatter } from "@/lib/utils";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required").default(""),
  lastName: Yup.string().required("Last name is required").default(""),
  promoCode: Yup.string().optional().default(""),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .default(""),
  phoneNumber: Yup.string().required("Phone number is requird").default(""),
  state: Yup.string().required("State is required").default(""),
  location: Yup.string().required("Location is required").default(""),
  dropOffAddress: Yup.string()
    .required("Drop off address is required")
    .default(""),
});

const CheckoutPage = () => {
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const formik = useFormik({
    initialValues: validationSchema.getDefault(),
    validationSchema,
    onSubmit: (values) => console.log(values),
  });

  return (
    <>
      <div className="flex flex-wrap gap-6">
        <div className="space-y-4 md:flex-2">
          <div className="flex justify-between py-4 border-b border-gray-200">
            <h2 className="inline-flex gap-2 items-center text-2xl font-semibold">
              <Link href="/">
                <ChevronLeftIcon className="size-5" />
              </Link>
              Checkout
              <Badge className="bg-blue-50 text-gray-600 py-1.5">
                Cart Total{" "}
                <span className="text-primary">
                  - {currencyFormatter(7000)}
                </span>
              </Badge>
            </h2>
            <Badge className="bg-blue-50 text-gray-600">
              Total Items - (2){" "}
              <Button className="!bg-blue-200 flex gap-1 rounded-3xl px-1 h-5 text-primary text-xs">
                <EditIcon className="size-4" /> Edit Cart
              </Button>
            </Badge>
          </div>
          <div className="space-y-1 text-gray-500">
            <h3 className="uppercase font-semibold">Deliver Detail</h3>
            <p className="text-sm">
              Add a delivery address to make sure your items get to the right
              place — fast, safe, and hassle-free.
            </p>
          </div>

          <form
            className="grid md:grid-cols-2 gap-4"
            onSubmit={formik.handleSubmit}
            id="checkout-form"
          >
            <FloatingInput
              formik={formik}
              name="firstName"
              type="text"
              label="First Name"
            />
            <FloatingInput
              formik={formik}
              name="lastName"
              type="text"
              label="Last Name"
            />
            <FloatingInput
              type="tel"
              label="Recipient Phone No"
              formik={formik}
              name="phoneNumber"
            />
            <FloatingInput
              formik={formik}
              type="email"
              label="Email Address"
              name="email"
            />
            <FloatingSelect
              label="State"
              name="state"
              formik={formik}
              options={[
                { value: "abuja", label: "Abuja" },
                { value: "abia", label: "Abia" },
                { value: "lagos", label: "Lagos" },
              ]}
            />
            <FloatingSelect
              label="Location"
              name="location"
              formik={formik}
              options={[
                { value: "location-1", label: "Location 1" },
                { value: "location-2", label: "Location 2" },
              ]}
            />
            <FloatingInput
              formik={formik}
              type="text"
              label="Drop-Off Address"
              name="dropOffAddress"
              className="md:col-span-2"
            />
          </form>
          <Badge className="bg-gradient-to-r from-yellow-700 to-yellow-400 w-full flex gap-2 justify-start text-sm">
            <CautionIcon className="!size-4" />
            This is an inter state delivery. This vendor is based in Lagos
          </Badge>
          <div className="border-t border-gray-200 py-2 text-xs">
            <p className="flex gap-1 items-center">
              <span className="inline-block rounded-full bg-blue-100 p-0.5">
                <BoxIcon className="text-primary size-3.5" />
              </span>
              <span>
                We use CrowdCargo dispatch{" "}
                <Link href="#" className="text-primary underline font-semibold">
                  (How delivery fees are calculated)
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className="space-y-4 md:flex-1 min-w-56">
          <div className="flex justify-between py-4 border-b border-gray-200">
            <h2 className="gap-2 items-center text-2xl font-semibold text-gray-500">
              Order Details
            </h2>
          </div>
          <h4 className="uppercase font-semiold text-sm">Delivery Detail</h4>
          <Image
            alt="deliver-detail-illustration"
            src="/assets/delivery-details-illustration.svg"
            height={300}
            width={500}
          />
          <p className="font-semibold text-xl text-center">
            Delivery details will appear here
          </p>
          <div className="divide-y divide-gray-300 text-sm">
            <div className="flex justify-between py-2">
              <span className="text-gray-500">Sub-total (4 Items)</span>
              <span>{currencyFormatter(6200)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-500">Service Fee</span>
              <span>{currencyFormatter(1200)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-500">Discount Fee</span>
              <span>{currencyFormatter(0)}</span>
            </div>
          </div>
          <FloatingInput
            formik={formik}
            name="promoCode"
            type="text"
            label="Enter promo code to get a discount"
          />
          <div className="divide-y divide-gray-300 text-sm">
            <div className="flex justify-between py-2">
              <span>Order Total</span>
              <span>{currencyFormatter(7600)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-500">Shipping (Delivery)</span>
              <span className="text-warning">Pending pickup address</span>
            </div>
            <div className="flex justify-between py-2 font-semibold">
              <span className="">Total Due</span>
              <span className="">{currencyFormatter(7600)}</span>
            </div>
          </div>
          <div className="space-y-2 pt-4">
            <Button
              className="w-full h-10 rounded-none"
              type="submit"
              form="checkout-form"
              onClick={() => setShowOrderSuccess(true)}
            >
              Pay {currencyFormatter(7600)}
            </Button>
            <p className="flex gap-1 text-xs">
              <CautionIcon />
              <span className="text-gray-500">
                Your order will arive within 2-3 days.
              </span>
            </p>
          </div>
        </div>
      </div>
      <OrderSuccessModal
        isOpen={showOrderSuccess}
        setIsOpen={setShowOrderSuccess}
      />
    </>
  );
};

export default CheckoutPage;
