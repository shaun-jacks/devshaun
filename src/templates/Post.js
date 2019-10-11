import React, { Component } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./Layout"
import Img from "gatsby-image"
import styled from "styled-components"
import TagList from "../components/TagList"
import axios from "axios"
import Comments from "./Comments"
import { serverEndpoint } from "../config/config"

const PostWrapper = styled.div``

class PageTemplate extends Component {
  state = {
    comments: [],
    error: false,
  }

  async componentDidMount() {
    const { slug } = this.props.pageContext
    console.log(`${serverEndpoint}/api/comment${slug}`)

    try {
      const response = await axios.get(
        `https://immense-shelf-15583.herokuapp.com/api/comment${slug}`
      )
      const comments = response.data
      console.log(comments)
      this.setState({ comments })
    } catch (error) {
      console.log(error)
      this.setState({ error: true })
    }
  }

  render() {
    const { mdx } = this.props.data

    return (
      <Layout>
        <PostWrapper>
          <h1>{mdx.frontmatter.title}</h1>
          <p>
            {mdx.frontmatter.author} - {mdx.timeToRead} min -{" "}
            {mdx.frontmatter.date}
          </p>
          <TagList tags={mdx.frontmatter.tags} />
          <Img
            fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid}
            style={{ marginBottom: "2em" }}
          />
          <MDXRenderer>{mdx.body}</MDXRenderer>
          <Comments comments={this.state.comments} slug={mdx.fields.slug} />
        </PostWrapper>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        author
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
      }
    }
  }
`
