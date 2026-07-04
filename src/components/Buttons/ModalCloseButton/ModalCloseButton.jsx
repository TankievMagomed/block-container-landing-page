import React from "react";
import $ from "./ModaCloseButton.module.css";

export const ModalCloseButton = ({ onClickButton, color = 'white' }) => {

  return (
    <button
      className={$.ModalCloseButton}
      onClick={onClickButton}
      style={{color}}
    >
      ✕
    </button>
  );
};
