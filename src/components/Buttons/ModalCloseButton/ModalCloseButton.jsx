import React from "react";
import $ from "./ModaCloseButton.module.css";

export const ModalCloseButton = ({ className='', onClickButton, color = 'white' }) => {

  return (
    <button
      className={`${$.modalCloseButton__section} ${className}`}
      onClick={onClickButton}
      style={{color}}
    >
      ✕
    </button>
  );
};
