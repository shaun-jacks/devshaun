import React, { Component } from "react"
import Layout from "../templates/Layout"
import styled from "styled-components"
import Card from "../components/Card"
import "../global.css"

const CategoryItemWrapper = styled(props => <div {...props} />)`
  margin: 0.25em 0.5em;
  padding: 0em 0em;
  border-radius: 4px;
  display: flex;
  align-items: center;
  background-color: var(--button);

  &:hover {
    cursor: pointer;
    background-color: var(--buttonActive);
    color: var(--buttonTextActive);
  }
  &.active {
    background-color: var(--buttonActive);
  }
`

const CategoryItem = styled.h6`
  flex: 1;
  margin: 0.25em 0.5em;
  color: var(--buttonText);

  &.active {
    color: var(--buttonTextActive);
  }
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1rem;
`

const SearchBar = styled.input`
  margin-top: 0;
  width: 70%;
  padding: 0em 1em;
  background-color: var(--button);
  border: 1px solid var(--textNormal);
  color: var(--textNormal);

  &:focus {
    border: 1px solid var(--textNormal);
  }
`

const FilterCount = styled.div`
  margin-left: 1em;
  color: var(--buttonText);
  font-size: 5vw;
`

export default class BlogPage extends Component {
  state = {
    currentCategories: [],
    posts: this.props.data.posts.edges,
    filteredPosts: this.props.data.posts.edges,
    searchTitle: "",
  }

  filterPosts = () => {
    let { posts, filteredPosts, currentCategories, searchTitle } = this.state
    filteredPosts = posts

    filteredPosts = posts.filter(post =>
      post.node.frontmatter.title
        .toLowerCase()
        .includes(searchTitle.toLowerCase())
    )

    if (currentCategories.length > 0) {
      filteredPosts = filteredPosts.filter(
        post =>
          post.node.frontmatter.categories &&
          currentCategories.some(cat =>
            post.node.frontmatter.categories.includes(cat)
          )
      )
    }

    this.setState({ filteredPosts })
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
    this.filterPosts()
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
    let { filteredPosts, currentCategories, searchTitle } = this.state
    let filterCount = filteredPosts.length
    let categories = this.props.data.categories.group

    return (
      <Layout>
        <h2>
          NOTE: This blog is in development and these are only design props
        </h2>
        <h2>What do you want to read about?</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
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
        <SearchContainer>
          <SearchBar
            className="search"
            type="text"
            name="searchTitle"
            value={searchTitle}
            placeholder="Type here to filter posts..."
            onChange={this.handleChange}
          />
          <FilterCount>{filterCount}</FilterCount>
        </SearchContainer>
        <br />
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
      filter: { frontmatter: { template: { ne: "page" } } }
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 60)
          timeToRead
          fields {
            slug
          }
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
