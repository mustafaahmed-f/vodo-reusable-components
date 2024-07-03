import React from "react";
const AttendanceIcon = ({ fill = "#2B2F38", width = 22, height = 16 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 6.82484C16.66 6.82484 17.99 5.41546 17.99 3.6695C17.99 1.92355 16.66 0.51416 15 0.51416C13.34 0.51416 12 1.92355 12 3.6695C12 5.41546 13.34 6.82484 15 6.82484ZM7 6.82484C8.66 6.82484 9.99 5.41546 9.99 3.6695C9.99 1.92355 8.66 0.51416 7 0.51416C5.34 0.51416 4 1.92355 4 3.6695C4 5.41546 5.34 6.82484 7 6.82484ZM7 8.9284C4.67 8.9284 0 10.159 0 12.6096V14.1873C0 14.7658 0.45 15.2391 1 15.2391H13C13.55 15.2391 14 14.7658 14 14.1873V12.6096C14 10.159 9.33 8.9284 7 8.9284ZM15 8.9284C14.71 8.9284 14.38 8.94944 14.03 8.98099C14.05 8.99151 14.06 9.01254 14.07 9.02306C15.21 9.89604 16 11.0635 16 12.6096V14.1873C16 14.5554 15.93 14.913 15.82 15.2391H21C21.55 15.2391 22 14.7658 22 14.1873V12.6096C22 10.159 17.33 8.9284 15 8.9284Z"
        fill={fill}
        fillOpacity="0.55"
      />
    </svg>
  );
};

export default AttendanceIcon;
