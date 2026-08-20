import React from "react";
import $ from "./ModalCertificates.module.css";
import { MODAL_CERTIFICATES_DATA } from "constants/ModalCertificatesData";

export const ModalCertificates = () => {
  return (
    <div className={$.modalCertificates__container}>
      {MODAL_CERTIFICATES_DATA.map(({ photos }, index) => {
        return (
          <img
            key={index}
            src={photos}
            alt="Сертификат соответствия"
          />
        );
      })}
    </div>
  );
};
