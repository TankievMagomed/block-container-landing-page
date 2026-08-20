import React from "react";
import $ from "./PanelSideMenu.module.css";
import { SIDE_MENU_DATA } from "constants";
import Logo from "../../assets/icon/logo.png";
import { ModalCloseButton } from "components/Buttons";
import { Drawer } from "@mantine/core";

export const PanelSideMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <Drawer
      opened={isMenuOpen}
      onClose={() => setIsMenuOpen(false)}
      position="right"
      size={300}
      withCloseButton={false}
      classNames={{ content: $.panelSideMenu__section }}
    >
      <ModalCloseButton
        className={$.panelSideMenu__buttonClose}
        onClickButton={() => setIsMenuOpen(false)}
      />
      <img
        className={$.panelSideMenu__logo}
        src={Logo}
        alt="logo.png"
      />
      <div className={$.panelSideMenu__aElements}>
        {SIDE_MENU_DATA.map(({ title, id }) => {
          return (
            <a
              className={$.panelSideMenu__aElement}
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(id)
                  .scrollIntoView({ behavior: "smooth" });
                setIsMenuOpen(false);
              }}
            >
              {title}
            </a>
          );
        })}
      </div>

      <div className={$.panelSideMenu__contacts}>
        <a
          href="tel:+74991124431"
          className={$.panelSideMenu__aElement}
        >
          +74991124431
        </a>
        <a
          href="mailto:pr@bk-resurs.ru"
          className={$.panelSideMenu__aElement}
        >
          pr@bk-resurs.ru
        </a>
      </div>
    </Drawer>
  );
};
