import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"

const CardStyle = styled.article`
  width: 350px;
  height: 450px;
  margin: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.25s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  div {
    max-height: 500px;
  }
  div .image {
    max-height: 233px;
  }
  div .image:hover {
  }
  div .image .gatsby-image-wrapper {
    max-height: 233px;
  }
`

const Content = styled.div`
  margin-top: 1em;
  margin-left: 1em;
  overflow: hidden;
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
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
    <StyledLink to={slug}>
      <CardStyle>
        <div>
          <div className="image">
            <Link to={slug}>
              <Image className="" fluid={featuredImgFluid} />
            </Link>
          </div>
          <Content>
            <div>
              <h2>{title}</h2>
              <h6>
                <span>by {author}</span> - <span>{date}</span>
              </h6>
              <h4>{excerpt}</h4>
            </div>
          </Content>
        </div>
      </CardStyle>
    </StyledLink>
  )
}

export default Card
