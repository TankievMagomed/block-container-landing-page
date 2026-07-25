import React from "react";
import $ from "./Service.module.css";
import { SERVICE_DATA } from "constants";
import { ServiceChip } from "components";

export const Service = () => {
  return (
    <div className={$.service__section}>
      <h1 className={$.service__headerText}>
        Ответсвтенный и надежный партнер <br /> — ваш ключ к успеху
      </h1>
      <span className={$.service__subHeaderText}>
        Производим блок-контейнеры и строим модульные здания строго в <br />
        соответствии с пожеланиями и требованиями к качеству материалов, что
        <br /> подверждается паспортом изделия
      </span>
      <div className={$.service__chips}>
        {SERVICE_DATA.map(({ icon, headerText, subHeaderText }) => {
          return (
            <ServiceChip
              icon={icon}
              headerText={headerText}
              subHeaderText={subHeaderText}
            />
          );
        })}
      </div>
    </div>
  );
};
