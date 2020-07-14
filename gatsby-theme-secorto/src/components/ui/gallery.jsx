import React from 'react'
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const options = {
  settings: {
    autoplaySpeed: 1500,
    transitionSpeed: 900,
  }
};

export default ({items}) => (
  <div>
    <SimpleReactLightbox>
      <SRLWrapper options={options}>
        {items.map((item) => (
          <a key={item.alt} href={item.image.childImageSharp.fluid.src} data-attribute="SRL">
            <img
              src={item.image.thumbnail.fixed.src}
              alt={item.alt}
            />
          </a>
        ))}
      </SRLWrapper>
    </SimpleReactLightbox>
  </div>
)
