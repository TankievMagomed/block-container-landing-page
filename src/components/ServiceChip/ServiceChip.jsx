import React from "react";
import $ from "./ServiceChip.module.css";

export const ServiceChip = ({ icon, headerText, subHeaderText, ...rest }) => {
  return (
    <div className={$.serviceChip__section}>
      <div className={$.serviceChip__icon}>{icon}</div>
      <h1 className={$.serviceChip__headerText}>{headerText}</h1>
      <span className={$.serviceChip__subHeaderText}>{subHeaderText}</span>
    </div>
  );
};
