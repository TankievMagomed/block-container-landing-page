import React from "react";
import $ from "./MainButton.module.css";

export const MainButton = ({
  children,
  onClickButton,
  href,
  type,
  className,
}) => {
  if (href) {
    return (
      <a
        className={`${$.button} ${className}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
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
