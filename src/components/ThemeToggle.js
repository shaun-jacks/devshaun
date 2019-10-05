import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const ToggleTheme = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label style={{ background: "white" }}>
          <input
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />
          Dark mode
        </label>
      )}
    </ThemeToggler>
  )
}

export default ToggleTheme
