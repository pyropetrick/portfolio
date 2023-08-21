"use client";
import { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

type Props = {
  target: "modal";
};

const Portal: FC<PropsWithChildren<Props>> = ({ children, target }) => {
  const container = document.getElementById(target) as HTMLElement;
  return createPortal(children, container);
};

export default Portal;
