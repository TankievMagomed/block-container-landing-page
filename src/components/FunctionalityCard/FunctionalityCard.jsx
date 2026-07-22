import React from "react";
import $ from "./FunctionalityCard.module.css";

export const FunctionalityCard = ({
  icon,
  headerText,
  subHeaderText,
  ...rest
}) => {
  return (
    <div className={$.functionalityCard__section}>
      <div className={$.functionalityCard__icon}>
        {icon}</div>
      <h1 className={$.functionalityCard__headerText}>{headerText}</h1>
      <span className={$.functionalityCard__subHeaderText}>
        {subHeaderText}
      </span>
    </div>
  );
};
