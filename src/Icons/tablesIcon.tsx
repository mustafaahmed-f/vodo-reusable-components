import React from "react";
const TablesIcon = ({ fill = "black", width = 25, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5 4.5H3.5C3.30109 4.5 3.11032 4.57902 2.96967 4.71967C2.82902 4.86032 2.75 5.05109 2.75 5.25V18C2.75 18.3978 2.90804 18.7794 3.18934 19.0607C3.47064 19.342 3.85218 19.5 4.25 19.5H20.75C21.1478 19.5 21.5294 19.342 21.8107 19.0607C22.092 18.7794 22.25 18.3978 22.25 18V5.25C22.25 5.05109 22.171 4.86032 22.0303 4.71967C21.8897 4.57902 21.6989 4.5 21.5 4.5ZM4.25 10.5H8V13.5H4.25V10.5ZM9.5 10.5H20.75V13.5H9.5V10.5ZM20.75 6V9H4.25V6H20.75ZM4.25 15H8V18H4.25V15ZM20.75 18H9.5V15H20.75V18Z"
        fill={fill}
      />
    </svg>
  );
};

export default TablesIcon;
