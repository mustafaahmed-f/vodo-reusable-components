import { iconsProps } from "@/Utils/icons.types";
import React from "react";
const CircleIconSVG = ({
  width = 1792,
  height = 1792,
  stroke = "#2B2F38",
}: iconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      id="circle"
      stroke={stroke}
    >
      <path d="M896 256q-130 0-248.5 51t-204 136.5-136.5 204T256 896t51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5-51-248.5-136.5-204-204-136.5T896 256zm768 640q0 209-103 385.5T1281.5 1561 896 1664t-385.5-103T231 1281.5 128 896t103-385.5T510.5 231 896 128t385.5 103T1561 510.5 1664 896z"></path>
    </svg>
  );
};

export default CircleIconSVG;
