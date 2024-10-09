import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
        scrub: 1,
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
    <div className="min-h-screen bg-secondary">
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
            <div className="absolute bottom-0 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white  p-4 rounded">
                Card 1
              </h2>
            </div>
          </div>
        </Card>
        <Card>
          <div className="lg:w-9/12 md:w-11/12 sm:w-11/12 relative">
            <img
              className="w-full h-full object-cover lg:rounded-xl md:rounded-xl sm:rounded-lg lg:flex md:flex sm:hidden"
              src="/images/card-service-imgs/car-tint.jpg"
              alt="Card 2"
            />
            <img
              className="w-full h-full object-cover lg:hidden md:hidden sm:flex"
              src="/images/card-service-imgs/Car-Tint-mobile-img.jpg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">
                Card 2
              </h2>
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
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">
                Card 3
              </h2>
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
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">
                Card 4
              </h2>
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
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">
                Card 5
              </h2>
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
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">
                Card 5
              </h2>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
