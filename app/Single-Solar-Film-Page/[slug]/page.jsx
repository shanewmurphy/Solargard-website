import { solarFilmsData } from "@/app/Data-Sheets/Solar-Films-Data";
import { Progress } from "@nextui-org/progress";
import { notFound } from "next/navigation";
import Image from "next/image";
import HeroSolarFilmImg from "/public/images/solar-films-imgs/hero-solar-film-min.jpg";

export default function SolarFilmPage({ params }) {
  // Decode the URL-encoded slug
  const decodedSlug = decodeURIComponent(params.slug);

  // Find the product that matches the decoded slug
  const product = solarFilmsData.find((item) => item.slug === decodedSlug);

  // For debugging
  console.log("Decoded Slug:", decodedSlug);
  console.log("Found Product:", product);
  console.log(
    "Available Products:",
    solarFilmsData.map((p) => p.slug)
  );

  // If no product is found, show 404
  if (!product) {
    notFound();
  }
  // import hero image

  return (
    <div className="antialiased">
      <div className="w-full h-[70vh] relative">
        <div>
          <Image
            src={HeroSolarFilmImg}
            alt="Solar Gard Solar films"
            quality={100}
            placeholder="blur"
            sizes="100vw"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white font-bold text-8xl">{product.name}</p>
        </div>
      </div>
      <div className="bg-secondary w-full py-36 px-16">
        <div className="w-8/12 mx-auto">
          <p className="text-white text-center font-medium text-2xl">
            {product.filmDescription}
          </p>
          <div className="text-center mt-16">
            <button className="outline outline-offset-2 outline-1 outline-white text-white font-semibold rounded-sm py-2 px-10 hover:bg-white hover:text-secondary">
              Download Data Sheet
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray">
        <div className="w-8/12 mx-auto py-24">
          <div className="grid grid-cols-2 gap-16">
            <div>
              <div className="w-9/12 mx-auto mt-4">
                <div className="inline-flex items-center">
                  <div className="flex items-center">
                    <div>
                      <span>
                        <LightTransmission />
                      </span>
                      <h6 className="lg:text-sm  text-secondary font-medium pl-2">
                        Visible Light Transmission
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full bg-zinc-300 rounded-lg max-w-md">
                  <Progress
                    size="lg"
                    aria-label="Loading..."
                    color="secondary"
                    className="h-3"
                    value={product.VisibleLightTransValue}
                  />
                </div>
              </div>
            </div>
            <div>BBBB</div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        {/* Product Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div>
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

              {/* Performance Metrics */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">
                    Total Solar Energy Rejected
                  </h3>
                  <Progress
                    value={product.EnergyRejectedValue}
                    className="h-3"
                    aria-label="Solar Energy"
                  />
                  <span className="text-sm">
                    {product.TotalSolarEnergyRejected}
                  </span>
                </div>

                <div>
                  <h3 className="font-medium mb-2">
                    Visible Light Transmission
                  </h3>
                  <Progress
                    value={product.VisibleLightTransValue}
                    className="h-3"
                    aria-label="Light Transmission"
                  />
                  <span className="text-sm">
                    {product.VisibleLightTransmission}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SpecItem
              title="Installation Type"
              value={product.InstallationType}
            />
            <SpecItem
              title="Film Composition"
              value={product.FilmComposition}
            />
            <SpecItem title="Thickness" value={product.Thickness} />
            <SpecItem title="Warranty" value={product.warranty} />
            <SpecItem title="Fire Rating" value={product.fireRating} />
            <SpecItem title="Storage" value={product.storage} />
            <SpecItem
              title="UV Transmission"
              value={product.UltravioletTransmission}
            />
            <SpecItem
              title="External Light Reflection"
              value={product.ReflectionExternalVisibleLight}
            />
            <SpecItem
              title="Solar Glare Reduction"
              value={product.ReductionInSolarGlare}
            />
            <SpecItem title="G-Value" value={product.GValue} />
            <SpecItem
              title="Shading Coefficient"
              value={product.ShadingCoefficient}
            />
            <SpecItem
              title="Color (Outside)"
              value={product.ColourFromTheOutside}
            />
          </div>
        </div>

        {/* Glass Compatibility */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Glass Compatibility</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {product.ClearSinglePane && (
              <CompatibilityItem label="Clear Single Pane" />
            )}
            {product.TintedSinglePane && (
              <CompatibilityItem label="Tinted Single Pane" />
            )}
            {product.ClearDoublePane && (
              <CompatibilityItem label="Clear Double Pane" />
            )}
            {/* Add more compatibility items as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
const SpecItem = ({ title, value }) => (
  <div className="border-b pb-2">
    <p className="text-gray-600 text-sm">{title}</p>
    <p className="font-medium">{value}</p>
  </div>
);

const CompatibilityItem = ({ label }) => (
  <div className="flex items-center gap-2 bg-white p-3 rounded-lg">
    <Image
      src="/images/solar-films-imgs/tickmark.svg"
      alt="Compatible"
      width={20}
      height={20}
    />
    <span className="text-sm">{label}</span>
  </div>
);

function SunRejection() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0003 6.41699C9.81899 6.41699 6.41699 9.81899 6.41699 14.0003C6.41699 18.1817 9.81899 21.5837 14.0003 21.5837C18.1817 21.5837 21.5837 18.1817 21.5837 14.0003C21.5837 9.81899 18.1817 6.41699 14.0003 6.41699ZM14.5837 20.3872V7.61283C17.8492 7.90916 20.417 10.6584 20.417 13.9997C20.417 17.3411 17.8492 20.0915 14.5837 20.3872Z"
        fill="#505050"
      />
      <path
        d="M14.0003 4.66667C14.3229 4.66667 14.5837 4.40533 14.5837 4.08333V0.583333C14.5837 0.261333 14.3229 0 14.0003 0C13.6777 0 13.417 0.261333 13.417 0.583333V4.08333C13.417 4.40533 13.6777 4.66667 14.0003 4.66667Z"
        fill="#505050"
      />
      <path
        d="M14.0003 23.333C13.6777 23.333 13.417 23.5943 13.417 23.9163V27.4163C13.417 27.7383 13.6777 27.9997 14.0003 27.9997C14.3229 27.9997 14.5837 27.7383 14.5837 27.4163V23.9163C14.5837 23.5943 14.3229 23.333 14.0003 23.333Z"
        fill="#505050"
      />
      <path
        d="M8.53657 5.70399C8.64507 5.89124 8.84049 5.99566 9.04232 5.99566C9.14149 5.99566 9.24182 5.97057 9.33341 5.91749C9.61282 5.75649 9.70849 5.39949 9.54691 5.12066L7.79691 2.08966C7.63532 1.81024 7.27774 1.71516 7.00007 1.87616C6.72066 2.03716 6.62499 2.39416 6.78657 2.67299L8.53657 5.70399Z"
        fill="#505050"
      />
      <path
        d="M19.4639 22.2967C19.3029 22.0173 18.9447 21.9222 18.6671 22.0832C18.3876 22.2442 18.292 22.6012 18.4536 22.88L20.2036 25.911C20.3121 26.0983 20.5075 26.2027 20.7093 26.2027C20.8085 26.2027 20.9088 26.1776 21.0004 26.1245C21.2798 25.9635 21.3755 25.6065 21.2139 25.3277L19.4639 22.2967Z"
        fill="#505050"
      />
      <path
        d="M5.70386 8.53619L2.67286 6.78619C2.39345 6.62519 2.03703 6.72085 1.87603 6.99969C1.71503 7.27852 1.8107 7.63552 2.08953 7.79652L5.12053 9.54652C5.21211 9.5996 5.31245 9.62469 5.41161 9.62469C5.61345 9.62469 5.80945 9.52027 5.91736 9.33302C6.07836 9.0536 5.9827 8.69719 5.70386 8.53619Z"
        fill="#505050"
      />
      <path
        d="M25.9109 20.2032L22.8799 18.4532C22.6011 18.2922 22.2441 18.3878 22.0831 18.6667C21.9221 18.9455 22.0177 19.3025 22.2966 19.4635L25.3276 21.2135C25.4191 21.2666 25.5195 21.2917 25.6186 21.2917C25.8205 21.2917 26.0165 21.1873 26.1244 21C26.2854 20.7206 26.1897 20.3642 25.9109 20.2032Z"
        fill="#505050"
      />
      <path
        d="M4.66667 14.0003C4.66667 13.6783 4.40592 13.417 4.08333 13.417H0.583333C0.26075 13.417 0 13.6783 0 14.0003C0 14.3223 0.26075 14.5837 0.583333 14.5837H4.08333C4.40592 14.5837 4.66667 14.3223 4.66667 14.0003Z"
        fill="#505050"
      />
      <path
        d="M27.4163 13.417H23.9163C23.5938 13.417 23.333 13.6783 23.333 14.0003C23.333 14.3223 23.5938 14.5837 23.9163 14.5837H27.4163C27.7389 14.5837 27.9997 14.3223 27.9997 14.0003C27.9997 13.6783 27.7389 13.417 27.4163 13.417Z"
        fill="#505050"
      />
      <path
        d="M5.11994 18.4536L2.08894 20.2036C1.80952 20.3646 1.71386 20.7216 1.87544 21.0004C1.98394 21.1876 2.17936 21.2921 2.38119 21.2921C2.48036 21.2921 2.58069 21.267 2.67227 21.2139L5.70327 19.4639C5.98269 19.3029 6.07836 18.9459 5.91677 18.6671C5.75519 18.3876 5.39761 18.292 5.11994 18.4536Z"
        fill="#505050"
      />
      <path
        d="M22.5892 9.62481C22.6884 9.62481 22.7887 9.59973 22.8803 9.54665L25.9113 7.79665C26.1907 7.63565 26.2864 7.27865 26.1248 6.99981C25.9632 6.7204 25.6056 6.62531 25.3279 6.78631L22.2969 8.53631C22.0175 8.69731 21.9219 9.05431 22.0834 9.33315C22.1919 9.5204 22.3874 9.62481 22.5892 9.62481Z"
        fill="#505050"
      />
      <path
        d="M9.33302 22.0834C9.0536 21.9219 8.69719 22.0175 8.53619 22.2969L6.78619 25.3279C6.62519 25.6074 6.72085 25.9638 6.99969 26.1248C7.09127 26.1779 7.1916 26.2029 7.29077 26.2029C7.4926 26.2029 7.6886 26.0985 7.79652 25.9113L9.54652 22.8803C9.70752 22.6009 9.61185 22.2444 9.33302 22.0834Z"
        fill="#505050"
      />
      <path
        d="M18.6667 5.91749C18.7583 5.97057 18.8586 5.99566 18.9578 5.99566C19.1596 5.99566 19.3556 5.89124 19.4635 5.70399L21.2135 2.67299C21.3745 2.39357 21.2788 2.03716 21 1.87616C20.7212 1.71516 20.3642 1.81024 20.2032 2.08966L18.4532 5.12066C18.2922 5.40007 18.3878 5.75649 18.6667 5.91749Z"
        fill="#505050"
      />
    </svg>
  );
}

function LightTransmission() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.621 7.34439C20.6325 7.35329 20.6426 7.36346 20.6528 7.37364C24.3729 11.0936 24.3638 17.142 20.6325 20.8733C16.901 24.6046 10.8511 24.6134 7.13228 20.8949C7.11193 20.8746 7.09412 20.8542 7.07886 20.8326C3.46199 17.0951 3.49878 11.1216 7.19078 7.42963C10.893 3.7276 16.8856 3.69956 20.621 7.34439ZM20.2611 8.52457L8.28071 20.5045C11.6013 23.4321 16.6872 23.2998 19.872 20.1153C23.0568 16.9309 23.1889 11.8467 20.2611 8.52457ZM13.6427 0.357376C13.6427 0.160254 13.8029 0 14.0001 0C14.1972 0 14.3575 0.160241 14.3575 0.357376V2.75971C14.3575 2.95683 14.1972 3.11708 14.0001 3.11708C13.803 3.11708 13.6427 2.95684 13.6427 2.75971V0.357376ZM3.19222 4.20689C3.05232 4.067 3.05232 3.84063 3.19222 3.70073C3.33211 3.56084 3.55849 3.56084 3.6984 3.70073L6.37554 6.37777C6.51544 6.51767 6.51544 6.74404 6.37554 6.88393C6.23565 7.02383 6.00927 7.02383 5.86936 6.88393L3.19222 4.20689ZM23.794 3.70073C23.9339 3.56084 24.1602 3.56084 24.3001 3.70073C24.44 3.84062 24.44 4.06699 24.3001 4.20689L21.623 6.88393C21.4831 7.02383 21.2567 7.02383 21.1168 6.88393C20.9769 6.74404 20.9769 6.51767 21.1168 6.37777L23.794 3.70073ZM0.357389 14.3579C0.16026 14.3579 0 14.1976 0 14.0005C0 13.8034 0.160247 13.6431 0.357389 13.6431H2.75981C2.95694 13.6431 3.1172 13.8034 3.1172 14.0005C3.1172 14.1976 2.95696 14.3579 2.75981 14.3579H0.357389ZM13.6427 25.2403C13.6427 25.0432 13.8029 24.8829 14.0001 24.8829C14.1972 24.8829 14.3575 25.0432 14.3575 25.2403V27.6426C14.3575 27.8397 14.1972 28 14.0001 28C13.803 28 13.6427 27.8398 13.6427 27.6426V25.2403ZM21.3817 22.3967C21.2418 22.2568 21.2418 22.0304 21.3817 21.8905C21.5216 21.7506 21.748 21.7506 21.8879 21.8905L24.2992 24.3017C24.4391 24.4416 24.4391 24.668 24.2992 24.8079C24.1593 24.9478 23.9329 24.9478 23.793 24.8079L21.3817 22.3967ZM5.60379 21.8905C5.74369 21.7506 5.97007 21.7506 6.10997 21.8905C6.24987 22.0304 6.24987 22.2568 6.10997 22.3967L3.69866 24.8079C3.55876 24.9478 3.33238 24.9478 3.19248 24.8079C3.05258 24.668 3.05258 24.4416 3.19248 24.3017L5.60379 21.8905ZM25.2402 14.3578C25.0431 14.3578 24.8828 14.1976 24.8828 14.0005C24.8828 13.8033 25.043 13.6431 25.2402 13.6431H27.6426C27.8397 13.6431 28 13.8033 28 14.0005C28 14.1976 27.8398 14.3578 27.6426 14.3578H25.2402Z"
        fill="#505050"
      />
    </svg>
  );
}