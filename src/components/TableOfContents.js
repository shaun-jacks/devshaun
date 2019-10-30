import React from "react"
import "../global.css"
import { Link } from "gatsby"

const MapList = ({ sectionList, slug }) => {
  return (
    <ul>
      {sectionList.map(section => {
        return (
          <div>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to={`${slug}/${section.url}`}
              >
                {section.title}
              </Link>
            </li>
            {section.items && (
              <MapList sectionList={section.items} slug={slug} />
            )}
          </div>
        )
      })}
    </ul>
  )
}

const TableOfContents = ({ sectionList, slug }) => {
  return (
    <div
      style={{
        padding: "1em",
        margin: "1em 0em",
      }}
    >
      <h1>Table of Contents</h1>
      <MapList sectionList={sectionList} slug={slug} />
    </div>
  )
}

export default TableOfContents
