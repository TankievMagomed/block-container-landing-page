import React from "react";
import $ from "./AboutTheCompany.module.css";

export const AboutTheCompany = () => {
  return (
    <div className={$.aboutTheCompany__section}>
      <div className={$.aboutTheCompany__headlineField}>
        <h1 className={$.aboutTheCompany__headerText}> О компании</h1>
        <span className={$.aboutTheCompany__subHeaderText}>
          Группа компаний "БК-РЕРУСР" занимается <br /> проектированием,
          производством и продажей блок- <br /> контейнеров и модульных зданий с
          2015 года.
        </span>
      </div>
      <div className={$.aboutTheCompany__contentField}></div>
    </div>
  );
};
