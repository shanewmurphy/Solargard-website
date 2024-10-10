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
              alt="Solar Gard Solar Films"
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
          <div className="absolute bottom-0 flex items-center">
            <h1 className="text-white lg:font-bold md:font-bold sm:font-semibold lg:text-4xl md:text-3xl sm:text-xl lg:w-[70%] lg:pb-16 lg:pl-24 md:pb-16 md:pl-16 sm:px-8 sm:py-8 z-10 opacity-100">
              Transform Spaces & Vehicles with Solar Gard Ireland. Experts in
              Glass Films, Surface Enhancements & Custom Wraps
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
