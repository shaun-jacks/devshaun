import "../global.css"
import React from "react"
import Header from "./Header"
import Footer from "../components/Footer"
import { rhythm } from "../utils/typography"

const Layout = ({ children }) => {
  return (
    <div style={{ height: "100%", backgroundColor: "var(--background)" }}>
      <Header />
      <div
        style={{
          marginTop: "5em",
          marginLleft: "auto",
          marginRight: "auto",
          maxWidth: `${rhythm(24)}`,
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
