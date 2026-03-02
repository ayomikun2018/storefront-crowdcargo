"use client";
import FloatingInput, {
  FloatingSelect,
} from "@/components/elements/floating-input";
import { currencyFormatter } from "@/lib/utils";
import { Button, CautionIcon, useSidebar } from "@repo/ui";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@repo/ui";
import { useFormik } from "formik";
import { useState } from "react";
import useFooterIntersect from "@/hooks/use-footer-intersect";
import * as Yup from "yup";
import {
  BoxIcon,
  LocateFixedIcon,
  LocateIcon,
  MapIcon,
  MapPin,
  PinIcon,
} from "lucide-react";
import Link from "next/link";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required").default(""),
  lastName: Yup.string().required("Last name is required").default(""),
  promoCode: Yup.string().optional().default(""),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .default(""),
  phoneNumber: Yup.string().required("Phone number is requird").default(""),
  country: Yup.string().required("Country is required").default("Nigeria"),
  state: Yup.string().required("State is required").default(""),
  lga: Yup.string().required("LGA is required").default(""),
  area: Yup.string().required("Area is required").default(""),
  dropOffAddress: Yup.string()
    .required("Drop off address is required")
    .default(""),
});

const CheckoutPageMobile = () => {
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const { intersectionData } = useFooterIntersect(); // ✅ Detect footer

  const [isSaved, setIsSaved] = useState(false);
  const [savedData, setSavedData] = useState<
    typeof validationSchema.__outputType | null
  >(null);

  const formik = useFormik({
    initialValues: validationSchema.getDefault(),
    validationSchema,
    onSubmit: () => {},
  });

  const { setOpen: setOpenCartSidebar } = useSidebar();

  const handleSave = () => {
    if (!formik.isValid) return;

    setSavedData(formik.values);
    setIsSaved(true);
  };

  return (
    <div className="md:flex-1 min-w-56 space-y-4 sticky top-6 self-start pb-32 ">
      <div className="flex flex-col justify-between pb-4 ">
        <Tabs defaultValue="delivery" className="w-full ">
          <TabsList className="flex justify-between gap-2  h-12 w-full bg-transparent  border-b border-gray-20  rounded-none pb-1">
            <span>
              <h2 className="text-lg font-semibold text-black ">
                Delivery Method
              </h2>
            </span>
            <div className="flex self-end justify-end bg-blue-100 rounded-2xl w-auto gap-2">
              <TabsTrigger
                value="delivery"
                className="flex gap-1 rounded-3xl px-4 h-9 text-xs border border-transparent text-muted-foreground data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-secondary"
              >
                Delivery
              </TabsTrigger>

              <TabsTrigger
                value="pickup"
                className="flex gap-1 rounded-3xl px-4 h-9 text-xs border border-transparent text-muted-foreground data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-secondary"
              >
                Store Pickup
              </TabsTrigger>
            </div>
          </TabsList>

          <TabsContent value="delivery" className="mt-3 space-y-3">
            {!isSaved && (
              <div className=" space-y-1 text-gray-500">
                <p className="text-xs uppercase font-semibold">
                  RECIPIENT DETAIL
                </p>
                <p className="text-sm ">
                  Add a delivery address to make sure your items get to the
                  right place fast, safe, and hassle-free.
                </p>
                <form
                  className="grid md:grid-cols-2 gap-4 pt-3"
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
                    label="Country"
                    name="country"
                    formik={formik}
                    options={[{ value: "Nigeria", label: "Nigeria" }]}
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
                  <FloatingInput
                    formik={formik}
                    type="text"
                    label="Drop Off Address"
                    name="dropOffAddress"
                    className="md:col-span-2"
                  />

                  <div className="bg-gradient-to-r from-yellow-700 to-yellow-400 flex items-center gap-2 py-2 px-1 text-xs text-white rounded-lg">
                    <CautionIcon className="size-4 text-white" />
                    This is an inter-state delivery. This vendor is based in
                    Lagos
                  </div>

                  <div className=" py-2 text-xs  px-2 bg-[#db86071a]">
                    <p className="flex gap-1 items-center">
                      <span className="inline-block rounded-full bg-blue-100 p-0.5">
                        <BoxIcon className="text-primary size-3.5" />
                      </span>
                      <span className="flex flex-col font-bold text-black">
                        We use CrowdCargo dispatch{" "}
                        <Link
                          href="#"
                          className="text-primary underline font-semibold"
                        >
                          (How delivery fees are calculated)
                        </Link>
                      </span>
                    </p>
                  </div>
                  {/* <FloatingSelect
                    label="LGA"
                    name="lga"
                    formik={formik}
                    options={[
                      { value: "lga-1", label: "lga 1" },
                      { value: "lga-2", label: "lga 2" },
                    ]}
                  />

                  <FloatingSelect
                    label="Area"
                    name="area"
                    formik={formik}
                    options={[
                      { value: "location-1", label: "location 1" },
                      { value: "location-2", label: "location 2" },
                    ]}
                  /> */}
                </form>
              </div>
            )}

            {isSaved && savedData && (
              <div className="space-y-1">
                <p className="text-muted-foreground text-sm font-semibold">
                  DELIVERY DETAIL
                </p>
                <p className="font-semibold text-lg">
                  {savedData.dropOffAddress}
                </p>
                <p className="text-muted-foreground bg-gray-50 rounded-md w-2/3 pl-2">
                  {savedData.area}, {savedData.state}, {savedData.country}
                </p>
                <hr className="border-t border-gray-300 mt-2" />

                <div className="flex justify-between py-2">
                  <span className="text-gray-500">
                    To:{" "}
                    <span className="text-primary font-semibold">
                      {savedData.firstName} {savedData.lastName}
                    </span>
                  </span>
                  <span>{savedData.phoneNumber}</span>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="pickup" className="mt-3 space-y-3">
            <div className="space-y-2.5 p-4 bg-secondary text-white border-5 border-primary rounded-xl">
              <p className="text-sm">Store Details</p>

              <div className="space-y-1 pb-3">
                <p className="text-lg font-semibold leading-4">
                  4, Anjorin Ladipo street, Yaba Lagos
                </p>
                <p className="text-gray-500">+234 905 000 0000</p>
              </div>

              <span className="p-0.5 rounded-sm flex gap-2 items-center w-full bg-warning pl-2">
                Our store closes at 5:00pm Today
              </span>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* <FloatingInput
            formik={formik}
            name="promoCode"
            type="text"
            label="Enter promo code to get a discount"
          /> */}

      <div className="divide-y divide-gray-300 text-sm">
        <div className="flex justify-between py-2">
          <span className="text-gray-500">Sub-total (4 Items)</span>
          <span>{currencyFormatter(6200)}</span>
        </div>

        <div className="flex justify-between py-2">
          <span className="text-gray-500">Service Fee </span>
          <span>{currencyFormatter(1200)}</span>
        </div>

        <div className="flex justify-between py-2">
          <span className="text-gray-500">Discount (%) </span>
          <span>{currencyFormatter(0)}</span>
        </div>
      </div>
      <div className="relative w-full bg-gray-50 rounded-md p-2">
        <FloatingInput
          formik={formik}
          name="promoCode"
          type="text"
          label="Enter promo code"
          className="pr-32 " // space for button
        />

        <Button
          type="button"
          className="
      absolute top-1/2 -translate-y-1/2
      right-3              // margin-right from the edge
      h-10 px-4 rounded-xl
    "
        >
          Confirm
        </Button>
      </div>
      <div className="divide-y divide-gray-300 text-sm">
        <div className="flex justify-between py-2">
          <span className="text-gray-500 flex gap-1 items-center justify-center">
            {" "}
            <MapPin size={15} className="text-primary" /> Shipping (Delivery
            Fee)
          </span>
          <span className="text-warning">Pending pickup address</span>
        </div>

        <div className="flex justify-between py-2 font-semibold border-b">
          <span>Total Due</span>
          <span>{currencyFormatter(7600)}</span>
        </div>
      </div>

      <p className="flex gap-1 text-sm bg-blue-50 rounded-md p-1  items-center">
        <CautionIcon />
        <span className="text-gray-500">
          Your order will arrive within 2-3 working days.
        </span>
      </p>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] md:hidden">
        <div className="max-w-md mx-auto">
          <Link href="/checkout/checkout-success">
            <Button className="bg-primary rounded-xl p-7 text-white font-semibold w-full shadow-lg active:scale-[0.98] transition-transform">
              Pay {currencyFormatter(7600)}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPageMobile;
