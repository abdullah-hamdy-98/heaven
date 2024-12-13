// import HeroSection from "@/components/shared/heroSection/HeroSection";
import HeroSection  from "@/components/shared/heroSection/herotwo";

import AboutUs from "./About-Us/page";
import Services from "./Services/page";
import Portfolio from "./Portfolio/page";
import ContactUs from "./Contact/page";
import Careers from "./Careers/page";

export default function Home() {
  return (
    <div>      
      <HeroSection />
      <AboutUs />
    </div>
  );
}