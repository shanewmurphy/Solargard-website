import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ children }) => (
  <div className="h-screen w-full flex items-center justify-center text-4xl text-white absolute top-0 left-0">
    {children}
  </div>
);

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const cards = gsap.utils.toArray(container.children);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => "+=" + (cards.length - 1) * 100 + "%",
        pin: true,
        anticipatePin: 1,
        scrub: 2,
        markers: false, // Remove this in production
      },
    });

    cards.forEach((card, i) => {
      if (i > 0) {
        tl.fromTo(
          card,
          { yPercent: 100, opacity: 1 },
          { yPercent: 0, opacity: 1 }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-grey pb-40">
      <div
        ref={containerRef}
        className="relative lg:h-screen sm:h-dvh overflow-hidden"
      >
        <Card bgColor="#212332">
          <div className="lg:w-9/12 md:w-11/12 sm:w-11/12 relative">
            <img
              className="w-full h-full object-cover lg:rounded-xl md:rounded-xl sm:rounded-lg lg:flex md:flex sm:hidden"
              src="/images/card-service-imgs/solar-films-card-service-img-min.jpg"
              alt="Card 1"
            />

            <img
              className="w-full h-full object-cover lg:hidden md:hidden sm:flex"
              src="/images/card-service-imgs/solar-film-card-service-mobile.jpg"
            />
            <div className="absolute bottom-0 flex flex-col items-start px-24 py-[15%]">
              <h2 className="text-7xl font-bold text-white">Solar Films</h2>
              <p className="lg:text-3xl font-medium mt-2">
                Anti-heat, Anti-glare, UV films, Reflective Films
              </p>
              <div>
                <Link href="Solar-Films">
                  <button className="bg-white hover:bg-secdorny flex items-center text-secondary lg:text-2xl font-semibold py-4 px-12 mt-6 rounded-2xl">
                    View Solar Films
                    <span className="inline-flex items-center pl-4">
                      <NavIcon />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="lg:w-9/12 md:w-11/12 sm:w-11/12 relative">
            <img
              className="w-full h-full object-cover lg:rounded-xl md:rounded-xl sm:rounded-lg lg:flex md:flex sm:hidden"
              src="/images/card-service-imgs/car-tinting-b.jpg"
              alt="Card 2"
            />
            <img
              className="w-full h-full object-cover lg:hidden md:hidden sm:flex"
              src="/images/card-service-imgs/Car-Tint-mobile-img.jpg"
            />
            <div className="absolute bottom-0 flex flex-col items-start px-24 py-[15%]">
              <h2 className="text-7xl font-bold text-white">Vehicle Tinting</h2>
              <p className="lg:text-3xl font-medium mt-2">
                Premium car tinting, offering style, privacy, and UV protection
              </p>
              <div>
                <Link href="Vehicle-tinting">
                  <button className="bg-white hover:bg-secdorny flex items-center text-secondary lg:text-2xl font-semibold py-4 px-12 mt-6 rounded-2xl">
                    View Vehicle Tinting
                    <span className="inline-flex items-center pl-4">
                      <NavIcon />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="lg:w-9/12 md:w-11/12 sm:w-11/12 relative">
            <img
              className="w-full h-full object-cover lg:rounded-xl md:rounded-xl sm:rounded-lg lg:flex md:flex sm:hidden"
              src="/images/card-service-imgs/coverstyl-card-img.jpg"
              alt="Card 3"
            />
            <img
              className="w-full h-full object-cover lg:hidden md:hidden sm:flex"
              src="/images/card-service-imgs/coverstyl-mobile-img.jpg"
            />
            <div className="absolute bottom-0 flex flex-col items-start px-24 py-[15%]">
              <h2 className="text-7xl font-bold text-white">CoverStyl&apos;</h2>
              <p className="lg:text-3xl font-medium mt-2 w-[70%]">
                Revitalise any surface with CoverStyl&apos; cost-effective
                solution for stylish transformations
              </p>
              <div>
                <Link href="CoverStyl">
                  <button className="bg-white hover:bg-secdorny flex items-center text-secondary lg:text-2xl font-semibold py-4 px-12 mt-6 rounded-2xl">
                    View CoverStyl&apos;
                    <span className="inline-flex items-center pl-4">
                      <NavIcon />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="lg:w-9/12 md:w-11/12 sm:w-11/12 relative">
            <img
              className="w-full h-full object-cover lg:rounded-xl md:rounded-xl sm:rounded-lg lg:flex md:flex sm:hidden"
              src="/images/card-service-imgs/manifestations-graphics-card-img.jpg"
              alt="Card 4"
            />
            <img
              className="w-full h-full object-cover lg:hidden md:hidden sm:flex"
              src="/images/card-service-imgs/manifestations-graphics-mobile.jpg"
            />
            <div className="absolute bottom-0 flex flex-col items-start px-24 py-[15%]">
              <h2 className="text-7xl font-bold text-white">
                Manifestations & Graphics
              </h2>
              <p className="lg:text-3xl font-medium mt-2">
                Enhance your space with our privacy films, offering discreet
                style and dependable protection
              </p>
              <div>
                <Link href="Manifestations-Graphics">
                  <button className="bg-white hover:bg-secdorny flex items-center text-secondary lg:text-2xl font-semibold py-4 px-12 mt-6 rounded-2xl">
                    View Manifestations & Graphics
                    <span className="inline-flex items-center pl-4">
                      <NavIcon />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="lg:w-9/12 md:w-11/12 sm:w-11/12 relative">
            <img
              className="w-full h-full object-cover lg:rounded-xl md:rounded-xl sm:rounded-lg lg:flex md:flex sm:hidden"
              src="/images/card-service-imgs/vehicle-wrapping-card-img.jpg"
              alt="Card 5"
            />
            <img
              className="w-full h-full object-cover lg:hidden md:hidden sm:flex"
              src="/images/card-service-imgs/vehicle-wrapping-mobile-img.jpg"
            />
            <div className="absolute bottom-0 flex flex-col items-start px-24 py-[15%]">
              <h2 className="text-7xl font-bold text-white">
                Vehicle Wrapping
              </h2>
              <p className="lg:text-3xl font-medium mt-2">
                Transform your vehicle with custom wraps that showcase your
                brand or personal style
              </p>
              <div>
                <Link href="/">
                  <button className="bg-white hover:bg-secdorny flex items-center text-secondary lg:text-2xl font-semibold py-4 px-12 mt-6 rounded-2xl">
                    View Vehicle Wrapping
                    <span className="inline-flex items-center pl-4">
                      <NavIcon />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="lg:w-9/12 md:w-11/12 sm:w-11/12 relative">
            <img
              className="w-full h-full object-cover lg:rounded-xl md:rounded-xl sm:rounded-lg lg:flex md:flex sm:hidden"
              src="/images/card-service-imgs/privacy-films-card-img.jpg"
              alt="Card 5"
            />
            <img
              className="w-full h-full object-cover lg:hidden md:hidden sm:flex"
              src="/images/card-service-imgs/privacy-card-mobile-img.jpg"
            />
            <div className="absolute bottom-0 flex flex-col items-start px-24 py-[15%]">
              <h2 className="text-7xl font-bold text-white">Privacy Films</h2>
              <p className="lg:text-3xl font-medium mt-2">
                Enhance your space with our privacy films, offering discreet
                style and dependable protection
              </p>
              <div>
                <Link href="/">
                  <button className="bg-white hover:bg-secdorny flex items-center text-secondary lg:text-2xl font-semibold py-4 px-12 mt-6 rounded-2xl">
                    View Privacy Films
                    <span className="inline-flex items-center pl-4">
                      <NavIcon />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function NavIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="18" fill="#3163C6" />
      <path
        d="M10.4184 19.1006L24.1507 19.1006C24.4828 19.1006 24.752 18.8314 24.752 18.4993C24.752 18.1673 24.4828 17.8981 24.1507 17.8981L10.4184 17.8981C10.0864 17.8981 9.8172 18.1673 9.8172 18.4993C9.8172 18.8314 10.0864 19.1006 10.4184 19.1006Z"
        fill="white"
      />
      <path
        d="M19.2272 24.2733L24.5749 18.9256C24.8097 18.6908 24.8097 18.3101 24.5749 18.0753C24.3401 17.8405 23.9594 17.8405 23.7246 18.0753L18.3769 23.423C18.1421 23.6578 18.1421 24.0385 18.3769 24.2733C18.6117 24.5081 18.9924 24.5081 19.2272 24.2733Z"
        fill="white"
      />
      <path
        d="M18.3756 13.5763L23.7233 18.924C23.9581 19.1588 24.3388 19.1588 24.5736 18.924C24.8084 18.6892 24.8084 18.3085 24.5736 18.0737L19.2259 12.726C18.9911 12.4912 18.6104 12.4912 18.3756 12.726C18.1408 12.9608 18.1408 13.3415 18.3756 13.5763Z"
        fill="white"
      />
    </svg>
  );
}
