import React, { Component } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./Layout"
import styled from "styled-components"

const ProjectWrapper = styled.div``

class ProjectTemplate extends Component {
  render() {
    const { mdx } = this.props.data

    return (
      <Layout pageSEO={mdx}>
        <ProjectWrapper>
          <h1>{mdx.frontmatter.title}</h1>
          <small>
            From: {mdx.frontmatter.startDate}
            <br />
            To: {mdx.frontmatter.endDate}
            <br />
          </small>
          <p>{mdx.frontmatter.date}</p>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </ProjectWrapper>
      </Layout>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        slug
      }
      frontmatter {
        title
        author
        startDate
        endDate
        skills
      }
    }
  }
`
