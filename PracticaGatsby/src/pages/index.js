import * as React from "react"
import Eventos from "../components/eventos"
import { Helmet } from "react-helmet"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 620,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const lowTitleStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
  marginBottom: 24,
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Helmet 
        htmlAttributes={{
          lang: 'es',
        }}>
          <meta charSet="utf-8" />
          <title>Practica avanzada de Gatsby</title>
      </Helmet>
      
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Bienvenidos a
        <br />
        <span style={headingAccentStyles}>Práctica avanzada de Gatsby </span>
      </h1>
      <p style={paragraphStyles}>
        Para añadir eventos edite el archivo <code style={codeStyles}>src/data/infoEventos.json</code>
        {" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <p style={paragraphStyles}>
        Puedes interactuar con los botones mediante tabulador o usando las taclas 1, 2, 3, 4.
      </p>
      <p style={lowTitleStyle}>
        Plantel de eventos
      </p>
      <Eventos />
    </main>
  )
}

export default IndexPage
