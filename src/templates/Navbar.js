import React, { useState } from "react"
import { Helmet } from "react-helmet"
import Menu from "../components/Menu"
import SideDrawer from "../components/SideDrawer"
import Backdrop from "../components/Backdrop"
import Hamburger from "../components/Hamburger"

const siteTitle = "Dev Shaun"
const menuLinks = [
  {
    name: "Home",
    link: "/",
  },

  {
    name: "About Me",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Tags",
    link: "/tags",
  },
]

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen(!open)

  return (
    <div style={{ height: "100%" }}>
      <Menu
        drawerOpen={open}
        siteTitle={siteTitle}
        menuLinks={menuLinks}
        click={toggleOpen}
        isOpen={open}
      />
      <Hamburger click={toggleOpen} isOpen={open} />
      <SideDrawer
        drawerClickHandler={toggleOpen}
        menuLinks={menuLinks}
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
