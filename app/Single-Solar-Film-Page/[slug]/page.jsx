import { solarFilmsData } from "@/app/Data-Sheets/Solar-Films-Data";
import { Progress } from "@nextui-org/progress";
import { notFound } from "next/navigation";
import Image from "next/image";

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

  // import HeroSolarFilmImg from "/public/images/solar-films-imgs/hero-solar-film-min.jpg";

  return (
    <div className="container mx-auto px-4 py-12">
      <div>AAAA</div>
      <div className="max-w-6xl mx-auto">
        {/* Product Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg mb-6">{product.filmDescription}</p>

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
                <h3 className="font-medium mb-2">Visible Light Transmission</h3>
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
