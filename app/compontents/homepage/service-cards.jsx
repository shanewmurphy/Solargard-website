import Image from "next/image";

const CardData = [
  {
    id: "01",
    title: "Solar Films",
    alt: "Solar Gard Solutions, Ireland, Solar Films",
    tags: "Anti-Glare, Privacy, Heat reduction",
    imageUrl: "",
    pageUrl: "",
  },
  {
    id: "02",
    title: "Manifestations & Graphics",
    alt: "Solar Gard Solutions, Ireland, Manifestations & Graphics",
    tags: "Safety, Decorative designs, Privacy",
    imageUrl: "",
    pageUrl: "",
  },
  {
    id: "03",
    title: "Privacy Films",
    alt: "",
    tags: "",
    imageUrl: "",
    pageUrl: "",
  },
  {
    id: "04",
    title: "Safety Films",
    alt: "",
    tags: "",
    imageUrl: "",
    pageUrl: "",
  },
  {
    id: "05",
    title: "Vehicle Tinting",
    alt: "",
    tags: "",
    imageUrl: "",
    pageUrl: "",
  },
  {
    id: "06",
    title: "Vehicle Wrapping",
    alt: "",
    tags: "",
    imageUrl: "",
    pageUrl: "",
  },
  {
    id: "07",
    title: "",
    alt: "",
    tags: "",
    imageUrl: "",
    pageUrl: "",
  },
  {
    id: "08",
    title: "",
    alt: "",
    tags: "",
    imageUrl: "",
    pageUrl: "",
  },
];

export default function ServiceCardGrid() {
  return (
    <div className="w-full bg-grey xxl:py-44 xl:py-36 lg:py-24 md:py-16 sm:py-12">
      <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 mx-auto gap-4 text-secondary">
          {CardData.map((data) => (
            <div key={data}>{data.title}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
