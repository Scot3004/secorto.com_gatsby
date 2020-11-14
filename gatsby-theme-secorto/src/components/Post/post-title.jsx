/** @jsx jsx */
import { jsx, css, Styled } from 'theme-ui'

const PostTitle = (props) => <Styled.h1 css={css({color: 'primary' })} {...props} />

export default PostTitle
