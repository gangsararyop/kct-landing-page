import React, { Fragment } from "react";
import AboutUsSection from "./sections/AboutUsSection";
import ProductSection from "./sections/ProductSection";
import JumbotronSection from "./sections/JumbotronSection";
import ContactUsSection from "./sections/ContactUsSection";

const HomeView = () => {
  return (
    <Fragment>
      <JumbotronSection />
      <AboutUsSection />
      <ProductSection />
      <ContactUsSection />
    </Fragment>
  );
};

export default HomeView;
