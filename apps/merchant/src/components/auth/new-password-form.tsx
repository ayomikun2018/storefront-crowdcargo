"use client";
import { FormVariants } from "@/components/auth/auth-sheet";
import FloatingInput from "@/components/elements/floating-input";
import {
  Button,
  DoorLockIcon,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@repo/ui";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { Dispatch, FC, SetStateAction } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  confirmPassword: Yup.string().required("Please confirm password").default(""),
  password: Yup.string().required("Password is required").default(""),
});

interface NewPasswordFormProps {
  setActiveForm: Dispatch<SetStateAction<FormVariants>>;
}

const NewPasswordForm: FC<NewPasswordFormProps> = ({ setActiveForm }) => {
  const formik = useFormik({
    initialValues: validationSchema.getDefault(),
    validationSchema,
    onSubmit: (data) => {
      console.log(data);
    },
  });

  const router = useRouter();

  return (
    <>
      <SheetHeader>
        <SheetTitle className="text-xl">New Password</SheetTitle>
        <SheetDescription>Create a new password</SheetDescription>
        <hr />
      </SheetHeader>
      <div className="space-y-10 px-4">
        <div className="space-y-2">
          <FloatingInput
            label="Password"
            formik={formik}
            name="password"
            startContent={<DoorLockIcon className="size-4" />}
            type="password"
          />
          <FloatingInput
            label="Confirm Password"
            formik={formik}
            name="confirmPassword"
            startContent={<DoorLockIcon className="size-4" />}
            type="password"
          />
        </div>
        <div className="space-y-3">
          <Button
            className="w-full h-11 rounded-2xl"
            type="button"
            onClick={() => router.push("/portal")}
          >
            Done
          </Button>
        </div>
      </div>
    </>
  );
};

export default NewPasswordForm;
