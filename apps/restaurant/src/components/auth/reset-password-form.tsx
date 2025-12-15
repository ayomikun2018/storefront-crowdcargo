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
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  DoorLockIcon,
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
      <SheetHeader className="pt-10">
        <SheetTitle className="text-2xl">Reset Password</SheetTitle>
        <p className="text-muted-foreground text-sm">
          {" "}
          Select where you want the reset code to be sent to
        </p>
        <hr />
      </SheetHeader>

      <div className="space-y-10 px-4">
        <div className="flex flex-col justify-between py-4 ">
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="flex justify-between gap-2 p-0 w-full bg-transparent">
              <div className="w-1/2"></div>
              <div className="flex self-end justify-end bg-blue-100 p-1 rounded-2xl w-2/3 gap-2">
                <TabsTrigger
                  value="email"
                  className="flex gap-1 rounded-3xl px-2 h-8 text-sm border border-transparent text-muted-foreground data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-secondary"
                >
                  Email Address
                </TabsTrigger>

                <TabsTrigger
                  value="phone"
                  className="flex gap-1 rounded-3xl px-2 h-8 text-sm border border-transparent text-muted-foreground data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-secondary"
                >
                  Phone Number
                </TabsTrigger>
              </div>
            </TabsList>

            <TabsContent value="email" className="mt-6 space-y-3">
              <FloatingInput
                type="email"
                label="Enter your email address"
                startContent={<DoorLockIcon className="size-4" />}
                formik={formik}
                name="email"
              />
            </TabsContent>

            <TabsContent value="phone" className="mt-6 space-y-3">
              <FloatingInput
                type="text"
                label="Enter your phone number"
                startContent={<DoorLockIcon className="size-4" />}
                formik={formik}
                name="phoneNumber"
              />
            </TabsContent>
          </Tabs>
        </div>
        <div className="flex gap-2 ">
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
