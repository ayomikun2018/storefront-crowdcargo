import * as React from "react";

function XCircleIcon(props: CrowdCargoIconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.24 14.4a6.733 6.733 0 01-6.728-6.727A6.733 6.733 0 018.239.945a6.733 6.733 0 016.728 6.728A6.733 6.733 0 018.239 14.4zm0-12.516a5.796 5.796 0 00-5.79 5.789 5.796 5.796 0 005.79 5.789 5.796 5.796 0 005.788-5.79 5.796 5.796 0 00-5.789-5.788z"
        fill="currentColor"
      />
      <path
        d="M6.468 9.913a.464.464 0 01-.331-.138.472.472 0 010-.663L9.679 5.57a.472.472 0 01.663 0 .472.472 0 010 .663L6.8 9.775a.454.454 0 01-.332.138z"
        fill="currentColor"
      />
      <path
        d="M10.01 9.913a.464.464 0 01-.331-.138L6.137 6.233a.472.472 0 010-.663.472.472 0 01.663 0l3.542 3.542a.472.472 0 010 .663.464.464 0 01-.332.138z"
        fill="currentColor"
      />
    </svg>
  );
}

export default XCircleIcon;
