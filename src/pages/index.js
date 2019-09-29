import React from "react"
import { graphql } from "gatsby"
import Layout from "../templates/Layout"
import styled from "styled-components"
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

const Card = styled.div`
  width: 300px;
  height: 200px;
  margin: 1em;
`

export default ({ data }) => {
  return (
    <Layout>
      <BlogWrapper>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card key={node.id}>
            <h3>
              {node.frontmatter.title}
              <span>-{node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </Card>
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
          }
          excerpt
        }
      }
    }
  }
`
