"use client";

import HomeCollectionBanner from "./home-collection-banner";

const HomeCollectionBanners = () => {
  const banners = [
    {
      bgImage: "/assets/collection-background.svg",
      productImage: "/assets/headphone.svg",
      title: "Gadgets Go",
      itemCount: 25,
      bannerBackgroundColor: "#1E1546", // Deep Navy BG
      bannerBorderColor: "#130D2E", // Even darker Navy Border
      titleTextColor: "text-white",
      badgeBackgroundColor: "bg-white",
      badgeTextColor: "text-black",
    },
    {
      bgImage: "/assets/collection-background.svg",
      productImage: "/assets/headphone.svg",
      title: "My Bags",
      itemCount: 40,
      bannerBackgroundColor: "#F0F9FF", // Light Blue BG
      bannerBorderColor: "#130D2E", // Light Blue Border
      titleTextColor: "text-gray-900",
      badgeBackgroundColor: "bg-[#130D2E]",
      badgeTextColor: "text-white",
    },
    {
      bgImage: "/assets/collection-background.svg",
      productImage: "/assets/headphone.svg",
      title: "Gadgets Go",
      itemCount: 25,
      bannerBackgroundColor: "#1E1546", // Deep Navy BG
      bannerBorderColor: "#130D2E", // Even darker Navy Border
      titleTextColor: "text-white",
      badgeBackgroundColor: "bg-white",
      badgeTextColor: "text-black",
    },
    {
      bgImage: "/assets/collection-background.svg",
      productImage: "/assets/headphone.svg",
      title: "My Bags",
      itemCount: 40,
      bannerBackgroundColor: "#F0F9FF", // Light Blue BG
      bannerBorderColor: "#130D2E", // Light Blue Border
      titleTextColor: "text-gray-900",
      badgeBackgroundColor: "bg-[#130D2E]",
      badgeTextColor: "text-white",
    },
  ];

  return (
    <section className="w-full overflow-hidden  ">
      <div
        className="
          flex
          gap-4
          overflow-x-auto
          scroll-smooth
          no-scrollbar
         
        "
      >
        {banners.map((banner, index) => (
          <HomeCollectionBanner key={index} {...banner} />
        ))}
      </div>
    </section>
  );
};

export default HomeCollectionBanners;
