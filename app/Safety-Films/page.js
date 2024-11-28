"use client";
import { useEffect } from "react";
import Image from "next/image";

import SafetyFilmsComponent from "../compontents/film-collections/safety-films-collection";
import ContactUs from "../compontents/shared-compontents/Contact-Us";
import OurServiceCarousel from "../compontents/shared-compontents/our-services-carousel";
import SafetyFAQs from "../compontents/FAQs/safety-flims-faqs";

import SafetyHeroImg from "/public/images/safety-film-imgs/safety-hero-min.jpg";
import StoreFrontImg from "/public/images/safety-film-imgs/storefront-min.jpg";

const safetyBenefits = [
  {
    id: "01",
    title: "Break-In Prevention",
    description:
      "Reinforce windows to deter intruders and prevent easy access.",
  },
  {
    id: "02",
    title: "Glass Shatter Protection",
    description:
      "Hold broken glass fragments together, minimizing injury risks during accidents or impacts.",
  },
  {
    id: "03",
    title: "Scratch Resistance",
    description:
      "Safeguard your glass from daily wear and tear, keeping it clear and polished.",
  },
  {
    id: "04",
    title: "Graffiti Protection",
    description:
      "Easily remove unwanted marks, paint, or scratches without replacing the glass.",
  },
];

export default function SafetyFilmsPage() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div>
      <div>
        <div className="flex flex-col w-full">
          <div className="relative">
            <Image
              src={SafetyHeroImg}
              alt="Solar Gard Safety Films"
              sizes="100vw"
              placeholder="blur"
              style={{
                width: "100%",
                objectFit: "cover",
              }}
              className="h-[65vh]"
            />
            <div className="absolute lg:w-4/5 largeScreens:w-9/12 inset-0 flex items-end justify-start lg:p-24 md:p-12 sm:p-8 largeScreens:p-40 rounded-bl-lg">
              {/* <h1 className="text-white lg:text-5xl md:text-3xl sm:text-xl largeScreens:text-6xl font-bold">
                Experience the Ultimate in Comfort and Efficiency with Solar
                Films
              </h1> */}
            </div>
          </div>
        </div>
        <div className="bg-grey lg:py-40">
          <h1 className="text-secondary XS:w-8/12 font-medium lg:text-3xl XS:text-4xl md:text-2xl sm:text-xl w-10/12 mx-auto">
            Ensure the safety and security of your home, office, or commercial
            space with Solar Gard Ireland’s premium safety films. Our films are
            designed to strengthen glass and protect against breakage, providing
            an added layer of security and peace of mind. Ideal for residential,
            commercial, and industrial applications, our safety films offer
            robust protection without compromising aesthetics.
          </h1>
        </div>
        <div className="bg-grey lg:py-40">
          <div className="XS:w-8/12 lg:w-10/12 mx-auto antialiased">
            <div className="flex flex-col w-full">
              <div className="relative">
                <Image
                  src={StoreFrontImg}
                  alt="Solar Gard Privacy Films"
                  sizes="100vw"
                  placeholder="blur"
                  className="rounded-lg h-[70vh] bg-bottom"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-white text-center lg:text-7xl md:text-3xl sm:text-xl largeScreens:text-6xl font-bold">
                    Benefits of <br /> Safety Films
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold lg:w-8/12 text-secondary lg:text-xl mt-4">
                Safety films are an innovative solution designed to strengthen
                glass surfaces, reduce the risk of breakage, and protect against
                accidental or intentional damage. Safety films act as a
                protective barrier that minimises hazards, ensuring safety and
                security.
              </h3>
              <div>
                <div className="grid grid-cols-2 gap-16 mt-8">
                  <div className="border-b-1 border-slate-400 pb-6">
                    <h6 className="font-bold text-secondary lg:text-xl">
                      Break-In Prevention
                    </h6>
                    <p className="font-medium text-textLightGray">
                      Reinforce windows to deter intruders and prevent easy
                      access.
                    </p>
                  </div>
                  <div className="border-b-1 border-slate-400 pb-6">
                    <h6 className="font-bold text-secondary lg:text-xl">
                      Glass Shatter Protection
                    </h6>
                    <p className="font-medium text-textLightGray">
                      Hold broken glass fragments together, minimising injury
                      risks during accidents or impacts.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-16 mt-8">
                  <div className="border-b-1 border-slate-400 pb-6">
                    <h6 className="font-bold text-secondary lg:text-xl">
                      Scratch Resistance
                    </h6>
                    <p className="font-medium text-textLightGray">
                      Safeguard your glass from daily wear and tear, keeping it
                      clear and polished.
                    </p>
                  </div>
                  <div className="border-b-1 border-slate-400 pb-6">
                    <h6 className="font-bold text-secondary lg:text-xl">
                      Graffiti Protection
                    </h6>
                    <p className="font-medium text-textLightGray">
                      Easily remove unwanted marks, paint, or scratches without
                      replacing the glass.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-grey pb-40">
          <SafetyFilmsComponent />
        </div>
        <div>
          <SafetyFAQs />
        </div>
        <div>
          <OurServiceCarousel />
        </div>
        <div className="bg-grey">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}
