import React, { useState } from "react"
import { Helmet } from "react-helmet"
import Header from "../components/Header"
import SideDrawer from "../components/SideDrawer"
import Backdrop from "../components/Backdrop"
import Hamburger from "../components/Hamburger"
import { scale, rhythm } from "../utils/typography"

const siteTitle = "Dev Shaun"
const menuLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Frontend",
    link: "/frontend",
  },
  {
    name: "Backend",
    link: "/backend",
  },
  {
    name: "About Me",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
]

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen(!open)
  // Old background color: "#f5f8fa"

  return (
    <React.Fragment>
      <Helmet
        title={siteTitle}
        meta={[
          {
            name: "description",
            content: "Software Development Blog | Backend | Frontend",
          },
          {
            name: "keywords",
            content:
              "Javascript, React, Gatsby, Node, SQL, NoSQL, RDBMS, MongoDB, R",
          },
        ]}
      ></Helmet>
      <div style={{ height: "100%" }}>
        <Header
          drawerClickHandler={toggleOpen}
          siteTitle={siteTitle}
          menuLinks={menuLinks}
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
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {children}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Layout
