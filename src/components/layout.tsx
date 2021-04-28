import React, { useContext, ReactNode } from "react"
import ThemeContext from "../context/ThemeContext"
import '../styles/index.scss'

interface LayoutProps {
  children: ReactNode
}

export default function Layout(props: LayoutProps) {
  const { children } = props
  const { themeDark } = useContext(ThemeContext)

  return <div className={themeDark ? 'theme-dark' : 'theme-light'}>{children}</div>
}
