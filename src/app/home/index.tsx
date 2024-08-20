import React, { Fragment } from "react";
import AboutUsSection from "./sections/AboutUsSection";
import ProductSection from "./sections/ProductSection";
import JumbotronSection from "./sections/JumbotronSection";

const HomeView = () => {
  return (
    <Fragment>
      <JumbotronSection />
      <AboutUsSection />
      <ProductSection />
    </Fragment>
  );
};

export default HomeView;
