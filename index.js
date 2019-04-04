import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

//components
import Board from './Board';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      value: 'X',
      disable: true
    };
  }

  getRandomValue = () => {
    return Math.floor(Math.random()*6) + 1;
  }

  stopDice = (e) => {
    setTimeout(() => clearInterval(this.interval), 1000);
  }

  rollDice = () => {
    this.interval = setInterval(() => this.setState({ value: this.getRandomValue() }), 200 );
  }

  render() {
    return (
      <div className="board-wrapper">
        <Board value = {this.state.value} stopDice = {this.stopDice} rollDice = {this.rollDice} disabled={this.state.disable} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
