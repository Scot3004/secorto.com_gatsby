import styled from '@emotion/styled'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.theme.colors.primary};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  width: 100%;

  @media (min-width: ${props => props.theme.sizes.sidebarBreakpoint}px) {
    width: ${props => props.theme.sizes.sidebar}px
  }

  a {
    font-size: 2rem;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: ${props => props.theme.colors.background};
    font-family: ${props => props.theme.fonts.heading}; 
    text-decoration: none;
    transition: color 0.3s linear;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 576px) {
      font-size: 1.5rem;
    }
  }
`

export default StyledMenu