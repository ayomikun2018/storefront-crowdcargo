import localFont from "next/font/local";

export const chillaxFont = localFont({
  src: [
    {
      path: "../../public/chillax-cdnfonts/Chillax-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/chillax-cdnfonts/Chillax-Extralight.otf",
      weight: "200",
    },
    {
      path: "../../public/chillax-cdnfonts/Chillax-Light.otf",
      weight: "300",
    },

    {
      path: "../../public/chillax-cdnfonts/Chillax-Medium.otf",
      weight: "500",
    },
    {
      path: "../../public/chillax-cdnfonts/Chillax-Bold.otf",
      weight: "700",
    },
    {
      path: "../../public/chillax-cdnfonts/Chillax-Semibold.otf",
      weight: "600",
    },
  ],
  variable: "--font-chillax",
});

export const athleticsFont = localFont({
  src: [
    {
      path: "../../public/athletics-cdnfonts/Athletics-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/athletics-cdnfonts/Athletics-Bold.otf",
      weight: "700",
    },
  ],
});
