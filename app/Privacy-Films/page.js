"use client";
import { useEffect } from "react";
import Image from "next/image";

import PrivacyFilmsComponent from "../compontents/film-collections/privacy-films-collection";

import PrivacyHeroImg from "/public/images/Privacy-Films-imgs/privacy-hero-img-min.jpg";
import FrostedImg from "/public/images/Privacy-Films-imgs/Frosted-qualities-img.jpg";
import SolarImg from "/public/images/Privacy-Films-imgs/solar-film-qualities-img.jpg";

const FilmQualitiesData = [
  {
    id: "01",
    filmType: "Solar Films",
    subtitle: "Understanding Privacy Qualities of Solar Films",
    effectiveness:
      "Provide daytime privacy by reflecting light, creating a mirror-like finish when viewed from the outside.",
    benefits:
      "Reduce heat and glare, block UV rays, and maintain outward visibility.",
    consideration:
      "Privacy is effective during daylight hours only and diminishes at night when interior lights are on.",
    image: SolarImg,
  },
  {
    id: "02",
    filmType: "Frosted Films",
    subtitle: "Understanding Privacy Qualities of Frosted Films",
    effectiveness:
      "Provide 24/7 privacy by obscuring visibility from both sides, regardless of lighting conditions.",
    benefits:
      "Allows natural light to pass through while adding a sleek, modern aesthetic.",
    consideration:
      "They do not offer outward visibility, making them more suited for spaces prioritizing privacy over views.",
    image: FrostedImg,
  },
];

export default function PrivacyFilmsPage() {
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
            src={PrivacyHeroImg}
            alt="Solar Gard Privacy Films"
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
        <h1 className="text-secondary font-medium lg:text-3xl largeScreens:text-4xl md:text-2xl sm:text-xl w-10/12 mx-auto">
          At Solar Gard Ireland, our privacy films offer an elegant and
          effective solution for maintaining privacy while still allowing
          natural light to fill your space. Perfect for both residential and
          commercial settings, our privacy films are designed to enhance
          security, improve comfort, and add a stylish touch to any window or
          glass surface.
        </h1>
      </div>
      <div className="bg-grey lg:py-40 antialiased">
        <div className="lg:w-10/12 mx-auto">
          <div className="grid grid-cols-2 gap-12">
            {FilmQualitiesData.map((qualities) => (
              <div className="bg-white rounded-lg p-4 pb-16" key={qualities.id}>
                <div>
                  <Image
                    src={qualities.image}
                    alt="Solar Gard Privacy Films"
                    className="rounded-md"
                    style={{
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>
                  <div className="pl-6 pr-6">
                    <h3 className="lg:text-3xl font-bold text-secondary mt-6">
                      {qualities.filmType}
                    </h3>
                    <h4 className="lg:text-sm text-textGray font-medium">
                      {qualities.subtitle}
                    </h4>
                    <div className="border-b-2 border-gray-300 pb-4">
                      <h5 className="lg:text-xl font-semibold text-secondary mt-4">
                        Effectiveness
                      </h5>
                      <p className="lg:text-base font-medium text-textLightGray pt-0.5">
                        {qualities.effectiveness}
                      </p>
                    </div>
                    <div className="border-b-2 border-gray-300 pb-4">
                      <h5 className="lg:text-xl font-semibold text-secondary mt-4">
                        Benefits
                      </h5>
                      <p className="lg:text-base font-medium text-textLightGray pt-0.5">
                        {qualities.benefits}
                      </p>
                    </div>
                    <div className="border-b-2 border-gray-300 pb-4">
                      <h5 className="lg:text-xl font-semibold text-secondary mt-4">
                        Consideration
                      </h5>
                      <p className="lg:text-base font-medium text-textLightGray pt-0.5">
                        {qualities.consideration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
