import { useTheme } from "./ThemeContext"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark")
    else if (theme === "dark") setTheme("system")
    else setTheme("light")
  }

  const getIcon = () => {
    switch (theme) {
      case "light":
        return "☀️"
      case "dark":
        return "🌙"
      default:
        return "🖥️"
    }
  }

  return (
    <button onClick={cycleTheme} className="theme-toggle" title={`Theme: ${theme}`}>
      {getIcon()}
    </button>
  )
}

export default ThemeToggle
