import * as React from "react"
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <main>
        <h1>Sorry Company Gatsby Starter</h1>
        <button>Toggle Dark</button>
      </main>
    </Layout>
  )
}

export default IndexPage
