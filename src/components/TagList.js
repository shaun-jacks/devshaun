import React from "react"
import { scale, rhythm } from "../utils/typography"
import kebabCase from "lodash/kebabCase"
import { Link } from "gatsby"

const TagList = ({ tags }) => {
  return (
    <ul style={{ listStyleType: "none", marginLeft: "0" }}>
      {tags.map(tag => {
        return (
          <li
            key={tag}
            style={{
              display: "inline",
              marginRight: ".5em",
              cursor: "pointer",
            }}
          >
            <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default TagList
