import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";

class App extends Component {

  state = {
    notas: [],
  };

  criarNota(titulo, texto) {
    
    let nota = {
      titulo,
      texto,
    };
    
    let notas = [...this.state.notas, nota];

    this.setState({ notas });

    console.log(
      "Uma nova nota foi criada: titulo = " + titulo + ", texto = " + texto
    );
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
