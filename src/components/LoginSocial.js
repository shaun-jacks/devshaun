import "../global.css"
import React, { Component } from "react"
import Image from "gatsby-image"
import facebookIcon from "../images/facebook-icon-black.png"
import googleIcon from "../images/google-icon-black.png"
import styled from "styled-components"
import axios from "axios"
import FacebookLogin from "react-facebook-login"
import GoogleLogin from "react-google-login"

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
const handleFacebookLogin = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/auth/facebook")
    console.log(res.data)
    // window.location = "http://localhost:3000/api/auth/facebook"
  } catch (err) {
    console.log(err)
  }
}

class LoginSocial extends Component {
  render() {
    return (
      <div>
        <LoginButton onClick={handleFacebookLogin}>
          <Spacer />
          <img
            style={{ width: "1.5em" }}
            src={facebookIcon}
            alt="Facebook Icon"
          />
          <p>Login with Facebook</p>
          <Spacer />
        </LoginButton>

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
