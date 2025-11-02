"use client";
import { PlusCircleIcon } from "@/components/crowdcargo-icons";
import FloatingInput, {
  FloatingSelect,
} from "@/components/elements/floating-input";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
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

const DeliveryAddress = () => {
  const formik = useFormik({
    initialValues: validationSchema.getDefault(),
    validationSchema,
    onSubmit: (values) => console.log(values),
  });
  const [editMode, setEditMode] = useState(false);
  return (
    <div className="p-6">
      <div className="flex justify-end py-4 text-sm">
        <button
          className="flex gap-2 items-center text-primary underline"
          onClick={() => setEditMode(true)}
        >
          <PlusCircleIcon className="size-4" /> Edit Delivery Address
        </button>
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
        {editMode && (
          <>
            <div />
            <Button type="submit" className="h-14 rounded-3xl text-lg">
              Save
            </Button>
          </>
        )}
      </form>
    </div>
  );
};

export default DeliveryAddress;
