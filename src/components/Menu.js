import "../global.css"
import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import ThemeToggle from "../components/ThemeToggle"
import Hamburger from "../components/Hamburger"

// Optional background color: #11111;
const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
  z-index: 9998;
  transition: all 0.5s;
  background: var(--bg);

  &.open {
    opacity: 1;
  }
  &.closed {
    opacity: 0;
  }
`

const MenuContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0.5rem 1.0875rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: 0.1s;
`

const LogoHeader = styled.h1`
  color: #12334f;
  margin-bottom: 0;
  text-decoration: none;
  letter-spacing: 5px;

  &:hover {
    color: #12334f;
    text-decoration: none;
  }
`
const NavList = styled.nav`
  display: flex;
  flex: 1;
  margin: 0 auto;

  @media (max-width: 768px) {
     {
      display: none;
    }
  }
`

const Spacer = styled.div`
  flex: 0.75;
`
const StyledLink = styled(props => <Link {...props} />)`
  padding: 0.5rem 0;
  position: relative;
  letter-spacing: 2px;

  &:hover {
    text-decoration: none;
  }

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
  }
`

const Menu = ({ siteTitle, menuLinks, drawerOpen, toggleOpen, open }) => {
  let [fadeIn, setFadeIn] = useState(true)
  // Reference:
  // https://lxieyang.github.io/blogs/tech-2018-08-18-reactstrap-gatsby-auto-hiding-navbar-trick/
  //  adapted for functional components:
  if (typeof window !== "undefined") {
    let prevScrollpos = window.pageYOffset
    window.onscroll = function() {
      const maxScroll = document.body.clientHeight - window.innerHeight
      let currentScrollPos = window.pageYOffset
      if (
        (maxScroll > 0 &&
          prevScrollpos > currentScrollPos &&
          prevScrollpos <= maxScroll) ||
        (maxScroll <= 0 && prevScrollpos > currentScrollPos) ||
        (prevScrollpos <= 0 && currentScrollPos <= 0)
      ) {
        // Control sensitivity of opening navbar again
        if (!fadeIn && Math.abs(currentScrollPos - prevScrollpos) > 7) {
          setFadeIn(true)
        }
      } else {
        if (fadeIn) {
          setFadeIn(false)
        }
      }
      prevScrollpos = currentScrollPos
    }
  }

  return (
    <MenuWrapper className={fadeIn && !drawerOpen ? "open" : "closed"}>
      <MenuContainer>
        <LogoHeader>
          <Link
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            {siteTitle}
          </Link>
        </LogoHeader>
        <Spacer />
        <ThemeToggle />
        <div>
          <Hamburger click={toggleOpen} isOpen={open} />
          <nav>
            <NavList>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `0rem 1rem`,
                    color: "#001E30",
                  }}
                >
                  <StyledLink activeClassName="active" to={link.link}>
                    {link.name !== "Home" ? link.name : ""}
                  </StyledLink>
                </li>
              ))}
            </NavList>
          </nav>
        </div>
      </MenuContainer>
    </MenuWrapper>
  )
}

Menu.propTypes = {
  siteTitle: PropTypes.string,
}

Menu.defaultProps = {
  siteTitle: ``,
}

export default Menu
