import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./Layout"
import Img from "gatsby-image"
import styled from "styled-components"
import { scale, rhythm } from "../utils/typography"

const PostWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <PostWrapper>
        <h1 style={{ marginTop: ".5em" }}>{mdx.frontmatter.title}</h1>
        <Img
          fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid}
          style={{ marginBottom: "2em" }}
        />
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </PostWrapper>
    </Layout>
  )
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
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
      }
    }
  }
`
