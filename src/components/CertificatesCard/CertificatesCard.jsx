import React from "react";
import $ from "./CertificatesCard.module.css";

export const CertificatesCard = ({ title, photo, href }) => {
  return (
      <a className = {$.certificatesCard__section}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src= {photo}
          alt={title}
        />
        <span className={$.certificatesCard__text}>{title}</span>
      </a>
  );
};
