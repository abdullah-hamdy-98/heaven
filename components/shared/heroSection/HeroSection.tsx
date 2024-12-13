/* eslint-disable */
"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

function HeroSection() {
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const imageContainerRef = useRef(null);

    useEffect(() => {
        const textElement = textRef.current || { children: [] };
        const imageContainer = imageContainerRef.current;

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
            textElement.children[0],
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1 }
        )
            .fromTo(
                textElement.children[1],
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 1 },
                "-=0.5"
            )
            .fromTo(
                textElement.children[2],
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 1 },
                "-=0.5"
            )
            .fromTo(
                textElement.children[3],
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 1 },
                "-=0.5"
            );

        tl.fromTo(
            imageContainer,
            { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
            {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 2,
                ease: "power2.inOut",
            },
            "-=1"
        );
    }, []);

    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 md:py-16 relative">
            {/* Left Content */}
            <div
                className="md:w-1/2 text-center md:text-left space-y-6 order-2 md:order-1"
                ref={textRef}
            >
                <h1 className="text-6xl md:text-[8rem] font-english font-heavy text-foreground opacity-0">
                    OH HI,
                    <br /> LET&apos;S <span className="text-primary">FLY</span>
                </h1>
                <p className="font-arabic font-light text-[8px] md:text-sm text-foreground opacity-0">
                    Embark on an extraordinary journey with your brand aspirations!
                    <br />
                    "At Heaven Agency, We are committed to assisting you in achieving
                    your objectives
                    <br />
                    of connecting with your audience seamlessly and conveniently.
                </p>
                <p className="font-arabic font-light text-[8px] md:text-sm text-foreground opacity-0">
                    Our team of seasoned professionals and specialists offers customized
                    marketing services that align precisely with your brand&apos;s unique
                    requirements, guaranteeing unparalleled success and excellence.
                </p>
                <div>
                    <Link href="/Contact">
                        
                            <button
                                className="relative py-2 px-6 text-white text-md tracking-wider border border-foreground rounded-full 
                outline-none bg-transparent cursor-pointer select-none transition-all duration-400 group uppercase"
                            >
                                Contact us
                                <span
                                    className="absolute inset-0 bg-primary rounded-full transition-all duration-400 transform 
                    translate-y-0.5 -translate-x-0.5 group-hover:translate-x-0 group-hover:translate-y-0 -z-10"
                                >
                                </span>
                            </button>
                        
                    </Link>
                </div>
            </div>

            {/* Right Image */}
            <div
                className="md:absolute md:inset-0 md:w-full md:h-screen md:z-0 flex justify-center items-center order-2 md:order-1"
                ref={imageContainerRef}
            >
                <Image
                    ref={imageRef}
                    src="/Images/layout/plane-outline.png"
                    layout="fill"
                    objectFit="contain"
                    alt="plane outline"
                />
            </div>
        </section>
    );
}

export default HeroSection;
