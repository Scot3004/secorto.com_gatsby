import React from 'react'

const defaultState = {
  open: false,
  toggleOpen: () => {},
  closeOnMobile: () => {},
}

const SidebarContext = React.createContext(defaultState)

const isMobile = () => window.matchMedia('(max-width: 800px)').matches === true

class SidebarProvider extends React.Component {
  state = {
    open: false,
  }

  toggleOpen = () => {
    let open = !this.state.open
    localStorage.setItem('sidebarOpen', JSON.stringify(open))
    this.setState({ open })
  }

  closeOnMobile = () => {
    const lsOpen = JSON.parse(localStorage.getItem('sidebarOpen'))
    if (isMobile()) {
      console.log('less than 800 px sidebar closed')
      this.setState({ open: false })
    } else {
      console.log(`more than 800 px sidebar maybe open ${lsOpen}`)
      this.setState({ open: lsOpen })
    }
  }

  componentDidMount() {
    this.closeOnMobile()
  }

  render() {
    const { children } = this.props
    const { open } = this.state
    return (
      <SidebarContext.Provider
        value={{
          open,
          toggleOpen: this.toggleOpen,
          closeOnMobile: this.closeOnMobile,
        }}
      >
        {children}
      </SidebarContext.Provider>
    )
  }
}

export default SidebarContext
export { SidebarProvider }
