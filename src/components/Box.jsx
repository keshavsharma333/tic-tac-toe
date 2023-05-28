import React from "react";

export const Box = ({ value, onClick, highlight }) => {
  const style = value == "X" ? "X" : "O";
  const highlightStyle = highlight ? "highlight" : "";
  return (
    <button className={`box ${style} ${highlightStyle}`} onClick={onClick}>
      {value}
    </button>
  );
};
