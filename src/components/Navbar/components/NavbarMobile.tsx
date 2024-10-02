import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useScroll } from "@/providers/ScrollToProvider";

const navItems = [
  {
    label: "ABOUT US",
    path: "#about-us-section",
  },
  {
    label: "PRODUCTS",
    path: "#product-section",
  },
  {
    label: "CONTACT US",
    path: "#contact-us-section",
  },
];

const NavbarMobile = () => {
  const { setId } = useScroll();

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Drawer direction="left" open={openDrawer} onOpenChange={setOpenDrawer}>
      <DrawerTrigger asChild>
        <div className="h-full flex xl:hidden items-center gap-1">
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

      <DrawerContent draggable={false} className="h-full px-6 bg-[#293037]">
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

            <DrawerClose>
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
            {navItems.map((navItem) => (
              <DrawerClose key={navItem.path} asChild>
                <div onClick={() => setId(navItem.path)}>
                  <h2 className="text-base font-medium text-[#FFFFFF]">
                    {navItem.label}
                  </h2>
                </div>
              </DrawerClose>
            ))}
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
  );
};

export default NavbarMobile;
