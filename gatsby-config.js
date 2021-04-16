require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Sorry Company Gatsby Starter", // TODO: Update site title
    description: "GatsbyJS starter with SASS, TypeScript, ThemeContext and Bootstrap pre-configured.", // TODO: Update site description
    author: "Sorry Company <contact@srrycmpny.com>",
    siteUrl: "https://siteurl.com", // TODO: Update site url
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "tracking-id", // TODO: Update GA tracking id
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png", // TODO: Update site icon
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-preload-fonts",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
          options: {
            props: {
              className: 'svg',
            },
          },
        },
      },
    },
    "gatsby-plugin-react-axe",
  ],
};
