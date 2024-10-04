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
      <div>
        <h1 className="lg:text-3xl font-bold text-center text-white">
          Explore Our Comprehensive Range of Services
        </h1>
      </div>
      <div
        ref={containerRef}
        className="relative lg:h-screen sm:h-dvh overflow-hidden"
      >
        <Card bgColor="#212332">
          <div className="lg:w-9/12 md:w-11/12 sm:w-11/12 relative">
            <img
              className="w-full h-full object-cover lg:rounded-xl lg:visible md:visible sm:invisible"
              src="/images/card-service-imgs/solar-films-card-service-img-min.jpg"
              alt="Card 1"
            />
            {/* Mobile Card image */}
            <img
              className="w-full h-full object-cover lg:rounded-xl md:rounded-xl sm:rounded-lg lg:invisible md:invisible sm:visible"
              src="/images/card-service-imgs/solar-film-card-service-mobile.jpg"
              alt="Card 1"
            />
            <div className="absolute bottom-0 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">
                Card 1
              </h2>
            </div>
          </div>
        </Card>
        <Card>
          <div className="lg:w-9/12 md:w-11/12 sm:w-11/12 relative">
            <img
              className="w-full h-full object-cover lg:rounded-xl lg:visible md:visible sm:invisible"
              src="/images/card-service-imgs/car-tint.jpg"
              alt="Card 2"
            />
            {/* Mobile Card image */}
            <img
              className="w-full h-full object-cover lg:rounded-xl md:rounded-xl sm:rounded-lg lg:invisible md:invisible sm:visible"
              src="/images/card-service-imgs/solar-film-card-service-mobile.jpg"
              alt="Card 2"
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
              className="w-full h-full object-cover lg:rounded-xl lg:visible md:visible sm:invisible"
              src="/images/card-service-imgs/solar-films-card-service-img-min.jpg"
              alt="Card 3"
            />
            {/* Mobile Card image */}
            <img
              className="w-full h-full object-cover lg:rounded-xl md:rounded-xl sm:rounded-lg lg:invisible md:invisible sm:visible"
              src="/images/card-service-imgs/solar-film-card-service-mobile.jpg"
              alt="Card 2"
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
              className="w-full h-full object-cover lg:rounded-xl lg:visible md:visible sm:invisible"
              src="/images/card-service-imgs/solar-films-card-service-img-min.jpg"
              alt="Card 4"
            />
            {/* Mobile Card image */}
            <img
              className="w-full h-full object-cover llg:rounded-xl md:rounded-xl sm:rounded-lg lg:invisible md:invisible sm:visible"
              src="/images/card-service-imgs/solar-film-card-service-mobile.jpg"
              alt="Card 2"
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
              className="w-full h-full object-cover lg:rounded-xl lg:visible md:visible sm:invisible"
              src="/images/card-service-imgs/solar-films-card-service-img-min.jpg"
              alt="Card 5"
            />
            {/* Mobile Card image */}
            <img
              className="w-full h-full object-cover lg:rounded-xl md:rounded-xl sm:rounded-lg lg:invisible md:invisible sm:visible"
              src="/images/card-service-imgs/solar-film-card-service-mobile.jpg"
              alt="Card 2"
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
              className="w-full h-full object-cover lg:rounded-xl md:rounded-xl sm:rounded-lg lg:visible md:visible sm:invisible"
              src="/images/card-service-imgs/solar-films-card-service-img-min.jpg"
              alt="Card 6"
            />
            {/* Mobile Card image */}
            <img
              className="w-full h-full object-cover lg:rounded-xl md:rounded-xl sm:rounded-lg lg:invisible md:invisible sm:visible"
              src="/images/card-service-imgs/solar-film-card-service-mobile.jpg"
              alt="Card 2"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">
                Card 6
              </h2>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
