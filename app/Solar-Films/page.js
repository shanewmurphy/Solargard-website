import SolarFilmsData from "../compontents/Solar-films-collection/solar-films";
import Image from "next/image";
// import SolarFilmHero from "@/public/images/hero-imgs/Hero-solar-film-img-min.jpg";
import SolarFilmHeroImg from "../compontents/heros/solar-films-hero";
export default function SolarFilms() {
  return (
    <div>
      <div>
        <div>
          <SolarFilmHeroImg />
        </div>
      </div>
      <div className="bg-slate-400">KKKKKK</div>
      <div className="flex">
        <SolarFilmsData />
      </div>
    </div>
  );
}
