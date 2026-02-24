// "use client";

// import { Badge, Button } from "@repo/ui";
// import clsx from "clsx";
// import Link from "next/link";
// import { FC } from "react";

// interface HomeCollectionBannerProps {
//   bgImage: string;
//   title: string;
//   itemCount: number;
//   titleTextColor?: string;
//   badgeTextColor?: string;
//   badgeBackgroundColor?: string;
// }

// const HomeCollectionBanner: FC<HomeCollectionBannerProps> = ({
//   bgImage,
//   title,
//   itemCount,
//   titleTextColor = "text-white",
//   badgeTextColor = "text-black",
//   badgeBackgroundColor = "bg-white",
// }) => {
//   return (
//     <div
//       className="
//     relative
//     flex-shrink-0
//     w-[360px]
//     h-[220px]
//     rounded-3xl
//     border-[6px]
//     border-[#1E1546]
//     overflow-hidden
//     bg-cover
//     bg-center
//   "
//       style={{
//         backgroundImage: `url(${bgImage})`,
//       }}
//     >
//       <div className="flex flex-col justify-between h-full px-6 py-6">
//         {/* TOP CONTENT */}
//         <div>
//           <h2
//             className={clsx(
//               "text-2xl font-semibold tracking-tight",
//               titleTextColor,
//             )}
//           >
//             {title}
//           </h2>

//           <Badge
//             className={clsx(
//               "mt-3 rounded-full px-4 py-1 text-sm font-medium",
//               badgeBackgroundColor,
//               badgeTextColor,
//             )}
//           >
//             {itemCount} Items
//           </Badge>
//         </div>

//         {/* BUTTON */}
//         <Link href="/collection">
//           <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-2 text-sm font-semibold shadow-md">
//             Shop Now
//           </Button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default HomeCollectionBanner;

"use client";

import { Badge, Button } from "@repo/ui";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

interface HomeCollectionBannerProps {
  bgImage: string;
  title: string;
  itemCount: number;
  titleTextColor?: string;
  badgeTextColor?: string;
  badgeBackgroundColor?: string;
}

const HomeCollectionBanner: FC<HomeCollectionBannerProps> = ({
  bgImage,
  title,
  itemCount,
  titleTextColor = "text-white",
  badgeTextColor = "text-black",
  badgeBackgroundColor = "bg-white",
}) => {
  return (
    <div
      className="
        relative
        flex-shrink-0
        rounded-2xl
        overflow-hidden
        bg-center
        bg-no-repeat
       mt-2
       mb-2
       
      "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "100%",
      }}
    >
      <div className=" w-[70vw] max-w-[420px] md:h-[190px] h-[200px] flex flex-col md:px-8 px-2">
        <div className="">
          <h2
            className={clsx(
              "md:text-2xl text-lg font-semibold pt-10 md:pt-10",
              titleTextColor,
            )}
          >
            {title}
          </h2>

          <Badge
            className={clsx(
              "w-fit md:text-sm text-xs rounded-full",
              badgeBackgroundColor,
              badgeTextColor,
            )}
          >
            {itemCount} Items
          </Badge>
        </div>

        <div className="">
          <Link href="/collection">
            <Button className=" bg-primary text-white p-1 rounded-md px-6 py-2 md:px-6 md:text-base text-xs font-semibold md:mt-8 ">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCollectionBanner;

// "use client";

// import { Badge, Button } from "@repo/ui";
// import clsx from "clsx";
// import Link from "next/link";
// import { FC } from "react";

// interface HomeCollectionBannerProps {
//   bgImage: string;
//   title: string;
//   itemCount: number;
//   titleTextColor?: string;
//   badgeTextColor?: string;
//   badgeBackgroundColor?: string;
// }

// const HomeCollectionBanner: FC<HomeCollectionBannerProps> = ({
//   bgImage,
//   title,
//   itemCount,
//   titleTextColor = "text-white",
//   badgeTextColor = "text-black",
//   badgeBackgroundColor = "bg-white",
// }) => {
//   return (
//     <div
//       className="
//         relative
//         flex-shrink-0
//         rounded-2xl
//         overflow-hidden
//         bg-center
//         bg-no-repeat
//        bg-red-800

//       "
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "100%",
//       }}
//     >
//       <div className=" w-[70vw] max-w-[420px] md:h-[260px]  flex flex-col md:px-8 px-2">
//         <div className="">
//           <h2
//             className={clsx(
//               "md:text-2xl text-lg font-semibold pt-10 md:pt-16",
//               titleTextColor,
//             )}
//           >
//             {title}
//           </h2>

//           <Badge
//             className={clsx(
//               "w-fit md:text-sm text-xs rounded-full",
//               badgeBackgroundColor,
//               badgeTextColor,
//             )}
//           >
//             {itemCount} Items
//           </Badge>
//         </div>

//         <div className="pt-4">
//           <Link href="/collection">
//             <Button className=" bg-primary text-white p-1 rounded-md px-6 py-2 md:px-6 md:text-base text-xs font-semibold md:mt-8 ">
//               Shop Now
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeCollectionBanner;
