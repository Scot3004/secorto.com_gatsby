/** @jsx jsx */
import { jsx } from 'theme-ui'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

const options = {
  settings: {
    autoplaySpeed: 1500,
    transitionSpeed: 900,
  },
  thumbnail: {
    thumbnailsGap: '20px',
  },
}

export default ({ items }) => (
  <div sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}>
    <SimpleReactLightbox>
      <SRLWrapper options={options}>
        {items.map((item) => (
          <a
            key={item.alt}
            href={item.image.childImageSharp.fluid.src}
            data-attribute="SRL"
            sx={{
              margin: "10px"
            }}
          >
            <img src={item.image.thumbnail.fixed.src} alt={item.alt} />
          </a>
        ))}
      </SRLWrapper>
    </SimpleReactLightbox>
  </div>
)
