import React from "react";
import { Link } from "gatsby";
import { css, Styled, Flex } from "theme-ui";
import ColorModeSwitch from "../../components/color-mode-switch";

const navLinkStyle = css({
  ml: 2,
  fontFamily: `heading`,
  fontWeight: `bold`,
  textDecoration: `none`,
  color: `inherit`,
  ":hover": {
    textDecoration: `underline`
  }
})

export default ({ children, title, ...props }) => {
  return (
    <Flex>
      <Styled.h3
        as="p"
        css={{
          my: 0
        }}
      >
        <Styled.a
          as={Link}
          css={css({
            boxShadow: `none`,
            textDecoration: `none`,
            color: `primary`
          })}
          to={`/`}
        >
          {title}
        </Styled.a>
      </Styled.h3>
      <Styled.div css={css({ mx: `auto` })} />
      <Styled.a
        as={Link}
        to="/blog"
        css={navLinkStyle}
      >
        Blog
      </Styled.a>
      <ColorModeSwitch css={css({ ml: 2 })} />
    </Flex>
  );
};
