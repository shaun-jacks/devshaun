import React, { Component } from "react"
import CommentForm from "../components/CommentForm"
import moment from "moment"
import { rhythm } from "../utils/typography"

class Comments extends Component {
  state = {
    comments: this.props.comments || [],
    newComment: {
      slug: this.props.slug,
      body: "",
      name: "",
      userId: "",
    },
    submitting: false,
    error: false,
  }

  render() {
    const { comments, slug } = this.props
    console.log(comments)
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
        <CommentForm slug={slug} />
      </div>
    )
  }
}

export default Comments
