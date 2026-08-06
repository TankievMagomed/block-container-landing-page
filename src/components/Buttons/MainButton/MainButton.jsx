import React from "react";
import $ from "./MainButton.module.css";

export const MainButton = ({
  children,
  onClickButton,
  href,
  type,
  className,
}) => {
  return (
    <button
      className={`${$.button} ${className}`}
      onClick={onClickButton}
      type={type}
    >
      {children}
    </button>
  );
};
