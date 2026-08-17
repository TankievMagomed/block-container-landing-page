import React from "react";
import $ from "./ModalPanelSideMenu.module.css";
import { SIDE_MENU_DATA } from "constants";
import Logo from "../../../assets/icon/logo.png";
import { ModalCloseButton } from "components/Buttons";

export const ModalPanelSideMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={$.modalPanelSideMenu__section}
      style={
        isMenuOpen
          ? { transform: "translateX(0)" }
          : { transform: "translateX(100%)" }
      }
    >
      <ModalCloseButton
        className={$.modalPanelSideMenu__buttonClose}
        onClickButton={() => setIsMenuOpen(false)}
      />
      <img
        className={$.modalPanelSideMenu__logo}
        src={Logo}
        alt="logo.png"
      />
      {SIDE_MENU_DATA.map(({ title, id }) => {
        return (
          <a
            className={$.modalPanelSideMenu__aElement}
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById(id)
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            {title}
          </a>
        );
      })}
      <div className={$.modalPanelSideMenu__contacts}>
        <a
          href="tel:+74991124431"
          className={$.modalPanelSideMenu__aElement}
        >
          +74991124431
        </a>
        <a
          href="mailto:pr@bk-resurs.ru"
          className={$.modalPanelSideMenu__aElement}
        >
          pr@bk-resurs.ru
        </a>
      </div>
    </div>
  );
};
