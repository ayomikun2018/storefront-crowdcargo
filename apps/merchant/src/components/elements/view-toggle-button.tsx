import { Button } from "@repo/ui";
import Image from "next/image";

export const ViewToggleButton = ({
  active,
  onClick,
  activeIcon,
  inactiveIcon,
}: {
  active: boolean;
  onClick: () => void;
  activeIcon: string;
  inactiveIcon: string;
}) => (
  <button
    onClick={onClick}
    className={` border-none bg-none ${
      active ? "border-primary bg-primary/10 " : "border-gray-300"
    }`}
  >
    <Image
      src={active ? activeIcon : inactiveIcon}
      alt=""
      width={25}
      height={25}
    />
  </button>
);
