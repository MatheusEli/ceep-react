import React, { Component } from "react";
import "./ListaDeCategorias.css";

class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = {categorias: []};

    this._novasCategorias = this._novasCategorias.bind(this);
  }
  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount(){
    this.props.notas.desinscrever(this._novasCategorias);
  }

  _handleEventoInput(e) {
    if (e.key === "Enter") {
      this.props.adicionarCategoria(e.target.value);
    }
  }

  _novasCategorias(categorias) {
    this.setState({...this.state,categorias})
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {categoria}
              </li>
            );
          })}
        </ul>

        <input
          className="lista-categorias_input"
          placeholder="Adicionar categoria"
          type="text"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
