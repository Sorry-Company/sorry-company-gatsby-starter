import React, { ReactNode, createContext, useEffect, useState } from "react"

interface DefaultStateProps {
  themeDark: boolean
  toggleDark: () => void
}

const defaultState = {
  themeDark: false,
  toggleDark: () => {},
}

const ThemeContext = createContext<DefaultStateProps>(defaultState)
// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true

interface ThemeProviderProps {
  children: ReactNode 
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props
  const [themeDark, setThemeDark] = useState<boolean>(false)

  useEffect(() => {
    // Getting dark mode value from localStorage!
    const lsDark = JSON.parse(localStorage.getItem("dark"))

    if (lsDark) {
      setThemeDark(true)
    } else if (supportsDarkMode()) {
      setThemeDark(true)
    }
  }, [])

  const toggleDark = () => {
    let dark = !themeDark
    localStorage.setItem("dark", JSON.stringify(dark))
    setThemeDark(dark)
  }

  return (
    <ThemeContext.Provider
        value={{
        themeDark,
        toggleDark: toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext

export { ThemeProvider }
