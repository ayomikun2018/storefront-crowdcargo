import * as React from "react";

function PriceTagIon(props: CrowdCargoIconProps) {
  return (
    <svg
      width={12}
      height={13}
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.915 4.983L7.65 2.718a2.375 2.375 0 00-1.8-.695l-2.5.12c-1 .045-1.795.84-1.845 1.835l-.12 2.5c-.03.67.22 1.325.695 1.8l2.265 2.265c.93.93 2.44.93 3.375 0l2.195-2.195a2.37 2.37 0 000-3.365zM4.75 6.823c-.79 0-1.44-.645-1.44-1.44 0-.795.65-1.44 1.44-1.44.79 0 1.44.645 1.44 1.44 0 .795-.65 1.44-1.44 1.44zm4.015.575l-2 2a.37.37 0 01-.265.11.37.37 0 01-.265-.11.377.377 0 010-.53l2-2a.377.377 0 01.53 0 .377.377 0 010 .53z"
        fill="currentColor"
      />
    </svg>
  );
}

export default PriceTagIon;
