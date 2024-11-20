"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import CarTintingFAQs from "../compontents/FAQs/car-tinting-faqs";
import OurServiceCarousel from "../compontents/shared-compontents/our-services-carousel";
import ContactUs from "../compontents/shared-compontents/Contact-Us";

import HeroImg from "/public/images/car-tinting-imgs/Hero-car-tinting-img-min.jpg";
import CarTierOne from "/public/images/car-tinting-imgs/Car-imgs-pricing-A.png";
import CarTierTwo from "/public/images/car-tinting-imgs/Car-imgs-pricing-b.png";
import CarTierThree from "/public/images/car-tinting-imgs/Car-imgs-pricing-c.png";
import GlueDyed from "/public/images/car-tinting-imgs/Glue-Dyed-profile-img.jpg";
import HPMetallized from "/public/images/car-tinting-imgs/HP-Metallized-profile-img.jpg";
import NanoCeramic from "/public/images/car-tinting-imgs/Nano-Ceramic-profile-img.jpg";

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
    tierName: "Entry",
    filmType: "Glue Dyed",
    warranty: "2 years",
    image: CarTierOne,
    Hatchback: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 320,
      halfprice: 150,
    },
    SUV: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 340,
      halfprice: 170,
    },
    coupe: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 300,
      halfprice: 130,
    },
    MPV: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 330,
      halfprice: 170,
    },
  },
  {
    id: "02",
    tierName: "Standard",
    filmType: "Hp Metalised",
    warranty: "15 years",
    image: CarTierTwo,
    Hatchback: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 360,
      halfprice: 170,
    },
    SUV: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 380,
      halfprice: 190,
    },
    coupe: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 340,
      halfprice: 150,
    },
    MPV: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 340,
      halfprice: 150,
    },
  },
  {
    id: "03",
    tierName: "High",
    filmType: "Nano Ceramic",
    warranty: "Lifetime",
    image: CarTierThree,
    Hatchback: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 400,
      halfprice: 260,
    },
    SUV: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 490,
      halfprice: 270,
    },
    coupe: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 390,
      halfprice: 250,
    },
    MPV: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 430,
      halfprice: 270,
    },
  },
];

