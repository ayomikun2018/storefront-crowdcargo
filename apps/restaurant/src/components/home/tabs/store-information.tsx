"use client";
import { ClockIcon, CoffeeIcon, TruckIcon } from "@repo/ui";
import { Badge } from "@repo/ui";

const StoreInformation = () => {
  return (
    <>
      <div className="bg-secondary p-5 border-8 border-primary bg-[url(/assets/icon-collage.svg)] bg-no-repeat bg-top-right">
        <div className="space-y-4 w-4/5">
          <div className="rounded-lg bg-gradient-to-r from-blue-700 via-60% to-blue-500 text-white">
            <div className="p-4 bg-[url(/assets/hand-with-light-bulb.svg)] bg-no-repeat bg-right flex flex-wrap gap-4 @container items-center">
              <div className="@xl:flex-3">
                <div className="@xl:w-4/5 space-y-3">
                  <h2 className="text-xl">About {`{{Store_Name}}`}</h2>
                  <p className="text-sm leading-4">
                    <span className="text-yellow-500">Oraimo Store</span> are
                    within a 60KM radius of your location. Each store card shows
                    the exact distance, making it easier for you to shop nearby
                    and get what you need, faster.
                  </p>
                </div>
              </div>
              <div className="flex @xl:flex-col gap-3 w-full @xl:w-auto">
                <Badge className="flex-1 @xl:w-full @xl:flex-none justify-start flex gap-2 text-xs  bg-white text-foreground">
                  <span className="rounded p-1 bg-white/20">
                    <TruckIcon className="size-3.5" />
                  </span>
                  We deliver instantly
                </Badge>
                <Badge className="flex-1 @xl:w-full @xl:flex-none justify-start flex gap-2  bg-white text-foreground">
                  <span className="rounded p-1 bg-white/20">
                    <CoffeeIcon className="size-3.5" />
                  </span>
                  Meal preparation time- (30-60 mins)
                </Badge>
              </div>
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
