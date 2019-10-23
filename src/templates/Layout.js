import "../global.css"
import React from "react"
import Header from "./Header"
import Footer from "../components/Footer"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import CookieConsent from "react-cookie-consent"
import { Link } from "gatsby"

const LayoutWrapper = styled.div`
  margin-top: 2.5em;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

const Layout = ({ children, postSEO, pageSEO }) => {
  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "var(--bg)",
        margin: "0",
        minHeight: "100vh",
        display: "-webkit-box",
        display: "-moz-box",
        display: "-ms-flexbox",
        display: "-webkit-flex",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CookieConsent
        style={{
          background: "var(--bgCodeContainer)",
          color: "var(--textNormal)",
        }}
        buttonStyle={{
          background: "var(--button)",
          border: "1px solid var(--textNormal)",
          fontSize: "13px",
          color: "var(--textNormal)",
        }}
      >
        By using <Link to="/">shaunjacks.com</Link>, you accept our{" "}
        <Link to="/cookie-policy">Cookie Policy</Link>.
      </CookieConsent>
      <div>
        <div>
          <Header postSEO={postSEO} pageSEO={pageSEO} />
        </div>
        <LayoutWrapper>{children}</LayoutWrapper>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
