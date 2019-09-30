import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../templates/Layout"
import { scale } from "../utils/typography"

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div style={{ flex: ".5" }} />
        <div style={{ flex: "1", maxWidth: "500px" }}>
          <h1>{mdx.frontmatter.title}</h1>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
        <div style={{ flex: ".5" }} />
      </div>
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
