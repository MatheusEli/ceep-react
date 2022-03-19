import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import ListaDeCategorias from "./components/ListaDeCategorias";

class App extends Component {
  state = {
    notas: [],
    categorias: []
  };

  criarNota(titulo, texto, categoria) {
    let nota = {
      titulo,
      texto,
      categoria
    };

    let notas = [...this.state.notas, nota];

    this.setState({ notas });

    console.log(
      "Uma nova nota foi criada: titulo = " + titulo + ", texto = " + texto
    );
  }

  deletarNota(index) {
    let novasNotas = this.state.notas;

    novasNotas.splice(index, 1);

    /*novasNotas = novasNotas.filter((nota) => {
      return nota !== notaDeletada;
    });*/

    this.setState({
      notas: novasNotas,
    });
  }

  atualizarCategorias(nomeCategoria) {
    let categorias = [...this.state.categorias, nomeCategoria];

    this.setState({
      categorias
    });
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categorias = {this.state.categorias} criarNota={this.criarNota.bind(this)} />

        <main className="conteudo-principal">
          <ListaDeCategorias categorias={this.state.categorias} adicionarCategoria={this.atualizarCategorias.bind(this)} />
          <ListaDeNotas
            notas={this.state.notas}
            deletarNota={this.deletarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
