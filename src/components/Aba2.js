import React from 'react';

export default class Aba2 extends React.Component {
    
    state = {
        texto: '',
    }

    atualizar = (e) => {
        this.setState({
            texto: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <div>
                    <label>Digite algum texto: </label>
                    <input type="text" name="texto" onChange={this.atualizar}/>
                </div>
                <div>
                    Texto: {this.state.texto}
                </div>
            </div>
        );
    }
}