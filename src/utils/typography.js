import "../global.css"
import gray from "gray-percentage"
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
  p: {
    color: "var(--textNormal)",
  },
  li: {
    color: "var(--textEtc)",
  },
  blockquote: {
    color: "white",
  },
  hr: {
    background: "var(--textEtc)",
  },
  table: {
    color: "var(--textEtc)",
  },
})
moragaTheme.headerWeight = "600"
moragaTheme.bodyWeight = "400"
moragaTheme.bodyColor = "black"
moragaTheme.scaleRatio = "4"

const typography = new Typography(moragaTheme)

export const { scale, rhythm, options } = typography
export default typography
