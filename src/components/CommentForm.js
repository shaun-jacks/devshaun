import React, { Component } from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import LoginSocial from "./LoginSocial"
import _ from "lodash"
import { isLoggedIn } from "../services/auth"

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
  background-color: var(--bg);
  color: var(--textNormal);
  border-radius: 4px;
`

class CommentForm extends Component {
  state = {
    loggedIn: false,
  }

  componentDidMount() {
    const loggedIn = isLoggedIn()
    this.setState({ loggedIn })
  }

  state = {}
  render() {
    const { slug } = this.props
    const { loggedIn } = this.state
    return (
      <div>
        {loggedIn && (
          <div>
            <form id="new-comment" onSubmit={this.onSubmitComment}>
              <label style={{ maginBottom: rhythm(0.1) }}>
                <FormTextArea
                  name="text"
                  id="text"
                  placeholder="Write Comment Here..."
                  required
                />
              </label>
              <FormButton type="submit">Submit</FormButton>
            </form>
          </div>
        )}
        {!loggedIn && (
          <div>
            {" "}
            <h3>Login to leave a comment...</h3>
          </div>
        )}
        <LoginSocial slug={slug} />
      </div>
    )
  }
}

export default CommentForm
