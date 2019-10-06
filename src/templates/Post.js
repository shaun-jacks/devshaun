import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./Layout"
import Img from "gatsby-image"
import styled from "styled-components"
import TagList from "../components/TagList"

const PostWrapper = styled.div``

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <PostWrapper>
        <h1>{mdx.frontmatter.title}</h1>
        <p>
          {mdx.frontmatter.author} - {mdx.frontmatter.date}
        </p>
        <TagList tags={mdx.frontmatter.tags} />
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
        tags
      }
    }
  }
`
