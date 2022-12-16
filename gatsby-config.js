/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Flexingwithgatsby`,
    siteUrl: `https://www.yourdomain.tld`,
    description:
      "flexing with the gatsby application for the better static web generations",
    copyright: "copyright the content from the offical gatsby project",
  },
  plugins: [
    "gatsby-plugin-google-gtag",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "notes",
        path: `${__dirname}/src/notes/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Json Placeholder",
        fieldName: "json-placeholder",
        url: "http://jsonplaceholder.typicode.com/posts",
      },
    },
  ],
};
