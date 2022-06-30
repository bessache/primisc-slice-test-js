import React from "react";
import { RichText } from "prismic-reactjs";

const WhoWeAreSection = ({ slice }) => (
  <section>
    <RichText render={slice.primary.whoWeAreSectionTitle} />
    <RichText render={slice.primary.whoWeAreSectionDescription} />
    <img
      src={slice.primary.whoWeAreSectionImage.url}
      alt={slice.primary.whoWeAreSectionImage.alt}
    />
  </section>
);

export default WhoWeAreSection;
