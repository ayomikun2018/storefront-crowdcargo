import { CrowdCargoIconProps } from "../../types";

export function FlagIcon(props: CrowdCargoIconProps) {
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
        d="M4.8 15.572a.504.504 0 01-.5-.5V1.738c0-.273.226-.5.5-.5.273 0 .5.227.5.5v13.334c0 .273-.227.5-.5.5z"
        fill="currentColor"
      />
      <path
        d="M5.133 12.24a.499.499 0 01-.22-.947l5.534-2.733c.813-.42 1.273-.927 1.253-1.4-.02-.46-.513-.934-1.36-1.294l-5.4-2.333a.504.504 0 01-.267-.66.499.499 0 01.66-.26l5.4 2.333C12.4 5.653 12.68 6.613 12.7 7.12c.033.886-.607 1.713-1.8 2.326l-5.54 2.74a.471.471 0 01-.227.054z"
        fill="currentColor"
      />
    </svg>
  );
}

export default FlagIcon;