const FilmSpecsData = [
  {
    id: "01",
    filmName: "Glue Dyed",
    profileImg: GlueDyed,
    filmProfile:
      "Provides an economical option for enhancing your car’s appearance and maintaining privacy. Ideal for drivers seeking basic UV protection and moderate glare reduction on a budget",
    HeatReduction: "Low",
    GlareReduction: "Moderate",
    UVProtection: "Up to 99%",
    Warranty: "2 years",
    Durability: "Prone to fading over time",
  },
  {
    id: "02",
    filmName: "HP Metallized",
    profileImg: HPMetallized,
    filmProfile:
      "Offers excellent heat rejection, glare reduction, and long-lasting durability. A perfect mid-tier choice for those who want enhanced comfort and a sleek.",
    HeatReduction: "High",
    GlareReduction: "Effective",
    UVProtection: "Up to 99%",
    Warranty: "15 years",
    Durability: "Long-lasting, minimal fading",
  },
  {
    id: "03",
    filmName: "Nano Ceramic",
    profileImg: NanoCeramic,
    filmProfile:
      "Delivers superior heat rejection, outstanding clarity, and unmatched durability. The premium choice for those who demand top-tier performance, maximum UV protection, and a lifetime of reliability.",
    HeatReduction: "Superior",
    GlareReduction: "Excellent",
    UVProtection: "Up to 99%",
    Warranty: "Lifetime",
    Durability: "Extremely durable, fade-resistant",
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
                {/* <h4 className="text-center font-medium mt-2">
                  Below are our available packages, designed to suit different
                  preferences and budgets. Whether you want a full vehicle tint
                  or just a few windows, we have the right option for you.
                </h4> */}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-12">
              {tintingPricingListData.map((tier) => (
                <div
                  key={tier.id}
                  className="bg-white rounded-lg p-8 antialiased"
                >
                  <div className="lg:w-7/12 mx-auto">
                    <Image src={tier.image} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">{tier.tierName}</h2>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <h5 className="text-gray-600 font-semibold text-2xl">
                        {tier.filmType}
                      </h5>
                    </div>
                    <div>
                      <button className="text-sm font-medium underline hover:no-underline hover:text-primary">
                        <Link
                          to="specsScrollTo"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                        >
                          View Specs
                        </Link>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center text-base font-medium text-secondary justify-between mt-1">
                    <div>Warranty</div>
                    <div className="font-semibold">{tier.warranty}</div>
                  </div>
                  <div className="mt-4 border-b-2 pb-4">
                    <h3 className="text-base font-semibold mb-1">Hatchback</h3>
                    <div className="flex justify-between font-semibold">
                      <div>{tier.Hatchback.full}</div>
                      <div>€{tier.Hatchback.fullprice}</div>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <div>{tier.Hatchback.half}</div>
                      <div>€{tier.Hatchback.halfprice}</div>
                    </div>
                  </div>
                  <div className="mt-4 border-b-2 pb-4">
                    <h3 className="text-base font-semibold mb-1">MPV/Van</h3>
                    <div className="flex justify-between font-semibold">
                      <div>{tier.MPV.full}</div>
                      <div>€{tier.MPV.fullprice}</div>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <div>{tier.MPV.half}</div>
                      <div>€{tier.MPV.halfprice}</div>
                    </div>
                  </div>
                  <div className="mt-4 border-b-2 pb-4">
                    <h3 className="text-base font-semibold">Estate/SUV/Jeep</h3>
                    <div className="flex justify-between font-semibold">
                      <div>{tier.SUV.full}</div>
                      <div>€{tier.SUV.fullprice}</div>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <div>{tier.SUV.half}</div>
                      <div>€{tier.SUV.halfprice}</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-base font-semibold">Coupe</h3>
                    <div className="flex justify-between font-semibold">
                      <div>{tier.coupe.full}</div>
                      <div>€{tier.coupe.fullprice}</div>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <div>{tier.coupe.half}</div>
                      <div>€{tier.coupe.halfprice}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:w-8/12 mx-auto mt-8">
              <h4 className="font-medium text-center text-secondary text-2xl">
                Simply call us to book. Provide us with your vehicle&apos;s make
                and model, and let us know which package you&apos;re interested
                in.
              </h4>
              <h5 className="text-center mt-4 font-semibold text-3xl">
                021 4545606
              </h5>
            </div>
          </div>
          <div className="mt-48">
            <div className="lg:w-9/12">
              <h2 className="font-bold text-secondary lg:text-4xl">
                Discover the Best Tinting Film for Your Vehicle
              </h2>
              <p className="font-medium text-textGray text-xl mt-2">
                At Solar Gard Ireland, we offer a range of high-performance
                vehicle tinting films designed to suit various needs and
                preferences
              </p>
            </div>
            <div
              className="grid grid-cols-3 gap-12 mt-8 lg:text-base antialiased"
              id="specsScrollTo"
            >
              {FilmSpecsData.map((specsData) => (
                <div className="bg-white rounded-lg p-8" key={specsData.id}>
                  <div className="rounded-full h-64 w-64  bg-gray-300 mx-auto">
                    <Image
                      src={specsData.profileImg}
                      className="h-64 w-64 rounded-full"
                      style={{
                        width: "100%",
                        objectFit: "auto",
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-center mt-3 lg:text-3xl">
                      {specsData.filmName}
                    </h2>
                  </div>
                  <div className="flex items-center justify-between text-secondary font-semibold mt-4">
                    <div>
                      <h6>Heat Reduction</h6>
                    </div>
                    <div>
                      <span className="font-medium lg:text-sm text-textGray">
                        {specsData.HeatReduction}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-secondary font-semibold mt-1">
                    <div>
                      <h6>Glare Reduction</h6>
                    </div>
                    <div>
                      <span className="font-medium lg:text-sm text-textGray">
                        {specsData.GlareReduction}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-secondary font-semibold mt-1">
                    <div>
                      <h6>Warranty</h6>
                    </div>
                    <div>
                      <span className="font-medium lg:text-sm text-textGray">
                        {specsData.Warranty}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-secondary font-semibold mt-1">
                    <div>
                      <h6>Durability</h6>
                    </div>
                    <div>
                      <span className="font-medium lg:text-sm text-textGray">
                        {specsData.Durability}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-secondary mt-6">
                      {specsData.filmProfile}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-40">
            <CarTintingFAQs />
          </div>
        </div>
      </div>
      <div className="w-full">
        <OurServiceCarousel />
      </div>
      <div>
        <ContactUs />
      </div>
    </div>
  );
}
