import { cn } from "../Utils/utils";
import React from "react";

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("", className)}
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.75 4.00004L4.58 6.83004L10.25 1.17004"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default CheckIcon;
