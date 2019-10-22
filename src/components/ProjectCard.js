import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"

const ProjectCard = ({ project }) => {
  return (
    <div>
      <div></div>
      <div>{project.frontmatter.title}</div>
    </div>
  )
}

export default ProjectCard
