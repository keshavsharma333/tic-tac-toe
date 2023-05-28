import React from "react";

export const ResetBtn = ({ resetGame }) => {
  return (
    <button className="btn" onClick={resetGame}>
      Reset Game
    </button>
  );
};
