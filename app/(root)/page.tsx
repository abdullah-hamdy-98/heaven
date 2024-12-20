'use client'
import { useEffect, useRef, useState } from "react";
import HeroSection from "@/components/shared/heroSection/HeroSection";
import AboutUsComponent from "@/components/shared/about-us/about-us";
import Navigation from "@/components/shared/navigation/app-navigation";
import ProjectsOld from "@/components/shared/projects/ProjectOld";
import Burgur from '@/components/burger/burger';
import StickyCursor from '@/components/stickyCursor/stickyCursor';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const stickyElement = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.2;
      if (window.scrollY >= triggerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-20 left-0 w-full z-20 bg-foreground transition-opacity duration-700 ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none hidden'
          }`}
      >
        <div className="mix-blend-difference">
          <Burgur ref={stickyElement} />
          <StickyCursor stickyElement={stickyElement} />
        </div>
      </div>
      <div>
        <HeroSection />
        <AboutUsComponent />
        {/* <ProjectsOld /> */}
        <Navigation />
      </div>
    </>
  );
}