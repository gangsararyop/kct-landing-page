import React, { FC, useMemo } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Product } from "../types";

type ProductCardProps = {
  product: Product;
  index: number;
};

const ProductCard: FC<ProductCardProps> = ({ product, index }) => {
  const { title, image, subtitle, desc } = product;

  const isOpposite = useMemo(() => index % 2 === 0, [index]);

  return (
    <div className="relative z-[1] flex flex-col lg:flex-row justify-between gap-4 lg:gap-12">
      <div className="lg:hidden">
        <h2 className="text-xl sm:text-2xl font-bold text-white mx-auto text-center">
          {title}
        </h2>

        <h3 className="text-base xl:text-lg font-semibold text-[#bcbcbc] mx-auto text-center">
          {subtitle}
        </h3>
      </div>

      <div
        className={`relative w-full sm:w-[432px] lg:w-[369px] xl:w-[432px] h-[218px] sm:h-[323.34px] lg:h-[288px] xl:h-[323.34px] flex-shrink-0 mx-auto lg:mx-0 ${
          isOpposite ? "lg:-order-1" : "lg:order-1"
        }`}
      >
        <Image
          alt="product"
          src={image}
          fill
          loading="lazy"
          className="rounded-lg sm:rounded-2xl"
          style={{ objectFit: "cover" }}
        />

        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,_rgba(109,117,106,0.5)_40%,_rgba(193,132,77,0.5)_100%)] rounded-lg sm:rounded-2xl" />
      </div>

      <div
        className={`flex flex-col gap-10 ${
          isOpposite ? "lg:order-1" : "lg:-order-1"
        }`}
      >
        <div className="hidden lg:flex flex-row items-baseline gap-6">
          <div className={`flex-shrink-0 ${!isOpposite && "lg:hidden"}`}>
            <ArrowLeft color="white" />
          </div>

          <div>
            <h2 className="text-2xl xl:text-3xl font-bold text-white mb-1">
              {title}
            </h2>

            <h3 className="text-lg xl:text-xl font-semibold text-[#bcbcbc]">
              {subtitle}
            </h3>
          </div>

          <div className={`flex-shrink-0 ${isOpposite && "lg:hidden"}`}>
            <ArrowLeft color="white" className="rotate-180" />
          </div>
        </div>

        <div className="flex flex-row align-middle gap-6">
          <div
            className={`w-6 flex-shrink-0 hidden lg:flex ${
              !isOpposite && "lg:hidden"
            }`}
          />

          <p className="text-sm xl:text-base text-white text-center lg:text-start">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
