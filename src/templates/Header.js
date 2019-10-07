import React from "react"
import Navbar from "./Navbar"
import { Helmet } from "react-helmet"

const Header = ({ children }) => {
  return (
    <React.Fragment>
      <Helmet
        title="Dev Shaun"
        meta={[
          {
            name: "description",
            content: "Software Development Blog | Backend | Frontend",
          },
          {
            name: "keywords",
            content:
              "Javascript, React, Gatsby, Node, SQL, NoSQL, RDBMS, MongoDB, R",
          },
        ]}
      ></Helmet>
      <Navbar />
    </React.Fragment>
  )
}

export default Header
