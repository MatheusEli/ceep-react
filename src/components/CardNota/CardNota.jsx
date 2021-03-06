import React, { Component } from "react";
import "./CardNota.css";
import { ReactComponent as DeleteSVG } from "../../assets/delete.svg";

class CardNota extends Component {
  deletarNota() {
    this.props.deletarNota(this.props.indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.nota.titulo}</h3>
        </header>
        <DeleteSVG onClick={this.deletarNota.bind(this)} />
        <h4>{this.props.categoria}</h4>
        <p className="card-nota_texto">{this.props.nota.texto}</p>
      </section>
    );
  }
}

export default CardNota;
