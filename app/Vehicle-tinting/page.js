"use client";
import { useEffect } from "react";
import Image from "next/image";

import HeroImg from "/public/images/car-tinting-imgs/Hero-car-tinting-img-min.jpg";
import { Description } from "@headlessui/react";
import CarTierOne from "/public/images/car-tinting-imgs/Car-imgs-pricing-A.png";
const vehicletintingData = [
  {
    id: "01",
    title: "Professional Installation: Expertise You Can Trust",
    description:
      "Our skilled technicians have years of experience in installing vehicle tints, guaranteeing a flawless result every time",
    thumbnail: "/images/car-tinting-imgs/thumbnail_01.jpg",
  },
  {
    id: "02",
    title: "Long Lasting Performance: Quality That Endures",
    description:
      "With our high-quality tints, you can enjoy long-lasting performance and protection against harmful UV rays.",
    thumbnail: "/images/car-tinting-imgs/thumbnail_02.jpg",
  },
  {
    id: "03",
    title: "Enhance Your Vehicle’s Style: Aesthetics That Impress",
    description:
      "With our high-quality tints, you can enjoy long-lasting performance and protection against harmful UV rays.",
    thumbnail: "/images/car-tinting-imgs/thumbnail_03.jpg",
  },
];

const tintingPricingListData = [
  {
    id: "01",
    tierName: "CLASSIC",
    filmType: "ATC Dyed",
    image: CarTierOne,
    fourDoorSalon: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 190,
      halfprice: 150,
    },
    fiveDoorHatchback: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 190,
      halfprice: 150,
    },
    estate: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 190,
      halfprice: 150,
    },
    coupe: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 190,
      halfprice: 150,
    },
  },
  {
    id: "02",
    tierName: "HIGH PERFORMANCE",
    filmType: "ATR Metalized",
    image: CarTierOne,
    fourDoorSalon: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 290,
      halfprice: 250,
    },
    fiveDoorHatchback: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 290,
      halfprice: 250,
    },
    estate: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 290,
      halfprice: 250,
    },
    coupe: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 290,
      halfprice: 250,
    },
  },
  {
    id: "03",
    tierName: "AVANTGARDE",
    filmType: "IRX Nano Ceramic",
    image: CarTierOne,
    fourDoorSalon: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 390,
      halfprice: 250,
    },
    fiveDoorHatchback: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 390,
      halfprice: 250,
    },
    estate: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 390,
      halfprice: 250,
    },
    coupe: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 390,
      halfprice: 250,
    },
  },
];

export default function VehicleTinting() {
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
            src={HeroImg}
            alt="Solar Gard Solar Films"
            sizes="100vw"
            placeholder="blur"
            style={{
              width: "100%",
              objectFit: "cover",
            }}
            className="h-[70vh] object-top"
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
          At Solar Gard Ireland, our expert vehicle tinting services combine
          style, comfort, and protection. Whether you&apos;re looking to reduce
          heat, protect your interior, or add a sleek look to your car, our
          high-quality tint films are designed to meet your needs. With a range
          of shades and styles, we offer customised solutions that enhance your
          driving experience.
        </h1>
      </div>
      <div className="bg-grey lg:py-32 lg:px-24">
        <div className="largeScreens:w-10/12 lg:w-11/12 mx-auto">
          <div className="grid grid-cols-3 gap-8 antialiase">
            {vehicletintingData.map((veheicleData) => (
              <div
                className="bg-white p-4 pb-24 rounded-lg text-secondary"
                key={veheicleData.id}
              >
                <div className="flex relative w-full h-[390px]">
                  <Image
                    className="rounded-md"
                    src={veheicleData.thumbnail}
                    alt="Solar Gard Solar Films"
                    sizes="100vw"
                    placeholder="blur"
                    blurDataURL="/path/to/placeholder.jpg" // Optional blur image
                    fill // Automatically fills the parent container
                    style={{
                      objectFit: "cover", // Ensures the image covers the container
                    }}
                  />
                </div>
                <h3 className="lg:text-2xl md:text-xl font-bold mt-8">
                  {veheicleData.title}
                </h3>
                <p className="mt-4">{veheicleData.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-40">
            <div className="lg:w-9/12 mx-auto antialiased">
              <div className="lg:w-9/12 mx-auto mb-6">
                <h3 className="text-center font-bold text-4xl">
                  Choose the Perfect Tinting Package for Your Vehicle
                </h3>
                <h4 className="text-center font-medium">
                  Below are our available packages, designed to suit different
                  preferences and budgets. Whether you want a full vehicle tint
                  or just a few windows, we have the right option for you.
                </h4>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-12">
              {tintingPricingListData.map((tier) => (
                <div key={tier.id} className="bg-white rounded-lg p-8">
                  <div className="lg:w-7/12 mx-auto">
                    <Image src={tier.image} />
                  </div>
                  <h2 className="text-2xl font-bold">{tier.tierName}</h2>
                  <p className="text-gray-600">{tier.filmType}</p>
                  <div className="mt-6 border-b-2 pb-4">
                    <h3 className="text-base font-semibold mb-1">
                      4-Door Salon
                    </h3>
                    <div className="flex justify-between">
                      <div>{tier.fourDoorSalon.full}</div>
                      <div>€{tier.fourDoorSalon.fullprice}</div>
                    </div>
                    <div className="flex justify-between">
                      <div>{tier.fourDoorSalon.half}</div>
                      <div>€{tier.fourDoorSalon.halfprice}</div>
                    </div>
                  </div>
                  <div className="mt-4 border-b-2 pb-4">
                    <h3 className="text-base font-semibold mb-1">
                      5-Door Hatchback
                    </h3>
                    <div className="flex justify-between">
                      <div>{tier.fiveDoorHatchback.full}</div>
                      <div>€{tier.fiveDoorHatchback.fullprice}</div>
                    </div>
                    <div className="flex justify-between">
                      <div>{tier.fiveDoorHatchback.half}</div>
                      <div>€{tier.fiveDoorHatchback.halfprice}</div>
                    </div>
                  </div>
                  <div className="mt-4 border-b-2 pb-4">
                    <h3 className="text-base font-semibold">Estate</h3>
                    <div className="flex justify-between">
                      <div>{tier.estate.full}</div>
                      <div>€{tier.estate.fullprice}</div>
                    </div>
                    <div className="flex justify-between">
                      <div>{tier.estate.half}</div>
                      <div>€{tier.estate.halfprice}</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-base font-semibold">Coupe</h3>
                    <div className="flex justify-between">
                      <div>{tier.coupe.full}</div>
                      <div>€{tier.coupe.fullprice}</div>
                    </div>
                    <div className="flex justify-between">
                      <div>{tier.coupe.half}</div>
                      <div>€{tier.coupe.halfprice}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
