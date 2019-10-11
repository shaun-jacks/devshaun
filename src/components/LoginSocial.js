import "../global.css"
import React, { Component } from "react"
import Image from "gatsby-image"
import facebookIcon from "../images/facebook-icon-black.png"
import googleIcon from "../images/google-icon-black.png"
import styled from "styled-components"
import axios from "axios"
import FacebookLogin from "react-facebook-login"
import { serverEndpoint } from "../config/config"

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

{
  /* <LoginButton>
              <Spacer />
              <img
                style={{ width: "1.5em" }}
                src={facebookIcon}
                alt="Facebook Icon"
              />
              <p>Login with Facebook</p>
              <Spacer />
            </LoginButton> */
}
class LoginSocial extends Component {
  async responseFacebook(response) {
    const res = await axios.post(
      `https://immense-shelf-15583.herokuapp.com/api/auth/facebook`,
      {
        access_token: response.accessToken,
      }
    )
    console.log(res)
    // if (!this.props.errorMessage) {
    //   this.props.history.push('/dashboard');
    // }
  }

  render() {
    return (
      <div>
        <FacebookLogin
          appId="2472291656430769"
          fields="name,email,picture"
          render={renderProps => (
            <button style={{ marginRight: 15 }}>Facebook</button>
          )}
          callback={this.responseFacebook}
          disableMobileRedirect={true}
        />
        <LoginButton>
          <Spacer />
          <img style={{ width: "1.5em" }} src={googleIcon} alt="Google Icon" />
          <p>Login with Google</p>
          <Spacer />
        </LoginButton>
      </div>
    )
  }
}

export default LoginSocial
