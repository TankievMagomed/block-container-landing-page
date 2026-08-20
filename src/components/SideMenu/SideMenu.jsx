import React, { useState, useEffect } from "react";
import $ from "./SideMenu.module.css";
import { PanelSideMenu } from "components/PanelSideMenu";

export const SideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const mainSection = document.getElementById("main");
    let observer;

    const id = requestAnimationFrame(() => {
      observer = new IntersectionObserver(([entry]) => {
        setIsVisible(!entry.isIntersecting);
      });
      observer.observe(mainSection);
    });

    return () => {
      cancelAnimationFrame(id);
      observer?.disconnect();
    };
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
        <PanelSideMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
    )
  );
};
