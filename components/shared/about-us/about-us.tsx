"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function AboutUsComponent() {
    const sectionRef = useRef(null);
    const numberRef = useRef(null);
    const aboutRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const numberElement = numberRef.current;
        const aboutElement = aboutRef.current;
        const textElement = textRef.current;

        // Text color and fill animation (ensure text fully loads)
        gsap.fromTo(
            [numberElement, aboutElement, textElement],
            { 
                color: 'rgba(89, 85, 79, 0.3)', 
                backgroundImage: 'linear-gradient(to right, rgba(89, 85, 79,0.3) 0%, rgba(89, 85, 79,0.3) 100%)',
                backgroundClip: 'text',
                webkitBackgroundClip: 'text',
                webkitTextFillColor: 'transparent'
            },
            {
                color: 'rgba(89, 85, 79, 1)', 
                backgroundImage: 'linear-gradient(to right, rgba(89, 85, 79,1) 0%, rgba(89, 85, 79,1) 100%)',
                backgroundClip: 'text',
                webkitBackgroundClip: 'text',
                webkitTextFillColor: 'transparent',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 1,
                    markers: false
                },
                duration: 0.6,
                ease: 'power2.out'
            }
        );

        // Optional: Enhanced animations with smooth fade, scale, and rotation for text and elements
        gsap.fromTo(
            [numberElement, aboutElement, textElement],
            { 
                opacity: 0,
                scale: 0.95,
                rotation: 10
            },
            {
                opacity: 1,
                scale: 1,
                rotation: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 1
                },
                duration: 0.8,
                ease: 'power2.out'
            }
        );

        // Parallax background animation for added depth
        gsap.to(sectionRef.current, {
            backgroundPosition: "center 30%",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    }, []);

    return (
        <section 
            ref={sectionRef} 
            className="container bg-gradient-to-r from-background to-alternativebackground p-4 h-screen"
            id="aboutUs"
        >
            <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-auto md:grid-rows-5 gap-4 text-foreground">
                {/* Section 01 */}
                <div className="col-span-1 row-span-1 md:row-span-2 px-6 text-center md:text-left">
                    <h1 
                        ref={numberRef}
                        className="font-english font-medium text-[4rem] md:text-[8rem] lg:text-[10rem]"
                    >
                        01
                    </h1>
                </div>
                {/* Section About */}
                <div className="col-span-3 row-span-1 md:row-span-2 md:col-start-1 md:row-start-3 px-6 text-center md:text-left">
                    <h1 
                        ref={aboutRef}
                        className="font-english font-medium text-[4rem] md:text-[8rem] lg:text-[10rem]"
                    >
                        About
                    </h1>
                </div>
                {/* Section Content */}
                <div className="col-span-1 md:col-span-4 md:row-span-5 md:col-start-4 md:row-start-3">
                    <div className="w-full p-4 md:p-6">
                        <p 
                            ref={textRef}
                            className="font-english font-medium text-base md:text-lg lg:text-xl"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Proin nec ligula et purus consequat facilisis ut sed lorem.
                            Integer non dui ut felis vulputate tincidunt nec ac elit.
                            Nullam malesuada ligula vitae eros gravida, sit amet blandit lorem accumsan.
                            Maecenas vehicula orci et augue iaculis, at scelerisque mi sodales. Curabitur dictum,
                            elit non interdum pharetra, ligula magna sollicitudin risus, vel suscipit nisi elit eget est.
                            Aenean aliquet sem nec dui posuere feugiat.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus porttitor,
                            tortor in finibus tempus, eros nisi hendrerit quam, non tristique dolor est nec justo.
                            Quisque ac diam sed nunc volutpat suscipit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUsComponent;
