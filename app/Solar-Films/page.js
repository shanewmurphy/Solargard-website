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
const FactsStatsData = [
  {
    id: "01",
    number: "78",
    title: "Heat Reduction",
    description:
      "Solar films can reduce up to 78% of solar heat gain through windows, keeping interiors significantly cooler during hot weather.",
  },
  {
    id: "02",
    number: "99",
    title: "UV Protection",
    description:
      "Solar films block up to 99% of harmful UV rays, protecting your skin and reducing the fading of furnishings, carpets, and artwork.",
  },
  {
    id: "03",
    number: "30",
    title: "Energy Savings",
    description:
      "By reducing the need for air conditioning, solar films can lower cooling energy costs by up to 30%, making them a cost-effective solution for homes and businesses.",
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
              className="h-[70vh]"
            />
            <div className="absolute lg:w-4/5 largeScreens:w-9/12 inset-0 flex items-end justify-start lg:p-24 md:p-12 sm:p-8 largeScreens:p-40 rounded-bl-lg">
              {/* <h1 className="text-white lg:text-5xl md:text-3xl sm:text-xl largeScreens:text-6xl font-bold">
                Experience the Ultimate in Comfort and Efficiency with Solar
                Films
              </h1> */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-grey lg:py-32 lg:px-24 md:py-32 md:px-16 sm:py-24 sm:px-6 antialiased">
        <h1 className="text-secondary font-medium lg:text-3xl largeScreens:text-4xl md:text-2xl sm:text-xl largeScreens:w-10/12 xl:mx-auto">
          Discover the power of Solar Gard Ireland’s premium solar films,
          designed to enhance comfort, reduce energy costs, and protect your
          interiors. Our advanced solar films provide a range of benefits,
          including heat reduction, anti glare control, and enhanced privacy,
          making them the ideal solution for residential, commercial, and
          industrial applications.
        </h1>
      </div>
      <div className="flex w-full bg-grey">
        <SolarFilmsData />
      </div>
      <div className="bg-grey lg:py-40 antialiased">
        <h2 className="text-secondary text-center font-bold lg:text-4xl md:text-4xl sm:text-2xl uppercase mb-8">
          Key Benefits of Solar Films
        </h2>
        <div>
          <div className="lg:w-12/12 largeScreens:w-8/12 md:w-10/12 sm:w-11/12 mx-auto antialiased">
            <div className="grid lg:grid-cols-3 gap-12 largeScreens:gap-20 text-secondary pb-24">
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
                    <p className="font-medium text-base max-h-20 lg:mt-2 md:mt-3 sm:mt-4">
                      {benefit.description}
                    </p>
                    <h6 className="mt-3 font-semibold text-base antialiased">
                      Benefits
                    </h6>
                    <p className="text-sm font-medium">{benefit.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-grey w-full pb-60">
        <div className="w-10/12 mx-auto">
          {FactsStatsData.map((factstats) => (
            <div key={factstats.id} className="fact-item">
              <div className="bg-white  rounded-lg mb-4 px-16 py-16">
                <div className="flex flex-row gap-6">
                  <div className="basis-3/12">
                    <div className="flex items-end">
                      <h2 className="text-9xl font-extrabold">
                        {factstats.number}
                      </h2>
                      <span className="font-semibold text-3xl pb-5">%</span>
                    </div>
                  </div>
                  <div className="basis-9/12">
                    <h3 className="text-4xl text-secondary font-semibold">
                      {factstats.title}
                    </h3>
                    <p className="mt-4 w-10/12 text-textGray text-lg">
                      {factstats.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="bg-grey w-full pb-60">
        <div className="largeScreens:w-8/12 lg:w-10/12 w-10/12 mx-auto">
          <div className="flex text-secondary lg:flex-row sm:flex-col gap-16">
            <div className="basis-2/5">
              <h3 className="largeScreens:text-6xl xl:text-5xl lg:text-4xl font-bold uppercase">
                Facts and Statistics about Solar Films
              </h3>
              <h4 className="text-2xl text-textLightGray mt-8">
                Solar films significantly reduce heat gain, lowering the need
                for air conditioning and cutting down on energy bills
              </h4>
            </div>
            <div className="basis-3/5">
              {FactsStatsData.map((factstats) => (
                <div key={factstats.id} className="fact-item">
                  <div className="bg-white rounded-lg mb-4 px-8 py-6">
                    <div className="flex flex-row gap-6">
                      <div className="basis-1/5">
                        <div className="flex items-end">
                          <h2 className="text-7xl font-extrabold">
                            {factstats.number}
                          </h2>
                          <span className="font-semibold text-3xl pb-1">%</span>
                        </div>
                      </div>
                      <div className="basis-4/5">
                        <h3 className="text-xl text-secondary font-semibold">
                          {factstats.title}
                        </h3>
                        <p className="mt-1  text-textGray text-sm">
                          {factstats.description}
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

      <div>
        <div className="bg-grey w-full pb-40">
          <div className="relative largeScreens:w-9/12 lg:w-10/12 rounded-xl mx-auto lg:h-[60vh] md:h-[70vh] sm:h-[60vh] overflow-hidden">
            <Image
              src={EnvironmentalImg}
              fill
              alt="Solar Gard Ireland Environmental impact of Solar films"
              sizes="100vw"
              style={{
                objectFit: "cover", // cover, contain, none
              }}
              className="object-top"
            />
            <div className="absolute bottom-0 pb-28 lg:pl-20 largeScreens:py-40 largeScreens:pl-40 md:pl-8 sm:pl-6 text-white">
              <h4 className="lg:text-6xl largeScreens:text-7xl md:text-5xl sm:text-3xl font-bold mb-2">
                Environmental Impact
              </h4>
              <p className="font-medium lg:text-3xl md:text-2xl sm:text-base lg:w-[60%]">
                By improving energy efficiency, Solar Films can contribute to a
                reduction in a building&apos;s carbon footprint by 10-15% over
                time.
              </p>
            </div>
          </div>
        </div>
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
