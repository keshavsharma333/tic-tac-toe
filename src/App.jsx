import { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import Swal from "sweetalert2";
import { ResetBtn } from "./components/ResetBtn";

function App() {
  const WINNING_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXplayng] = useState(true); //since X always plays first
  const [gameOver, setGameOver] = useState(false);
  const [winningLine, setWinningLine] = useState([]);

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    });
    setBoard(updatedBoard);

    const winner = checkWinner(updatedBoard);
    if (winner) {
      Swal.fire(`${winner} won the Game!`, "", "info");
      setGameOver(true);
      return;
    }

    const isDraw = updatedBoard.every((value) => value !== null);
    if (isDraw) {
      Swal.fire("It's a draw!", "", "error");
      setGameOver(true);
      return;
    }

    setXplayng(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WINNING_CONDITIONS.length; i++) {
      const [x, y, z] = WINNING_CONDITIONS[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setWinningLine([x, y, z]);
        return board[x];
      }
    }
  };

  const resetGame = () => {
    setGameOver(false);
    setXplayng(true);
    setWinningLine([]);
    setBoard(Array(9).fill(null));
  };

  return (
    <section className="main">
      <Board
        board={board}
        onClick={gameOver ? null : handleBoxClick}
        winningLine={winningLine}
      />
      <h1 className="player-status">
        {gameOver ? "Game Over!" : xPlaying ? "X's Turn!" : "O's Turn!"}
      </h1>
      <ResetBtn resetGame={resetGame} />
    </section>
  );
}

export default App;
