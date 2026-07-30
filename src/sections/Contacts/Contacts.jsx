import React from "react";
import $ from "./Contacts.module.css";
import { ContactsInfo } from "components";

export const Contacts = () => {
  return (
    <div className={$.contacts__section}>
      <h1 className={$.contacts__headerText}>
        Центральный офис и производство находятся в <br /> г. Люберцы Московской
        области
      </h1>
      <div className={$.contacts__map}></div>
      <ContactsInfo />
    </div>
  );
};
