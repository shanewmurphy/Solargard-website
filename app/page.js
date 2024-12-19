"use client";
import { useEffect } from "react";

import HomeHero from "./compontents/heros/home-hero";
import HomeIntroText from "./compontents/Intro-texts/home-intro";
import OurServices from "./compontents/our-services-cards/card-services-animation";

import CompanyProfile from "./compontents/homepage/company-profile";
import GeneralFaqs from "./compontents/FAQs/general-faq";
import Testimonials from "./compontents/shared-compontents/testimonials";
import ContactUs from "./compontents/shared-compontents/Contact-Us";
import Footer from "./compontents/shared-compontents/Footer";
export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div>
      <div>
        <HomeHero />
      </div>
      <div>
        <HomeIntroText />
      </div>
      {/* <div>
        <GridServicesNav />
      </div> */}
      <div>
        <OurServices />
      </div>
      <div>
        <CompanyProfile />
      </div>
      <div>
        <GeneralFaqs />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <ContactUs />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
