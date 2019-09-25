import React from 'react';

export default class Aba1 extends React.Component {

    constructor() {
        super();
        this.state = {
            preco: 0,
            qtd: 0,
            total: 0,
        };
    }

    aumentarPreco() {
        this.setState({
            preco: this.state.preco + 1,
        });
    }

    diminuirPreco() {
        this.setState({
            preco: this.state.preco - 1,
        });
    }

    aumentarQtd() {
        this.setState({
            qtd: this.state.qtd + 1,
        });
    }

    diminuirQtd() {
        this.setState({
            qtd: this.state.qtd - 1,
        });
    }

    calcularTotal() {
        this.setState({
            total: this.state.preco * this.state.qtd,
        });
    }

    render() {
        return (
            <div>
  
                <h2>Preço: {this.state.preco}</h2> 
                <button onClick={this.aumentarPreco.bind(this)}>+</button>
                <button onClick={this.diminuirPreco.bind(this)}>-</button>

                <h2>Quantidade: {this.state.qtd}</h2>
                <button onClick={this.aumentarQtd.bind(this)}>+</button>
                <button onClick={this.diminuirQtd.bind(this)}>-</button>

                <h2>Valor Total: {this.state.total}</h2>
                <button onClick={this.calcularTotal.bind(this)}>Calcular</button>

            </div>
        );
    }
}

