import React, { useState, useEffect } from "react";
import $ from "./SideChipMail.module.css";
import { ReactComponent as Mail } from "../../assets/icon/mail.svg";
import { CONTACTS } from "constants";

export const SideChipMail = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const mainSection = document.getElementById("main");
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(!entry.isIntersecting);
    });
    observer.observe(mainSection);

    return () => observer.disconnect();
  }, []);
  return (
    isVisible && (
      <a
        href={CONTACTS.emailHref}
        className={$.sideChipMail__section}
      >
        <Mail /> {CONTACTS.email}
      </a>
    )
  );
};
