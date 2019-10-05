import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import Toggle from "react-toggle"
import { FiSun, FiMoon } from "react-icons/fi"
import "react-toggle/style.css"
import "../global.css"

const ToggleTheme = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <Toggle
          aria-label="switch between light and dark mode"
          className="dark-mode-toggle"
          checked={theme === "dark"}
          onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
          icons={{
            checked: <FiMoon />,
            unchecked: <FiSun />,
          }}
        />
      )}
    </ThemeToggler>
  )
}

export default ToggleTheme
