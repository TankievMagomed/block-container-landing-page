import React from "react";
import $ from "./InfoButton.module.css";

export const InfoButton = ({ onClickButton }) => {
  return (
    <button
      className={$.infoButton__section}
      onClick={onClickButton}
    >
      i
    </button>
  );
};
