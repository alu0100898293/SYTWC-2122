import React from "react";
import {graphql, useStaticQuery } from "gatsby";

const badgeStyle = {
    color: "#fff",
    backgroundColor: "#088413",
    border: "1px solid #088413",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
    borderRadius: 4,
    padding: "4px 6px",
    display: "inline-block",
    position: "relative",
    top: -2,
    marginLeft: 10,
    lineHeight: 1,
}
const panelStyle = {
    backgroundColor: "#088413",
    border: "1px solid #088413",
    borderRadius: 4,
    padding: "4px 6px",
}
const eventoStyle = {

}

const Eventos = () => {
    const data = useStaticQuery(graphql`
        query InfoEventosQuery {
            allInfoEventosJson {
                edges {
                    node {
                        id
                        nombre
                        fecha
                        imagen
                        altImagen
                        descripcion
                        duracion
                    }
                }
            }
        }
    `)

    console.log({data});

    return (
        <div style={panelStyle}>
            {data.allInfoEventosJson.edges.map( (edge,i) => (
                <div key={edge.node.id} style={eventoStyle}>
                    <p>
                        <span style={badgeStyle}>Evento:</span>
                        <span>{edge.node.nombre}</span>
                    </p>
                    <p>
                        <span style={badgeStyle}>Fecha:</span>
                        <span>{edge.node.fecha}</span>
                    </p>
                    <img src={edge.node.imagen} alt={edge.node.altImagen} />
                    <p>
                        <span style={badgeStyle}>Descripcion:</span>
                        <span>{edge.node.descripcion}</span>
                    </p>
                    <p>
                        <span style={badgeStyle}>Duracion:</span>
                        <span>{edge.node.duracion}</span>
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Eventos;
