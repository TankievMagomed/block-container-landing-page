import React from "react";
import $ from "./PhotoGallery.module.css";

export const PhotoGallery = () => {
  return (
    <div className={$.photoGallery__section}>
      <h1 className={$.photoGallery__headerText}>
        Фотогалерея выполненных проектов <br /> для наших клиентов
      </h1>
      <span className={$.photoGallery__subHeaderTextFirstLine}>
        Все проекты выполняются четко по требования заказчика, учитывая
        <br /> спецификацию, сроки и бюджет
      </span>
      <div className={$.photoGallery__carousel}></div>
    </div>
  );
};
