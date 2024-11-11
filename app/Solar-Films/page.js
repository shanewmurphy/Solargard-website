"use client";
import { useEffect } from "react";

import SolarFilmsData from "../compontents/film-collections/solar-films";
import Image from "next/image";
import SolarFilmHeroImg from "/public/images/hero-imgs/Hero-solar-film-img-min.jpg";
import EnvironmentalImg from "/public/images/solar-films-imgs/Environmental-min.jpg";
import GradientBackground from "/public/images/company-profile/background-gradient-img-min.png";
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
              style={{
                width: "100%",
                objectFit: "cover",
              }}
            />
            <div className="absolute lg:w-4/5 largeScreens:w-9/12 inset-0 flex items-end justify-start p-24 text-white lg:text-5xl largeScreens:text-6xl font-bold rounded-bl-lg">
              <h1>
                Experience the Ultimate in Comfort and Efficiency with Solar
                Films
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary lg:py-32 lg:px-24 md:py-32 md:px-16 sm:py-24 sm:px-8 antialiased">
        <h1 className="text-white font-light lg:text-3xl largeScreens:text-4xl md:text-2xl sm:text-xl largeScreens:w-10/12 xl:mx-auto">
          Discover the power of Solar Gard Ireland’s premium solar films,
          designed to enhance comfort, reduce energy costs, and protect your
          interiors. Our advanced solar films provide a range of benefits,
          including heat reduction, anti glare control, and enhanced privacy,
          making them the ideal solution for residential, commercial, and
          industrial applications.
        </h1>
      </div>
      <div className="bg-secondary p-32 antialiased">
        <h2 className="text-white text-center font-bold lg:text-5xl mb-8">
          Key Benefits of Solar Films
        </h2>
        <div>
          <div className="lg:w-12/12 largeScreens:w-10/12 mx-auto antialiased">
            <div className="grid grid-cols-3 gap-12 text-white">
              {BenefitsCardData.map((benefit) => (
                <div key={benefit.id}>
                  <div className="relative" key={benefit.id}>
                    <Image
                      className="rounded-2xl h-64"
                      alt="Solar Gard ireland Solar Films benefits"
                      src={benefit.imageUrl}
                      placehoolder="blur"
                      quality={100}
                      width={480}
                      height={430}
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
                    <p className="font-medium text-base mt-2">
                      {benefit.description}
                    </p>
                    <h6 className="mt-3 font-semibold text-lg">Benefits</h6>
                    <p className="text-base font-medium">{benefit.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*  
          {BenefitsCardData.map((benefit) => (
            <div
              className="bg-white lg:rounded-xl flex flex-row gap-36 lg:py-16 lg:px-16 my-24"
              key={benefit.id}
            >
              <div className="basis-3/5 mt-24 text-secondary">
                <div className="flex">
                  <span className="flex items-center justify-center font-bold w-14 h-14 rounded-full border-2 border-zinc-900 lg:text-4xl">
                    {benefit.number}
                  </span>
                  <h3 className="flex items-center justify-center font-bold lg:text-4xl md:text-3xl sm:text-2xl lg:pl-4">
                    {benefit.title}
                  </h3>
                </div>
                <p className="lg:pt-4 font-medium">{benefit.description}</p>
                <h4 className="lg:mt-4 font-semibold lg:text-2xl">Benefit</h4>
                <p>{benefit.benefit}</p>
              </div>
              <div className="basis-2/5">
                <Image
                  className="rounded-2xl"
                  alt="Solar Gard ireland Solar Films benefits"
                  src={benefit.imageUrl}
                  placehoolder="blur"
                  quality={100}
                  width={480}
                  height={430}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </div>
            </div>
          ))}
             */}
        </div>
      </div>
      <div className="w-full h-[70vh] bg-cover bg-center largeScreens:bg-[url('/images/company-profile/background-gradient-img-min.png')] md:bg-[url('/images/company-profile/background-gradient-img-min.png')]">
        <h4 className="text-white text-center font-bold lg:text-5xl py-16">
          Facts and statistics about Solar Films
        </h4>
        <div className="lg:w-10/12 largeScreens:w-9/12 mx-auto">
          <div className="grid grid-cols-3 gap-24 text-white">
            <div>
              <h3 className="lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent">
                99
                <span className="lg:text-6xl">%</span>
              </h3>
              <h2 className="font-bold lg:text-3xl">UV Protection</h2>
              <p className="text-white font-normal text-base mt-3">
                Solar films block up to 99% of harmful UV rays, protecting your
                skin and reducing the fading of furnishings, carpets, and
                artwork
              </p>
            </div>
            <div>
              <h3 className="lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent">
                78
                <span className="lg:text-6xl">%</span>
              </h3>
              <h2 className="font-bold lg:text-3xl">Heat Reduction</h2>
              <p className="text-white font-normal text-base mt-3">
                Solar films can reduce up to 78% of solar heat gain through
                windows, keeping interiors significantly cooler during hot
                weather.
              </p>
            </div>
            <div>
              <h3 className="lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent">
                30
                <span className="lg:text-6xl">%</span>
              </h3>
              <h2 className="font-bold lg:text-3xl">Energy Savings</h2>
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
        <div className="relative w-full h-[75vh] overflow-hidden">
          <Image
            src={EnvironmentalImg}
            fill
            alt="Solar Gard Ireland Environmental impact of Solar films"
            sizes="100vw"
            style={{
              objectFit: "cover", // cover, contain, none
            }}
          />
          <div className="absolute bottom-0 pb-28 pl-20 text-white">
            <h4 className="lg:text-6xl font-bold mb-2">Environmental Impact</h4>
            <p className="font-medium lg:text-3xl w-[60%]">
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
    </div>
  );
}
