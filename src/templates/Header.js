import React from "react"
import Navbar from "./Navbar"
import { Helmet } from "react-helmet"
import config from "../config/config"
import urljoin from "url-join"
import Cookies from "js-cookie"

const Header = ({ postSEO, pageSEO }) => {
  const { siteMetadata } = config
  const {
    siteTitle,
    siteDescription,
    siteLogo,
    siteUrl,
    pathPrefix,
    googleAnalyticsID,
  } = siteMetadata
  const CookiesEnabled = Cookies.get("CookieConsent")

  let metaTitle = postSEO
    ? `${postSEO.frontmatter.title} - ${siteTitle}`
    : pageSEO
    ? `${pageSEO.frontmatter.title} - ${siteTitle}`
    : siteTitle

  let metaDescription = postSEO ? postSEO.excerpt : siteDescription

  let metaImage = postSEO
    ? postSEO.frontmatter.featuredImage
      ? postSEO.frontmatter.featuredImage.childImageSharp.fluid.src
      : siteLogo
    : siteLogo
  metaImage = urljoin(siteUrl, metaImage)

  let metaUrl = postSEO
    ? postSEO.fields.slug
    : pageSEO
    ? pageSEO.fields.slug
    : pathPrefix
  metaUrl = urljoin(siteUrl, metaUrl)

  return (
    <React.Fragment>
      <Helmet title={metaTitle} htmlAttributes={{ lang: "en" }}>
        <meta name="title" content={metaTitle} />
        <meta name="image" content={metaImage} />
        <meta name="description" content={metaDescription} />

        <meta property="og:title" content={metaTitle} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={metaUrl} />
        {postSEO && <meta property="og:type" content="article" />}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:image" content={metaImage} />
        <meta name="twitter:description" content={metaDescription} />
        {/* Global site tag (gtag.js) - Google Analytics  */}
        {CookiesEnabled && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsID}`}
          ></script>
        )}
        {CookiesEnabled && (
          <script>
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${googleAnalyticsID}');
        `}
          </script>
        )}
      </Helmet>
      <Navbar />
    </React.Fragment>
  )
}

export default Header
