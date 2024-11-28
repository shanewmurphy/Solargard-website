"use client";

import { useState } from "react";
import Link from "next/link";
import { Pagination } from "@nextui-org/pagination";

const CoverStylData = [
  {
    id: "01",
    category: "wood",
    productName: "Rustic Oak",
    productImage: "/images/coverstyl/coverstyl-product-img/Rustic-Oak.jpg",
    productLink: "https://coverstyl.com/en/collection/wood/aa02/",
  },
  {
    id: "02",
    category: "wood",
    productName: "Grey Line Oak",
    productImage: "/images/coverstyl/coverstyl-product-img/Grey-Line-Oak.jpg",
    productLink: "https://coverstyl.com/en/collection/wood/aa15/",
  },
  {
    id: "03",
    category: "wood",
    productName: "Blue Ebony",
    productImage: "/images/coverstyl/coverstyl-product-img/Blue-Ebony.jpg",
    productLink: "https://coverstyl.com/en/collection/wood/ab05/",
  },
  {
    id: "04",
    category: "concrete",
    productName: "Raw Grey",
    productImage: "/images/coverstyl/coverstyl-product-img/Raw-Grey.jpg",
    productLink: "https://coverstyl.com/en/collection/concrete/ne24/",
  },
  {
    id: "05",
    category: "concrete",
    productName: "Cement Grey",
    productImage: "/images/coverstyl/coverstyl-product-img/Cement-Grey.jpg",
    productLink: "https://coverstyl.com/en/collection/concrete/u19/",
  },
  {
    id: "06",
    category: "concrete",
    productName: "Off White Cement",
    productImage:
      "/images/coverstyl/coverstyl-product-img/Off-White-Cement.jpg",
    productLink: "https://coverstyl.com/en/collection/concrete/nh33/",
  },
  {
    id: "07",
    category: "textures",
    productName: "Mika Light",
    productImage: "/images/coverstyl/coverstyl-product-img/Mika-Light.jpg",
    productLink: "https://coverstyl.com/en/collection/textile/ne74/",
  },
  {
    id: "08",
    category: "textures",
    productName: "Silver Metal Weaving",
    productImage:
      "/images/coverstyl/coverstyl-product-img/Silver-Metal-Weaving.jpg",
    productLink: "https://coverstyl.com/en/collection/textile/al11/",
  },
  {
    id: "09",
    category: "textures",
    productName: "Beige Linen",
    productImage: "/images/coverstyl/coverstyl-product-img/Beige-Linen.jpg",
    productLink: "https://coverstyl.com/en/collection/textile/nh19/",
  },
  {
    id: "10",
    category: "Colour",
    productName: "Steel Blue",
    productImage: "/images/coverstyl/coverstyl-product-img/Steel-Blue.jpg",
    productLink: "",
  },
  {
    id: "11",
    category: "Colour",
    productName: "Vibrant Green",
    productImage: "/images/coverstyl/coverstyl-product-img/Vibrant-Green.jpg",
    productLink: "https://coverstyl.com/en/collection/color/m5/",
  },
  {
    id: "12",
    category: "Colour",
    productName: "Clean Mint",
    productImage: "/images/coverstyl/coverstyl-product-img/Clean-Mint.jpg",
    productLink: "https://coverstyl.com/en/collection/color/ne54/",
  },
];

export default function CoverstylFilmComponent() {
  const [currentPage, setCurrentPage] = useState(1);

  // Adjust items per page based on screen size
  const itemsPerPage = 4; // You can keep this fixed since we're showing all in one row
  const totalPages = Math.ceil(CoverStylData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = CoverStylData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container mx-auto px-4">
      <div className="bg-grey w-full">
        <div className="lg:w-7/12 lg:mb-14 md:mb-8 sm:mb-6">
          <h2 className="lg:text-5xl md:text-4xl sm:text-2xl lg:mb-4 md:mt-8 sm:mt-12 font-bold text-secondary">
            Explore Our Range of CoverStyl&rsquo;
          </h2>
          <p className="font-medium text-textGray lg:text-xl sm:mt-2">
            Transform Your Space with Innovative Surface Design with
            CoverStyl&rsquo;
          </p>
        </div>
        {/* Added flex-nowrap and overflow-x-auto for horizontal scrolling */}
        <div className="flex flex-nowrap overflow-x-auto gap-4 pb-4 antialiased">
          {currentItems.map((product) => (
            <div
              key={product.id}
              className="flex-none bg-white p-6 pb-16 rounded-lg shadow
                  w-[calc(50%-8px)] sm:w-[calc(50%-8px)] 
                  md:w-[calc(33.333%-12px)] xl:w-[calc(25%-12px)]"
            >
              <div className="h-52 w-52 mx-auto mb-4">
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="rounded-full h-52 w-52"
                />
              </div>

              <h3 className="font-bold text-center text-secondary lg:text-xl">
                {product.productName}
              </h3>
              <p className="text-center font-medium text-textLightGray">
                {product.category}
              </p>
              <div className="text-center mt-4 antialiased">
                <button
                  type="button"
                  onClick={() =>
                    window.open(
                      product.productLink,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="outline outline-offset-2 outline-1 outline-slate-900 lg:text-sm md:text-sm sm:text-xs text-secondary font-semibold rounded-sm py-1 px-4 hover:bg-slate-900 hover:text-white"
                >
                  View Specs
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 mb-8">
          <Pagination
            color="secondary"
            total={totalPages}
            initialPage={1}
            onChange={(page) => setCurrentPage(page)}
          />
        </div>
        <div className="mx-auto">
          <h5 className="text-center text-secondary font-semibold lg:text-xl">
            Please visit our CoverStyl&rsquo; Partner for full list of materials
          </h5>
          <div className="text-center mt-4">
            <Link href="https://coverstyl.com/en/" target="_blank">
              <button
                type="button"
                className="outline outline-offset-2 outline-1 outline-slate-900 lg:text-base md:text-sm sm:text-xs text-secondary font-semibold rounded-sm py-1 px-8 hover:bg-slate-900 hover:text-white"
              >
                Our Partner
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
