import React, { Component } from "react"
import CommentForm from "../components/CommentForm"
import moment from "moment"
import { rhythm } from "../utils/typography"
import axios from "axios"
import config from "../config/config"

class Comments extends Component {
  state = {
    comments: [],
    commentBody: "",
    errors: {},
  }

  async componentDidMount() {
    const { slug } = this.props
    console.log(`${config.serverEndpoint}/api/comment${slug}`)

    try {
      const response = await axios.get(
        `${config.serverEndpoint}/api/comment${slug}`
      )
      const comments = response.data
      console.log(comments)
      this.setState({ comments })
    } catch (error) {
      console.log(error)
      this.setState({ error: true })
    }
  }

  onSubmitComment = async e => {
    e.preventDefault()
    const { slug } = this.props
    const { commentBody } = this.state
    // Strip html tags
    const regex = /(<([^>]+)>)/gi
    const result = commentBody.replace(regex, "")
    // obtain token before sending request
    const token = window.localStorage.getItem("token")
    const url = `${config.serverEndpoint}/api/comment${slug}`
    const res = await axios.post(
      url,
      {
        body: result,
      },
      {
        headers: {
          "x-auth-token": token,
        },
      }
    )
    const newComment = res.data
    const { comments } = this.state
    this.setState(prevState => ({
      ...prevState,
      comments: [newComment, ...comments],
      commentBody: "",
    }))
  }

  handleCommentChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { slug } = this.props
    const { comments } = this.state
    return (
      <div>
        <h3>Leave a comment!</h3>
        <hr />
        {comments.map((comment, i) => {
          return (
            <div key={i}>
              <h5 style={{ marginBottom: rhythm(0.1) }}>{comment.name}</h5>
              <small>{moment(comment.updatedAt).fromNow()}</small>
              <p>{comment.body}</p>
            </div>
          )
        })}
        <CommentForm
          slug={slug}
          onSubmitComment={this.onSubmitComment.bind(this)}
          handleCommentChange={this.handleCommentChange.bind(this)}
          commentBody={this.state.commentBody}
        />
      </div>
    )
  }
}

export default Comments
