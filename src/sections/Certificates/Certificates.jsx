import React from "react";
import $ from "./Certificates.module.css";

export const Certificates = () => {
  return (
    <div className={$.certificates__section}>
      <h1 className={$.certificates__headerText}>
        Сертификаты соответствия на изготовление <br /> блок‑контейнеров и
        комплектующие
      </h1>
      <span className={$.certificates__subHeaderText}>
        Будьте спокойны за качество продукта и <br /> уверены в результате
      </span>
      <div className={$.certificates__chipsField}></div>
    </div>
  );
};
