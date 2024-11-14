import Image from "next/image";
import HomeHeroImg from "@/public/images/hero-imgs/home-hero.jpg";
import HomeHeroImgMobile from "@/public/images/hero-imgs/home-hero-mobile.jpg";
export default function HomeHero() {
  return (
    <div className="w-full h-auto">
      <div className="relative antialiased">
        <div>
          <div className="lg:block md:block sm:hidden">
            <Image
              className="h-[60vh]"
              alt="Solar Gard"
              src={HomeHeroImg}
              placehoolder="blur"
              quality={100}
              size="100vw"
              style={{
                objectFit: "cover",
                width: "100%",
              }}
            />
          </div>
          <div className="lg:hidden md:hidden sm:block sm:h-[auto] bg-no-repeat">
            <Image
              alt="Solar Gard Solar Films"
              src={HomeHeroImgMobile}
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
          <div className="absolute w-7/12 mx-auto inset-0 flex justify-center items-center">
            <h1 className="text-white text-center lg:font-semibold md:font-bold sm:font-semibold largeScreens:text-5xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-xl sm:px-8 z-10 opacity-100">
              Transform Spaces & Vehicles with Solar Gard Ireland. Experts in
              Glass Films, Surface Enhancements & Custom Wraps
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
