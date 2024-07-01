import { cn } from "../Utils/utils";
import React from "react";

interface Logo {
  className?: string;
}
const LogoIcon: React.FC<Logo> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <svg
        width="124"
        height="31"
        viewBox="0 0 124 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect
          x="0.221191"
          y="0.0249023"
          width="123.558"
          height="30.4502"
          fill="url(#pattern0_655_156)"
        />
        <defs>
          <pattern
            id="pattern0_655_156"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_655_156"
              transform="scale(0.00473934 0.0192308)"
            />
          </pattern>
          <image
            id="image0_655_156"
            width="211"
            height="52"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
  );
};

export default LogoIcon;
