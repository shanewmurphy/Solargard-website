"use client";

import { useState, useEffect } from "react";
import { TintingFilmData } from "@/app/Data-Sheets/Tinting-Film-Data";

import Link from "next/link";
import Image from "next/image";
import { Select, SelectItem } from "@nextui-org/select";
import { Pagination } from "@nextui-org/pagination";

const categories = [
  "All",
  "Nano Ceramic",
  "Nano Ceramic Premium",
  "HP Metallised Premium",
  "Solar Transparent",
  "HP Metallised",
  "Anti Carjacking",
  "Non Metallised Premium",
  "Non Metallised",
  "Coloured",
];

const TintingFilmDataComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCategory, setFilterCategory] = useState("All");
  const [productsPerPage, setProductsPerPage] = useState(4); // Start with mobile default

  // Function to determine products per page based on screen width
  function getProductsPerPage(width) {
    if (width >= 1536) {
      // 2xl breakpoint
      return 4; // 1 row of 4
    } else if (width >= 1024) {
      // lg breakpoint
      return 3; // 1 row of 3
    } else if (width >= 768) {
      // md breakpoint
      return 2; // 1 row of 2
    } else {
      return 4; // sm and mobile: 1 row of 2
    }
  }

  // Initialize and handle resize in useEffect
  useEffect(() => {
    setProductsPerPage(getProductsPerPage(window.innerWidth));

    function handleResize() {
      const newProductsPerPage = getProductsPerPage(window.innerWidth);
      if (newProductsPerPage !== productsPerPage) {
        setProductsPerPage(newProductsPerPage);
        setCurrentPage(1);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [productsPerPage]);

  const filteredProducts =
    filterCategory === "All"
      ? TintingFilmData
      : TintingFilmData.filter(
          (product) => product.category === filterCategory
        );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Text truncation helper function
  function truncateText(text, wordLimit) {
    if (!text) return "";
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "……"
      : text;
  }

  // console.log("Number of products:", currentProducts.length);

  return (
    <div className="mx-auto antialiased">
      <div className="lg:px-4 lg:py-16 md:px-4 md:py-12 sm:py-2">
        {/* Filter Buttons and Listbox for Mobile */}
        <div className="flex items-center flex-wrap gap-2 mb-8">
          <div className="lg:flex md:flex sm:hidden">
            <span>
              <FilterIcon />
            </span>
            <h6 className="text-sm font-medium text-secondary pl-2">
              Filter |
            </h6>
          </div>

          {/* Desktop Filter Buttons */}
          <div className="hidden lg:flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setFilterCategory(category);
                  setCurrentPage(1); // Reset to first page when filter changes
                }}
                className={`px-2 py-1 text-sm font-medium text-secondary rounded-md ${
                  filterCategory === category
                    ? "bg-primary text-white"
                    : "bg-transparent text-gray-700"
                } hover:bg-primary hover:text-white cursor-pointer`}
              >
                {category}
              </button>
            ))}
          </div>
          {/* Mobile Listbox for Category Selection */}
          <div className="w-full lg:hidden">
            <Select
              label="Filter Category"
              placeholder="Select Category"
              defaultSelectedKeys={["All"]}
              onSelectionChange={(keys) => {
                // Changed this
                const selected = Array.from(keys)[0];
                setFilterCategory(selected);
                setCurrentPage(1);
              }}
              classNames={{
                listbox: "text-secondary", // Makes dropdown list text darker
                trigger: "text-secondary", // Makes selected text darker
                value: "text-secondary", // Makes value text darker
              }}
            >
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-12 md:gap-6 sm:gap-4">
          {currentProducts.map((product) => (
            <Link
              key={product.id}
              href={`/Single-Solar-Film-Page/${encodeURIComponent(
                product.slug
              )}`}
            >
              <div key={product.id}>
                <div className="rounded-2xl lg:py-12 md:py-12 sm:py-6 bg-white">
                  <div className="relative lg:w-36 lg:h-36 md:w-28 md:h-28 sm:w-28 sm:h-28 mx-auto rounded-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full bg-center bg-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-secondary text-center lg:text-xl mt-2">
                    {product.name}
                  </h3>
                  <div className="text-center mt-8 antialiased">
                    <button className="outline outline-offset-2 outline-1 outline-slate-900 lg:text-sm md:text-sm sm:text-xs text-secondary font-semibold rounded-sm py-1 px-4 hover:bg-slate-900 hover:text-white">
                      View Specs
                    </button>
                  </div>
                </div>
                <div>
                  {/* 
                  <p className="text-sm lg:pt-2">
                    {truncateText(product.filmDescription, 25)}
                  </p>
                  */}
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Pagination */}
        <div className="mt-16 flex justify-center">
          <Pagination
            color="secondary"
            total={totalPages}
            initialPage={1}
            page={currentPage}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default TintingFilmDataComponent;

function FilterIcon() {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6918 17.8874L7.84842 20.8488C7.68995 20.9454 7.51379 20.9964 7.33422 20.9998C7.1567 21.0032 6.97918 20.959 6.81867 20.8686C6.65543 20.7767 6.52416 20.6482 6.43506 20.4951C6.34596 20.3394 6.29699 20.1639 6.29699 19.9789V11.0791C6.29699 11.0226 6.29019 10.973 6.27658 10.9294C6.26298 10.8852 6.24053 10.841 6.20993 10.7982L0.268083 2.29961C0.108926 2.07176 0.019826 1.8167 0.00282214 1.5562C-0.0135016 1.2957 0.0409109 1.03112 0.1681 0.786941C0.295289 0.542765 0.480972 0.346199 0.706104 0.210168C0.931235 0.0734569 1.19105 0 1.46584 0H18.012C18.2868 0 18.5466 0.0734569 18.7717 0.210168C18.9969 0.346199 19.1825 0.542765 19.3097 0.786941C19.4369 1.0318 19.492 1.2957 19.475 1.5562C19.458 1.8167 19.3689 2.07176 19.2098 2.29961L13.2672 10.7968C13.2373 10.8396 13.2155 10.8839 13.2006 10.9301C13.187 10.9743 13.1802 11.024 13.1802 11.0804V17.0182C13.1802 17.1977 13.1353 17.3678 13.0516 17.5174C12.968 17.6657 12.8462 17.7929 12.6911 17.8874H12.6918Z"
        fill="#4A4949"
      />
    </svg>
  );
}
