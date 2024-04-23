// TictacToe.js
import React from "react";
import useTictactoe from "../hooks/useTictactoe";

const TictacToe = ({boardSize}) => {
  const { board, handleClick, calculateWinner, getStatusMessage, resetGame } =
    useTictactoe();
      if (!board) {
    // Render loading indicator or return null
    return <div>Loading...</div>;
  }
  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>


      <div className="board">
        {board.map((b, index) => {
          return (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TictacToe;
