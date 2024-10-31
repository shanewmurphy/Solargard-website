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
      "Yes! We provide fully customisable solutions for manifestations & graphics, as well as car wraps. Our team will work with you to create a design that matches your vision and brand.",
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
      <div className="w-full bg-gray lg:py-40 md:py-36 sm:py-24 antialiased">
        <div className="lg:w-8/12 md:w-10/12 sm:w-11/12 mx-auto">
          <h4 className="text-secondary font-bold text-center lg:text-3xl md:text-3xl sm:text-xl lg:mb-8 md:mb-6 sm:mb-4">
            Common Questions & Answers
          </h4>
          <div className="lg:space-y-4 md:space-y-4 sm:space-y-2">
            {FAQ.map((item) => (
              <Disclosure key={item.id}>
                {({ open }) => (
                  <div className="border-b-2 border-secondary">
                    <Disclosure.Button className="flex justify-between w-full lg:px-4 lg:py-4 md:px-4 md:py-4 sm:px-3 sm:py-4 text-left text-sm font-medium text-secondary focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                      <h5 className="text-secondary font-semibold lg:text-lg md:text-base sm:text-sm">
                        {item.Question}
                      </h5>
                      <div>
                        <ArrowUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-secondary`}
                        />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-600">
                      <p className="text-secondary font-medium lg:text-sm md:text-sm sm:text-sm pb-4">
                        {item.Answer}
                      </p>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
          <div>
            <h6 className="text-center font-bold text-secondary lg:text-2xl lg:mt-8 md:mt-6 sm:mt-8">
              Still have a question?
            </h6>
            <p className="text-center font-semibold text-secondary lg:text-lg md:text-lg sm:text-sm lg:mt-1 md:mt-2 sm:mt-1">
              Contact us for further assistance
            </p>
            <p className="text-center font-extrabold text-secondary lg:text-3xl md:text-2xl sm:text-xl mt-2">
              021 454 5606
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
