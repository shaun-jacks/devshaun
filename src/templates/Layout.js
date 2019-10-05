import "../global.css"
import React from "react"
import Header from "./Header"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  return (
    <div style={{ height: "100%", backgroundColor: "var(--background)" }}>
      <Header />
      <div style={{ marginTop: "5em" }}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
