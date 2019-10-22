import React, { Component } from "react"
import Layout from "../templates/Layout"
import styled from "styled-components"
import ProjectCard from "../components/ProjectCard"
import "../global.css"

const Projects = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`

const ProjectPage = ({ data }) => {
  const projects = data.projects.edges
  return (
    <Layout>
      <Projects>
        {projects.map(({ node: project }) => {
          return <ProjectCard project={project} />
        })}
      </Projects>
    </Layout>
  )
}

export default ProjectPage

export const pageQuery = graphql`
  query ProjectQuery {
    projects: allMdx(
      filter: { frontmatter: { template: { eq: "project" } } }
      limit: 2000
      sort: { fields: [frontmatter___endDate], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            author
            endDate(formatString: "MMMM YYYY")
            startDate(formatString: "MMMM YYYY")
            title
          }
        }
      }
    }
  }
`
