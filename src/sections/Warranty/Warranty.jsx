import React from "react";
import $ from "./Warranty.module.css";

export const Warranty = () => {
  return (
    <div className={$.warranty__section}>
      <h1 className={$.warranty__headerText}>
        Вы получите официальную <br /> расширенную гарантию на 1 год, <br />
        которую мы пропишем в договоре
      </h1>
      <span className={$.warranty__subHeaderText}>Бесплатный сервис</span>
      <span className={$.warranty__infoText}>
        Если что‐то в блок‐контейнере сломается по нашей вине, <br />
        приедем к вам и оперативно все отремонтируем или если вы <br />
        находитесь за пределами Московской области или других
        <br /> регионах — оплатим вам ремонт
      </span>
    </div>
  );
};
