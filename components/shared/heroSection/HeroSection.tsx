"use client";
import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import { gsap } from 'gsap';

function Home() {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current || { "children": [] };
    const imageElement = imageRef.current;
    const imageContainer = imageContainerRef.current;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

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
      { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' },
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 2.5,
        ease: 'power2.inOut'
      },
      "-=1"
    );
  }, []);

  return (
    <div className="relative flex w-full h-screen overflow-hidden">
      {/* Full Width Background Image */}
      <div
        ref={imageContainerRef}
        className="absolute inset-0 w-full h-screen z-0"
      >
        <Image
          ref={imageRef}
          src={"/Images/layout/plane outline.png"}
          layout="fill"
          objectFit="contain"
          alt="plane outline"
          className="opacity-0 md:py-12 md:opacity-100"
        />
      </div>

      {/* Overlaid Text Container */}
      <div
        ref={textRef}
        className="z-10 flex flex-col h-full justify-start items-start text-left text-foreground py-12 px-6 max-w-full" 
      >
        <h2
          className="font-english font-heavy text-6xl md:text-[8rem] leading-none opacity-0"
        >
          OH HI,<br /> LET'S <span className="text-primary">FLY</span>
        </h2>
        <p
          className="font-arabic font-light text-foreground/80 text-[8px] md:text-sm leading-tight opacity-0 mt-4"
        >
          Embark on an extraordinary journey with your brand aspirations!
          <br />"At Heaven Agency, We are committed to assisting you in achieving your objectives
          <br />of connecting with your audience seamlessly and conveniently.
        </p>
        <p
          className="font-arabic font-light text-foreground/80 text-[8px] md:text-sm leading-tight opacity-0 mt-6"
        >
          Our team of seasoned professionals and specialists offers
          <br />customized marketing services that align precisely with your brand's unique requirements,
          <br />guaranteeing unparalleled success and excellence.
        </p>

        <div className="mt-6 opacity-0">
          <button
            className="relative py-2 px-6 text-white text-md tracking-wider border border-foreground rounded-full 
            outline-none bg-transparent cursor-pointer select-none  transition-all duration-400 group uppercase"
          >
            Contact us
            <span
              className="absolute inset-0 bg-primary rounded-full transition-all duration-400 transform 
            translate-y-0.5 -translate-x-0.5 group-hover:translate-x-0 group-hover:translate-y-0 -z-10"
            >
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
