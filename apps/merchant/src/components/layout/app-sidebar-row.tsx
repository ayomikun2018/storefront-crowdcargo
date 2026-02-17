import { ArrowRight } from "lucide-react";
import Image from "next/image";

type CollectionItemProps = {
  title: string;
  icon: string;
  onClick?: () => void;
};

export const CollectionRow = ({
  title,
  icon,
  onClick,
}: CollectionItemProps) => {
  return (
    <button
      onClick={onClick}
      className="
  w-full flex items-center justify-between
  border-[3px] border-[#1b144f]
  rounded-2xl
  bg-[url('/assets/collection-bg.svg')] bg-cover bg-center
  px-4 py-3
"
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <Image
          src="/assets/headphone.svg"
          alt={title}
          width={40}
          height={40}
          className="object-contain"
        />

        <span className="text-lg font-semibold text-gray-900">{title}</span>
      </div>

      {/* RIGHT */}
      <div className="bg-primary text-white rounded-2xl w-12 h-6 flex items-center justify-center">
        <ArrowRight size={18} />
      </div>
    </button>
  );
};
