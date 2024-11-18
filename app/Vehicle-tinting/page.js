"use client";
import { useEffect } from "react";
import Image from "next/image";
import HeroImg from "/public/images/car-tinting-imgs/Hero-car-tinting-img-min.jpg";
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
          style, comfort, and protection. Whether you're looking to reduce heat,
          protect your interior, or add a sleek look to your car, our
          high-quality tint films are designed to meet your needs. With a range
          of shades and styles, we offer customised solutions that enhance your
          driving experience.
        </h1>
      </div>
    </div>
  );
}
