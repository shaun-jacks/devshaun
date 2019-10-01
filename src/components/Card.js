import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"

const CardWrapper = styled.article`
  width: 80vw;
  max-width: 800px;
  max-height: 250px;
  margin: 1em;
`

const CardContent = styled.div`
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.25s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0px 16px 0 rgba(0, 0, 0, 0.2);
  }
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .image {
    flex: 1;
    margin-right: 1em;
  }
  .info {
    flex: 2;
  }
`
const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
    pointer: cursor;
  }
`
// width: "300px", height: "200px", margin: "1em"

const Card = ({ post }) => {
  console.log(post)
  let { date, title, author } = post.frontmatter
  let { excerpt } = post
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  let { slug } = post.fields

  return (
    <CardWrapper>
      <CardContent>
        <div className="image">
          <Link to={slug}>
            <Image fluid={featuredImgFluid} />
          </Link>
        </div>
        <div className="info">
          <StyledLink to={slug}>
            <h2>{title}</h2>
            <h4>{excerpt}</h4>
          </StyledLink>
          <h6>
            <span>{author}</span> - <span>{date}</span>
          </h6>
        </div>
      </CardContent>
    </CardWrapper>
  )
}

export default Card
