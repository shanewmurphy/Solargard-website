import Image from "next/image";

import HomeHeroImgMobile from "@/public/images/hero-imgs/home-hero-mobile.jpg";
import BlendedHeroImg from "@/public/images/hero-imgs/Blended_Hero-img-min.jpg";
import HeroMdImg from "@/public/images/hero-imgs/Hero-homepge_md.jpg";
export default function HomeHero() {
  return (
    <div className="w-full h-auto">
      <div className="relative antialiased">
        <div>
          <div className="lg:block md:hidden sm:hidden">
            <Image
              className="h-[70vh]"
              alt="Solar Gard"
              src={BlendedHeroImg}
              placehoolder="blur"
              quality={100}
              size="100vw"
              style={{
                objectFit: "cover",
                width: "100%",
              }}
            />
          </div>
          <div className="lg:hidden md:block sm:hidden sm:h-[auto] bg-no-repeat">
            <Image
              alt="Solar Gard Solar Films"
              className="h-[70vh]"
              src={HeroMdImg}
              placehoolder="blur"
              quality={100}
              size="100vw"
              style={{
                objectFit: "cover",
                width: "100%",
              }}
            />
          </div>
          {/* Gradient Overlay without opacity on the container */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-800 from-1% to-transparent"></div>

          {/* Text content outside of the gradient and with 100% opacity */}
          <div className="absolute z-0 lg:w-8/12 mx-auto inset-0 flex flex-col justify-center items-center antialiased">
            <h1 className="text-white text-center lg:text-7xl md:text-4xl sm:text-2xl font-bold">
              Solar Gard Solutions Ireland
            </h1>
            <h1 className="text-white text-center lg:text-5xl md:text-4xl sm:text-3xl font-bold mt-2">
              Tints - Prints - Wraps
            </h1>
            <h1 className="text-white w-[90%] text-center lg:font-semibold md:font-bold sm:font-medium lg:text-4xl sm:px-8 z-10 opacity-100 mt-4">
              Transform Spaces & Vehicles with Solar Gard Ireland. Experts in
              Glass Films, Surface Enhancements & Custom Wraps
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
