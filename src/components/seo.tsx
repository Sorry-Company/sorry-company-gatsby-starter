import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

type MetaProps = JSX.IntrinsicElements["meta"]

interface SEOProps {
  description?: string
  lang?: string
  meta?: MetaProps
  keywords?: [],
  title: string,
}

const SEO: React.FC<SEOProps> = ({ description, lang, meta = [], keywords, title }) => (
  <StaticQuery
    query={siteMetadataQuery}
    render={data => {
      const metaDescription =
        description || data.site.siteMetadata.description || ""
      const metaLang =
        lang || data.site.siteMetadata.lang || "en"
      const metaKeywords =
        keywords || Array(data.site.siteMetadata.keywords)

      return (
        <Helmet
          htmlAttributes={{
            lang: metaLang,
          }}
          title={title}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          meta={[
            {
              name: `description`,
              content: metaDescription,
            },
            {
              property: `og:title`,
              content: title,
            },
            {
              property: `og:description`,
              content: metaDescription,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              name: `twitter:card`,
              content: `summary`,
            },
            {
              name: `twitter:creator`,
              content: data.site.siteMetadata.author,
            },
            {
              name: `twitter:title`,
              content: title,
            },
            {
              name: `twitter:description`,
              content: metaDescription,
            },
          ]
            .concat(
              metaKeywords.length > 0
                ? {
                    name: `keywords`,
                    content: metaKeywords.join(`, `),
                  }
                : []
            )
            // @ts-ignore
            .concat(meta)}
        />
      )
    }}
  />
)

export default SEO

const siteMetadataQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        lang
        keywords
      }
    }
  }
`
