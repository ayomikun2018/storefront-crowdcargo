"use client";
import ModalWrapper from "@/components/elements/modal-wrapper";
import {
  Badge,
  MessageTextIcon,
  Progress,
  ScrollArea,
  StarIcon,
} from "@repo/ui";
import Image from "next/image";

// const CustomerReviewPage = () => {
//   return (
//     <div className="bg-secondary p-5 bg-no-repeat bg-top-right text-white md:bg-[url(/assets/ratings.svg)] bg-right h-screen">
//       <div className="space-y-4 md:w-6/7 border-r border-gray-700 md:pr-16">
//         <div className="relative rounded-lg bg-gradient-to-r from-blue-700 via-60% to-blue-500 text-white">
//           <div className="px-4 py-6 flex justify-between items-center md:bg-[url(/assets/customer-ratings-illustration.png)] bg-[url(/assets/customer-rating-illustration-mobile.svg)] bg-contain bg-no-repeat bg-right">
//             <div className="space-y-3">
//               <h2 className="text-2xl font-semibold">Store Ratings</h2>
//               <div className="flex gap-2">
//                 <span className="flex gap-2 items-center text-lg font-semibold">
//                   4.85 <StarIcon className="fill-yellow-400 size-4" />
//                 </span>
//                 <Badge className="bg-white/10">543 Ratings</Badge>
//               </div>
//             </div>
//           </div>
//         </div>
// <div className="space-y-3">
//   {[5, 4, 3, 2, 1].map((each) => (
//     <div key={each} className="flex gap-3 items-center">
//       <span className="flex gap-1 items-center">
//         {each}.0 <StarIcon className="fill-yellow-400 size-4" />
//       </span>
//       <Progress value={15 * each} className="h-4" />
//       <span>298</span>
//     </div>
//   ))}
// </div>

//         <div className="space-y-4">
//           <p>Reviews</p>
//           <ScrollArea className="h-92">
//             <div className="space-y-2">
//               {Array(6)
//                 .fill(null)
//                 .map((_, index) => (
//                   <div
//                     key={index}
//                     className="bg-gray-500/10 rounded-lg p-2 flex gap-2 items-start"
//                   >
//                     <Badge className="text-primary bg-primary/10 text-md rounded-sm px-1">
//                       <MessageTextIcon className="!size-4" />
//                     </Badge>
//                     <div className="space-y-3 grow">
//                       <p className="font-semibold">@segun</p>
//                       <div className="space-y-2 flex-grow">
//                         <p className="text-sm">
//                           &quot; He delivered the package on time and was very
//                           respectful and soft spoken &quot;
//                         </p>
//                         <div className="flex gap-2">
//                           <ModalWrapper
//                             hideTitle
//                             className="!max-w-screen h-screen"
//                             trigger={
//                               <Image
//                                 src="https://dummyimage.com/100x100"
//                                 alt="review images"
//                                 className="size-16 object-cover rounded-lg cursor-pointer"
//                                 height={100}
//                                 width={100}
//                               />
//                             }
//                           >
//                             <div className="w-full max-h-full">
//                               <Image
//                                 src="https://dummyimage.com/1000x800"
//                                 alt="review images"
//                                 className="object-cover rounded-lg size-full"
//                                 height={100}
//                                 width={100}
//                               />
//                             </div>
//                           </ModalWrapper>
//                         </div>
//                         <div className="flex justify-between">
//                           <span className="text-xs font-light">
//                             24 Dec 2025, 14:00
//                           </span>
//                           <span className="inline-flex gap-0.5 items-center">
//                             5.0{" "}
//                             <StarIcon className="fill-yellow-400 size-2.5" />
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </ScrollArea>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerReviewPage;
const CustomerReviewPage = () => {
  return (
    // Add 'flex flex-col' to the main container
    <div className="bg-secondary p-5 text-white h-screen flex flex-col">
      <div className="space-y-4 md:w-6/7  md:pr-16 flex flex-col h-full">
        {/* Top Section (Static) */}
        <div className="relative rounded-lg bg-gradient-to-r from-blue-700 via-60% to-blue-500 text-white">
          <div className="px-4 py-6 flex justify-between items-center md:bg-[url(/assets/customer-ratings-illustration.png)] bg-[url(/assets/customer-rating-illustration-mobile.svg)] bg-contain bg-no-repeat bg-right">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">Store Ratings</h2>
              <div className="flex gap-2">
                <span className="flex gap-2 items-center text-lg font-semibold">
                  4.85 <StarIcon className="fill-yellow-400 size-4" />
                </span>
                <Badge className="bg-white/10">543 Ratings</Badge>
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0 space-y-4">
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((each) => (
              <div key={each} className="flex gap-3 items-center">
                <span className="flex gap-1 items-center">
                  {each}.0 <StarIcon className="fill-yellow-400 size-4" />
                </span>
                <Progress value={15 * each} className="h-4" />
                <span>298</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col flex-1 min-h-0 space-y-4 mt-4">
          <p>Reviews</p>
          <ScrollArea className="h-full pr-4 pb-20 ">
            <div className="space-y-2">
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-gray-500/10 rounded-lg p-2 flex gap-2 items-start"
                  >
                    <Badge className="text-primary bg-primary/10 text-md sm:text-xs rounded-sm px-1">
                      <MessageTextIcon className="!size-4" />
                    </Badge>
                    <div className="space-y-3 grow">
                      <p className="font-semibold">@segun</p>
                      <div className="space-y-2 flex-grow">
                        <p className="text-sm">
                          &quot; He delivered the package on time and was very
                          respectful and soft spoken &quot;
                        </p>
                        <div className="flex gap-2">
                          <ModalWrapper
                            hideTitle
                            className="!max-w-screen h-screen"
                            trigger={
                              <Image
                                src="https://dummyimage.com/100x100"
                                alt="review images"
                                className="size-16 object-cover rounded-lg cursor-pointer"
                                height={100}
                                width={100}
                              />
                            }
                          >
                            <div className="w-full max-h-full">
                              <Image
                                src="https://dummyimage.com/1000x800"
                                alt="review images"
                                className="object-cover rounded-lg size-full"
                                height={100}
                                width={100}
                              />
                            </div>
                          </ModalWrapper>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs font-light">
                            24 Dec 2025, 14:00
                          </span>
                          <span className="inline-flex gap-0.5 items-center">
                            5.0{" "}
                            <StarIcon className="fill-yellow-400 size-2.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};
export default CustomerReviewPage;
