import { CrowdCargoIconProps } from "../../types";

export function SearchIcon(props: CrowdCargoIconProps) {
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
        d="M6.709 12.384a5.542 5.542 0 100-11.083 5.542 5.542 0 000 11.083zM12.834 12.967l-1.167-1.166"
        stroke="currentColor"
        strokeOpacity={0.7}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SearchIcon;
