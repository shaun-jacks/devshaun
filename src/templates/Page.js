import React, { Component } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./Layout"
import styled from "styled-components"

const PostWrapper = styled.div``

class PageTemplate extends Component {
  render() {
    const { mdx } = this.props.data

    return (
      <Layout HeaderTitle={`${mdx.frontmatter.title} - Dev Shaun`}>
        <PostWrapper>
          <h1>{mdx.frontmatter.title}</h1>
          <p>{mdx.frontmatter.date}</p>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </PostWrapper>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PagePostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        author
      }
    }
  }
`
