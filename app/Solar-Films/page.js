"use client";
import { useEffect } from "react";

import SolarFilmsData from "../compontents/film-collections/solar-films";
import Image from "next/image";
import SolarFilmHeroImg from "/public/images/hero-imgs/Hero-solar-film-img-min.jpg";
import EnvironmentalImg from "/public/images/solar-films-imgs/Environmental-min.jpg";
import OurServiceCarousel from "../compontents/shared-compontents/our-services-carousel";
import SolarFilmsFAQs from "../compontents/FAQs/solar-film-faqs";
import ContactUs from "../compontents/shared-compontents/Contact-Us";
const BenefitsCardData = [
  {
    id: "01",
    title: "Heat Reduction",
    number: "1",
    description:
      "Solar films significantly reduce heat gain, keeping your space cooler and more comfortable during hot weather.",
    benefit: "Lower cooling costs and increased comfort",
    imageUrl: "/images/solar-films-imgs/heat-reduction.jpg",
  },
  {
    id: "02",
    title: "Anti Glare",
    number: "2",
    description:
      "Minimise glare from the sun, improving visibility and reducing eye strain.",
    benefit: "Enhanced comfort and productivity in living and working spaces",
    imageUrl: "/images/solar-films-imgs/anti-glare.jpg",
  },
  {
    id: "03",
    title: "UV Protection",
    number: "3",
    description:
      "Block up to 99% of harmful UV rays, protecting your skin and preventing fading of furnishings",
    benefit: "Prolonged lifespan of interiors and improved occupant health",
    imageUrl: "/images/solar-films-imgs/UV-protection.jpg",
  },
];

export default function SolarFilms() {
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
              src={SolarFilmHeroImg}
              alt="Solar Gard Solar Films"
              sizes="100vw"
              placeholder="blur"
              style={{
                width: "100%",
                objectFit: "cover",
              }}
            />
            <div className="absolute lg:w-4/5 largeScreens:w-9/12 inset-0 flex items-end justify-start lg:p-24 md:p-12 sm:p-8 largeScreens:p-40 rounded-bl-lg">
              <h1 className="text-white lg:text-5xl md:text-3xl sm:text-xl largeScreens:text-6xl font-bold">
                Experience the Ultimate in Comfort and Efficiency with Solar
                Films
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary lg:py-32 lg:px-24 md:py-32 md:px-16 sm:py-24 sm:px-6 antialiased">
        <h1 className="text-white font-light lg:text-3xl largeScreens:text-4xl md:text-2xl sm:text-xl largeScreens:w-10/12 xl:mx-auto">
          Discover the power of Solar Gard Ireland’s premium solar films,
          designed to enhance comfort, reduce energy costs, and protect your
          interiors. Our advanced solar films provide a range of benefits,
          including heat reduction, anti glare control, and enhanced privacy,
          making them the ideal solution for residential, commercial, and
          industrial applications.
        </h1>
      </div>
      <div className="bg-secondary lg:py-40 antialiased">
        <h2 className="text-white text-center font-bold lg:text-5xl md:text-4xl sm:text-2xl mb-8">
          Key Benefits of Solar Films
        </h2>
        <div>
          <div className="lg:w-12/12 largeScreens:w-8/12 md:w-10/12 sm:w-11/12 mx-auto antialiased">
            <div className="grid lg:grid-cols-3 gap-12 largeScreens:gap-20 text-white pb-24">
              {BenefitsCardData.map((benefit) => (
                <div key={benefit.id}>
                  <div className="relative" key={benefit.id}>
                    <Image
                      className="rounded-2xl lg:h-64 md:h-64 sm:h-52"
                      alt="Solar Gard ireland Solar Films benefits"
                      src={benefit.imageUrl}
                      placehoolder="blur"
                      quality={100}
                      width={592}
                      height={444}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                    <div
                      className="absolute inset-0 flex items-end justify-start p-8 text-white largeScreens:text-4xl text-3xl font-bold rounded-bl-lg"
                      key={benefit.id}
                    >
                      {benefit.title}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-base lg:mt-2 md:mt-3 sm:mt-4">
                      {benefit.description}
                    </p>
                    <h6 className="mt-3 font-semibold text-lg antialiased">
                      Benefits
                    </h6>
                    <p className="text-base font-medium">{benefit.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full back-gradient">
        <h4 className="text-white text-center font-semibold largeScreens:text-6xl lg:text-5xl md:text-4xl sm:text-2xl lg:py-16 md:py-12 sm:py-8">
          Facts and Statistics about Solar Films
        </h4>
        <div className="lg:w-10/12 largeScreens:w-8/12 md:w-8/12 sm:w-10/12 mx-auto sm:pb-40">
          <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 lg:gap-24 md:gap-8 sm:gap-8 text-white text-center">
            <div>
              <h3 className="lg:text-9xl md:text-7xl sm:text-7xl font-extrabold text-center">
                99
                <span className="lg:text-4xl sm:text-2xl">%</span>
              </h3>
              <h2 className="font-bold lg:text-3xl md:text-3xl sm:text-3xl sm:mt-2">
                UV Protection
              </h2>
              <p className="text-white font-normal text-base mt-3">
                Solar films block up to 99% of harmful UV rays, protecting your
                skin and reducing the fading of furnishings, carpets, and
                artwork
              </p>
            </div>
            <div>
              <h3 className="lg:text-9xl md:text-7xl sm:text-7xl font-extrabold text-center">
                78
                <span className="lg:text-4xl sm:text-2xl">%</span>
              </h3>
              <h2 className="font-bold lg:text-3xl md:text-3xl sm:text-3xl sm:mt-2">
                Heat Reduction
              </h2>
              <p className="text-white font-normal text-base mt-3">
                Solar films can reduce up to 78% of solar heat gain through
                windows, keeping interiors significantly cooler during hot
                weather.
              </p>
            </div>
            <div>
              <h3 className="lg:text-9xl md:text-7xl sm:text-7xl font-extrabold text-center">
                30
                <span className="lg:text-4xl sm:text-2xl">%</span>
              </h3>
              <h2 className="font-bold lg:text-3xl md:text-3xl sm:text-3xl sm:mt-2">
                Energy Savings
              </h2>
              <p className="text-white font-normal text-base mt-3">
                By reducing the need for air conditioning, solar films can lower
                cooling energy costs by up to 30%, making them a cost-effective
                solution for both homes and businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative w-full lg:h-[75vh] md:h-[70vh] sm:h-[60vh] overflow-hidden">
          <Image
            src={EnvironmentalImg}
            fill
            alt="Solar Gard Ireland Environmental impact of Solar films"
            sizes="100vw"
            style={{
              objectFit: "cover", // cover, contain, none
            }}
          />
          <div className="absolute bottom-0 pb-28 lg:pl-20 largeScreens:py-40 largeScreens:pl-40 md:pl-8 sm:pl-6 text-white">
            <h4 className="lg:text-6xl largeScreens:text-7xl md:text-5xl sm:text-3xl font-bold mb-2">
              Environmental Impact
            </h4>
            <p className="font-medium lg:text-3xl md:text-2xl sm:text-base lg:w-[60%]">
              By improving energy efficiency, solar films can contribute to a
              reduction in a building&apos;s carbon footprint by 10-15% over
              time.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full bg-gray">
        <SolarFilmsData />
      </div>
      <div>
        <OurServiceCarousel />
      </div>
      <div>
        <SolarFilmsFAQs />
      </div>
      <div>
        <ContactUs />
      </div>
    </div>
  );
}
