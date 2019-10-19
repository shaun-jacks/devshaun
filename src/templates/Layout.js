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

const Layout = ({ children, HeaderTitle }) => {
  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "var(--bg)",
        margin: "0",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Header HeaderTitle={HeaderTitle} />
        <LayoutWrapper>{children}</LayoutWrapper>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
