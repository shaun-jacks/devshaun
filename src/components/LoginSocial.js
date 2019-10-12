import "../global.css"
import React, { Component } from "react"
import styled from "styled-components"
import FacebookLogin from "react-facebook-login"
import { TiSocialFacebook } from "react-icons/ti/"
import { IconContext } from "react-icons"

class LoginSocial extends Component {
  state = {
    slug: this.props.slug,
  }

  render() {
    const { loggedIn } = this.props
    console.log(loggedIn)
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
              callback={this.props.handleFacebookLogin}
              disableMobileRedirect={true}
              cssClass="social-login-button"
            />
          </div>
        )}
        {loggedIn && (
          <div
            className="social-login-button"
            style={{ marginRight: "10em", justifyContent: "center" }}
            onClick={this.props.handleLogout}
          >
            Logout
          </div>
        )}
      </div>
    )
  }
}

export default LoginSocial
