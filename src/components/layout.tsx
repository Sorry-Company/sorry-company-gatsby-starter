import React from "react"
import ThemeContext from "../context/ThemeContext"
import '../styles/index.scss'

export default function Layout({ children }) {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={theme.dark ? 'dark' : 'light'}>{children}</div>
      )}
    </ThemeContext.Consumer>
  )
}
