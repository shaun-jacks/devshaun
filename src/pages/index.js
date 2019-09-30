import React from "react"
import { graphql } from "gatsby"
import Layout from "../templates/Layout"
import styled from "styled-components"
import Card from "../components/Card"
const HeadingTitle = styled.div`
  display: inline-block;
  border-bottom: 1px solid;
`

const BlogWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`

export default ({ data }) => {
  return (
    <Layout>
      <BlogWrapper>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card key={node.id} post={node}></Card>
        ))}
      </BlogWrapper>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            author
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 350) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
