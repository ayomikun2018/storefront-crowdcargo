import { FlagIcon, JudgeIcon, MapPinIcon } from "@/components/crowdcargo-icons";
import QuestionCircleIcon from "@/components/crowdcargo-icons/question-circle-icon";
import { Button } from "@/components/ui/button";
import { HeadsetIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" w-full bg-[url(/assets/footer-box-bg.svg)] space-y-10 pt-8">
      <section className="mx-auto max-w-7xl flex justify-between items-center w-full px-5">
        <div className="flex gap-4 items-center">
          <div className="rounded-full p-[0.3rem] inline-block bg-gradient-to-t from-purple-500 to-primary">
            <Image
              src="/assets/merchant-avatar.png"
              alt="Merchant Avatar"
              className="rounded-full size-20 object-cover"
              height={80}
              width={80}
            />
          </div>
          <div className="space-y-0.5">
            <h2 className="text-xl leading-5">Oraimo Store</h2>
            <p className="flex gap-1 items-center text-gray-500 text-light">
              <MapPinIcon className=" size-5" /> 37, Nnobi street, Surulere
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
          <Button
            className="flex gap-2 items-center justify-start text-primary p-1 px-1/5 bg-gray-600/10 hover:bg-initial"
            asChild
          >
            <Link href="#">
              <span className="bg-primary text-white p-1 rounded">
                <FlagIcon className="size-4" />
              </span>
              Terms of Service
            </Link>
          </Button>
          <Button
            className="flex gap-2 items-center justify-start text-primary p-1 px-1/5 bg-gray-600/10 hover:bg-initial"
            asChild
          >
            <Link href="#">
              <span className="bg-primary text-white p-1 rounded">
                <QuestionCircleIcon className="size-4" />
              </span>
              FAQ
            </Link>
          </Button>
          <Button
            className="flex gap-2 items-center justify-start text-primary p-1 px-1/5 bg-gray-600/10 hover:bg-initial"
            asChild
          >
            <Link href="#">
              <span className="bg-primary text-white p-1 rounded">
                <JudgeIcon className="size-4" />
              </span>
              Return Policy
            </Link>
          </Button>
          <Button
            className="flex gap-2 items-center justify-start text-primary p-1 px-1/5 bg-gray-600/10 hover:bg-initial"
            asChild
          >
            <Link href="#">
              <span className="bg-primary text-white p-1 rounded">
                <HeadsetIcon className="size-4" />
              </span>
              Help & Support
            </Link>
          </Button>
        </div>
      </section>
      <div className="bg-[url(/assets/curved-footer-bg.svg)] h-14 mt-auto" />
    </footer>
  );
};

export default Footer;
