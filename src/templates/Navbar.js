import React, { useState } from "react"
import Menu from "../components/Menu"
import SideDrawer from "../components/SideDrawer"
import Backdrop from "../components/Backdrop"
import Hamburger from "../components/Hamburger"
import config from "../config/config"

const siteTitle = "shaunjacks"

const NavBar = () => {
  const { siteMetadata } = config
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen(!open)

  return (
    <div style={{ height: "100%" }}>
      <Menu
        drawerOpen={open}
        siteTitle={siteTitle}
        menuLinks={siteMetadata.menuLinks}
        click={toggleOpen}
        isOpen={open}
      />
      <Hamburger click={toggleOpen} isOpen={open} />
      <SideDrawer
        drawerClickHandler={toggleOpen}
        menuLinks={siteMetadata.menuLinks}
        isOpen={open}
      />
      {open && (
        <div>
          <Backdrop toggleDrawer={toggleOpen} />
        </div>
      )}
    </div>
  )
}

export default NavBar
