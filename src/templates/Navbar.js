import React, { useState } from "react"
import Menu from "../components/Menu"
import SideDrawer from "../components/SideDrawer"
import Backdrop from "../components/Backdrop"
import Hamburger from "../components/Hamburger"

const siteTitle = "shaunjacks"
const menuLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Resume",
    link:
      "https://drive.google.com/file/d/1F8nhcfUE5EIyxGxLdlzluxhm__6UauV4/view?usp=sharing",
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
