import Image from "next/image";

const CardData = [
  {
    id: "01",
    title: "Solar Films",
    alt: "Solar Gard Solutions, Ireland, Solar Films",
    tags: "Anti-Glare, Privacy, Heat reduction",
    imageUrl: "/images/card-service-imgs/Solar-film-card-img.jpg",
    pageUrl: "",
  },
  {
    id: "02",
    title: "Manifestations & Graphics",
    alt: "Solar Gard Solutions, Ireland, Manifestations & Graphics",
    tags: "Safety, Decorative designs, Privacy",
    imageUrl: "/images/card-service-imgs/Manif-card-img.jpg",
    pageUrl: "",
  },
  {
    id: "03",
    title: "Privacy Films",
    alt: "",
    tags: "Safety, Decorative designs, Privacy",
    imageUrl: "/images/card-service-imgs/privacy-card-img.jpg",
    pageUrl: "",
  },
  {
    id: "04",
    title: "Safety Films",
    alt: "",
    tags: "",
    imageUrl: "/images/card-service-imgs/safety-film-card-img.jpg",
    pageUrl: "",
  },
  {
    id: "05",
    title: "Vehicle Tinting",
    alt: "",
    tags: "",
    imageUrl: "/images/card-service-imgs/car-tint-card-img.jpg",
    pageUrl: "",
  },
  {
    id: "06",
    title: "Vehicle Wrapping",
    alt: "",
    tags: "",
    imageUrl: "/images/card-service-imgs/vehicle-wrap-card-img.jpg",
    pageUrl: "",
  },
  {
    id: "07",
    title: "",
    alt: "",
    tags: "",
    imageUrl: "/images/card-service-imgs/cloaking-card-img.jpg",
    pageUrl: "",
  },
];

export default function ServiceCardGrid() {
  return (
    <div className="w-full bg-grey lg:pt-[15%] md:pt-[20%] sm:pt-[40%] pb-[15%]">
      <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 mx-auto gap-4 text-secondary">
          {CardData.map((data) => (
            <div
              key={data.id}
              className="relative bg-cover bg-center flex flex-col overflow-hidden"
            >
              <div className="relative rounded-lg lg:h-400 md:h-400 sm:h-44 overflow-hidden">
                <Image
                  className="rounded-lg transition-transform duration-700 ease-in-out transform hover:scale-105"
                  src={data.imageUrl}
                  alt={data.alt}
                  quality={100}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="">
                <div className="mt-2 lg:text-lg md:text-lg sm:text-sm font-semibold">
                  {data.title}
                </div>
                <div className="lg:text-sm md:text-sm sm:text-xs text-gray-500">
                  {data.tags}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
