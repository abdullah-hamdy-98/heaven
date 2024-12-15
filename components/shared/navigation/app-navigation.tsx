"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["heroSection", "aboutUs", "values", "products", "markets"];
      const scrollPosition = window.scrollY;

      // Find the section that is currently in view
      const currentSection = sections.reduce((current, section) => {
        const element = document.getElementById(section);
        if (!element) return current;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 0) {
          return section;
        }
        return current;
      }, sections[0]);

      setActiveSection(currentSection);
    };

    document.documentElement.style.scrollBehavior = 'smooth';

    const sections = ["heroSection", "aboutUs", "values",  "markets"];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        element.style.scrollMarginTop = '100px';
      }
    });

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const sections = [
    { id: "heroSection", label: "Hero", number: "" },
    { id: "aboutUs", label: "About Us", number: "01" },
    { id: "soon1", label: "soon", number: "02" },
    { id: "soon2", label: "soon", number: "03" },
    { id: "soon3", label: "soon", number: "04" },
  ];

  const handleSectionClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 60,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="fixed bottom-0 w-full p-4 bg-none shadow-md  transition-all hidden">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {sections.map((section) => (
            <div key={section.id} className="relative flex flex-col items-center">
              <Link
                href={`#${section.id}`}
                onClick={(e) => handleSectionClick(section.id, e)}
                className={`flex flex-row justify-start items-center text-sm font-medium transition-all mb-2 gap-2 ${
                  activeSection === section.id
                    ? "text-foreground"
                    : "text-alternativebackground opacity-0"
                }`}
              >
                <div >{`${section.number}`}</div>
                <span >
                  {section.label}
                </span>
              </Link>
              <div
                className={`top-full w-full h-0.5 transition-all ${
                  activeSection === section.id
                    ? "bg-foreground"
                    : "bg-alternativebackground opacity-0"
                }`}
              ></div>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
