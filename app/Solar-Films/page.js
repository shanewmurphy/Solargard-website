"use client";
import { useEffect } from "react";

import SolarFilmsData from "../compontents/Solar-films-collection/solar-films";
import Image from "next/image";
import SolarFilmHeroImg from "../compontents/heros/solar-films-hero";
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
      <div className="bg-secondary lg:py-60 lg:px-24 md:py-48 md:px-16 sm:py-24 sm:px-8 antialiased">
        <h1 className="text-white font-light lg:text-3xl md:text-2xl sm:text-xl">
          Discover the power of Solar Gard Ireland’s premium solar films,
          designed to enhance comfort, reduce energy costs, and protect your
          interiors. Our advanced solar films provide a range of benefits,
          including heat reduction, anti glare control, and enhanced privacy,
          making them the ideal solution for residential, commercial, and
          industrial applications.
        </h1>
      </div>
      <div className="bg-secondary">
        <div className="text-white">llll</div>
      </div>
      <div className="flex">
        <SolarFilmsData />
      </div>
    </div>
  );
}
