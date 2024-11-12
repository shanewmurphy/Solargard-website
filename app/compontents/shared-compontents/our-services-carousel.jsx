"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

const CarouselData = [
  {
    id: "01",
    title: "Privacy Films",
    imageURL: "/images/service-carousel-imgs/privacy-films-img.jpg",
    pageURL: "/page",
  },
  {
    id: "02",
    title: "CoverStyl’",
    imageURL: "/images/service-carousel-imgs/coverstyl.jpg",
    pageURL: "/page",
  },
  {
    id: "03",
    title: "Cloaking Casper",
    imageURL: "/images/service-carousel-imgs/clocking-casper.jpg",
    pageURL: "/page",
  },
  {
    id: "04",
    title: "Safety Film",
    imageURL: "/images/service-carousel-imgs/privacy-films-img.jpg",
    pageURL: "/page",
  },
  {
    id: "05",
    title: "Manifestations & Graphics",
    imageURL: "/images/service-carousel-imgs/privacy-films-img.jpg",
    pageURL: "/page",
  },
  {
    id: "06",
    title: "Vehicle Tinting",
    imageURL: "/images/service-carousel-imgs/privacy-films-img.jpg",
    pageURL: "/page",
  },
  {
    id: "07",
    title: "Solar Films",
    imageURL: "/images/service-carousel-imgs/privacy-films-img.jpg",
    pageURL: "/page",
  },
];

export default function OurServiceCarousel() {
  const swiperRef = useRef();
  return (
    <div>
      <div className="w-11/12 mx-auto py-40">
        <div>
          <h3 className="text-secondary font-bold text-4xl mb-6">
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
              spaceBetween: 20,
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
                    className="rounded-lg"
                    src={service.imageURL}
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
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-bold text-secondary text-xl">
                      {service.title}
                    </h3>
                  </div>
                  <div>Link</div>
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
