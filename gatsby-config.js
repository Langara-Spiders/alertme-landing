module.exports = {
  siteMetadata: {
    title: `alertme-landing`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        "icon": "src/images/icon.png"
      }
    }, {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "images",
        "path": "./src/assets/images/"
      },
      __key: "images"
    }, {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-D1FJ5TVNS3",
        ],
        pluginConfig: {
          head: true,
          exclude: [],
          delayOnRouteUpdate: 0,
        },
      }
    }
  ]
};
