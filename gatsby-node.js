const { createFilePath } = require("gatsby-source-filesystem")
const _ = require("lodash")
const path = require("path")
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // We only want to operate on `Mdx` nodes. If we had content from a
  // remote CMS we could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)

    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}/`
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`
    } else {
      slug = `/${parsedFilePath.dir}/`
    }

    if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug"))
        slug = `/${node.frontmatter.slug}/`
    }
    createNodeField({ node, name: "slug", value: slug })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const tagTemplate = path.resolve("src/templates/tags.js")
  const postPage = path.resolve("src/templates/Post.js")
  const pagePage = path.resolve("src/templates/Page.js")
  const projectPage = path.resolve("src/templates/Project.js")

  const result = await graphql(`
    query {
      postsMdx: allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              template
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create pages
  result.data.postsMdx.edges.forEach(({ node }, index) => {
    if (node.frontmatter.template && node.frontmatter.template === "page") {
      console.log("PAGE SEEN AT")
      console.log(node.fields.slug)
      createPage({
        path: node.fields.slug,
        component: pagePage,
        context: {
          id: node.id,
          slug: node.fields.slug,
        },
      })
    } else if (node.frontmatter.template === "blog") {
      createPage({
        // This is the slug we created before
        // (or `node.frontmatter.slug`)
        path: node.fields.slug,
        // This component will wrap our MDX content
        component: postPage,
        // We can use the values in this context in
        // our page layout component
        context: {
          slug: node.fields.slug,
          id: node.id,
        },
      })
    } else if (node.frontmatter.template === "project") {
      createPage({
        // This is the slug we created before
        // (or `node.frontmatter.slug`)
        path: node.fields.slug,
        // This component will wrap our MDX content
        component: projectPage,
        // We can use the values in this context in
        // our page layout component
        context: {
          slug: node.fields.slug,
          id: node.id,
        },
      })
    }
  })

  // Create page for privacy policy

  // createPage({
  //   path: path.resolve(`/privacy-policy/`),
  //   // This component will wrap our MDX content
  //   component: path.resolve(`./src/templates/Post.js`),
  //   // We can use the values in this context in
  //   // our page layout component
  // })

  // Extract tag data from query
  const tags = result.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
