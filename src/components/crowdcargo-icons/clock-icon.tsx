import * as React from "react";

function ClockIcon(props: CrowdCargoIconProps) {
  return (
    <svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 6c0 2.76-2.24 5-5 5S1 8.76 1 6s2.24-5 5-5 5 2.24 5 5z"
        stroke="#fff"
        strokeWidth={0.857143}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.855 7.589l-1.55-.925c-.27-.16-.49-.545-.49-.86v-2.05"
        stroke="#fff"
        strokeWidth={0.857143}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ClockIcon;
