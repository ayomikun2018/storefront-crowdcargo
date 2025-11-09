import { CrowdCargoIconProps } from "../../types";

export function PlusCircleIcon(props: CrowdCargoIconProps) {
  return (
    <svg
      width={17}
      height={17}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.5 14.915c3.667 0 6.667-3 6.667-6.666 0-3.667-3-6.667-6.667-6.667s-6.667 3-6.667 6.667c0 3.666 3 6.666 6.667 6.666zM5.833 8.25h5.334M8.5 10.915V5.582"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default PlusCircleIcon;
