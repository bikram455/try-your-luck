import React from 'react';

const Board = (props) => {
  this.placeBet = (e) => {
    var value = e.target.value;
    if(value >= 1 && value <= 6) props.enableRoll(false);
    else props.enableRoll(true);
  }

  return(
    <div className="board">
      <div className="board-top">
        <h1> Try Your luck </h1> 
        <label> (Enter a number from 1 to 6) </label>
        <hr />
        <h2>{props.value}</h2>
        <input type="text" className="bet-box" onChange={this.placeBet} />
      </div>
      <div className="board-bottom">
        <button onClick =  {(e) => props.rollDice(e)} disabled={props.disabled} > Roll Dice. </button>
        <button onClick = {(e) => props.stopDice(e)} > Stop </button>
      </div>
    </div>
  )
}

export default Board;