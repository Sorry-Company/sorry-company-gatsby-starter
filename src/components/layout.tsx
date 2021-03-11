import * as React from "react"
import ThemeContext from "../context/ThemeContext"
import '../styles/index.scss'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  const { children } = props

  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={theme.dark ? 'dark' : 'light'}>{children}</div>
      )}
    </ThemeContext.Consumer>
  )
}
