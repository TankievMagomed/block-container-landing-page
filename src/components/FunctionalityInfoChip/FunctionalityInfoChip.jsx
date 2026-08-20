import React from "react";
import $ from "./FunctionalityInfoChip.module.css";

export const FunctionalityInfoChip = ({
  headerText,
  subHeaderText,
  photo,
  infoText,
  index,
  ...rest
}) => {
  return (
    <div
      className={`${index % 2 === 0 ? $.functionalityInfoChip__section : $.functionalityInfoChip__sectionReverse}`}
    >
      <div className={$.functionalityInfoChip__text}>
        <h1 className={$.functionalityInfoChip__headerText}>{headerText}</h1>
        <span className={$.functionalityInfoChip__subHeaderText}>
          {subHeaderText}
        </span>
        <div className={$.functionalityInfoChip__infoTextField}>
          {infoText.map((text, index) => {
            return (
              <span key={index} className={$.functionalityInfoChip__infoText}>{text}</span>
            );
          })}
        </div>
      </div>
      <img
        className={$.functionalityInfoChip__img}
        src={photo}
        alt={photo}
      />
    </div>
  );
};
