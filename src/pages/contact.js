import React from "react"
import "../global.css"
import Layout from "../templates/Layout"
import styled from "styled-components"
import config from "../config/config"
import axios from "axios"

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FormItem = styled.div`
  flex: 1;
  margin: 2em;
  display: flex;
  flex-direction: column;
  label {
    color: var(--textSmall);
    flex: 1;
  }
  input,
  textarea {
    background-color: var(--bg);
    color: var(--textSmall);
    flex: 1;
    width: 80%;
    border: none;
    border-bottom: 1px solid var(--textNormal);
  }
  textarea {
    width: 100%;
    padding: 30px 50px;
    border: none;
    border-bottom: 1px solid var(--textNormal);
    border-radius: 4px;
    background-color: var(--bg);
    resize: none;
  }
  input:focus,
  textarea:focus {
    border-bottom: 3px solid #419eda;
  }
  button {
    border: 1px solid var(--textNormal);
    background-color: var(--button);
    color: var(--buttonText);
    border-radius: 4px;
  }
  button:hover {
    pointer: cursor;
    background-color: var(--buttonActive);
    color: var(--buttonTextActive);
  }
`

export default class contactPage extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    submitting: false,
    success: false,
    error: false,
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    let { name, email, message } = this.state
    // Strip html tags
    const regex = /(<([^>]+)>)/gi
    name = name.replace(regex, "")
    email = email.replace(regex, "")
    message = message.replace(regex, "")
    this.setState({ submitting: true })
    const url = `${config.serverEndpoint}/api/email`
    try {
      const res = await axios.post(url, {
        name,
        email,
        body: message,
      })
      console.log(res)
      if (res.status >= 400 && res.status < 500) {
        this.setState({ error: true, submitting: false, success: false })
      } else {
        this.setState({
          submitting: false,
          success: true,
        })
      }
    } catch (error) {
      console.log(error)
      this.setState({ error: true, submitting: false, success: false })
    }
  }
  render() {
    const { submitting, success, error } = this.state
    return (
      <Layout>
        {error ? (
          <div>
            <p>An error occurred sending message, please try again later...</p>
          </div>
        ) : (
          !submitting &&
          !success && (
            <FormWrapper>
              <form onSubmit={this.handleSubmit}>
                <FormItem>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    required
                  />
                </FormItem>
                <FormItem>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                  />
                </FormItem>
                <FormItem>
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="Your message here..."
                    value={this.state.message}
                    onChange={this.handleInputChange}
                    required
                  ></textarea>
                </FormItem>
                <FormItem>
                  <button type="submit">Submit</button>
                </FormItem>
              </form>
            </FormWrapper>
          )
        )}
        {submitting && !success && (
          <div>
            <p>Sending message...</p>
          </div>
        )}
        {!submitting && success && (
          <div>
            <p>Message sent!</p>
          </div>
        )}
      </Layout>
    )
  }
}
