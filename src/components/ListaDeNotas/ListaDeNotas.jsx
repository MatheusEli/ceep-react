import React, { Component } from "react";
import CardNota from "../CardNota";
import "./ListaDeNotas.css";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota categoria={nota.categoria} nota={nota} deletarNota={this.props.deletarNota} indice={index}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
