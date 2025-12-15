"use client";
import { FormVariants } from "@/components/auth/auth-sheet";
import {
  Badge,
  Button,
  CautionIcon,
  UserIcon,
  DoorLockIcon,
  SheetHeader,
  SheetTitle,
  SmsIcon,
} from "@repo/ui";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react";
import FloatingInput from "../elements/floating-input";

interface SignUpFormProps {
  setActiveForm: Dispatch<SetStateAction<FormVariants>>;
}

const SignUpForm: FC<SignUpFormProps> = ({ setActiveForm }) => {
  return (
    <>
      <SheetHeader className="pt-10">
        <SheetTitle className="text-2xl">Sign Up</SheetTitle>
        <p className="text-muted-foreground text-sm">Let's get you started</p>
        <hr />
      </SheetHeader>
      <p className="text-muted-foreground text-sm px-4">
        Fill up the information to get started
      </p>
      <div className="space-y-2 px-4">
        <form>
          <div className="space-y-2">
            <FloatingInput
              // formik={formik}
              name="userId"
              type="text"
              label="First Name"
              startContent={<UserIcon className="size-4" />}
            />
            <FloatingInput
              label="Last Name"
              // formik={formik}
              name="password"
              startContent={<UserIcon className="size-4" />}
              type="text"
            />
            <FloatingInput
              label="Email/Phone"
              // formik={formik}
              name="password"
              startContent={<SmsIcon className="size-4" />}
              type="text"
            />{" "}
            <FloatingInput
              label="Password"
              // formik={formik}
              name="password"
              startContent={<DoorLockIcon className="size-4" />}
              type="password"
            />
            <FloatingInput
              label="Confirm Password"
              // formik={formik}
              name="confirmPassword"
              startContent={<DoorLockIcon className="size-4" />}
              type="password"
            />
           
          </div>
        </form>

        <div className="space-y-3 pt-8">
          <Button
            className="w-full h-11 rounded-2xl"
            type="button"
            onClick={() => setActiveForm("login")}
          >
            Sign up
          </Button>
          <p
            onClick={() => setActiveForm("login")}
            className="text-primary underline text-center text-sm  cursor-pointer "
          >
            Already have an account? Login
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
