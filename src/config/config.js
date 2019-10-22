const config = {
  serverEndpoint: "https://immense-shelf-15583.herokuapp.com",
  siteMetadata: {
    siteTitle: "Shaun Jackson Software & Data Blog",
    siteTitleAlt: "Shaun Jackson",
    siteLogo: "/icon.jpeg",
    siteUrl: "https://shaunjacks.com",
    repo: "https://github.com/shaun-jacks/shaunjacks.com",
    pathPrefix: "",
    dateFromFormat: "YYYY-MM-DD",
    dateFormat: "MMMM Do, YYYY",
    siteDescription: "Software and Data Science Blog",
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Contact",
        link: "/contact",
      },
      {
        name: "Blog",
        link: "/blog",
      },
      {
        name: "Resume",
        link:
          "https://drive.google.com/file/d/1F8nhcfUE5EIyxGxLdlzluxhm__6UauV4/view?usp=sharing",
      },
    ],
  },
}

// Make sure pathPrefix is empty if not needed
if (config.siteMetadata.pathPrefix === "/") {
  config.siteMetadata.pathPrefix = ""
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.siteMetadata.pathPrefix = `/${config.siteMetadata.pathPrefix.replace(
    /^\/|\/$/g,
    ""
  )}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteMetadata.siteUrl.substr(-1) === "/")
  config.siteMetadata.siteUrl = config.siteUrl.slice(0, -1)

export default config
