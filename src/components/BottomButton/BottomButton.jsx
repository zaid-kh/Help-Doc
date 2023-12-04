import React from "react";

export const BottomButton = ({ text, onClickHandler }) => {
  return (
    <div className="bottom-button-container">
      <button onClick={onClickHandler}>{text}</button>
    </div>
  );
};
