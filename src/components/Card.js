import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"

const CardStyle = styled.article`
  width: 350px;
  height: 500px;
  margin: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.5s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  div {
    margin: 5px;
  }
`

// width: "300px", height: "200px", margin: "1em"

const Card = () => {
  //const { title, date, author, slug } = post.frontmattter
  return (
    <CardStyle>
      <div>
        <div className="image"></div>
        <div className="content">
          <div>
            <h2>Post Title</h2>
            <h5>
              <span>by Shaun</span> /<span>September 29th, 2019</span>
            </h5>
            <h6>An example post right here, hopefully it fits </h6>
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
