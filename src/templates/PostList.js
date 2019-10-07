import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Card from "../components/Card"

const PostWrapper = styled.div``

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
                    fluid(maxWidth: 140) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              fields {
                slug
              }
              excerpt(pruneLength: 60)
            }
          }
        }
      }
    `}
    render={data => (
      <PostWrapper>
        {data.allMdx.edges.map(({ node }) => (
          <Card key={node.id} post={node}></Card>
        ))}
      </PostWrapper>
    )}
  />
)
