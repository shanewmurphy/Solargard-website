"use client";
import { useEffect } from "react";
import Image from "next/image";
import CoverstylFilmComponent from "../compontents/film-collections/coverastyl-films-collection";

import CoverStylHeroImg from "/public/images/coverstyl/Coverstyl-hero-min.jpg";
import CostEffective from "/public/images/coverstyl/Cost-Effective.jpg";
import VersatileDurable from "/public/images/coverstyl/Versatile-Durable.jpg";
import Finishes from "/public/images/coverstyl/Finishes.jpg";

import Furniture from "/public/images/coverstyl/Furniture.jpg";
import WallCoverings from "/public/images/coverstyl/Wall-Coverings.jpg";
import commercial from "/public/images/coverstyl/Commercial-Spaces.jpg";

const WhyCoverstyl = [
  {
    id: "01",
    title: "Cost-Effective Renovation",
    description:
      "Forget the high costs of traditional refurbishments! With CoverStyl', you can completely revamp your space at a fraction of the cost. Whether it’s furniture, walls, or doors, you’ll get a premium finish without the hefty price tag.",
    image: CostEffective,
  },
  {
    id: "02",
    title: "Versatile & Durable",
    description:
      "CoverStyl' is highly resistant to heat, humidity, and UV light, making it perfect for high-traffic areas and environments exposed to sunlight. Its versatility allows it to be applied to flat or curved surfaces, offering endless design possibilities.",
    image: VersatileDurable,
  },
  {
    id: "03",
    title: "Wide Range of Finishes",
    description:
      "With over 500 textures and designs, there’s something to suit every taste. Choose from elegant wood grains, modern metallics, luxurious leather, or sophisticated stone effects to enhance your space’s aesthetics.",
    image: Finishes,
  },
];

const applications = [
  {
    id: "01",
    title: "Furniture Wrapping",
    description:
      "Breathe new life into old furniture by wrapping it with CoverStyl'. Whether you’re looking to refresh kitchen cabinets, office desks, or hotel furnishings, CoverStyl' gives you a high-end look without the need for replacements.",
    image: Furniture,
  },
  {
    id: "02",
    title: "Wall Coverings",
    description:
      "Transform blank walls into statement pieces. From luxurious wood textures to industrial-style metals, CoverStyl' can change the ambiance of a room in a matter of hours.",
    image: WallCoverings,
  },
  {
    id: "03",
    title: "Retail & Commercial Spaces",
    description:
      "CoverStyl' is perfect for updating retail stores, hotels, and office spaces. Create a consistent brand look with customised finishes that match your business's aesthetic and enhance the customer experience.",
    image: commercial,
  },
];

export default function CoverstylePage() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div className="bg-grey">
      <div className="flex flex-col w-full">
        <div className="relative">
          <Image
            src={CoverStylHeroImg}
            alt="Solar Gard CoverStyl'"
            sizes="100vw"
            placeholder="blur"
            style={{
              width: "100%",
              objectFit: "cover",
            }}
            className="h-[65vh]"
          />
          <div className="absolute lg:w-4/5 largeScreens:w-9/12 inset-0 flex items-end justify-start lg:p-24 md:p-12 sm:p-8 largeScreens:p-40 rounded-bl-lg">
            {/* <h1 className="text-white lg:text-5xl md:text-3xl sm:text-xl largeScreens:text-6xl font-bold">
                Experience the Ultimate in Comfort and Efficiency with Solar
                Films
              </h1> */}
          </div>
        </div>
      </div>
      <div className="bg-grey lg:py-40">
        <h1 className="text-secondary font-medium lg:text-3xl largeScreens:text-4xl md:text-2xl sm:text-xl w-10/12 mx-auto">
          Looking to refresh your space without the hassle of a full renovation?
          Solar Gard Ireland offers CoverStyl&rsquo;, an innovative
          self-adhesive vinyl film that transforms walls, furniture, and
          surfaces quickly and affordably. With over 500 stunning finishes to
          choose from—ranging from wood and marble to metallic and fabric
          textures—CoverStyl&rsquo; brings new life to your interiors while
          being eco-friendly and cost-effective. Whether you&apos;re renovating
          a commercial space or updating your home&apos;s decor,
          CoverStyl&rsquo; is the perfect solution for a sleek, modern look.
        </h1>
      </div>
      <div className="lg:w-10/12 py-20 mx-auto">
        {WhyCoverstyl.map((reason) => (
          <div className="bg-white rounded-xl antialiased" key={reason.id}>
            <div className="flex flex-row mb-8 p-16 gap-24">
              <div className="basis-3/5 pt-[22%]">
                <h2 className="font-bold text-secondary lg:text-4xl antialiased">
                  {reason.title}
                </h2>
                <p className="font-medium text-textLightGray lg:text-base mt-4 antialiased">
                  {reason.description}
                </p>
              </div>
              <div className="basis-2/5">
                <Image
                  src={reason.image}
                  className="rounded-2xl"
                  alt="Solar Gard CoverStyl'"
                  sizes="100vw"
                  placeholder="blur"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:w-10/12 py-20 mx-auto">
        <CoverstylFilmComponent />
      </div>
    </div>
  );
}
