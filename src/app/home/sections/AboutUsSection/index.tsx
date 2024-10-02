"use client";

import useOnScreen from "@/hooks/useOnScreen";
import React, { useRef } from "react";

const AboutUsSection = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useOnScreen(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useOnScreen(ref2);

  return (
    <div
      id="about-us-section"
      className="max-w-8xl px-6 lg:px-16 2xl:px-40 mx-auto mb-6 sm:mb-14 xl:mb-20"
    >
      <div className="w-full max-w-[1302px] mx-auto">
        <h3 className="text-sm sm:text-base lg:text-lg text-[#1E4E33] underline mb-4 xl:mb-10">
          ABOUT OUR COMPANY
        </h3>

        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-16">
          <div ref={ref1} className="w-full lg:max-w-[581px]">
            <h1
              className={`text-xl sm:text-2xl xl:text-4xl font-semibold text-[#293037] opacity-0 ease-in-out ${
                isVisible1
                  ? "animate-in fade-in slide-in-from-left-20 opacity-100 duration-1000"
                  : ""
              }`}
            >
              With a dedicated team and years of experience, we handle your
              products with care and precision.
            </h1>
          </div>

          <div ref={ref2} className="w-full lg:max-w-[527px]">
            <p
              className={`text-base sm:text-lg xl:text-xl text-[#B4B4B4] opacity-0 ease-in-out ${
                isVisible2
                  ? "animate-in fade-in slide-in-from-right-20 opacity-100 duration-1000"
                  : ""
              }`}
            >
              We are committed to efficient distribution, cutting out
              unnecessary steps, and providing multiple tailored solutions to
              meet your unique logistics challenges. <br /> <br /> Our mission
              is to consistently deliver exceptional value and become your
              trusted partner, ensuring that your operations run smoothly,
              reliably, and without interruption every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
