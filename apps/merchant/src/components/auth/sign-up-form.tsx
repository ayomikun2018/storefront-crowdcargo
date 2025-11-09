"use client";
import { FormVariants } from "@/components/auth/auth-sheet";
import {
  Badge,
  Button,
  CautionIcon,
  CopyIcon,
  SheetHeader,
  SheetTitle,
} from "@repo/ui";
import Image from "next/image";
import { Dispatch, FC, SetStateAction } from "react";

interface SignUpFormProps {
  setActiveForm: Dispatch<SetStateAction<FormVariants>>;
}

const SignUpForm: FC<SignUpFormProps> = ({ setActiveForm }) => {
  return (
    <>
      <SheetHeader className="pt-28">
        <SheetTitle className="hidden">Sign Up</SheetTitle>
        <hr />
      </SheetHeader>
      <div className="space-y-5 px-4">
        <div className="space-y-3 text-center">
          <Image
            src="https://dummyimage.com/500x200"
            alt="sign up illustration"
            height={200}
            width={500}
          />
          <h2 className="text-xl font-semibold">
            Sign up with the CrowdCargo app
          </h2>
          <p className="text-gray-400 text-sm">
            Vendor Code{" "}
            <span className="text-primary inline-flex gap-1 items-center">
              6Y5ds9 <CopyIcon className="size-4" />
            </span>
          </p>
        </div>
        <Badge className="bg-blue-50 text-foreground ">
          <CautionIcon className="!size-7" />
          <span className="max-w-full text-wrap">
            Continue shopping as guest or enter the vendor code on the
            CrowdCargo to app to find this vendor.
          </span>
        </Badge>

        <div className="space-y-3">
          <Button
            className="w-full h-11 rounded-2xl"
            type="button"
            onClick={() => setActiveForm("login")}
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
