import "../global.css"
import Typography from "typography"
import moragaTheme from "typography-theme-moraga"

moragaTheme.overrideThemeStyles = () => ({
  h1: {
    color: "var(--headerNormal)",
  },
  h2: {
    color: "var(--headerNormal)",
  },
  h3: {
    color: "var(--headerNormal)",
  },
  h4: {
    color: "var(--headerNormal)",
  },
  h5: {
    color: "var(--headerNormal)",
  },
  h6: {
    color: "var(--headerNormal)",
  },
  strong: {
    color: "var(--textEmphasis)",
  },
  em: {
    color: "var(--textEmphasis)",
  },
  del: {
    color: "var(--textEmphasis)",
  },
  p: {
    color: "var(--textNormal)",
  },
  a: {
    color: "var(--textLink)",
  },
  small: {
    color: "var(--textSmall)",
  },

  li: {
    color: "var(--textNormal)",
  },
  blockquote: {
    color: "var(--headerNormal)",
    borderLeft: "0.39rem solid var(--quoteBlock)",
    borderLeftWidth: " 0.39rem",
    borderLeftStyle: "solid",
  },
  hr: {
    background: "var(--textEmphasis)",
  },
  table: {
    color: "var(--textEmphasis)",
  },
  hr: {
    background: "var(--textNormal)",
  },
})
moragaTheme.headerWeight = "600"
moragaTheme.bodyWeight = "400"
moragaTheme.bodyColor = "black"
moragaTheme.scaleRatio = "4"

const typography = new Typography(moragaTheme)

export const { scale, rhythm, options } = typography
export default typography
