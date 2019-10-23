import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"
import "../global.css"

const ProjectCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  max-width: 700px;
  padding: 1em 1em;
  margin: 1em 0em;
  box-shadow: 0px 0px 2px 0px var(--bgBorderShadow);
  border: 4px solid var(--bgBorderShadow);

  transition: all 0.25s;

  &:hover {
    transform: scale(1.025);
    box-shadow: 0px 0px 20px 0px var(--bgBorderShadow);
    cursor: pointer;
  }

  .title {
    flex: 1;
    text-align: center;
  }

  .image {
    flex: 1;
  }

  .info {
    text-align: center;
    flex: 1;
    margin-bottom: 1em;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: slategray;
  &:hover {
    text-decoration: none;
    pointer: cursor;
  }
`

const ProjectCard = ({ project }) => {
  const { frontmatter } = project
  const { title, description, skills, featuredImage } = frontmatter
  return (
    <StyledLink to={project.fields.slug}>
      <ProjectCardStyle>
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="image">
          {featuredImage && (
            <Image
              fluid={featuredImage.childImageSharp.fluid}
              style={{
                maxHeight: "500px",
                maxWidth: "75%",
                margin: "1em auto",
              }}
            />
          )}
        </div>
        <div className="info">
          <p>{description}</p>
          <small>Skills: </small>
          {skills.map((skill, index) => {
            return (
              <small>
                {index + 1 === skills.length ? `${skill}` : `${skill}, `}
              </small>
            )
          })}
        </div>
      </ProjectCardStyle>
    </StyledLink>
  )
}

export default ProjectCard
