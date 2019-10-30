import React, { Component } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./Layout"
import Img from "gatsby-image"
import styled from "styled-components"
import TagList from "../components/TagList"
import Comments from "./Comments"
import TableOfContents from "../components/TableOfContents"
import "../global.css"

const PostWrapper = styled.div``

class PageTemplate extends Component {
  render() {
    const { mdx } = this.props.data
    let featuredImage

    if (mdx.frontmatter.featuredImage) {
      featuredImage = mdx.frontmatter.featuredImage.childImageSharp.fluid
    }

    return (
      <Layout postSEO={mdx}>
        <PostWrapper>
          <h1>{mdx.frontmatter.title}</h1>
          <p>
            {mdx.frontmatter.author} • {mdx.timeToRead} min •{" "}
            {mdx.frontmatter.date}
          </p>
          <TagList tags={mdx.frontmatter.tags} />
          {featuredImage && (
            <Img
              fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid}
              style={{ marginBottom: "2em" }}
            />
          )}
          <TableOfContents
            sectionList={mdx.tableOfContents.items}
            slug={mdx.fields.slug}
          />
          <MDXRenderer>{mdx.body}</MDXRenderer>
          <Comments slug={mdx.fields.slug} />
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
      tableOfContents(maxDepth: 3)
      excerpt(pruneLength: 60)
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
