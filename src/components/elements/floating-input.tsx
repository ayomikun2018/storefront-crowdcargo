"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { FormikProps } from "formik";
import { ComponentProps, ReactNode, useState } from "react";

interface FloatingInputProps<T> {
  label?: string;
  className?: string;
  inputProps: ComponentProps<"input">;
  name: keyof T;
  formik?: FormikProps<T>;
}

const FloatingInput = <T,>({
  label,
  className,
  inputProps: {
    className: inputClassName,
    onChange,
    onBlur,
    value,
    ...restInputProps
  },
  formik,
  name,
}: FloatingInputProps<T>) => {
  const error = formik
    ? formik.touched[name as keyof T] && formik.errors[name as keyof T]
    : null;
  const formikValue = formik?.values[name as keyof T];
  const [localValue, setLocalValue] = useState("");
  return (
    <label className={cn("relative block w-full space-y-1", className)}>
      <Input
        className={cn(
          "h-16 peer w-full rounded-3xl focus:border focus:!border-primary !ring-0 bg-gray-50 focus:bg-blue-50",
          inputClassName,
          error && "!bg-red-50 border-destructive focus:!border-destructive"
        )}
        onChange={(e) => {
          formik?.handleChange?.(e);
          setLocalValue(e.target.value);
          onChange?.(e);
        }}
        onBlur={(e) => {
          formik?.handleBlur?.(e);
          onBlur?.(e);
        }}
        value={(formikValue as string) ?? value}
        {...restInputProps}
        name={name as string}
      />
      {label && (
        <span
          className={cn(
            "text-gray-400 transition-all duration-200 absolute left-4 text-sm top-6 peer-focus:top-1.5 peer-focus:text-xs",
            localValue || formikValue ? "top-1.5 text-xs" : ""
          )}
        >
          {label}
        </span>
      )}
      {error && (
        <p className="text-destructive text-sm pl-3">{error as ReactNode}</p>
      )}
    </label>
  );
};

export default FloatingInput;

interface FloatingSelectProps<T> {
  label?: string;
  className?: string;
  placeholder?: string;
  selectClassName?: string;
  options: { label: string; value: string }[];
  name: keyof T;
  onChange?: (value: string) => void;
  formik?: FormikProps<T>;
}

export const FloatingSelect = <T,>({
  label,
  className,
  selectClassName,
  onChange,
  placeholder,
  options,
  name,
  formik,
}: FloatingSelectProps<T>) => {
  const error = formik
    ? formik.touched[name as keyof T] && formik.errors[name as keyof T]
    : null;
  const formikValue = formik?.values[name as keyof T];
  const [localValue, setLocalValue] = useState("");
  return (
    <label className={cn("relative block w-full", className)}>
      <Select
        onValueChange={(value) => {
          formik?.setFieldValue?.(name as string, value);
          setLocalValue(value);
          onChange?.(value);
        }}
        value={formikValue as string}
        name={name as string}
      >
        <SelectTrigger
          className={cn(
            "!h-16 peer w-full rounded-3xl focus:border focus:!border-primary !ring-0 bg-gray-50 focus:bg-blue-50",
            selectClassName,
            error && "!bg-red-50 border-destructive focus:!border-destructive"
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((each, index) => (
              <SelectItem key={index} value={each.value}>
                {each.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {label && (
        <span
          className={cn(
            "text-gray-400 transition-all duration-200 absolute left-4 text-sm top-6 peer-focus:top-1.5 peer-focus:text-xs",
            localValue || formikValue ? "top-1.5 text-xs" : ""
          )}
        >
          {label}
        </span>
      )}
      {error && (
        <p className="text-destructive text-sm pl-3">{error as ReactNode}</p>
      )}
    </label>
  );
};
