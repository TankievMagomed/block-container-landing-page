import React from "react";
import $ from "./Functionality.module.css";
import { FUNCTIONALITY_DATA } from "constants";
import { FunctionalityInfoChip } from "components";

export const Functionality = () => {
  return (
    <div className={$.functionality__section}>
      <h1 className={$.functionality__headerText}>
        Варианты планировок, внутреннего <br /> снабжения и отделки
      </h1>
      <span className={$.functionality__subHeaderText}>
        Обеспечим блок-контейнеры и модульные здания всем
        <br /> необходимым под ключ!
      </span>
      <div className={$.functionality__chipsSection}>
        {FUNCTIONALITY_DATA.map(
          ({ headerText, subHeaderText, photo, infoText }, index) => {
            return (
              <FunctionalityInfoChip
                headerText={headerText}
                subHeaderText={subHeaderText}
                photo={photo}
                infoText={infoText}
                index={index}
              />
            );
          },
        )}
      </div>
    </div>
  );
};
