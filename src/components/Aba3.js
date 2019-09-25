import React from 'react';
import ReactDOM from 'react-dom';

export default class Aba3 extends React.Component {

  constructor() {
    super();
    this.state = {
      itens: [],
      inputItem: ""
    };
  
    this.addItem = (ev) => {
      ev.preventDefault();
      const itens = this.state.itens.slice();
      itens.push(this.state.inputItem);
      this.setState({
        itens: itens,
        inputItem: ""
      });
    };

    this.onChange = (ev) => {
      ev.preventDefault();
      const state = Object.assign({}, this.state);
      state[ev.target.name] = ev.target.value;
      this.setState(state);
    };
  }

  render() {
    return (
      <Lista 
        itens={this.state.itens}
        inputItem={this.state.inputItem}
        onChange={this.onChange}
        addItem={this.addItem}
      />
    );
  }
}

const Lista = (props) => (
  <div>
    <h2>Lista de inputs</h2>
    <input name="inputItem" value={props.inputItem} onChange={props.onChange} placeholder="Digite algo"/>
    <button onClick={props.addItem}>Adicionar</button>
    {
      props.itens.map((itens, index) => <p>{index+1} - {itens}</p>)
    }
  </div>
);

ReactDOM.render(
  <Aba3 />,
  document.getElementById('app')
);