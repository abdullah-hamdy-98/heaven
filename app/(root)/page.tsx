import HeroSection from "@/components/shared/heroSection/HeroSection";
import AboutUsComponent from "@/components/shared/about-us/about-us";
import Navigation from "@/components/shared/navigation/app-navigation";
import ProjectsComponent from "@/components/shared/projects/projectsComponent";
import ProjectsOld from "@/components/shared/projects/ProjectOld";
import TryComponent from "@/components/shared/projects/tryit";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUsComponent />

      <TryComponent />

      {/* <ProjectsComponent /> */}
      <ProjectsOld />
      <Navigation />
    </div>
  );
}