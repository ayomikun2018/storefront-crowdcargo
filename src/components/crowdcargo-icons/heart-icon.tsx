import * as React from "react";

function HeartIcon(props: CrowdCargoIconProps) {
  return (
    <svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.62 21.788c-.34.12-.9.12-1.24 0-2.9-.99-9.38-5.12-9.38-12.12 0-3.09 2.49-5.59 5.56-5.59 1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 014.44-2.24c3.07 0 5.56 2.5 5.56 5.59 0 7-6.48 11.13-9.38 12.12z"
        fill="#F04438"
      />
    </svg>
  );
}

export default HeartIcon;
