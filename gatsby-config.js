module.exports = {
  siteMetadata: {
    title: "Shaun's Blog",
    menuLinks: [
      {
        name: "Blog",
        link: "/",
      },
      {
        name: "About Me",
        link: "/about",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdownPages`,
        path: `${__dirname}/src/posts/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
