import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ children, isFirst }) => (
  <div
    className={`h-screen w-full flex items-center justify-center text-4xl text-white ${
      isFirst ? "fixed top-0 left-0" : "absolute top-0 left-0"
    } overflow-hidden rounded-[40px]`}
  >
    {children}
  </div>
);

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const cards = gsap.utils.toArray(container.children);
    const cardHeight = window.innerHeight;

    // Set initial states
    gsap.set(cards.slice(1), {
      clipPath: "inset(100% 0% 0% 0% round 40px)",
    });

    // Pin the first card separately
    gsap.set(cards[0], {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      zIndex: 1,
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top-=0px top",
        end: () => `+=${cardHeight * (cards.length - 1)}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        scrub: 1,
        markers: false,
        fastScrollEnd: true,
        preventOverlaps: true,
      },
    });

    // Animate subsequent cards
    cards.forEach((card, i) => {
      if (i > 0) {
        // Remove the previous card movement
        // tl.to(
        //   cards[i - 1].querySelector("img"),
        //   {
        //     y: "-10%",
        //     ease: "none",
        //   },
        //   `card${i}`
        // );

        // Current card reveal
        tl.fromTo(
          card,
          {
            clipPath: "inset(100% 0% 0% 0% round 40px)",
            zIndex: i + 1,
          },
          {
            clipPath: "inset(0% 0% 0% 0% round 40px)",
            zIndex: i + 1,
            duration: 1,
            ease: "none",
          },
          `card${i}`
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main>
      <div className="min-h-screen bg-grey">
        <div className="relative">
          <div className="pin-spacer">
            <div
              ref={containerRef}
              className="relative h-screen w-full overflow-hidden"
              style={{
                height: "100vh",
                willChange: "transform",
              }}
            >
              <Card isFirs>
                <div className="xxl:w-8/12 xl:w-10/12 lg:w-10/12 md:w-11/12 lg:h-[90vh] md:h-[60vh] sm:h-[70vh] sm:w-11/12 relative">
                  <img
                    className="w-full h-full object-cover rounded-xl lg:flex md:flex sm:hidden"
                    src="/images/card-service-imgs/solar-films-card-service-img-min.jpg"
                    alt="Card 1"
                  />
                  <img
                    className="w-full h-full object-cover lg:hidden md:hidden sm:flex rounded-3xl"
                    src="/images/card-service-imgs/solar-film-card-service-mobile.jpg"
                  />
                  <div className="absolute bottom-0 flex flex-col items-start lg:px-24 lg:py-[15%] md:px-16 md:py-[10%] sm:px-4 sm:py-[40%]">
                    <h2 className="xxl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl font-bold text-white">
                      Solar Films
                    </h2>
                    <div>
                      <Link href="Solar-Films">
                        <button className="bg-white flex items-center text-secondary lg:text-2xl md:text-xl sm:text-lg font-semibold lg:py-4 lg:px-12 md:py-2 md:px-6 sm:py-2 sm:px-6 mt-6 lg:rounded-2xl md:rounded-lg sm:rounded-lg">
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
                <div className="xxl:w-8/12 xl:w-10/12 lg:w-10/12 md:w-11/12 sm:w-11/12 lg:h-[90vh] md:h-[60vh] sm:h-[70vh] relative">
                  <img
                    className="w-full h-full object-cover rounded-xl lg:flex md:flex sm:hidden"
                    src="/images/card-service-imgs/car-tinting-b.jpg"
                    alt="Card 2"
                  />
                  <img
                    className="w-full h-full object-cover lg:hidden md:hidden sm:flex"
                    src="/images/card-service-imgs/Car-Tint-mobile-img.jpg"
                  />
                  <div className="absolute bottom-0 flex flex-col items-start px-24 py-[15%]">
                    <h2 className="xxl:text-8xl lg:text-7xl font-bold text-white">
                      Vehicle Tinting
                    </h2>
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
                <div className="xxl:w-8/12 xl:w-10/12 lg:w-10/12 md:w-11/12 sm:w-11/12 lg:h-[90vh] md:h-[60vh] sm:h-[70vh] relative">
                  <img
                    className="w-full h-full object-cover rounded-xl lg:flex md:flex sm:hidden"
                    src="/images/card-service-imgs/coverstyl-card-img.jpg"
                    alt="Card 3"
                  />
                  <img
                    className="w-full h-full object-cover lg:hidden md:hidden sm:flex"
                    src="/images/card-service-imgs/coverstyl-mobile-img.jpg"
                  />
                  <div className="absolute bottom-0 flex flex-col items-start px-24 py-[15%]">
                    <h2 className="xxl:text-8xl lg:text-7xl font-bold text-white">
                      CoverStyl&apos;
                    </h2>
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
                <div className="xxl:w-8/12 xl:w-10/12 lg:w-10/12 md:w-11/12 sm:w-11/12 lg:h-[90vh] md:h-[60vh] sm:h-[70vh]relative">
                  <img
                    className="w-full h-full object-cover rounded-xl lg:flex md:flex sm:hidden"
                    src="/images/card-service-imgs/manifestations-graphics-card-img.jpg"
                    alt="Card 4"
                  />
                  <img
                    className="w-full h-full object-cover lg:hidden md:hidden sm:flex"
                    src="/images/card-service-imgs/manifestations-graphics-mobile.jpg"
                  />
                  <div className="absolute bottom-0 flex flex-col items-start px-24 py-[15%]">
                    <h2 className="xxl:text-8xl lg:text-7xl font-bold text-white">
                      Manifestations & Graphics
                    </h2>
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
                <div className="xxl:w-8/12 xl:w-10/12 lg:w-10/12 md:w-11/12 sm:w-11/12 lg:h-[90vh] md:h-[60vh] sm:h-[70vh] relative">
                  <img
                    className="w-full h-full object-cover rounded-xl lg:flex md:flex sm:hidden"
                    src="/images/card-service-imgs/vehicle-wrapping-card-img.jpg"
                    alt="Card 5"
                  />
                  <img
                    className="w-full h-full object-cover lg:hidden md:hidden sm:flex"
                    src="/images/card-service-imgs/vehicle-wrapping-mobile-img.jpg"
                  />
                  <div className="absolute bottom-0 flex flex-col items-start px-24 py-[15%]">
                    <h2 className="xxl:text-8xl lg:text-7xl font-bold text-white">
                      Vehicle Wrapping
                    </h2>
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
                <div className="xxl:w-8/12 xl:w-10/12 lg:w-10/12 md:w-11/12 sm:w-11/12 lg:h-[90vh] md:h-[60vh] sm:h-[80vh] relative">
                  <img
                    className="w-full h-full object-cover rounded-xl lg:flex md:flex sm:hidden"
                    src="/images/card-service-imgs/privacy-films-card-img.jpg"
                    alt="Card 6"
                  />
                  <img
                    className="w-full h-full object-cover lg:hidden md:hidden sm:flex"
                    src="/images/card-service-imgs/privacy-card-mobile-img.jpg"
                  />
                  <div className="absolute bottom-0 flex flex-col items-start px-24 py-[15%]">
                    <h2 className="xxl:text-8xl lg:text-7xl font-bold text-white">
                      Privacy Films
                    </h2>
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
        </div>
      </div>
    </main>
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
