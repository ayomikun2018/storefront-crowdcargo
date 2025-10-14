import * as React from "react";

function BoxIcon(props: CrowdCargoIconProps) {
  return (
    <svg
      width={14}
      height={15}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_606_39631)" fill="currentColor">
        <path d="M1 10.354c0 .248.146.472.37.567l5.18 2.212V6.458L3.525 5.144 1 4.065v6.289z" />
        <path d="M1 10.354c0 .248.146.472.37.567l5.18 2.212V6.458L3.525 5.144 1 4.065v6.289zM13 3.955l-5.55 2.5v6.678l5.18-2.212a.615.615 0 00.37-.567V3.955z" />
        <path d="M13 3.955l-5.55 2.5v6.678l5.18-2.212a.615.615 0 00.37-.567V3.955z" />
        <g opacity={0.7}>
          <path d="M1.615 3.33l2.081.888 5.27-2.348-1.504-.643a1.173 1.173 0 00-.923 0L1.615 3.33z" />
          <path d="M1.615 3.33l2.081.888 5.27-2.348-1.504-.643a1.173 1.173 0 00-.923 0L1.615 3.33zM10.12 2.362L4.84 4.713l2.157.938 5.27-2.372-2.148-.917z" />
          <path d="M10.12 2.362L4.84 4.713l2.157.938 5.27-2.372-2.148-.917z" />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_606_39631"
          x={0}
          y={0.132812}
          width={14}
          height={14}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={0.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_606_39631"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_606_39631"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default BoxIcon;
