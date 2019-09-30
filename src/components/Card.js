import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"

const CardStyle = styled.article`
  width: 350px;
  height: 550px;
  margin: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.5s;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  div {
    margin: 10px 5px;
    max-height: 500px;
  }
  div .image {
    max-height: 233px;
  }
  div .image .gatsby-image-wrapper {
    max-height: 233px;
  }
`

// width: "300px", height: "200px", margin: "1em"

const Card = ({ post }) => {
  console.log(post)
  let { date, title, author } = post.frontmatter
  let { excerpt } = post
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <CardStyle>
      <div>
        <div className="image">
          <Image className="" fluid={featuredImgFluid} />
        </div>
        <div className="content">
          <div>
            <h2>{title}</h2>
            <h5>
              <span>by {author}</span> - <span>{date}</span>
            </h5>
            <p>{excerpt}</p>
            <Link to="/" className="">
              read more
            </Link>
          </div>
        </div>
      </div>
    </CardStyle>
  )
}

export default Card
