import React, { Component } from "react"
import Layout from "../templates/Layout"
import PostList from "../templates/PostList"
import styled from "styled-components"
import Card from "../components/Card"
import "../global.css"

const CategoryItemWrapper = styled(props => <div {...props} />)`
  margin: 0.25em 0.5em;
  padding: 0em 0em;
  border-radius: 8px;
  display: flex;
  align-items: center;
  background-color: var(--button);

  &:hover {
    cursor: pointer;
  }
  &.active {
    background-color: var(--buttonActive);
  }
`

const CategoryItem = styled.h4`
  flex: 1;
  color: var(--buttonText);
  margin: 0.25em 0.5em;
  &:hover {
    cursor: pointer;
  }

  &.active {
    color: var(--buttonTextActive);
  }
`

export default class BlogPage extends Component {
  state = {
    currentCategories: [],
    posts: this.props.data.posts.edges,
    filteredPosts: this.props.data.posts.edges,
  }

  filterPosts = () => {
    let { posts, filteredPosts, currentCategories } = this.state
    filteredPosts = posts

    if (currentCategories.length > 0) {
      filteredPosts = filteredPosts.filter(
        post =>
          post.node.frontmatter.categories &&
          currentCategories.every(cat =>
            post.node.frontmatter.categories.includes(cat)
          )
      )
    }

    this.setState({ filteredPosts })
  }

  updateCategories = category => {
    const { currentCategories } = this.state
    console.log(currentCategories)
    if (!currentCategories.includes(category)) {
      this.setState(prevState => ({
        currentCategories: [...prevState.currentCategories, category],
      }))
    } else {
      this.setState(prevState => ({
        currentCategories: prevState.currentCategories.filter(
          cat => category !== cat
        ),
      }))
    }
  }

  render() {
    let { filteredPosts, currentCategories } = this.state
    let filterCount = filteredPosts.length
    let categories = this.props.data.categories.group

    return (
      <Layout>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {categories.map(category => {
            const active = currentCategories.includes(category.fieldValue)

            return (
              <CategoryItemWrapper
                key={category.fieldValue}
                onClick={async () => {
                  await this.updateCategories(category.fieldValue)
                  await this.filterPosts()
                }}
                className={active ? "active" : ""}
              >
                <div style={{ flex: "1" }} />
                <CategoryItem className={active ? "active" : ""}>
                  {category.fieldValue}
                </CategoryItem>
                <div style={{ flex: "1" }} />
              </CategoryItemWrapper>
            )
          })}
        </div>
        <div>
          {filteredPosts.map(({ node }) => {
            return <Card key={node.id} post={node}></Card>
          })}
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query BlogQuery {
    posts: allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 60)
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            categories
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 140) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    categories: allMdx(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`
