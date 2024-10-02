"use client";

import React from "react";
import NavbarMobile from "./components/NavbarMobile";
import NavbarDesktop from "./components/NavbarDesktop";

const Navbar = () => {
  return (
    <div className="h-[70px] xl:h-[80px]">
      <div className="h-full max-w-8xl px-6 lg:px-16 py-3 mx-auto">
        <div className="h-full flex items-center justify-between">
          <NavbarDesktop />

          <NavbarMobile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
