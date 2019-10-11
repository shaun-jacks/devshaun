import "../global.css"
import React, { Component } from "react"
import styled from "styled-components"
import { serverEndpoint } from "../config/config"
import { navigate } from "gatsby"
import FacebookLogin from "react-facebook-login"
import { TiSocialFacebook } from "react-icons/ti/"
import { IconContext } from "react-icons"
import { handleLogin, isLoggedIn, logout } from "../services/auth"

const LoginButton = styled.div`
  border: 1px solid var(--textNormal);
  background-color: var(--button);
  color: var(--textNormal);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  margin: 1em 2em;
  cursor: pointer;
  img {
    margin: 0.1em 1em 0.1em 0;
  }
  p {
    margin: 0.1em 1em 0.1em 0;
  }
`

const Spacer = styled.div`
  flex: 1;
`
class LoginSocial extends Component {
  state = {
    loggedIn: false,
    slug: this.props.slug,
  }

  componentDidMount() {
    const loggedIn = isLoggedIn()
    console.log(this.props.slug)
    this.setState({ loggedIn })
  }

  responseFacebook = async response => {
    const serverEndpoint = "https://immense-shelf-15583.herokuapp.com"
    console.log(response)
    handleLogin(
      response.accessToken,
      serverEndpoint,
      "facebook",
      this.props.slug
    )
  }

  handleLogout = async () => {
    await logout(this.props.slug)
  }

  render() {
    const { loggedIn } = this.state
    return (
      <div>
        {!loggedIn && (
          <div>
            <FacebookLogin
              appId="2472291656430769"
              fields="name,email,picture"
              icon={
                <IconContext.Provider
                  value={{
                    className: "social-login-icon",
                    size: "1.5em",
                  }}
                >
                  <div>
                    <TiSocialFacebook />
                  </div>
                </IconContext.Provider>
              }
              textButton="Login with Facebook"
              callback={this.responseFacebook}
              disableMobileRedirect={true}
              cssClass="social-login-button"
            />
          </div>
        )}
        {loggedIn && (
          <div
            className="social-login-button"
            style={{ marginRight: "10em", justifyContent: "center" }}
            onClick={this.handleLogout}
          >
            Logout
          </div>
        )}
      </div>
    )
  }
}

export default LoginSocial
