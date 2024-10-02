import React from "react";
import Image from "next/image";
import useScrollTo from "@/hooks/useScrollTo";
import { Button } from "@/components/ui/button";

const NavbarDesktop = () => {
  const scrollTo = useScrollTo();

  return (
    <>
      <div className="h-full flex items-center gap-2 xl:gap-1">
        <div className="relative h-full w-[40px] xl:w-[70px]">
          <Image
            fill
            alt="logo"
            src="/static/logo/logo-color.png"
            style={{ objectFit: "contain", flexShrink: 0 }}
          />
        </div>

        <div className="hidden sm:inline-block font-serif text-sm xl:text-base font-medium">
          PT. KARYA CAKRA TRIMATRA
        </div>
      </div>

      <div className="h-full hidden xl:flex items-center gap-16">
        <div
          className="text-base font-medium text-[#293037] relative lg:cursor-pointer duration-200 hover:font-bold before:w-0 before:h-[3px] before:absolute before:left-0 before:-bottom-1 before:bg-current before:transition-all before:duration-200 hover:before:w-full"
          onClick={() => scrollTo("about-us-section")}
        >
          ABOUT US
        </div>

        <div
          className="text-base font-medium text-[#293037] relative lg:cursor-pointer duration-200 hover:font-bold before:w-0 before:h-[3px] before:absolute before:left-0 before:-bottom-1 before:bg-current before:transition-all before:duration-200 hover:before:w-full"
          onClick={() => scrollTo("product-section")}
        >
          PRODUCTS
        </div>

        <div className="text-base font-medium">
          <Button
            variant="default"
            color="white"
            size="lg"
            onClick={() => scrollTo("contact-us-section")}
          >
            CONTACT US
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavbarDesktop;
