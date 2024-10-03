export default function HomeHero() {
  return (
    <div>
      <div className="relative lg:h-[80vh] antialiased">
        <div>
          <picture>
            <img
              src="/images/hero-imgs/home-hero.jpg"
              className="bg-cover w-full bg-center lg:h-[80vh]"
              alt="Solar Gard Ireland"
            />
          </picture>

          {/* Gradient Overlay without opacity on the container */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-800 from-1% to-transparent"></div>

          {/* Text content outside of the gradient and with 100% opacity */}
          <div className="absolute bottom-0 flex items-center">
            <h1 className="text-white font-extrabold lg:text-4xl lg:w-[75%] pb-16 pl-24 z-10 opacity-100">
              Transform Spaces and Vehicles with Solar Gard Ireland Your Experts
              in Glass Films, Surface Enhancements, and Custom Vehicle Wraps
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
