"use client";
import { useEffect } from "react";
import Image from "next/image";

import ManifGraphicsData from "../compontents/manifestions-graphics-collection/manifestion-graphics-collection";
import OurServiceCarousel from "../compontents/shared-compontents/our-services-carousel";
import SolarFilmsFAQs from "../compontents/FAQs/solar-film-faqs";
import ContactUs from "../compontents/shared-compontents/Contact-Us";

import HeroImg from "/public/images/manif-graphics-imgs/manif-graphics-hero-img-A.png";
import HeroImgTwo from "/public/images/manif-graphics-imgs/manif-graphics-hero-img-B.png";
export default function ManifestationGraphicsPage() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="relative">
          <Image
            src={HeroImgTwo}
            className="h-[70vh]"
            alt="Solar Gard Solar Films"
            sizes="100vw"
            placeholder="blur"
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          />
          <div className="absolute lg:w-4/5 largeScreens:w-9/12 inset-0 flex items-end justify-start lg:p-24 md:p-12 sm:p-8 largeScreens:p-40 rounded-bl-lg">
            {/* <h1 className="text-white lg:text-5xl md:text-3xl sm:text-xl largeScreens:text-6xl font-bold">
                Experience the Ultimate in Comfort and Efficiency with Solar
                Films
              </h1> */}
          </div>
        </div>
      </div>
      <div className="bg-grey lg:py-32 lg:px-24 md:py-32 md:px-16 sm:py-24 sm:px-6 antialiased">
        <h1 className="text-secondary font-medium lg:text-3xl largeScreens:text-4xl md:text-2xl sm:text-xl largeScreens:w-10/12 xl:mx-auto">
          At Solar Gard Ireland, we specialise in creating custom glass
          manifestations and graphics that not only enhance the visual appeal of
          your space but also serve functional purposes like safety, branding,
          and privacy. Whether you need decorative glass patterns for an office,
          branding for your storefront, or safety markings for glass partitions,
          our expert team can design and install high-quality solutions tailored
          to your needs.
        </h1>
      </div>
      <div>
        <ManifGraphicsData />
      </div>
    </div>
  );
}
