"use client";
import { FormVariants } from "@/components/auth/auth-sheet";
import {
  Button,
  InputOTP,
  InputOTPSlot,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@repo/ui";
import { Dispatch, FC, SetStateAction } from "react";

interface ResetCodeProps {
  setActiveForm: Dispatch<SetStateAction<FormVariants>>;
}

const ResetCodeForm: FC<ResetCodeProps> = ({ setActiveForm }) => {
  return (
    <>
      <SheetHeader>
        <SheetTitle className="text-xl">Reset Code</SheetTitle>
        <SheetDescription>
          Please enter the 6 digit code sent to emm******@gmail.com
        </SheetDescription>
        <hr />
      </SheetHeader>
      <div className="space-y-10 px-4">
        <div className="space-y-5">
          <InputOTP
            maxLength={6}
            containerClassName="gap-2 flex mx-auto items-center justify-center"
            className=""
          >
            <InputOTPSlot index={0} className="!rounded-lg size-10" />
            <InputOTPSlot index={1} className="!rounded-lg border-l size-10" />
            <InputOTPSlot index={2} className="!rounded-lg border-l size-10" />
            <InputOTPSlot index={3} className="!rounded-lg border-l size-10" />
            <InputOTPSlot index={4} className="!rounded-lg border-l size-10" />
            <InputOTPSlot index={5} className="!rounded-lg border-l size-10" />
          </InputOTP>

          <p className="text-xs text-gray-500 text-center">
            Did&apos;t receive the code?{" "}
            <button type="button">Resend Code in 00:23s</button>
          </p>
        </div>

        <div className="flex gap-2 mt-">
          <Button
            className="!bg-blue-100 h-11 rounded-2xl w-full flex-1 text-foreground"
            type="button"
            onClick={() => setActiveForm("reset-password")}
          >
            Back
          </Button>
          <Button
            className="w-full h-11 rounded-2xl flex-2"
            type="button"
            onClick={() => setActiveForm("new-password")}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default ResetCodeForm;
