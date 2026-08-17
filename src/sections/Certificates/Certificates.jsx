import React from "react";
import $ from "./Certificates.module.css";
import { CERTIFICATES_DATA } from "constants";
import { CertificatesCard } from "components";

export const Certificates = () => {
  return (
    <div className={$.certificates__section} id='certificates'>
      <h1 className={$.certificates__headerText}>
        Сертификаты соответствия на изготовление <br /> блок‑контейнеров и
        комплектующие
      </h1>
      <span className={$.certificates__subHeaderText}>
        Будьте спокойны за качество продукта и <br /> уверены в результате
      </span>
      <div className={$.certificates__chipsField}>
        {CERTIFICATES_DATA.map(({ title, photo, url }) => {
          return (
            <CertificatesCard
              title={title}
              photo={photo}
              href={url}
            />
          );
        })}
      </div>
    </div>
  );
};
