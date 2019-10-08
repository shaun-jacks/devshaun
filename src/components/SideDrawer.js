import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "../global.css"
const StyledLink = styled(props => <Link {...props} />)`
  padding: 0.5rem 0;
  position: relative;
  letter-spacing: 2px;

  &:hover {
    text-decoration: none;
  }
  /*
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #419eda;
    left: 0;
    transform: scaleX(0);
    transition: all 0.25s;
  }

  &::before {
    top: 0;
    transform-origin: left;
  }

  &::after {
    bottom: 0;
    transform-origin: right;
  }

  &:hover::before,
  &:hover::after {
    transform: scaleX(1);
  }*/
`

const DrawerWrapper = styled.nav`
  height: 100%;
  background: var(--bg);
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 200;
  transform: translateX(100%);
  transition: transform 0.25s ease-out;

  &.open {
    transform: translateX(0);
  }
`

const sideDrawer = ({ drawerClickHandler, menuLinks, isOpen }) => {
  console.log(isOpen)
  return (
    <DrawerWrapper className={isOpen ? "open" : ""}>
      <div style={{ flex: ".25" }} />
      <ul>
        {menuLinks.map(link => (
          <li
            key={link.name}
            style={{
              listStyleType: `none`,
              padding: `1rem 0rem`,
              color: "#001E30",
            }}
          >
            <StyledLink to={link.link}>
              {link.name !== "Home" ? link.name : ""}
            </StyledLink>
          </li>
        ))}
      </ul>
      <div style={{ flex: "1" }} />
    </DrawerWrapper>
  )
}

export default sideDrawer
