"use client";
import { Badge, ClockIcon, TruckIcon } from "@repo/ui";

const StoreInformation = () => {
  return (
    <>
      <div className="bg-secondary p-5 border-8 border-primary bg-[url(/assets/icon-collage.svg)] bg-no-repeat bg-top-right">
        <div className="space-y-4 w-4/5">
          <div className="rounded-lg bg-gradient-to-r from-blue-700 via-60% to-blue-500 text-white">
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
            <div className="flex gap-3 items-center text-gray-500 flex-1">
              <span className="uppercase text-xs block">Delivery Schedule</span>
              <hr className="flex-grow border-gray-700" />
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
          <div className="p-2 bg-indigo-900/30 @container">
            <div
              className={`flex gap-y-5 w-full flex-wrap @lg:divide-x divide-gray-700`}
            >
              <div className={"flex-1 @lg:pr-5"}>
                <div className="flex justify-between">
                  <Badge className="bg-warning uppercase">Week Days</Badge>
                  <Badge className="bg-warning uppercase">
                    Opening/Closing Time
                  </Badge>
                </div>
                <div className="space-y-4 text-white text-xs font-light py-2">
                  <div className="items-center gap-2 grid grid-cols-3">
                    <span>Monday</span> <hr className="border-gray-700" />{" "}
                    <span>6:00am - 9:00pm</span>
                  </div>
                  <div className="items-center gap-2 grid grid-cols-3">
                    <span>Tuesday</span> <hr className="border-gray-700" />{" "}
                    <span>6:00am - 9:00pm</span>
                  </div>
                  <div className="items-center gap-2 grid grid-cols-3">
                    <span>Wednesday</span> <hr className="border-gray-700" />{" "}
                    <span>6:00am - 9:00pm</span>
                  </div>
                  <div className="items-center gap-2 grid grid-cols-3">
                    <span>Thursday</span> <hr className="border-gray-700" />{" "}
                    <span>6:00am - 9:00pm</span>
                  </div>
                  <div className="items-center gap-2 grid grid-cols-3">
                    <span>Friday</span> <hr className="border-gray-700" />{" "}
                    <span>6:00am - 9:00pm</span>
                  </div>
                </div>
              </div>
              <div className={"flex-1 @lg:pl-5"}>
                <div className="flex justify-between">
                  <Badge className="bg-warning uppercase">Weekend</Badge>
                  <Badge className="bg-warning uppercase">
                    Opening/Closing Time
                  </Badge>
                </div>
                <div className="space-y-4 text-white text-xs font-light py-2">
                  <div className="items-center gap-2 grid grid-cols-3">
                    <span>Sunday</span> <hr className="border-gray-700" />{" "}
                    <span>6:00am - 9:00pm</span>
                  </div>
                  <div className="items-center gap-2 grid grid-cols-3">
                    <span>Saturday</span> <hr className="border-gray-700" />{" "}
                    <span>6:00am - 9:00pm</span>
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
