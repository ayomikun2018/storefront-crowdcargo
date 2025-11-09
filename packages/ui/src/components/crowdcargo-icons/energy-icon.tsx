import { CrowdCargoIconProps } from "../../types";

export function EnergyIcon(props: CrowdCargoIconProps) {
  return (
    <svg
      width={15}
      height={20}
      viewBox="0 0 15 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.156 10.914h3.09v7.2c0 1.06 1.32 1.56 2.02.76l7.57-8.6c.66-.75.13-1.92-.87-1.92h-3.09v-7.2c0-1.06-1.32-1.56-2.02-.76l-7.57 8.6c-.65.75-.12 1.92.87 1.92z"
        fill="currentColor"
      />
    </svg>
  );
}

export default EnergyIcon;
