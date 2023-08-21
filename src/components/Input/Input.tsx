"use client";
import { FC, InputHTMLAttributes } from "react";
import { Control, useController } from "react-hook-form";

type Props = {
  label: string;
  control: Control<any>;
  name: string;
} & InputHTMLAttributes<HTMLElement>;

export const Input: FC<Props> = ({ label, control, name, ...other }) => {
  const {
    field,
    formState: { errors },
  } = useController({ control, name, rules: { required: "*Required" } });
  return (
    <label className="flex flex-col capitalize">
      {label}
      <input
        {...other}
        onChange={field.onChange}
        className="form-input text-black rounded p-3 mt-2"
      />
      {errors[name]?.message && <p className="text-error">{errors[name]?.message?.toString()}</p>}
    </label>
  );
};
