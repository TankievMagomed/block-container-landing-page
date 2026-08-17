import React from "react";
import $ from "./ModaCloseButton.module.css";

export const ModalCloseButton = ({ className, onClickButton, color = 'white' }) => {

  return (
    <button
      className={`${$.ModalCloseButton} ${className}`}
      onClick={onClickButton}
      style={{color}}
    >
      ✕
    </button>
  );
};
