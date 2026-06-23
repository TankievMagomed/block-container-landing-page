import React from "react";
import { ReactComponent as Arrow } from "../../../assets/icon/arrowright.svg";
import $ from "./ArrowButton.module.css";

export const ArrowButton = ({ direction, onClickButton }) => {
  return (
    <button
      onClick={onClickButton}
      className={
        direction === "left" ? $.arrowButton__left : $.arrowButton__right
      }
    >
      {direction === "left" ? (
        <Arrow className={`${$.arrow__left} ${$.arrow}`} />
      ) : (
        <Arrow className={$.arrow} />
      )}
    </button>
  );
};
