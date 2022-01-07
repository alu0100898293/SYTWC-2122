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
    top: -2,
    marginTop: 5,
    marginBottom: 5,
    lineHeight: 1,
}
const panelStyle = {
    textAlign: "left",
    display: "inline-block",
}
const eventoStyle = {
    width: 245,
    marginLeft: 4,
    backgroundColor: "#76d7c4",
    border: "1px solid #088413",
    borderRadius: 4,
    padding: "4px 6px",
    float: "left",
    textAlign: "center",
}
const imgStyle = {
    border: "2px solid #1f618d",
    marginTop: 3,
    marginBottom: 3,
    maxWidth: 160,
    maxHeight: 160,
}
const buttonStyle = {
    color: "#fff",
    backgroundColor: "#117a65",
    display: "block",
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 1,
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
}
const displayNoneStyle = {
    display: "none",
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

    let refs = [];

    for(var i=0; i<4; i++)
        refs.push(React.createRef());

    console.log({data});
    let visible= [false,false,false,false];

    const showMore = (i) =>{
        visible[i] = !visible[i];
        if(visible[i])
            refs[i].current.style = "display: block";
        else
            refs[i].current.style = "display: none";
    };

    const handleKeyPress = (event) => {
        switch(event.key) {
            case '1':
              showMore(0);
              break;
            case '2':
                showMore(1);
              break;
            case '3':
                showMore(2);
                break;
            case '4':
                showMore(3);
                break;
          } 
    };

    return (
        <div style={panelStyle}>
            {data.allInfoEventosJson.edges.map( (edge,i) => (
                <div key={edge.node.id} style={eventoStyle}>

                    <p style={badgeStyle}>Evento:</p>
                    <p>{edge.node.nombre}</p>

                    <p style={badgeStyle}>Fecha:</p>
                    <p>{edge.node.fecha}</p>
                    
                    <img src={edge.node.imagen} alt={edge.node.altImagen} style={imgStyle} /><br/>

                    <button style={buttonStyle} onClick={() =>showMore(i)} onKeyPress={handleKeyPress}>
                        Mostrar detalles
                    </button>

                    <div style = {displayNoneStyle} ref={refs[i]}>
                        <p style={badgeStyle}>Descripcion:</p>
                        <p>{edge.node.descripcion}</p>
                        
                        <p style={badgeStyle}>Duracion:</p>
                        <p>{edge.node.duracion}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Eventos;
