import React, { Component } from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import LoginSocial from "./LoginSocial"
import axios from "axios"
import _ from "lodash"
import { isLoggedIn, getUser } from "../services/auth"

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
    commentBody: "",
    submitting: false,
    submitted: false,
  }

  componentDidMount() {
    const loggedIn = isLoggedIn()
    const slug = this.props.slug
    this.setState({ slug })
    console.log(slug)
    if (loggedIn) {
      const user = getUser()
      this.setState({ user })
    }
    this.setState({ loggedIn })
  }

  onSubmitComment = async e => {
    e.preventDefault()
    this.setState({ submitting: true })
    const { commentBody, slug } = this.state
    const token = window.localStorage.getItem("token")
    const serverEndpoint = "https://immense-shelf-15583.herokuapp.com"
    //https://immense-shelf-15583.herokuapp.com
    const url = `${serverEndpoint}/api/comment${slug}`

    const res = await axios.post(
      url,
      {
        body: commentBody,
      },
      {
        headers: {
          "x-auth-token": token,
        },
      }
    )
    window.location = slug
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
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
                  name="commentBody"
                  id="text"
                  placeholder="Write Comment Here..."
                  onChange={this.handleChange}
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
