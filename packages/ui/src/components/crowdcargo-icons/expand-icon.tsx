import { CrowdCargoIconProps } from "../../types";

export function ExpandIcon(props: CrowdCargoIconProps) {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24.123 10.531V3.898H17.49M4.224 17.164v6.633h6.633M24.123 3.898l-8.291 8.292M12.516 15.508l-8.292 8.291"
        stroke={"currentColor"}
        strokeWidth={1.65823}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ExpandIcon;
