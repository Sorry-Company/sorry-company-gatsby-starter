require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const {
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_AUTHOR,
  SITE_URL,
  SITE_LANGUAGE,
  SITE_ICON_PATH,
  SITE_BACKGROUND_COLOR,
  SITE_THEME_COLOR,
  GOOGLE_ANALYTICS_ID,
  FACEBOOK_PIXEL_ID,
} = process.env;

module.exports = {
  siteMetadata: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    author: SITE_AUTHOR,
    siteUrl: SITE_URL,
    lang: SITE_LANGUAGE,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: GOOGLE_ANALYTICS_ID,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: SITE_ICON_PATH,
        name: SITE_TITLE,
        short_name: SITE_TITLE,
        description: SITE_DESCRIPTION,
        lang: SITE_LANGUAGE,
        display: "standalone",
        icon: SITE_ICON_PATH,
        start_url: `/`,
        background_color: SITE_BACKGROUND_COLOR,
        theme_color: SITE_THEME_COLOR,
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
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: SITE_URL,
      },
    },
    {
      resolve: "gatsby-plugin-facebook-pixel",
      options: {
        pixelId: FACEBOOK_PIXEL_ID,
      },
    },
  ],
};
