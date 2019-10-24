import React, { Component } from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import LoginSocial from "./LoginSocial"
import _ from "lodash"
import config from "../config/config"
import { isLoggedIn, handleLogin, logout } from "../services/auth"

const FormTextArea = styled.textarea`
  width: 100%;
  padding: 30px 50px;
  border: 1px solid var(--textNormal);
  color: var(--textNormal);
  border-radius: 4px;
  background-color: var(--bg);
  resize: none;
`

const FormButton = styled.button`
  border: 1px solid var(--textNormal);
  background-color: var(--button);
  color: var(--textNormal);
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--buttonActive);
    color: var(--buttonTextActive);
  }
`

class CommentForm extends Component {
  state = {
    slug: "",
    loggedIn: false,
    submitting: false,
    submitted: false,
  }

  componentDidMount() {
    const loggedIn = isLoggedIn()
    const { slug } = this.props
    this.setState({ slug })
    this.setState({ loggedIn })
  }

  handleLogout = async () => {
    logout()
    const loggedIn = isLoggedIn()
    this.setState({ loggedIn })
  }

  handleFacebookLogin = async response => {
    const redirectUrl = `${this.props.slug}#comments`
    console.log(redirectUrl)
    await handleLogin(response.accessToken, config.serverEndpoint, "facebook")
    const loggedIn = isLoggedIn()
    console.log(loggedIn)
    this.setState({ loggedIn })
  }

  render() {
    const { slug } = this.props
    const { loggedIn } = this.state
    return (
      <div>
        {loggedIn && (
          <div>
            <form id="new-comment" onSubmit={this.props.onSubmitComment}>
              <label style={{ maginBottom: rhythm(0.1) }}>
                <FormTextArea
                  name="commentBody"
                  id="text"
                  placeholder="Write Comment Here..."
                  onChange={this.props.handleCommentChange}
                  value={this.props.commentBody}
                  required
                />
              </label>
              <FormButton type="submit">Submit</FormButton>
            </form>
          </div>
        )}
        {!loggedIn && (
          <div>
            <h3>Login to leave a comment...</h3>
          </div>
        )}
        <LoginSocial
          handleFacebookLogin={this.handleFacebookLogin.bind(this)}
          slug={slug}
          loggedIn={loggedIn}
          handleLogout={this.handleLogout.bind(this)}
        />
      </div>
    )
  }
}

export default CommentForm
