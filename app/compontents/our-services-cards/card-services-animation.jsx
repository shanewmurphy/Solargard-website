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
        markers: true, // Remove this in production
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
        <h1 className="text-3xl font-bold text-center">
          Scroll down for cards
        </h1>
      </div>
      <div ref={containerRef} className="relative h-screen overflow-hidden">
        <Card bgColor="#212332">
          <div className="w-9/12 relative">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="/images/card-service-imgs/solar-films-card-service-img-min.jpg"
              alt="Card 1"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">
                Card 1
              </h2>
            </div>
          </div>
        </Card>
        <Card>
          <div className="w-9/12 relative">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="/images/card-service-imgs/solar-films-card-service-img-min.jpg"
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
          <div className="w-9/12 relative">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="/images/card-service-imgs/solar-films-card-service-img-min.jpg"
              alt="Card 3"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">
                Card 3
              </h2>
            </div>
          </div>
        </Card>
        <Card>
          <div className="w-9/12 relative">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="/images/card-service-imgs/solar-films-card-service-img-min.jpg"
              alt="Card 4"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">
                Card 4
              </h2>
            </div>
          </div>
        </Card>
        <Card>
          <div className="w-9/12 relative">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="/images/card-service-imgs/solar-films-card-service-img-min.jpg"
              alt="Card 5"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">
                Card 5
              </h2>
            </div>
          </div>
        </Card>
        <Card>
          <div className="w-9/12 relative">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="/images/card-service-imgs/solar-films-card-service-img-min.jpg"
              alt="Card 6"
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
