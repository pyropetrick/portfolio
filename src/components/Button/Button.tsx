"use client"
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

type Props = ButtonHTMLAttributes<HTMLElement>;

export const ContainedButton: FC<PropsWithChildren<Props>> = ({
  className,
  children,
  ...other
}) => (
  <button
    {...other}
    className={`py-3 px-7 rounded-full bg-primary text-white hover:bg-grey hover:text-primary ease-in-out duration-300 ${className}`}
  >
    {children}
  </button>
);

export const OutlinedButton: FC<PropsWithChildren<Props>> = ({ className, children, ...other }) => (
  <button {...other} className={`py-3 px-7 rounded-full border-2 border-primary ${className}`}>
    {children}
  </button>
);
