"use client";

import HomeCollectionBanner from "./home-collection-banner";

const HomeCollectionBanners = () => {
  const banners = [
    {
      bgImage: "/assets/home-collection-banner.svg",
      title: "Gadgets Go",
      itemCount: 25,
      titleTextColor: "text-white",
      badgeTextColor: "text-black",
      badgeBackgroundColor: "bg-white",
    },
    {
      bgImage: "/assets/home-collection-banner-two.svg",
      title: "My Bags",
      itemCount: 40,
      titleTextColor: "text-black",
      badgeTextColor: "text-white",
      badgeBackgroundColor: "bg-black",
    },
    {
      bgImage: "/assets/home-collection-banner.svg",
      title: "Gadgets Go",
      itemCount: 25,
      titleTextColor: "text-white",
      badgeTextColor: "text-black",
      badgeBackgroundColor: "bg-white",
    },
    {
      bgImage: "/assets/home-collection-banner-two.svg",
      title: "My Bags",
      itemCount: 40,
      titleTextColor: "text-black",
      badgeTextColor: "text-white",
      badgeBackgroundColor: "bg-black",
    },
  ];

  return (
    <section className="w-full overflow-hidden">
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
