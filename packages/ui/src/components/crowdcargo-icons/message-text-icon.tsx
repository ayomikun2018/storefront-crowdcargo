import { CrowdCargoIconProps } from "../../types";

export function MessageTextIcon(props: CrowdCargoIconProps) {
  return (
    <svg
      width={14}
      height={15}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.167 4.8c0-2.333 1.166-3.5 3.5-3.5h4.666c2.334 0 3.5 1.167 3.5 3.5v2.917c0 2.334-1.166 3.5-3.5 3.5h-.291a.591.591 0 00-.467.234L7.7 12.617c-.385.514-1.015.514-1.4 0l-.875-1.166a.66.66 0 00-.467-.234h-.291c-2.334 0-3.5-.583-3.5-3.5v-.583"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.328 4.8h.589M4.083 4.8h3.215M4.083 7.715h3.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default MessageTextIcon;
