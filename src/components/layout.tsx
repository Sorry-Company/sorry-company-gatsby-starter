import React, { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import SEO from '../components/seo'
import '../styles/index.scss'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  const { children } = props
  const { dark } = useContext(ThemeContext)

  return <div className={dark ? 'dark' : 'light'}>{children}</div>
}
