"use client";

import Image from "next/image";
import Link from "next/link";

function ProjectsComponent() {
    const projects = [
        {
            id: 1,
            title: "Chicken Twins",
            description:
                "Chicken Twins serves crispy, golden-brown fried chicken, perfectly seasoned and juicy inside.",
            identity: "/Images/projects/identity.jpg",
        },
        {
            id: 2,
            title: "Blue Biero",
            description:
                "Blue Biero serves crispy, golden-brown fried chicken, perfectly seasoned and juicy inside.",
            identity: "/Images/projects/banner.jpg",
        },
        {
            id: 3,
            title: "Lala Land",
            description:
                "Lala Land serves crispy, golden-brown fried chicken, perfectly seasoned and juicy inside.",
            identity: "/Images/projects/management.jpg",
        },
    ];



    return (
        <div className="min-h-[400vh] w-full bg-gradient-to-r from-background to-alternativebackground">
            <div className="pt-36 flex flex-col items-center gap-4">
                <h2 className="font-english font-normal text-[7rem] text-foreground">
                    Featured Projects!
                </h2>
                <p className="font-english font-light text-md text-foreground w-3/4 text-center">
                    Explore our collection of cutting-edge products designed to empower
                    your business and elevate your creative potential. Each product is
                    meticulously crafted to provide exceptional performance, usability, and
                    results.
                </p>
            </div>

            {/* Project Sections */}
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="sticky top-0 grid grid-cols-1 md:grid-cols-2 grid-rows-auto md:grid-rows-1 gap-4 justify-center items-center h-screen w-full"
                >
                    {/* Left Text Section */}
                    <div className="relative w-1/2 flex justify-center items-center text-left project-text">
                        <div className="w-full flex flex-col gap-4 relative left-24">
                            {/* Small Identity Label */}
                            <div className="py-1 px-4 mr-auto font-english font-medium text-xs bg-foreground/20 backdrop-blur-sm text-foreground/60 rounded-full transition-all duration-700 hover:bg-foreground/30 hover:text-white/90 hover:scale-105 focus:scale-105 cursor-default">
                                {project.title}
                            </div>

                            {/* Title */}
                            <h2 className="uppercase font-english font-normal text-3xl">
                                {project.title}
                            </h2>

                            {/* Description */}
                            <p className="font-english font-light text-sm">
                                {project.description}
                            </p>

                            {/* Explore More Button */}
                            <div>
                                <Link href="/Portfolio">
                                    <button
                                        className="relative py-1.5 px-12 text-white text-sm tracking-wider border border-foreground rounded-full 
                    bg-transparent cursor-pointer select-none transition-all duration-500 group uppercase"
                                    >
                                        Explore More
                                        <span
                                            className="absolute inset-0 bg-primary/90 rounded-full transition-all duration-500 transform 
                     translate-y-0.5 -translate-x-0.5 group-hover:translate-x-0 group-hover:translate-y-0 -z-10"
                                        ></span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>


                    {/* Right Image Section */}
                    <div className="w-1/2 flex  top-0 project-image">
                        <div className="bg-gradient-to-b from-primary/40 to-background h-full rounded-xl relative">
                            <div className="fixed top-1/2 transform -translate-y-1/2"
                            >
                                <Image
                                    src={project.identity}
                                    width={1000}
                                    height={1000}
                                    alt={project.title}
                                    className="max-w-[600px] max-h-[400px] rounded-xl object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectsComponent;
