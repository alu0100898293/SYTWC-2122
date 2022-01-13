module.exports = {
  siteMetadata: {
    title: "Practica avanzada de Gatsby",
    description: "Sitio creado para ilustrar los conocimientos de Gatsby adquiridos",
  },
  plugins: [
    "gatsby-transformer-json",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options : {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/.*`], //ignorar ficheros que comienzen por un punto
      },
    },
  ],
};
