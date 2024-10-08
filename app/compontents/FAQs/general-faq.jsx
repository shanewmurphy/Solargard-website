import { Disclosure } from "@headlessui/react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

const FAQ = [
  {
    id: "01",
    Question: "What services do you offer?",
    Answer:
      "We specialise in a variety of innovative glass and surface solutions, including solar films, privacy films, anti-heat and anti-glare films, safety films, vehicle tinting, car wrapping, CoverStyl' self-adhesive vinyl, and manifestations & graphics.",
  },
  {
    id: "02",
    Question: "How do I book an appointment for car tinting or wrapping?",
    Answer:
      "You can easily book an appointment by giving us a call or reaching out via email. We’ll collect important details such as your vehicle’s make and model, and whether you want tinting for the front, rear, or all windows.",
  },
  {
    id: "03",
    Question: "What are the benefits of solar films?",
    Answer:
      "Solar films help reduce heat, glare, and UV exposure in your home, office, or vehicle. They keep interiors cooler, reduce energy costs, protect furnishings from fading, and offer a more comfortable environment.",
  },
  {
    id: "04",
    Question: "How long does it take to install window films or vinyl wraps?",
    Answer:
      "Installation times vary depending on the size of the project. Vehicle tinting typically takes a few hours, while larger surface projects like CoverStyl' applications or building window films may take a day or two. We strive to complete installations quickly and efficiently with minimal disruption.",
  },
  {
    id: "05",
    Question: "Are your films and wraps eco-friendly?",
    Answer:
      "Yes, many of our products, including CoverStyl', are eco-friendly. They allow you to renovate existing surfaces without replacing them, reducing waste and the environmental impact of traditional refurbishment.",
  },
  {
    id: "06",
    Question: "Can your privacy films completely block visibility?",
    Answer:
      "Our privacy films are designed to obscure visibility from outside while maintaining natural light flow. We offer a range of options from partial to complete privacy, depending on your needs.",
  },
  {
    id: "07",
    Question: "Do you offer custom designs for glass graphics or wraps?",
    Answer:
      "Yes! We provide fully customizable solutions for manifestations & graphics, as well as car wraps. Our team will work with you to create a design that matches your vision and brand.",
  },
  {
    id: "08",
    Question: "What areas do you serve?",
    Answer:
      "We serve a wide range of areas across Ireland, including residential, commercial, and industrial projects. Contact us to confirm service availability in your location.",
  },
];

export default function GeneralFaqs() {
  return (
    <div>
      <div className="w-full bg-gray lg:py-40 antialiased">
        <div className="lg:w-8/12 mx-auto">
          <h4 className="text-secondary font-bold text-center lg:text-3xl mb-8">
            Common Questions & Answers
          </h4>
          <div className="space-y-4">
            {FAQ.map((item) => (
              <Disclosure key={item.id}>
                {({ open }) => (
                  <div className="border-b-2 border-secondary">
                    <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-left text-sm font-medium text-secondary focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                      <h5 className="text-secondary font-semibold lg:text-lg">
                        {item.Question}
                      </h5>
                      <ArrowUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-secondary`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-600">
                      <p className="text-secondary font-medium text-sm pb-4">
                        {item.Answer}
                      </p>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
