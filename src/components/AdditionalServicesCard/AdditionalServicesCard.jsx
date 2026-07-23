import React from "react";
import $ from "./AdditionalServicesCard.module.css";

export const AdditionalServicesCard = ({
  icon,
  headerText,
  subHeaderText,
  ...rest
}) => {
  return (
    <div className={$.additionalServicesCard__section}>
      <div className={$.additionalServicesCard__icon}>
        {icon}</div>
      <h1 className={$.additionalServicesCard__headerText}>{headerText}</h1>
      <span className={$.additionalServicesCard__subHeaderText}>
        {subHeaderText}
      </span>
    </div>
  );
};
