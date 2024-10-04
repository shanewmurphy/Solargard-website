export default function HomeHero() {
  return (
    <div>
      <div className="relative antialiased">
        <div>
          <picture>
            <img
              src="/images/hero-imgs/home-hero.jpg"
              className="bg-cover bg-no-repeat w-full bg-center lg:h-[80vh] md:h-[60vh] sm:h-[70vh]"
              alt="Solar Gard Ireland"
            />
          </picture>

          {/* Gradient Overlay without opacity on the container */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-800 from-1% to-transparent"></div>

          {/* Text content outside of the gradient and with 100% opacity */}
          <div className="absolute bottom-0 flex items-center">
            <h1 className="text-white lg:font-bold md:font-bold sm:font-semibold lg:text-4xl md:text-3xl sm:text-lg lg:w-[75%] lg:pb-16 lg:pl-24 md:pb-16 md:pl-16 sm:px-8 sm:py-8 z-10 opacity-100">
              Transform Spaces and Vehicles with Solar Gard Ireland Your Experts
              in Glass Films, Surface Enhancements, and Custom Vehicle Wraps
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
