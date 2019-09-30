import Typography from "typography"
import moragaTheme from "typography-theme-moraga"
moragaTheme.headerWeight = "500"
moragaTheme.bodyWeight = "400"

const typography = new Typography(moragaTheme)

export const { scale, rhythm, options } = typography
export default typography
