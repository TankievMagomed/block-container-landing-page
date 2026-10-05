import React from "react";
import $ from "./DemoBanner.module.css";

export const DemoBanner = () => (
  <div className={$.demoBanner} role="note">
    Учебный проект на React. Не является сайтом компании «БК-РЕСУРС»,
    контакты вымышленные, формы не отправляют данные.
  </div>
);
