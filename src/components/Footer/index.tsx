import React from "react";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { products } from "./static";

const Footer = () => {
  return (
    <div className="mt-[32px] md:mt-[82px]">
      <div className="max-w-8xl px-6 lg:px-16 mx-auto">
        <Separator />

        <div className="pt-6 pb-10">
          <div className="flex flex-col lg:flex-row justify-between gap-[40px] lg:gap-[100px] ">
            <div className="hidden lg:inline-block relative w-[70px] h-[70px] flex-shrink-0">
              <Image
                alt="Logo Footer"
                src="/static/logo/logo-color.png"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className="inline-block lg:hidden relative w-full h-[90px]">
              <Image
                alt="Logo Footer"
                src="/static/logo/logo-color-text.png"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className="flex flex-col lg:flex-row flex-grow flex-wrap justify-between gap-[40px] xl:gap-10">
              <div className="flex flex-col gap-4">
                <h4 className="text-base sm:text-lg font-bold text-[#293037]">
                  PRODUCTS
                </h4>

                <div className="flex flex-col sm:flex-row sm:gap-8 h-full">
                  <div className="flex flex-col gap-4 h-full">
                    {products.slice(0, 5).map((product) => (
                      <p key={product} className="text-sm sm:text-base">
                        {product}
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4 h-full">
                    {products.slice(5, 9).map((product) => (
                      <p key={product} className="text-sm sm:text-base">
                        {product}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-base sm:text-lg font-bold text-[#293037]">
                  LOCATIONS
                </h4>

                <div className="w-full max-w-full lg:max-w-[150px] xl:max-w-full">
                  <p className="text-sm sm:text-base">
                    P.O.Box: 27430, Sharjah Media City, Sharjah, UAE
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-base sm:text-lg font-bold text-[#293037]">
                  CONTACT
                </h4>

                <p className="text-sm sm:text-base">+62 813 8119 5762</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-10" />

        <div className="mb-10">
          <p className="text-sm sm:text-base text-center lg:text-start">
            ©2024 Karya Cakra Trimarta . All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
