"use client";

import React, { useRef } from "react";
import useOnScreen from "@/hooks/useOnScreen";

const JumbotronSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      id="jumbotron-section"
      className="h-[400px] sm:h-[600px] xl:h-[700px] sm:mt-6 xl:mt-10 mb-6 sm:mb-9 xl:mb-14"
    >
      <div className="sm:max-w-8xl sm:px-6 lg:px-16 mx-auto h-full">
        <div
          ref={ref}
          className={`h-full bg-black relative sm:rounded-[40px] xl:rounded-[60px] overflow-hidden pt-6 sm:pt-10 xl:pt-16 pb-6 sm:pb-16 xl:pb-20 px-6 sm:px-8 ${
            isVisible
              ? "animate-in fade-in duration-1000"
              : "animate-out fade-out"
          }`}
        >
          <div className="h-full relative z-[2] flex flex-col justify-between">
            <div>
              <p
                className={`text-sm sm:text-lg xl:text-xl font-bold text-white underline text-center w-fit mx-auto mb-8 drop-shadow-[0px_2px_1px_#00000050] opacity-0 ease-in-out ${
                  isVisible
                    ? "animate-in fade-in slide-in-from-bottom opacity-100 duration-1000 delay-200"
                    : ""
                }`}
              >
                PT. KARYA CAKRA TRIMATRA
              </p>

              <div className="w-full max-w-[1266px] mx-auto">
                <p
                  className={`text-2xl sm:text-3xl xl:text-4xl font-medium leading-snug xl:leading-[77px] text-white text-center drop-shadow-[0px_2px_1px_#00000050] opacity-0 ease-in-out ${
                    isVisible
                      ? "animate-in fade-in slide-in-from-bottom opacity-100 duration-1000 delay-500"
                      : ""
                  }`}
                >
                  Welcome To The Logistics Solution Provider Company
                </p>
              </div>
            </div>

            <div className="w-full max-w-[1140px] flex mx-auto self-end">
              <p
                className={`text-sm sm:text-lg xl:text-lg font-normal text-white text-center opacity-0 ease-in-out ${
                  isVisible
                    ? "animate-in fade-in slide-in-from-bottom opacity-100 duration-1000 delay-700"
                    : ""
                }`}
              >
                KCT is one of logistics company with experience people inside.
                We care your product. We trust with efficient distribution, cut
                the process and always giving more than one solution for your
                distribution problem
              </p>
            </div>
          </div>

          <div className="absolute w-full h-full top-0 left-0 z-[1]">
            <div className="w-full h-full bg-[url('/static/home/jumbotron-img.jpg')] bg-no-repeat bg-cover bg-center mix-blend-normal opacity-70 drop-shadow-[0px_2px_1px_#00000050]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JumbotronSection;
