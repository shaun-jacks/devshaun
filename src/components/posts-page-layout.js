import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../templates/Layout"
import { scale, rhythm } from "../utils/typography"

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <h1 style={{ marginTop: ".5em" }}>{mdx.frontmatter.title}</h1>

      <MDXRenderer>{mdx.body}</MDXRenderer>
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
      }
    }
  }
`
