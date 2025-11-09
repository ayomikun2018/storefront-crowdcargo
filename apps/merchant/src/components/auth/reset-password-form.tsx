"use client";
import { FormVariants } from "@/components/auth/auth-sheet";
import FloatingInput from "@/components/elements/floating-input";
import {
  Button,
  RadioGroup,
  RadioGroupItem,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@repo/ui";
import { useFormik } from "formik";
import { Dispatch, FC, SetStateAction, useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email().optional().default(""),
  phoneNumber: Yup.string().optional().default(""),
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
  const LABEL_CLASSNAME = "";
  const [selectedOption, setSelectedOption] = useState("email-radio");
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
          <RadioGroup
            defaultValue="email"
            value={selectedOption}
            onValueChange={setSelectedOption}
          >
            <FloatingInput
              type="email"
              label="Email Address"
              formik={formik}
              name="email"
              inputProps={{
                onFocus: () => setSelectedOption("email-radio"),
              }}
              endContent={<RadioGroupItem value="email-radio" />}
            />
            <FloatingInput
              type="text"
              label="Phone Number"
              formik={formik}
              name="phoneNumber"
              inputProps={{
                onFocus: () => setSelectedOption("phoneNumber-radio"),
              }}
              endContent={<RadioGroupItem value="phoneNumber-radio" />}
            />
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
