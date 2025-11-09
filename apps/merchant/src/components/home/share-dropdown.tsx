import {
  Button,
  CopyIcon,
  Popover,
  PopoverContent,
  PopoverTrigger,
  XCircleIcon,
} from "@repo/ui";
import { FC, ReactNode, useState } from "react";

interface ShareDropdownProps {
  trigger: ReactNode;
}

const ShareDropdown: FC<ShareDropdownProps> = ({ trigger }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent className="w-max mr-2">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-xl leading-4">Share Link</h4>
            <Button
              className="rounded-full size-8 !bg-gray-200 text-foreground"
              onClick={() => setIsOpen(false)}
            >
              <XCircleIcon className="size-5" />
            </Button>
          </div>
          <hr className=" border-gray-500" />
          <div className="p-4 rounded-lg bg-blue-50 text-primary flex justify-between items-center gap-4 text-sm">
            https://www.arcadio.app/acodyssey
            <button type="button">
              <CopyIcon className="size-4" />
            </button>
          </div>
          <p>Share on</p>
          <div className="flex gap-5">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-blue-50 rounded-lg flex-1 h-14"
                ></div>
              ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ShareDropdown;
