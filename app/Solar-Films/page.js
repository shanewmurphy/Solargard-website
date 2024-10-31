"use client";
import { useEffect } from "react";

import SolarFilmsData from "../compontents/Solar-films-collection/solar-films";
import Image from "next/image";
import SolarFilmHeroImg from "../compontents/heros/solar-films-hero";

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
        <div>
          <SolarFilmHeroImg />
        </div>
      </div>
      <div className="bg-secondary  lg:py-64 lg:px-24 md:py-48 md:px-16 sm:py-24 sm:px-8 antialiased">
        <h1 className="text-white font-light lg:text-3xl md:text-2xl sm:text-xl">
          Discover the power of Solar Gard Ireland’s premium solar films,
          designed to enhance comfort, reduce energy costs, and protect your
          interiors. Our advanced solar films provide a range of benefits,
          including heat reduction, anti glare control, and enhanced privacy,
          making them the ideal solution for residential, commercial, and
          industrial applications.
        </h1>
      </div>
      <div className="bg-secondary p-32 antialiased">
        <h2 className="text-white text-center font-bold lg:text-6xl">
          Key Benefits of Solar Films
        </h2>
        <div>
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
        </div>
      </div>
      <div className="w-full object-cover h-[auto] lg:bg-[url('/images/company-profile/background-gradient-img-min.png')] md:bg-[url('/images/company-profile/background-gradient-img-min.png' pb-80">
        <h4 className="text-white text-center font-bold lg:text-5xl py-16">
          Facts and statistics about Solar Films
        </h4>
        <div className="w-10/12 mx-auto">
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
        <div className="relative w-full h-screen overflow-hidden">
          <Image
            src="/images/solar-films-imgs/Environmental-min.jpg"
            layout="fill"
            alt="Solar Gard"
            objectFit="cover"
          />
          <div className="absolute bottom-0 pb-40 pl-20 text-white">
            <h4 className="lg:text-5xl font-bold mb-2">Environmental Impact</h4>
            <p className="font-medium lg:text-3xl w-[60%]">
              By improving energy efficiency, solar films can contribute to a
              reduction in a building&apos;s carbon footprint by 10-15% over
              time.
            </p>
          </div>
        </div>
      </div>
      <div className="flex">
        <SolarFilmsData />
      </div>
    </div>
  );
}
