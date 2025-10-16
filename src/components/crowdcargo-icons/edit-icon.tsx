import * as React from "react";

function EditIcon(props: CrowdCargoIconProps) {
  return (
    <svg
      width={12}
      height={13}
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.63 1.934L2.525 6.28c-.155.165-.305.49-.335.715l-.185 1.62c-.065.585.355.985.935.885l1.61-.275c.225-.04.54-.205.695-.375L9.35 4.504c.71-.75 1.03-1.605-.075-2.65-1.1-1.035-1.935-.67-2.645.08zM5.945 2.656A3.063 3.063 0 008.67 5.231M1.5 11.133h9"
        stroke="currentColor"
        strokeWidth={0.75}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default EditIcon;
