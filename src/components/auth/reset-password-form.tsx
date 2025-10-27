"use client";
import { FormVariants } from "@/components/auth/auth-sheet";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useFormik } from "formik";
import { Dispatch, FC, SetStateAction } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email().required("Email is required").default(""),
  phoneNumber: Yup.string().required("Phone number is required").default(""),
});

interface ResetPasswordFormProps {
  setActiveForm: Dispatch<SetStateAction<FormVariants>>;
}

const ResetPasswordForm: FC<ResetPasswordFormProps> = ({ setActiveForm }) => {
  const formik = useFormik({
    initialValues: validationSchema.getDefault(),
    validationSchema: validationSchema,
    onSubmit: (data) => {
      console.log(data);
    },
  });
  const LABEL_CLASSNAME =
    "flex items-center gap-3 w-full bg-gray-100 rounded-2xl p-4 text-sm has-[button[data-state=checked]]:bg-blue-50 has-[button[data-state=checked]]:border has-[button[data-state=checked]]:border-primary cursor-pointer";
  return (
    <>
      <SheetHeader>
        <SheetTitle className="text-xl">Reset Password</SheetTitle>
        <SheetDescription>
          Select where you want the reset code to be sent to
        </SheetDescription>
        <hr />
      </SheetHeader>
      <div className="space-y-10 px-4">
        <div className="space-y-2">
          <RadioGroup defaultValue="email">
            <label className={LABEL_CLASSNAME}>
              <div className="space-y-1 flex-grow">
                <p className="font-semibold">Email Address</p>
                <p className="text-xs text-gray-400">jsaf****gmail.com</p>
              </div>
              <RadioGroupItem value="email" />
            </label>
            <label className={LABEL_CLASSNAME}>
              <div className="space-y-1 flex-grow">
                <p className="font-semibold">Phone Number</p>
                <p className="text-xs text-gray-400">jsaf****gmail.com</p>
              </div>
              <RadioGroupItem value="phoneNumber" />
            </label>
          </RadioGroup>
        </div>

        <div className="flex gap-2 mt-">
          <Button
            className="!bg-blue-100 h-11 rounded-2xl w-full flex-1 text-foreground"
            type="button"
            onClick={() => setActiveForm("login")}
          >
            Back
          </Button>
          <Button
            className="w-full h-11 rounded-2xl flex-2"
            type="button"
            onClick={() => setActiveForm("reset-code")}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordForm;
