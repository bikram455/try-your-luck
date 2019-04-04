import React from 'react';

const Board = (props) => {console.log(props)
  return(
    <div className="board">
      <div className="board-top">
        <h1>Try Your luck </h1> <hr />
        <h2>{props.value}</h2>
      </div>
      <div className="board-bottom">
        <button onClick =  {(e) => props.rollDice(e)} > Roll Dice. </button>
        <button onClick = {(e) => props.stopDice(e)} > Stop </button>
      </div>
    </div>
  )
}

export default Board;