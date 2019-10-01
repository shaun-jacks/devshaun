import React from "react"
import Header from "./Header"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  return (
    <div style={{ height: "100%" }}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
