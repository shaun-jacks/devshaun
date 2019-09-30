import Typography from "typography"
import moragaTheme from "typography-theme-moraga"
moragaTheme.headerWeight = "500" // was 20px.

const typography = new Typography(moragaTheme)

export const { scale, rhythm, options } = typography
export default typography
