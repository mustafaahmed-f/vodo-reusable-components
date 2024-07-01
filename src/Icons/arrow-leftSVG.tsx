import { cn } from "../Utils/utils";
import React from "react";

interface ArrowLeftProps {
  className?: string;
}
const ArrowLeftIcon: React.FC<ArrowLeftProps> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.95153 7.00001C6.95153 7.48458 6.76462 7.96915 6.39773 8.33604L1.88434 12.8494C1.68359 13.0502 1.35131 13.0502 1.15056 12.8494C0.949812 12.6487 0.949812 12.3164 1.15056 12.1157L5.66395 7.60226C5.99623 7.26998 5.99623 6.73004 5.66395 6.39776L1.15056 1.88434C0.949812 1.68359 0.949812 1.35131 1.15056 1.15056C1.35131 0.949813 1.68359 0.949813 1.88434 1.15056L6.39773 5.66398C6.76462 6.03087 6.95153 6.51544 6.95153 7.00001Z"
          fill="#2B2F38"
          fillOpacity="0.5"
        />
        <path
          d="M2.02576 12.9909L1.88517 12.8503L2.02576 12.9909L6.53915 8.47746C6.94483 8.07179 7.15153 7.53579 7.15153 7.00001C7.15153 6.46423 6.94483 5.92823 6.53915 5.52256L2.02576 1.00914C1.74691 0.730287 1.288 0.730287 1.00914 1.00914C0.730286 1.288 0.730286 1.74691 1.00914 2.02576L5.52253 6.53918C5.7767 6.79335 5.7767 7.20667 5.52253 7.46084L1.00914 11.9742C0.730286 12.2531 0.730286 12.712 1.00914 12.9909C1.288 13.2697 1.74691 13.2697 2.02576 12.9909Z"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeWidth="0.4"
        />
      </svg>
    </div>
  );
};

export default ArrowLeftIcon;
