import React from "react"
import { graphql } from "gatsby"
import Layout from "../templates/Layout"
import PostList from "../templates/PostList"
import styled from "styled-components"

export default () => {
  return (
    <Layout>
      <PostList />
    </Layout>
  )
}
