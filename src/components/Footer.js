import "../global.css"
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FooterWrapper = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  background: var(--bgAccent);
  div {
    margin: 1em 1em 1em 1em;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  padding: 0.5rem 0;
  position: relative;
  letter-spacing: 2px;
  color: #419eda;
  margin-left: 1em;

  &:hover {
    text-decoration: none;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <div style={{ flex: "1" }}>
        <p>Copyright © 2019 Shaun Jackson</p>
      </div>
      <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
        <StyledLink to="/privacy-policy">Privacy Policy</StyledLink>
        <StyledLink to="/cookie-policy">Cookie Policy</StyledLink>
        <StyledLink to="/terms-and-conditions">Terms and Conditions</StyledLink>
      </div>
    </FooterWrapper>
  )
}

export default Footer
