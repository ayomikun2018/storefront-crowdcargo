import * as React from "react";

function MapPinIcon(props: CrowdCargoIconProps) {
  return (
    <svg
      width={13}
      height={14}
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.19 6.217c0 .932-.753 1.69-1.69 1.69-.938 0-1.69-.753-1.69-1.69 0-.937.758-1.69 1.69-1.69.184 0 .362.027.525.082"
        stroke="#212121"
        strokeOpacity={0.6}
        strokeWidth={0.8125}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.239 2.962c2.367-2.226 6.955-1.462 7.8 2.28.623 2.753-1.09 5.082-2.59 6.523a2.813 2.813 0 01-3.905 0C3.05 10.318 1.332 7.989 1.96 5.237"
        stroke="#212121"
        strokeOpacity={0.6}
        strokeWidth={0.8125}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default MapPinIcon;
