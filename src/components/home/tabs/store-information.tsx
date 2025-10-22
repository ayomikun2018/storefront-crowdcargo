import { ClockIcon, TruckIcon } from "@/components/crowdcargo-icons";
import { Badge } from "@/components/ui/badge";

const StoreInformation = () => {
  return (
    <>
      <div className="bg-secondary p-5 border-8 border-primary bg-[url(/assets/icon-collage.svg)] bg-no-repeat bg-top-right">
        <div className="space-y-4 w-4/5">
          <div className="rounded-lg bg-gradient-to-r from-primary via-60% to-blue-500 text-white">
            <div className="p-4 bg-[url(/assets/hand-with-light-bulb.svg)] bg-no-repeat bg-right space-y-3">
              <h2 className="text-xl">About {`{{Store_Name}}`}</h2>
              <p className="text-sm leading-4">
                <span className="text-yellow-500">Oraimo Store</span> are within
                a 60KM radius of your location. Each store card shows the exact
                distance, making it easier for you to shop nearby and get what
                you need, faster.
              </p>
            </div>
          </div>

          <div className="p-2 bg-indigo-900/30 flex gap-4 justify-between">
            <div className="flex gap-3 items-center text-gray-500 ">
              <span className="uppercase text-xs ">Delivery Schedule</span>
              <hr className="w-full max-w-48 border-gray-700" />
            </div>
            <div className="space-y-3">
              <Badge className="w-full justify-start flex gap-2 text-xs">
                <span className="rounded p-1 bg-white/20">
                  <TruckIcon className="size-3.5" />
                </span>
                We do Local & Inter State Delivery
              </Badge>
              <Badge className="w-full justify-start flex gap-2">
                <span className="rounded p-1 bg-white/20">
                  <ClockIcon className="size-3.5" />
                </span>
                2-3 business days
              </Badge>
            </div>
          </div>
          <div className="p-2 bg-indigo-900/30">
            <div className="flex gap-5 w-full flex-wrap">
              <div className="flex-1">
                <div className="flex justify-between">
                  <Badge className="bg-warning uppercase">Week Days</Badge>
                  <Badge className="bg-warning uppercase">
                    Opening/Closing Time
                  </Badge>
                </div>
                <div className="space-y-4 text-white text-xs font-light py-2">
                  <div className="items-center gap-4 grid grid-cols-3">
                    Monday <hr className="w-full max-w-28 border-gray-700" />{" "}
                    6:00am - 9:00px
                  </div>
                  <div className="items-center gap-4 grid grid-cols-3">
                    Tuesday <hr className="w-full max-w-28 border-gray-700" />{" "}
                    6:00am - 9:00px
                  </div>
                  <div className="items-center gap-4 grid grid-cols-3">
                    Wednesday <hr className="w-full max-w-28 border-gray-700" />{" "}
                    6:00am - 9:00px
                  </div>
                  <div className="items-center gap-4 grid grid-cols-3">
                    Thursday <hr className="w-full max-w-28 border-gray-700" />{" "}
                    6:00am - 9:00px
                  </div>
                  <div className="items-center gap-4 grid grid-cols-3">
                    Friday <hr className="w-full max-w-28 border-gray-700" />{" "}
                    6:00am - 9:00px
                  </div>
                  <div className="items-center gap-4 grid grid-cols-3">
                    Saturday <hr className="w-full max-w-28 border-gray-700" />{" "}
                    6:00am - 9:00px
                  </div>
                </div>
              </div>
              <div className="border-r border-gray-700 w-px min-h-full " />
              <div className="flex-1">
                <div className="flex justify-between">
                  <Badge className="bg-warning uppercase">Weekend</Badge>
                  <Badge className="bg-warning uppercase">
                    Opening/Closing Time
                  </Badge>
                </div>
                <div className="space-y-4 text-white text-xs font-light py-2">
                  <div className="items-center gap-4 grid grid-cols-3">
                    Sunday <hr className="w-full max-w-28 border-gray-700" />{" "}
                    6:00am - 9:00px
                  </div>
                  <div className="items-center gap-4 grid grid-cols-3">
                    Saturday <hr className="w-full max-w-28 border-gray-700" />{" "}
                    6:00am - 9:00px
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreInformation;
