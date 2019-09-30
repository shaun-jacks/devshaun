import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

// Optional background color: #11111;
const HeaderWrapper = styled.header`
  background: #11111;
  margin-bottom: 1.45rem;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-items: space-between;
  justify-content: center;
  align-items: center;
`

const LogoHeader = styled.h1`
  margin-left: 1rem;
  color: #12334f;
  text-decoration: none;

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
  flex: 1;
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

const Header = ({ siteTitle, menuLinks }) => (
  <HeaderWrapper>
    <HeaderContainer>
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
      <div>
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
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
