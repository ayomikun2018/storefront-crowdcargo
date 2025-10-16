import * as React from "react";

function FilterIcon(props: CrowdCargoIconProps) {
  return (
    <svg
      width={10}
      height={11}
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.5.133h-7a1.5 1.5 0 00-1.5 1.5v.585c0 .206.042.41.125.6v.03c.07.16.17.306.295.43l3.08 3.06v3.295a.5.5 0 00.725.445l2-1a.5.5 0 00.275-.445V6.338l3.06-3.06c.124-.124.224-.27.295-.43v-.03a1.5 1.5 0 00.145-.6v-.585a1.5 1.5 0 00-1.5-1.5zM5.645 5.778a.5.5 0 00-.145.355v2.19l-1 .5v-2.69a.5.5 0 00-.145-.355l-2.65-2.645h6.59l-2.65 2.645zM9 2.133H1v-.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default FilterIcon;
