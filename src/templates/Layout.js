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
  max-width: ${rhythm(20)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  flex: 1;
`

const Layout = ({ children, HeaderTitle }) => {
  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header HeaderTitle={HeaderTitle} />
      <LayoutWrapper style={{ flex: "1" }}>{children}</LayoutWrapper>
      <Footer />
    </div>
  )
}

export default Layout
