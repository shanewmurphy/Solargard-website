"use client";
import { useEffect } from "react";
import Image from "next/image";
import HomeHero from "./compontents/heros/home-hero";
import HomeIntroText from "./compontents/Intro-texts/home-intro";
export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div>
      <div>
        <HomeHero />
      </div>
      <div>
        <HomeIntroText />
      </div>
    </div>
  );
}
