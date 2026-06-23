import React from "react";
import $ from "./ModaCloseButton.module.css";

export const ModalCloseButton = ({ onClickButton }) => {
  return (
    <button
      className={$.ModalCloseButton}
      onClick={onClickButton}
    >
      ✕
    </button>
  );
};
