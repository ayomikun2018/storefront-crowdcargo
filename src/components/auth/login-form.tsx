"use client";
import { FormVariants } from "@/components/auth/auth-sheet";
import { DoorLockIcon, SmsIcon } from "@/components/crowdcargo-icons";
import FloatingInput from "@/components/elements/floating-input";
import { Button } from "@/components/ui/button";
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, FC, SetStateAction } from "react";
import * as Yup from "yup";

const loginValidationSchema = Yup.object({
  userId: Yup.string().required("User ID is required").default(""),
  password: Yup.string().required("Password is required").default(""),
});

interface LoginFormProps {
  setActiveForm: Dispatch<SetStateAction<FormVariants>>;
}

const LoginForm: FC<LoginFormProps> = ({ setActiveForm }) => {
  const formik = useFormik({
    initialValues: loginValidationSchema.getDefault(),
    validationSchema: loginValidationSchema,
    onSubmit: (data) => {
      console.log(data);
    },
  });
  const router = useRouter();

  return (
    <>
      <SheetHeader className="pt-28">
        <SheetTitle className="hidden">Login</SheetTitle>
        <hr />
      </SheetHeader>
      <div className="space-y-5 px-4">
        <h2 className="text-2xl font-semibold">Welcome Back</h2>
        <SheetDescription>
          To Login, input the details you signed up with
        </SheetDescription>
        <div className="flex gap-3 items-center">
          <Image
            src="https://dummyimage.com/80x80"
            alt="store profile image"
            height={80}
            width={80}
            className="size-10 rounded-full"
          />
          <span className="text-xl">Balero Stores</span>
        </div>

        <div className="space-y-2">
          <FloatingInput
            formik={formik}
            name="userId"
            type="text"
            label="User ID"
            startContent={<SmsIcon className="size-4" />}
          />
          <FloatingInput
            label="Password"
            formik={formik}
            name="password"
            startContent={<DoorLockIcon className="size-4" />}
            type="password"
          />
          <p className="flex justify-end">
            <button
              className="text-primary text-xs"
              type="button"
              onClick={() => setActiveForm("reset-password")}
            >
              Forgot Password
            </button>
          </p>
        </div>
        <div className="space-y-3">
          <Button
            className="w-full h-11 rounded-2xl"
            type="button"
            onClick={() => router.push("/portal/orders")}
          >
            Login
          </Button>
          <Button
            className="bg-transparent hover:bg-blue-100 text-primary h-11 rounded-2xl w-full"
            type="button"
            onClick={() => setActiveForm("sign-up")}
          >
            Sign up
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
