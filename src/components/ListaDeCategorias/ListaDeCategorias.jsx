import React, { Component } from "react";
import './ListaDeCategorias.css';

class ListaDeCategorias extends Component {

    constructor() {
        super();
    }

    _handleEventoInput(e) {

        if(e.key == 'Enter'){
            this.props.adicionarCategoria(e.target.value);
        }

    }

    render() {
        return (
            <section className="lista-categorias">

                <ul className="lista-categorias_lista">
                    {this.props.categorias.map((categoria, index) => {
                        return (
                        <li key = {index} className="lista-categorias_item">{categoria}</li>
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