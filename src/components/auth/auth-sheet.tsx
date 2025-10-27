"use client";
import LoginForm from "@/components/auth/login-form";
import NewPasswordForm from "@/components/auth/new-password-form";
import ResetCodeForm from "@/components/auth/reset-code-form";
import ResetPasswordForm from "@/components/auth/reset-password-form";
import SignUpForm from "@/components/auth/sign-up-form";
import { Sheet, SheetContent } from "@/components/ui/sheet";

import { Dispatch, FC, SetStateAction, useState } from "react";

interface AuthSheetProps {
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export type FormVariants =
  | "login"
  | "sign-up"
  | "reset-password"
  | "reset-code"
  | "new-password";

const LogInSheet: FC<AuthSheetProps> = ({ isOpen, setIsOpen }) => {
  const [activeForm, setActiveForm] = useState<FormVariants>("login");
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent>
        {(() => {
          switch (activeForm) {
            case "login":
              return <LoginForm setActiveForm={setActiveForm} />;
            case "sign-up":
              return <SignUpForm setActiveForm={setActiveForm} />;
            case "reset-password":
              return <ResetPasswordForm setActiveForm={setActiveForm} />;
            case "reset-code":
              return <ResetCodeForm setActiveForm={setActiveForm} />;
            case "new-password":
              return <NewPasswordForm setActiveForm={setActiveForm} />;
          }
        })()}
      </SheetContent>
    </Sheet>
  );
};

export default LogInSheet;
