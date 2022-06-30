import React from "react";
import { RichText } from "prismic-reactjs";

const HeroSection = ({ slice }) => (
  <section>
    <RichText render={slice.primary.title} />
    <RichText render={slice.primary.description} />
    <img
      src={slice.primary.heroBackgroundImage.url}
      alt={slice.primary.heroBackgroundImage.alt}
    />
  </section>
);

export default HeroSection;
