import React from "react";
import { products } from "./static";
import ProductCard from "./components/ProductCard";

const ProductSection = () => {
  return (
    <div
      id="product-section"
      className="sm:max-w-8xl sm:px-6 lg:px-16 mx-auto mb-6 sm:mb-14 xl:mb-20"
    >
      <div className="relative bg-[#293037] sm:rounded-[40px] lg:rounded-[60px] overflow-hidden p-6 sm:p-[56px_56px] md:p-[56px_56px] xl:p-[56px_96px]">
        <h3 className="relative z-10 text-sm sm:text-base lg:text-lg text-[#B4B4B4] underline mb-4 lg:mb-10 mx-auto lg:mx-0 w-fit">
          PRODUCTS
        </h3>

        <div className="relative z-10 flex flex-col gap-6 sm:gap-10 lg:gap-20">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="absolute z-[0] h-full w-full top-0 left-0">
          <div className="relative bg-[url('/static/navbar/nav-noise-bg.png')] bg-center mix-blend-normal opacity-70 w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
