"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";

const CarouselData = [
  {
    id: "01",
    title: "Privacy Films",
    imageURL: "/images/service-carousel-imgs/privacy-films-img.jpg",
    pageURL: "/Privacy-Films",
  },
  {
    id: "02",
    title: "CoverStyl’",
    imageURL: "/images/service-carousel-imgs/coverstyl-img.jpg",
    pageURL: "/CoverStyl",
  },
  {
    id: "03",
    title: "Cloaking Casper",
    imageURL: "/images/service-carousel-imgs/cloaking-casper-img.jpg",
    pageURL: "/",
  },
  {
    id: "04",
    title: "Safety Film",
    imageURL: "/images/service-carousel-imgs/safety-films.jpg",
    pageURL: "/Safety-Films",
  },
  {
    id: "05",
    title: "Manifestations & Graphics",
    imageURL: "/images/service-carousel-imgs/manifestations-imgs.jpg",
    pageURL: "/Manifestations-Graphics",
  },
  {
    id: "06",
    title: "Vehicle Tinting",
    imageURL: "/images/service-carousel-imgs/vehicle-tinting.jpg",
    pageURL: "/Vehicle-tinting",
  },
  {
    id: "07",
    title: "Solar Films",
    imageURL: "/images/service-carousel-imgs/solar-films.jpg",
    pageURL: "/Solar-Films",
  },
];

export default function OurServiceCarousel() {
  const swiperRef = useRef();
  return (
    <div className="w-full bg-grey">
      <div className="w-11/12 xxl:px-0 lg:py-32 lg:px-24 md:py-32 md:px-16 sm:py-16 sm:px-6  mx-auto">
        <div>
          <h3 className="text-secondary font-bold xxl:text-5xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl mb-6">
            Other products and services we provide
          </h3>
        </div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={20}
          slidesPerView={"auto"}
          grabCursor={true}
          speed={900}
          autoplay={false}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1240: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {CarouselData.map((service) => (
            <SwiperSlide key={service.id}>
              <div>
                <div>
                  <Image
                    className="rounded-lg w-full"
                    src={service.imageURL}
                    priority
                    alt={service.title}
                    quality={100}
                    sizes="100vw"
                    width={530}
                    height={404}
                    style={{
                      objectFit: "cover", // cover, contain, none
                    }}
                  />
                </div>
              </div>
              <div className="mt-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-secondary xxl:text-2xl xl:text-xl lg:text-base md:text-base sm:text-base">
                      {service.title}
                    </h3>
                  </div>
                  <div>
                    <Link href={service.pageURL}>
                      <div className="group flex items-center">
                        <p className="text-base text-secondary hover:text-primary font-medium underline hover:no-underline">
                          View
                          <span className="inline-block pl-2">
                            <ArrowRightIcon className="text-gray-600 group-hover:text-primary transition-colors duration-300" />
                          </span>
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          <div className="flex justify-end mt-8">
            <div className="mr-4">
              <button onClick={() => swiperRef.current.slidePrev()}>
                <PrevBtn />
              </button>
            </div>
            <div>
              <button onClick={() => swiperRef.current.slideNext()}>
                <NextBtn />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrevBtn() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#434343" />
      <path
        d="M32 23H19.83L25.42 17.41L24 16L16 24L24 32L25.41 30.59L19.83 25H32V23Z"
        fill="#434343"
      />
    </svg>
  );
}

function NextBtn() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#434343" />
      <path
        d="M24 16L22.59 17.41L28.17 23H16V25H28.17L22.59 30.59L24 32L32 24L24 16Z"
        fill="#494848"
      />
    </svg>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <svg
      width="22"
      height="14"
      viewBox="0 0 22 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.4669 0.604936L15.0661 0L22 7L15.0661 14L14.4669 13.3951L20.3735 7.4321H0V6.5679H20.3735L14.4669 0.604936Z"
        className="fill-current"
      />
    </svg>
  );
}
