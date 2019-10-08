import "../global.css"
import React from "react"
import Header from "./Header"
import Footer from "../components/Footer"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const LayoutWrapper = styled.div`
  margin-top: 2.5em;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

const Layout = ({ children }) => {
  return (
    <div style={{ height: "100%", backgroundColor: "var(--bg)" }}>
      <Header />
      <LayoutWrapper>{children}</LayoutWrapper>
      <Footer />
    </div>
  )
}

export default Layout
