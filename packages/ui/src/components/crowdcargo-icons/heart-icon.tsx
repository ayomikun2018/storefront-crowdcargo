import { CrowdCargoIconProps } from "../../types";

export function HeartIcon(props: CrowdCargoIconProps) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.517 17.34c-.284.1-.75.1-1.034 0-2.417-.825-7.817-4.266-7.817-10.1 0-2.575 2.075-4.658 4.634-4.658 1.516 0 2.858.733 3.7 1.867a4.608 4.608 0 013.7-1.867c2.558 0 4.633 2.083 4.633 4.658 0 5.834-5.4 9.275-7.816 10.1z"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default HeartIcon;
