"use client";

import Image from "next/image";
import React, { useState } from "react";
import useScrollTo from "@/hooks/useScrollTo";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";
import Link from "next/link";

const Navbar = () => {
  const scrollTo = useScrollTo();

  const [_openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="h-[70px] xl:h-[80px]">
      <div className="h-full max-w-8xl px-6 lg:px-16 py-3 mx-auto">
        <div className="h-full flex items-center justify-between">
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
              onClick={() => scrollTo("aboutus-section")}
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

          <Drawer direction="left">
            <DrawerTrigger asChild>
              <div
                className="h-full flex xl:hidden items-center gap-1"
                onClick={() => setOpenDrawer(true)}
              >
                <div className="text-base leading-4 font-medium text-[#293037]">
                  MENU
                </div>

                <div className="relative h-full w-[10px]">
                  <Image
                    fill
                    alt="logo"
                    src="/static/navbar/icon-menu.svg"
                    style={{ flexShrink: 0 }}
                  />
                </div>
              </div>
            </DrawerTrigger>

            <DrawerContent
              draggable={false}
              className="h-full px-6 bg-[#293037]"
            >
              <div className="h-full">
                <div className="h-[70px] flex items-center justify-between py-3 mb-10">
                  <div className="relative h-full w-[40px]">
                    <Image
                      fill
                      alt="logo"
                      src="/static/logo/logo-white.png"
                      style={{ objectFit: "contain", flexShrink: 0 }}
                    />
                  </div>

                  <DrawerClose asChild>
                    <div className="w-9 h-9 shadow-[0px_0px_0px_3px_#B4B4B4_inset] rounded-xl flex items-center justify-center">
                      <div className="relative h-full w-[18px]">
                        <Image
                          alt="close-icon"
                          src="/static/icon/icon-close.svg"
                          fill
                        />
                      </div>
                    </div>
                  </DrawerClose>
                </div>

                <div className="relative z-10 flex flex-col gap-12">
                  <h2
                    className="text-base font-medium text-[#FFFFFF]"
                    onClick={() => {
                      console.log("test");
                      scrollTo("aboutus-section");
                    }}
                  >
                    ABOUT US
                  </h2>

                  <DrawerClose asChild>
                    <Link href="#product-section">
                      <h2 className="text-base font-medium text-[#FFFFFF]">
                        PRODUCTS
                      </h2>
                    </Link>
                  </DrawerClose>

                  <h2 className="text-base font-medium text-[#FFFFFF]">
                    CONTACT US
                  </h2>
                </div>

                <div className="absolute -z-[2] h-full w-full top-0 left-0">
                  <div className="relative bg-[url('/static/navbar/dummy-img.jpg')] bg-cover bg-center mix-blend-normal opacity-5 w-full h-full" />
                </div>

                <div className="absolute -z-[1] h-full w-full top-0 left-0">
                  <div className="relative bg-[url('/static/navbar/nav-noise-bg.png')] bg-cover bg-center mix-blend-normal opacity-70 w-full h-full" />
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
