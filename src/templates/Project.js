import React, { Component } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./Layout"
import styled from "styled-components"
import Img from "gatsby-image"
import Comments from "./Comments"

const ProjectWrapper = styled.div``

class ProjectTemplate extends Component {
  render() {
    const { mdx } = this.props.data
    let featuredImage

    if (mdx.frontmatter.featuredImage) {
      featuredImage = mdx.frontmatter.featuredImage.childImageSharp.fluid
    }

    return (
      <Layout pageSEO={mdx}>
        <ProjectWrapper>
          <h1>{mdx.frontmatter.title}</h1>
          <p>{mdx.frontmatter.description}</p>
          <p>
            <strong>Skills: </strong>
            {mdx.frontmatter.skills.map((skill, index) => {
              return (
                <small>
                  {index + 1 === mdx.frontmatter.skills.length
                    ? `${skill}`
                    : `${skill}, `}
                </small>
              )
            })}
          </p>
          {featuredImage && (
            <Img
              fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid}
              style={{ marginBottom: "2em" }}
            />
          )}
          <p>
            <strong>{mdx.frontmatter.startDate}</strong>
            {" - "}
            <strong>{mdx.frontmatter.endDate}</strong>
          </p>
          <MDXRenderer>{mdx.body}</MDXRenderer>
          <Comments slug={mdx.fields.slug} />
        </ProjectWrapper>
      </Layout>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        slug
      }
      frontmatter {
        title
        author
        endDate(formatString: "MMMM YYYY")
        startDate(formatString: "MMMM YYYY")
        skills
        description
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
