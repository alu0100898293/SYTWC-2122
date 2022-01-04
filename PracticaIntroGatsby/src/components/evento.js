import React from "react"

const listItemStyles = {
    fontWeight: 300,
    fontSize: 24,
    maxWidth: 560,
    marginBottom: 30,
}

const dateStyle = {
    color: "#232129",
    fontSize: 15,
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
    marginLeft: 10,
}

const dateBadgeStyle = {
    color: "#fff",
    backgroundColor: "#088413",
    border: "1px solid #088413",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
    borderRadius: 4,
    padding: "4px 6px",
    position: "relative",
    top: -2,
    marginLeft: 10,
    lineHeight: 1,
}

export default function Evento(props) {
    return (
        <li key={props.nombre} style={{ ...listItemStyles, color: props.color }}>
            <span>
                <a>
                    {props.nombre}
                </a>
                <div >
                    <span style={dateBadgeStyle} aria-label="Etiqueta de fecha">
                        Fecha:
                    </span>

                    <p style={dateStyle}>{props.fecha}</p>
                </div>
            </span>
        </li>
    )
}