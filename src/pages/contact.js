import React from "react"
import "../global.css"
import Layout from "../templates/Layout"
import styled from "styled-components"

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
    -webkit-transition: all 0.4s ease-out;
    transition: all 0.4s ease-out;
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
    background-color: var(--bg);
    color: var(--textNormal);
    border-radius: 4px;
  }
`

export default class contactPage extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.name}!`)
  }
  render() {
    return (
      <Layout>
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
              />
            </FormItem>
            <FormItem>
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Your message here..."
                value={this.state.message}
                onChange={this.handleInputChange}
              ></textarea>
            </FormItem>
            <FormItem>
              <button type="submit">Submit</button>
            </FormItem>
          </form>
        </FormWrapper>
      </Layout>
    )
  }
}
