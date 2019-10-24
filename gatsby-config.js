module.exports = {
  siteMetadata: {
    title: "Shaun's Blog",
    titleTemplate: "%s · Software Developer",
    description:
      "Software Development Blog | Backend | Frontend | Data Science",
    url: "https://shaunjacks.com",
    image: "/icon.jpeg",
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shaun Jackson Blog`,
        short_name: `Blog - SJ`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.jpeg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    "gatsby-plugin-dark-mode",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
        name: `posts`,
        path: `${__dirname}/content/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-javascript`,
              inlineCodeMarker: null,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              wrapperStyle: `box-shadow: none;`,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
        // Had to include this too so images will render properly
        // https://github.com/gatsbyjs/gatsby/issues/15486
        plugins: [`gatsby-remark-images`, `gatsby-remark-copy-linked-files`],
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 700,
        wrapperStyle: `box-shadow: none;`,
      },
    },
  ],
}
