module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Practica avanzada de Gatsby",
    description: "Sitio creado para ilustrar los conocimientos de Gatsby adquiridos",
  },
  plugins: [
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options : {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], //ignorar ficheros que comienzen por un punto
      },
    },
  ],
};
