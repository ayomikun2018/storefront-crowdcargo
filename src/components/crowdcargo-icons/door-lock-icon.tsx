import * as React from "react";

function DoorLockIcon(props: CrowdCargoIconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.36 2.78L8.693 1.405c-.38-.14-1-.14-1.38 0L3.647 2.779c-.707.267-1.28 1.093-1.28 1.847v5.4c0 .54.353 1.253.786 1.573l3.667 2.74c.647.487 1.707.487 2.353 0l3.667-2.74c.433-.327.787-1.033.787-1.573v-5.4c.006-.754-.567-1.58-1.267-1.847zM8.5 8.58v1.752c0 .274-.227.5-.5.5a.504.504 0 01-.5-.5V8.58A1.665 1.665 0 016.333 7a1.667 1.667 0 013.334 0c0 .747-.494 1.367-1.167 1.58z"
        fill="currentColor"
      />
    </svg>
  );
}

export default DoorLockIcon;
