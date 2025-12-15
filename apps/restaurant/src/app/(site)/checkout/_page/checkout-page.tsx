"use client";
import OrderSuccessModal from "@/components/checkout/order-success-modal";
import FloatingInput, {
  FloatingSelect,
} from "@/components/elements/floating-input";
import { currencyFormatter } from "@/lib/utils";
import {
  Badge,
  BoxIcon,
  Button,
  CartIcon,
  CautionIcon,
  ChevronLeftIcon,
  EditIcon,
  useSidebar,
} from "@repo/ui";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@repo/ui";
import { useFormik } from "formik";
import { ArrowRight } from "lucide-react";
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
  country: Yup.string().required("Country is required").default("Nigeria"),
  state: Yup.string().required("State is required").default(""),
  lga: Yup.string().required("LGA is required").default(""),
  area: Yup.string().required("Area is required").default(""),
  dropOffAddress: Yup.string()
    .required("Drop off address is required")
    .default(""),
});

const CheckoutPage = () => {
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);

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

    if (!isSaved) {
      setSavedData(formik.values);
      setIsSaved(true);
    } else {
      setSavedData(formik.values);
    }
  };

  return (
    <div className="relative @container">
      <div className="flex flex-wrap gap-6">
        <div className="space-y-4 md:flex-2">
          <div className="flex justify-between py-4 border-b border-gray-200">
            <h2 className="inline-flex gap-2 items-center text-2xl font-semibold">
              <Link href="/">
                <ChevronLeftIcon className="size-5" />
              </Link>
              Checkout
              <Badge className="bg-blue-50 text-gray-600 py-1.5 text-sm">
                Cart Total{" "}
                <span className="text-primary">
                  - {currencyFormatter(7000)}
                </span>
              </Badge>
            </h2>

            <Badge className="bg-blue-50 text-gray-600 text-sm">
              Total Items - (2)
              <Button
                className="!bg-blue-200 flex gap-1 rounded-3xl px-1 h-5 text-primary text-sm"
                onClick={() => setOpenCartSidebar(true)}
              >
                <EditIcon className="size-4" /> Edit Cart
              </Button>
            </Badge>
          </div>

          <div className="space-y-1 text-gray-500">
            <h3 className="uppercase font-semibold">Delivery Detail</h3>
            <p className="text-sm">
              Add a delivery address to make sure your items get to the right
              place — fast, safe, and hassle-free.
            </p>
          </div>

          <form className="grid md:grid-cols-2 gap-4" id="checkout-form">
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

            <FloatingSelect
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
            />

            <FloatingInput
              formik={formik}
              type="text"
              label="Drop-Off Address"
              name="dropOffAddress"
              className="md:col-span-2"
            />
          </form>

          <Button
            onClick={handleSave}
            className="w-1/2 h-12 mt-2 bg-primary text-white border-3 border-secondary"
            disabled={!formik.isValid}
          >
            {isSaved ? "Edit" : "Save"}
          </Button>

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

        <div className="space-y-4 md:flex-1 min-w-56 block overflow-visible">
          <div className="flex flex-col justify-between py-4 border-b border-gray-200">
            <Tabs defaultValue="delivery" className="w-full">
              <TabsList className="flex justify-between gap-2 p-0 w-full bg-transparent">
                <span>
                  <h2 className="text-2xl font-semibold text-gray-500">
                    Delivery Method
                  </h2>
                </span>
                <div className="flex self-end justify-end bg-blue-100 p-1 rounded-2xl w-1/2 gap-2">
                  <TabsTrigger
                    value="delivery"
                    className="flex gap-1 rounded-3xl px-2 h-8 text-sm border border-transparent text-muted-foreground data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-secondary"
                  >
                    Delivery
                  </TabsTrigger>

                  <TabsTrigger
                    value="pickup"
                    className="flex gap-1 rounded-3xl px-2 h-8 text-sm border border-transparent text-muted-foreground data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-secondary"
                  >
                    Store Pickup
                  </TabsTrigger>
                </div>
              </TabsList>

              <TabsContent value="delivery" className="mt-3 space-y-3">
                {!isSaved && (
                  <>
                    <Image
                      alt="deliver-detail-illustration"
                      src="/assets/delivery-details-illustration.svg"
                      height={300}
                      width={500}
                    />
                    <p className="font-semibold text-xl text-center">
                      Delivery details will appear here
                    </p>
                  </>
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
                <div className="space-y-2.5 p-4 bg-secondary text-white border-5 border-primary rounded-md">
                  <p className="text-sm">Store Details</p>

                  <div className="space-y-1 pb-3">
                    <p className="text-lg font-semibold leading-4">
                      4, Anjorin Ladipo street, Yaba Lagos
                    </p>
                    <p className="text-gray-500">+234 905 000 0000</p>
                  </div>

                  <span className="p-0.5 rounded-md flex gap-2 items-center w-full bg-warning pl-2">
                    Store closes at 5:00pm Today
                  </span>
                </div>
              </TabsContent>
            </Tabs>
          </div>

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

          {/* <FloatingInput
            formik={formik}
            name="promoCode"
            type="text"
            label="Enter promo code to get a discount"
          /> */}

          <div className="relative w-full">
            <FloatingInput
              formik={formik}
              name="promoCode"
              type="text"
              label="Enter promo code to get a discount"
              className="pr-32 w-full" // space for button
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
              <span>Order Total</span>
              <span>{currencyFormatter(7600)}</span>
            </div>

            <div className="flex justify-between py-2">
              <span className="text-gray-500">Shipping (Delivery)</span>
              <span className="text-warning">Pending pickup address</span>
            </div>

            <div className="flex justify-between py-2 font-semibold">
              <span>Total Due</span>
              <span>{currencyFormatter(7600)}</span>
            </div>
          </div>

          <p className="flex gap-1 text-xs">
            <CautionIcon />
            <span className="text-gray-500">
              Your order will arrive within 2-3 days.
            </span>
          </p>
        </div>
      </div>

      <div className="space-y-2 pt-4 mb-2 bottom-0 w-full left-full @3xl:w-1/3 sticky self-start">
        <Button
          className="w-full h-12 rounded-none text-md"
          type="button"
          onClick={() => setShowOrderSuccess(true)}
        >
          Pay {currencyFormatter(7600)}
        </Button>
      </div>

      <OrderSuccessModal
        isOpen={showOrderSuccess}
        setIsOpen={setShowOrderSuccess}
      />
    </div>
  );
};

export default CheckoutPage;
