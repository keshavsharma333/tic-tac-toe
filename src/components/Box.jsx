import React from "react";

export const Box = ({ value, onClick, highlight }) => {
  const style = value == "X" ? "X" : "O";
  const highlightStyle = highlight ? "highlight" : "";
  const cursorStyle = value ? "not-allowed" : "pointer";
  return (
    <button
      className={`box ${style} ${highlightStyle}`}
      onClick={onClick}
      style={{ cursor: cursorStyle }}
    >
      {value}
    </button>
  );
};
