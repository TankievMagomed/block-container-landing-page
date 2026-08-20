import React from "react";
import $ from "./WhyUs.module.css";
import { Modal, FocusTrap } from "@mantine/core";
import { IconCard, ModalPrice } from "../../components";
import { useDisclosure } from "@mantine/hooks";
import { MainButton } from "../../components";
import { ModalCloseButton } from "../../components";
import { WHY_US_DATA } from "constants";

export const WhyUs = () => {
  const [isOpen, { open, close }] = useDisclosure(false);
  const handleCloseModal = () => close();
  return (
    <div
      className={$.whyUs__section}
      id="whyUs"
    >
      <Modal
        opened={isOpen}
        onClose={close}
        size="auto"
        withCloseButton={false}
        centered
        padding={0}
        transitionProps={{ transition: "pop-bottom-left" }}
      >
        <FocusTrap.InitialFocus />
        <ModalPrice onClose={handleCloseModal} />
      </Modal>
      {isOpen && <ModalCloseButton onClickButton={close} />}
      <h1 className={`sectionHeaderText ${$.whyUs__headerText}`}>
        {" "}
        Почему выбирают нас?
      </h1>
      <span className={$.whyUs__subHeaderTextFirstLine}>
        Скорость, на которую можно положиться,
      </span>
      <span className={$.whyUs__subHeaderTextSecondLine}>
        чтобы ваш проект стартовал вовремя!
      </span>
      <div className={$.whyUs__cardsPrinciples}>
        {WHY_US_DATA.map(({ title, number }) => {
          return (
            <IconCard
              title={title}
              icon={number}
              key={title}
            />
          );
        })}
      </div>
      <div className={$.whyUs__buttonFiled}>
        <MainButton
          className={$.whyUs__button}
          onClickButton={() => {
            open();
          }}
        >
          Получить цену и сроки
        </MainButton>
      </div>
    </div>
  );
};
