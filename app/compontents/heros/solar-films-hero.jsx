import Image from "next/image";
import SolarFilmHero from "@/public/images/hero-imgs/Hero-solar-film-img-min.jpg";

export default function SolarFilmHeroImg() {
  return (
    <div>
      <div className="w-full flex relative">
        <Image
          alt="Solar Gard Solar Films"
          src={SolarFilmHero}
          placehoolder="blur"
          quality={100}
          size="100vw"
          style={{
            objectFit: "cover",
            width: "100%",
          }}
        />
        <div className="absolute">AAAA</div>
      </div>
    </div>
  );
}
