import React from "react";
import $ from "./Contacts.module.css";

export const Contacts = () => {
  return (
    <div className={$.contacts__section}>
      <h1 className={$.contacts__headerText}>
        Центральный офис и производство находятся в <br /> г. Люберцы Московской
        области
      </h1>
      <div className={$.contacts__map}></div>
      <div className={$.contacts__textsFields}>
        <div className={$.contacts__textsField}>
          <h1 className={$.contacts__textsFieldHeader}></h1>
          <span className={$.contacts__textsFieldSubHeader}></span>
          <span className={$.contacts__textsFieldSmall}></span>
        </div>
        <div className={$.contacts__textsField}>
          <h1 className={$.contacts__textsFieldHeader}></h1>
          <span className={$.contacts__textsFieldSubHeader}></span>
          <span className={$.contacts__textsFieldSubHeaderBoldType}></span>
          <span className={$.contacts__textsFieldSubHeader}></span>
          <span className={$.contacts__textsFieldSmall}></span>
        </div>
        <div className={$.contacts__textsField}>
          <h1 className={$.contacts__textsFieldHeader}></h1>
          <span className={$.contacts__textsFieldSubHeader}></span>
          <span className={$.contacts__textsFieldSubHeaderBoldType}></span>
          {/* Здесь модалка */}
          <span className={$.contacts__textsFieldSmall}></span>
        </div>
      </div>
    </div>
  );
};
