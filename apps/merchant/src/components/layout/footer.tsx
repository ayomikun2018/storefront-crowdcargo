 "use client";
import FAQsModal from "@/components/home/faqs-modal";
import {
  Button,
  FlagIcon,
  JudgeIcon,
  MapPinIcon,
  QuestionCircleIcon,
} from "@repo/ui";
import { HeadsetIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ReturnPolicyModal from "../home/return-policy-modal";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Footer = () => {
  const pathname = usePathname();

  // Exact match check
  const isCheckoutPage = pathname === "/checkout";
  const isCheckoutSuccessPage = pathname === "/checkout/checkout-success";
  return (
    <footer
      className={cn(
        "w-full bg-[url(/assets/footer-box-bg.svg)] space-y-10 pt-8 z-50 bg-[#191045] md:bg-white relative",
        isCheckoutPage ? "hidden md:block" : "block",
      )}
      id="footer"
    >
      <section className="mx-auto container md:flex  md:justify-between items-center w-full px-5 md:px-0 space-y-4 md:space-y-0  ">
        <div className="absolute top-10 md:-top-5 right-5 md:hidden ">
          <Button
            className="text-white rounded-2xl gap-2 bg-green-600 hover:bg-initial"
            asChild
          >
            <Link href="#">
              <HeadsetIcon className="size-5" /> Help
            </Link>
          </Button>
        </div>

        <div className="flex justify-between md:hidden  "></div>
        <div className="flex md:flex-row  flex-col gap-4 items-center">
          <div className="rounded-full p-[0.3rem] inline-block bg-gradient-to-t from-purple-500 to-primary">
            <Image
              src="/assets/merchant-avatar.png"
              alt="Merchant Avatar"
              className="rounded-full size-20 object-cover"
              height={80}
              width={80}
            />
          </div>
          <div className="space-y-0.5 flex flex-col  items-center md:items-start justify-center ">
            <div className="flex   items-center md:items-start justify-center gap-2">
              <h2 className="text-xl leading-5 text-white  md:text-black font-semibold">
                Oraimo Store
              </h2>
              <Image
                src="/assets/verified.svg"
                alt="Verified"
                className="rounded-full size-4 object-cover"
                height={80}
                width={80}
              />
            </div>

            <p className="flex gap-1 items-center md:text-gray-500 text-white bg-gray-400/10 px-3 rounded-full text-light">
              <MapPinIcon className=" size-5 " /> 37, Nnobi street, Surulere
            </p>
          </div>
        </div>
        <div className="md:grid grid-cols-2 gap-2 text-sm pt-4 md:pt-0  justify-center  items-center md:items-start hidden ">
          <Button
            className="flex gap-2 items-center justify-start text-primary p-1 px-1/5  md:bg-gray-600/10 bg-white hover:bg-initial"
            asChild
          >
            <Link href="#">
              <span className="bg-primary text-white p-1 rounded">
                <FlagIcon className="size-4" />
              </span>
              Terms of Service
            </Link>
          </Button>

          <ReturnPolicyModal
            trigger={
              <Button className="flex gap-2 items-center justify-start text-primary p-1 px-1/5  md:bg-gray-600/10 bg-white hover:bg-initial">
                <span className="bg-primary text-white p-1 rounded">
                  <JudgeIcon className="size-4" />
                </span>
                Return Policy
              </Button>
            }
          />
          <FAQsModal
            trigger={
              <Button className="flex gap-2 items-center justify-start text-primary p-1 px-1/5 md:bg-gray-600/10 bg-white hover:bg-initial">
                <span className="bg-primary text-white p-1 rounded">
                  <QuestionCircleIcon className="size-4" />
                </span>
                FAQ
              </Button>
            }
          />
          <Button
            className="md:flex gap-2 items-center justify-start text-primary p-1 px-1/5 bg-gray-600/10 hover:bg-initial hidden"
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
        <div className="flex  gap-2 justify-center md:hidden">
          <Link href="#" className="">
            <Image
              src="/assets/twitter.svg"
              alt="Twitter"
              className="size-8 object-cover"
              height={80}
              width={80}
            />
          </Link>
          <Link href="#" className="">
            <Image
              src="/assets/instagram.svg"
              alt="Instagram"
              className="size-8 object-cover"
              height={80}
              width={80}
            />
          </Link>
          <Link href="#" className="">
            <Image
              src="/assets/facebook.svg"
              alt="Facebook"
              className="size-8 object-cover"
              height={80}
              width={80}
            />
          </Link>
        </div>
        <section className="flex flex-row md:flex-col pt-6 md:hidden">
          {isCheckoutSuccessPage ? (
            <div className="md:hidden flex flex-col items-center justify-center w-full">
              <p className=" flex font-bold text-white text-xl">
                If you need help, contact us via{" "}
              </p>
              <Link
                href="#"
                className="md:hidden text-bold text-primary text-xl underline"
              >
                {" "}
                help@crowdcargo.app
              </Link>
            </div>
          ) : (
            <div className="  rounded-xl  bg-blue-600/10 p-4  flex flex-col max-w-2xl  items-center  ">
              <p className="text-sm md:text-base text-white font-bold uppercase">
                About us
              </p>
              <p className="text-gray-400 ">
                Sed vivamus interdum non duis varius. Tortor eu nibh ac sit
                egestas tellus non. Ac faucibus porttitor id sed ac ut
                scelerisque. Cursus sodales.
              </p>
            </div>
          )}
          <div className="md:flex gap-4 justify-end pt-4 hidden">
            <div className="md:flex gap-2 justify-center  ">
              <Link href="#" className="">
                <Image
                  src="/assets/twitter.svg"
                  alt="Twitter"
                  className="size-8 object-cover"
                  height={80}
                  width={80}
                />
              </Link>
              <Link href="#" className="">
                <Image
                  src="/assets/instagram.svg"
                  alt="Instagram"
                  className="size-8 object-cover"
                  height={80}
                  width={80}
                />
              </Link>
              <Link href="#" className="">
                <Image
                  src="/assets/facebook.svg"
                  alt="Facebook"
                  className="size-8 object-cover"
                  height={80}
                  width={80}
                />
              </Link>
            </div>
            <div className="flex gap-2 text-sm pt-4 md:pt-0  justify-center  items-center md:items-start  ">
              <Button
                className="flex gap-2 items-center justify-start text-primary p-1 px-1/5  bg-white hover:bg-initial"
                asChild
              >
                <Link href="#">
                  <span className="bg-primary text-white p-1 rounded">
                    <FlagIcon className="size-4" />
                  </span>
                  Terms of Service
                </Link>
              </Button>

              <ReturnPolicyModal
                trigger={
                  <Button className="flex gap-2 items-center justify-start text-primary p-1 px-1/5  bg-white hover:bg-initial">
                    <span className="bg-primary text-white p-1 rounded">
                      <JudgeIcon className="size-4" />
                    </span>
                    Return Policy
                  </Button>
                }
              />
              <FAQsModal
                trigger={
                  <Button className="flex gap-2 items-center justify-start text-primary p-1 px-1/5  bg-white hover:bg-initial">
                    <span className="bg-primary text-white p-1 rounded">
                      <QuestionCircleIcon className="size-4" />
                    </span>
                    FAQ
                  </Button>
                }
              />
              <Button
                className="md:flex gap-2 items-center justify-start text-primary p-1 px-1/5 bg-gray-600/10 hover:bg-initial hidden"
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
          </div>
        </section>

        <div className="flex gap-2 text-sm pt-4 md:pt-0  justify-center  items-center md:items-start md:hidden ">
          <Button
            className="flex gap-2 items-center justify-start text-primary p-1 px-1/5  bg-white hover:bg-initial"
            asChild
          >
            <Link href="#">
              <span className="bg-primary text-white p-1 rounded">
                <FlagIcon className="size-4" />
              </span>
              Terms of Service
            </Link>
          </Button>

          <ReturnPolicyModal
            trigger={
              <Button className="flex gap-2 items-center justify-start text-primary p-1 px-1/5  bg-white hover:bg-initial">
                <span className="bg-primary text-white p-1 rounded">
                  <JudgeIcon className="size-4" />
                </span>
                Return Policy
              </Button>
            }
          />
          <FAQsModal
            trigger={
              <Button className="flex gap-2 items-center justify-start text-primary p-1 px-1/5  bg-white hover:bg-initial">
                <span className="bg-primary text-white p-1 rounded">
                  <QuestionCircleIcon className="size-4" />
                </span>
                FAQ
              </Button>
            }
          />
          {/* <Button
            className="flex gap-2 items-center justify-start text-primary p-1 px-1/5 bg-gray-600/10 hover:bg-initial"
            asChild
          >
            <Link href="#">
              <span className="bg-primary text-white p-1 rounded">
                <HeadsetIcon className="size-4" />
              </span>
              Help & Support
            </Link>
          </Button> */}
        </div>
        <div className="text-gray-400 text-semibold  flex self-center justify-center  pt-4 md:hidden ">
          Powered by{" "}
          <Link href="#" className="underline  text-primary pl-1">
            CrowdCargo
          </Link>
        </div>
      </section>
      <div className="bg-[url(/assets/curved-footer-bg.svg)] h-14 mt-auto" />
    </footer>
  );
};

export default Footer;
