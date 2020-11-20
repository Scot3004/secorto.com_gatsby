import React, { Fragment } from 'react'
import { Styled, css } from 'theme-ui'

const Footer = ({ socialLinks }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    © {new Date().getFullYear()},
    Follow me on: {socialLinks
      ? socialLinks.map((platform, i, arr) => (
          <Fragment key={platform.url}>
            <Styled.a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform.name}
            </Styled.a>
            {arr.length - 1 !== i && (
              <Fragment>, </Fragment>
            )}
          </Fragment>
        ))
      : null}
{` `}&bull;{` `}
    Powered by
    {` `}
    <Styled.a href="https://www.gatsbyjs.org">Gatsby</Styled.a>, icons by <Styled.a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer" >
      Font awesome
    </Styled.a>
  </footer>
)
export default Footer
