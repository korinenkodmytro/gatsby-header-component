module.exports = {
  siteMetadata: {
    title: "Lemonbrew Gatsby Header",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
};
