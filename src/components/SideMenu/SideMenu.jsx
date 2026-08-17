import React, { useState, useEffect } from "react";
import $ from "./SideMenu.module.css";
import { ModalPanelSideMenu } from "components/Modals/ModalPanelSideMenu";

export const SideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      <div>
        <button
          className={$.sideMenu__section}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        ></button>
        <ModalPanelSideMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
    )
  );
};
