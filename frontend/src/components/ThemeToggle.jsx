import { useTheme } from "./ThemeContext"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark")
    else if (theme === "dark") setTheme("system")
    else setTheme("light")
  }

  return (
    <button onClick={cycleTheme} className="theme-toggle">
      Theme: {theme}
    </button>
  )
}

export default ThemeToggle
