import React from "react";
import $ from "./Production.module.css";

export const Production = () => {
  return (
    <div className={$.production__section} id='production'>
      <h1 className={$.production__headerText}>
        Производим до 20 блок-контейнеров в <br /> сутки на собственном
        производстве <br /> 3200м²
      </h1>
      <span className={$.production__subHeaderText}>
        Каждая конструкция проходит <br />
        трехступенчатую проверку качества
      </span>
      <span className={$.production__infoText}>
        На производстве мы используем базовый принцип - <br />
        разделение труда <br/>
        <br/>
        У нас нет бригад, которые до конца делают один блок-
        <br /> контейнер. Каждый специалист выполняет <br />
        определенную операцию. Сварщики занимаются <br /> каркасом, сборщики -
        черновой обрешеткой, обшивкой <br />
        профлистом и полами. Отделочники устанавливают <br /> окна, двери,
        электрику и сантехнику.
      </span>
    </div>
  );
};
