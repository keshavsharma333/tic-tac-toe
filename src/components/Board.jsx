import React from "react";
import { Box } from "./Box";

export const Board = ({ board, winningLine, onClick }) => {
  return (
    <div className="board">
      {board.map((value, idx) => {
        return (
          <Box
            value={value}
            key={idx}
            highlight={winningLine.includes(idx)}
            onClick={() => (value === null && onClick ? onClick(idx) : "null")}
          />
        );
      })}
    </div>
  );
};
